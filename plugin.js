import { join } from 'path';

if (process.env.BLOCK) {
  process.env.PAGES_PATH = join(process.env.BLOCK, 'src');
}

export default (api) => {
};
