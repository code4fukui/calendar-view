# calendar-view

1年分のカレンダーを表示するための、シンプルでスタイリング可能なWebコンポーネントです。

## デモ

[Calendar View Demo](https://code4fukui.github.io/calendar-view/)

## 機能

-   **1年分の表示**: 指定した年の12ヶ月すべてをレンダリングします。
-   **レスポンシブレイアウト**: 適切なCSSを使用することで、カレンダーのグリッドがさまざまな画面サイズに適応します。
-   **カスタマイズ可能**: HTML属性やJavaScriptのプロパティを使用して表示を設定できます。
-   **スタイリング可能**: スタイリングしやすいように特定のクラスが付与されたクリーンなHTML構造を生成します。各日付には固有のクラス（例: `.c20241225`）が割り当てられます。
-   **曜日ヘッダー**: オプションで日本語の曜日ヘッダー（日〜土）を表示できます。

## 使い方

モジュールをインポートし、HTMLに `<calendar-view>` 要素を追加します。`year` 属性は必須です。

```html
<script type="module" src="https://code4fukui.github.io/calendar-view/calendar-view.js"></script>

<!-- 2024年のカレンダーを表示 -->
<calendar-view year="2024"></calendar-view>

<!-- 日本語の曜日ヘッダーを表示 -->
<calendar-view year="2024" showweek="true"></calendar-view>
```

### 属性

-   `year` (必須): 表示する4桁の年。
-   `showweek` (任意): `"true"` に設定すると、曜日（日, 月, 火, 水, 木, 金, 土）のヘッダー行を表示します。

### プログラムでの使用

JavaScriptを使用してカレンダーのインスタンスを作成し、追加することも可能です。これにより、開始月を指定することができます。

```javascript
import { CalendarView } from "./calendar-view.js";

// 2024年のカレンダーを5月から開始
const cal = new CalendarView(2024, 5);
document.body.appendChild(cal);
```

## スタイリング

このコンポーネントはスタイリングされていないHTMLを生成するため、独自のテーマを適用することができます。レイアウトはCSS Gridで構築されています。以下は基本的な例です。

```css
/* マルチカラムのレスポンシブレイアウト用スタイル */
calendar-view {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
calendar-view > div {
  flex: 1 1 300px; /* レスポンシブカラム用のFlexbox */
}

/* 月と日のグリッド用スタイル */
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

/* 例: 特定の日付をハイライト */
calendar-view .c20241225 {
  background-color: #ffdddd;
  font-weight: bold;
}
```

## 依存関係

このコンポーネントは日付計算に [day-es](https://github.com/code4fukui/day-es) ライブラリを使用します。ESモジュールとしてインポートされます。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
