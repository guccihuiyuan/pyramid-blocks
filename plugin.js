import { join } from 'path';
import { readdirSync } from 'fs';

if (process.env.BLOCK) {
  process.env.PAGES_PATH = join(process.env.BLOCK, 'src');
}

function getRoutes(type) {
  const dirs = readdirSync(join(__dirname, type));
  const routes = [];
  for (const dir of dirs) {
    if (dir.charAt(0) === '.') continue;
    routes.push({
      path: `/${type}/${dir}`,
      component: join(type, dir, 'src', 'index.tsx'),
    });
  }
  return routes;
}

function getRoute() {
  return {
    path: '/',
    component: join(process.env.BLOCK, 'src', 'index.tsx'),
  };
}

export default (api) => {
  api.modifyRoutes(routes => {
    routes[0].routes = [
      // getRoute(),
      ...getRoutes('blocks'),
      ...getRoutes('templates'),
      ...getRoutes('layouts'),
      ...routes[0].routes.slice(1),
    ];
    return routes;
  });
};
