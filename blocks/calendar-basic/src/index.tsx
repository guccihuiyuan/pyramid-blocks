import React from "react";
import styles from "./index.less";
import { Calendar } from "antd";
import * as moment from 'moment';
import { CalendarMode } from 'antd/lib/calendar';

function onPanelChange(value?: moment.Moment, mode?: CalendarMode) {
  console.log(value, mode);
}

export default () => (
  <div className={styles.container}>
    <div id="components-calendar-demo-basic">
      <Calendar onPanelChange={onPanelChange} />
    </div>
  </div>
);
