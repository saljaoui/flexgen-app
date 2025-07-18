export const layouts = [
  {
    id: "pancake",
    css: `
.container {
  display: flex;
  gap: 2%;
  flex-direction: column;
}

.item:nth-child(1),
.item:nth-child(3) {
  width: 100%;
  height: 10%;
}

.item:nth-child(2) {
  height: 80%;
}
      `,
    html: `<div class="item">Header</div>
<div class="item">Content</div>
<div class="item">Footer</div>
      `,
  },
  {
    id: "sidebar",
    css: `
.container {
  display: flex;
  gap: 2%;
}

.item:nth-child(1) {
  width: 25%;
  height: 100%;
}

.item:nth-child(2) {
  height: 100%;
  width: 75%;
}
      `,
    html: `<div class="item">Sidebar</div>
<div class="item">Content</div>
      `,
  },
  {
    id: "html5",
    css: `
.container {
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  align-content: start;
}

.item:nth-child(1),
.item:nth-child(4) {
  width: 100%;
  height: 10%;
}

.item:nth-child(2) {
  width: 25%;
  height: 75%;
}

.item:nth-child(3) {
  flex-grow: 1;
  height: 75%;
}
      `,
    html: `<div class="item">Header</div>
<div class="item">Sidebar</div>
<div class="item">Content</div>
<div class="item">Footer</div>
      `,
  },
  {
    id: "html5-2",
    css: `
.container {
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  align-content: start;
}

.item:nth-child(1),
.item:nth-child(5) {
  width: 100%;
  height: 10%;
}

.item:nth-child(2),
.item:nth-child(4) {
  width: 25%;
  height: 75%;
}

.item:nth-child(3) {
  flex-grow: 1;
  height: 75%;
}
      `,
    html: `<div class="item">Header</div>
<div class="item">Sidebar</div>
<div class="item">Content</div>
<div class="item">Sidebar</div>
<div class="item">Footer</div>
      `,
  },
  {
    id: "12-Column-System",
    css: `
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 1fr 100px;
  gap: 10px 10px;
}

.item:nth-child(1),
.item:nth-child(6) {
  grid-column: 1 / -1;
}

.item:nth-child(2) {
  grid-row: 2 / 4;
  grid-column: 1 / 4;
}

.item:nth-child(3) {
  grid-column: 4 / 10;
}

.item:nth-child(4) {
  grid-row: 2 / 4;
  grid-column: 10 / 13;
}

.item:nth-child(5) {
  grid-column: 4 / 10;
  grid-row: 3 / 4;
}
      `,
    html: `<div class="item">Header</div>
<div class="item">Sidebar</div>
<div class="item">Navigation</div>
<div class="item">Ads</div>
<div class="item">Main</div>
<div class="item">Footer</div>`,
  },
  {
    id: "Collage",
    css: `
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
}

.item:nth-child(1) {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}

.item:nth-child(2) {
  grid-row: 2 / 4;
  grid-column: 2 / 4;
}

.item:nth-child(3) {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}

.item:nth-child(4) {
  grid-row: 1 / 3;
  grid-column: 4 / 5;
}

.item:nth-child(5) {
  grid-row: 3 / 5;
  grid-column: 1 / 2;
}

.item:nth-child(6) {
  grid-row: 3 / 4;
  grid-column: 4 / 5;
}

.item:nth-child(7) {
  grid-row: 4 / 5;
  grid-column: 3 / 5;
}

.item:nth-child(8) {
  grid-row: 4 / 5;
  grid-column: 2 / 3;
}

.item:nth-child(9) {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
      `,
    html: `<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
<div class="item">5</div>
<div class="item">6</div>
<div class="item">7</div>
<div class="item">8</div>
<div class="item">9</div>
`,
  },
  {
    id: "3x3-Grid",
    css: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
}`,
    html: `<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
<div class="item">4</div>
<div class="item">5</div>
<div class="item">6</div>
<div class="item">7</div>
<div class="item">8</div>
<div class="item">9</div>`,
  },
  {
    id: "4x4-Grid",
    css: `
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
}
      `,
    html: `
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
  <div class="item">10</div>
  <div class="item">11</div>
  <div class="item">12</div>
  <div class="item">13</div>
  <div class="item">14</div>
  <div class="item">15</div>
  <div class="item">16</div>
      `,
  },
  {
    id: "three-column",
    css: `
.container {
  display: flex;
  gap: 10px;
}
  .item {
  flex: 1;
  }
      `,
    html: `
 <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
      `,
  },
  {
    id: "three-row",
    css: `
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
  .item {
  flex: 1;
  }
      `,
    html: `
 <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
      `,
  },
  {
    id: "hero-section",
    css: `
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
  .item {
  flex: 1;
  }
      `,
    html: `
 <div class="item">1</div>
  <div class="item">2</div>
      `,
  },
  {
    id: "dashboard",
    css: `
      .container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-content: start;
}
.item:nth-child(1) {
  width: 100%;
  height: 10%;
}
.item:nth-child(2) {
  width: 25%;
  height: 85%;
}
.item:nth-child(3) {
  flex-grow: 1;
}
      `,
    html: `
 <div class="item">1</div>
  <div class="item">2</div>
    <div class="item">3</div>
      `,
  },
  {
    id: "magazine",
    css: `
      .container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-content: start;
}
.item:nth-child(1) {
  width: 100%;
  height: 15%;
}
.item:nth-child(2) {
  height: 80%;
  flex-grow: 1;
}
.item:nth-child(3) {
  width: 30%;
  height: 80%;
}
      `,
    html: `
 <div class="item">1</div>
  <div class="item">2</div>
    <div class="item">3</div>
      `,
  },
];
