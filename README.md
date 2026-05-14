# calendar-view

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, stylable web component for displaying a full-year calendar.

## Demo

[Calendar View Demo](https://code4fukui.github.io/calendar-view/)

## Features

-   **Full Year Display**: Renders all 12 months for a given year.
-   **Responsive Layout**: The calendar grid adapts to different screen sizes with appropriate CSS.
-   **Customizable**: Use HTML attributes or JavaScript properties to configure the view.
-   **Stylable**: Generates a clean HTML structure with specific classes for easy styling, including a unique class for each day (e.g., `.c20241225`).
-   **Week Headers**: Optionally display Japanese day-of-the-week headers (日-土).

## Usage

Import the module and add the `<calendar-view>` element to your HTML. The `year` attribute is required.

```html
<script type="module" src="https://code4fukui.github.io/calendar-view/calendar-view.js"></script>

<!-- Display a calendar for the year 2024 -->
<calendar-view year="2024"></calendar-view>

<!-- Display with Japanese day-of-the-week headers -->
<calendar-view year="2024" showweek="true"></calendar-view>
```

### Attributes

-   `year` (Required): The 4-digit year to display.
-   `showweek` (Optional): If set to `"true"`, displays a header row with the days of the week (日, 月, 火, 水, 木, 金, 土).

### Programmatic Usage

You can also create and append a calendar instance using JavaScript. This allows you to specify a starting month.

```javascript
import { CalendarView } from "./calendar-view.js";

// Create a calendar for 2024, starting from May (5)
const cal = new CalendarView(2024, 5);
document.body.appendChild(cal);
```

## Styling

The component produces unstyled HTML, allowing you to apply your own theme. The layout is built with CSS Grid. Here is a basic example to get you started:

```css
/* Style for the multi-column responsive layout */
calendar-view {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
calendar-view > div {
  flex: 1 1 300px; /* Flexbox for responsive columns */
}

/* Style for the month and day grid */
calendar-view .month {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 0.5em;
}
calendar-view .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}
calendar-view .days > div {
  border: 1px solid #ccc;
  text-align: center;
  padding: 0.5em 0;
}

/* Example: Highlight a specific day */
calendar-view .c20241225 {
  background-color: #ffdddd;
  font-weight: bold;
}
```

## Dependencies

This component uses the [day-es](https://github.com/code4fukui/day-es) library for date calculations. It is imported as an ES module.

## License

MIT License — see [LICENSE](LICENSE).