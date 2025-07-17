function CodeDisplay({ selectedLayout }) {
  const sidebarLayout = [
    {
      id: 'pancake',
      css: `
        .container {
          display: flex;
          gap: 2%;
          flex-direction: column;
        }
        .item:nth-child(1),
        .item:nth-child(3) {
          width: 100%;
          height: 5%;
        }
        .item:nth-child(2) {
          height: 75%;
        }
      `,
      html: `
        <div class="item">Header</div>

        <div class="item">Content</div>
        <div class="item">Footer</div>
      `,
    },
    {
      id: 'sidebar',
      css: `
.container {
  display: flex;
  gap: 2%;
  
}

.item:nth-child(1) {
  width: 25%;
  height: 90%;
}

.item:nth-child(2) {
  height: 90%;
  width: 100%;
}
      `,
      html: `

  <div class="item">Sidebar</div>
  <div class="item">Content</div>

      `,
    },
    {
      id: 'html5',
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
  height: 5%;
}

.item:nth-child(2) {
  width: 20%;
  height: 75%;
}

.item:nth-child(3) {
  flex-grow: 1;
  height: 75%;
}
      `,
      html: `
  <div class="item">Header</div>
  <div class="item">Sidebar</div>
  <div class="item">Content</div>
  <div class="item">Footer</div>
      `,
    },
    {
      id: 'html5-2',
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
  height: 5%;
}

.item:nth-child(2),
.item:nth-child(4) {
  width: 20%;
  height: 75%;
}

.item:nth-child(3) {
  flex-grow: 1;
  height: 75%;
}
      `,
      html: `
  <div class="item">Header</div>
  <div class="item">Sidebar</div>
  <div class="item">Content</div>
  <div class="item">Sidebar</div>
  <div class="item">Footer</div>
      `
    },
  
  ];

  const currentLayout =
    sidebarLayout.find((layout) => layout.id === selectedLayout) || sidebarLayout[0];

  return (
    <div className="content">
      <style>{currentLayout.css}</style>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: currentLayout.html }}
      />
    </div>
  );
}

export default CodeDisplay;
