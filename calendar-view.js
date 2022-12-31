import { Day } from "https://code4fukui.github.io/day-es/Day.js";

const cr = (tag, parent) => {
  const c = document.createElement(tag);
  if (parent) {
    parent.appendChild(c);
  }
  return c;
};

class CalendarView extends HTMLElement {
  constructor(year) {
    super();
    this.year = year || parseInt(this.getAttribute("year"));
    for (let month = 1; month <= 12; month++) {
      const mview = this.makeCalendar(this.year, month);
      this.appendChild(mview);
    }
  }
  makeCalendar(year, month) {
    const parent = cr("div");
    const mdiv = cr("div", parent);
    mdiv.className = "month";
    mdiv.textContent = year + "/" + month;
    const div = cr("div", parent);
    div.className = "days";
    const day = new Day(year, month, 1);
    for (let i = 0; i < day.getWeek() % 7; i++) {
      cr("div", div);
    }
    const lastday = day.getLastDayOfMonth();
    for (let day = 1; day <= lastday.day; day++) {
      const d = cr("div", div);
      d.textContent = day;
      d.className = "c" + new Day(year, month, day).toStringYMD();
    }
    for (let i = 0; i < (7 - lastday.getWeek() % 7) - 1; i++) {
      cr("div", div);
    }
    return parent;
  }
}

customElements.define("calendar-view", CalendarView);

export { CalendarView };
