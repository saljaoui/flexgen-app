
function SidebarContentList({ selectedLayout, onLayoutChange }) {
    const layouts = [
  {
    id: 'pancake',
    name: 'Pancake Stack',
    desc: 'Header, main content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
      <rect></rect>
      <path d="M252 10a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM252 230a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-14a8 8 0 0 1 8-8zM252 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8z"></path>
    </svg>`
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    desc: 'Navigation and main content',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
      <rect></rect>
      <path d="M52 10a8 8 0 0 1 8 8v234a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM252 10a8 8 0 0 1 8 8v234a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z"></path>
    </svg>`
  },
  {
    id: 'html5',
    name: 'HTML5',
    desc: 'Header, sidebar, content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270">
      <path fill="none" d="M270 0v270H0V0z"></path>
      <path d="M252 10a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM52 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8zM252 230a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-14a8 8 0 0 1 8-8zM252 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8z" clip-path="url(#html5_svg__b)"></path>
    </svg>`
  },
  {
    id: 'html5-2',
    name: 'HTML5 - 2',
    desc: 'Header, sidebar, content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
      <rect></rect>
      <path d="M252 10a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM52 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8zM252 230a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-14a8 8 0 0 1 8-8zM192 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8zM252 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8h-34a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8z"></path>
    </svg>`
  },
  {
    id: '12-Column-System',
    name: '12 Column System',
    desc: 'Header, sidebar, content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
      <rect></rect>
      <path d="M252 10a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM52 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8zM252 230a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-14a8 8 0 0 1 8-8zM192 90a8 8 0 0 1 8 8v114a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8V98a8 8 0 0 1 8-8zM252 50a8 8 0 0 1 8 8v154a8 8 0 0 1-8 8h-34a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8zM192 50a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8V58a8 8 0 0 1 8-8z"></path>
    </svg>`
  },
  {
    id: 'Collage',
    name: 'Collage',
    desc: 'Header, sidebar, content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
      <rect></rect>
      <path d="M102 10a8 8 0 0 1 8 8v34a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM62 70a8 8 0 0 1 8 8v54a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V78a8 8 0 0 1 8-8zM182 70a8 8 0 0 1 8 8v115a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V78a8 8 0 0 1 8-8zM252 130a8 8 0 0 1 8 8v54a8 8 0 0 1-8 8h-44a8 8 0 0 1-8-8v-54a8 8 0 0 1 8-8zM182 10a8 8 0 0 1 8 8v34a8 8 0 0 1-8 8h-54a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM142 210a8 8 0 0 1 8 8v35a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-35a8 8 0 0 1 8-8zM252 211a8 8 0 0 1 8 8v33a8 8 0 0 1-8 8h-84a8 8 0 0 1-8-8v-33a8 8 0 0 1 8-8zM62 150a8 8 0 0 1 8 8v94a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-94a8 8 0 0 1 8-8zM252 10a8 8 0 0 1 8 8v94a8 8 0 0 1-8 8h-44a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z"></path>
    </svg>`
  },
  {
    id: '3x3-Grid',
    name: '3x3 Grid',
    desc: 'Header, sidebar, content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270">
      <path fill="transparent" d="M270 0v270H0V0z"></path>
      <path d="M75 10c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10H20c-5.524 0-10-4.476-10-10V20c0-5.524 4.476-10 10-10zM250 10c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10h-55c-5.524 0-10-4.476-10-10V20c0-5.524 4.476-10 10-10zM163 11c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10h-55c-5.524 0-10-4.476-10-10V21c0-5.524 4.476-10 10-10zM75 96c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10H20c-5.524 0-10-4.476-10-10v-55c0-5.524 4.476-10 10-10zM250 96c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10h-55c-5.524 0-10-4.476-10-10v-55c0-5.524 4.476-10 10-10zM163 97c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10h-55c-5.524 0-10-4.476-10-10v-55c0-5.524 4.476-10 10-10zM75 182c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10H20c-5.524 0-10-4.476-10-10v-55c0-5.524 4.476-10 10-10zM250 182c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10h-55c-5.524 0-10-4.476-10-10v-55c0-5.524 4.476-10 10-10zM163 183c5.524 0 10 4.476 10 10v55c0 5.524-4.476 10-10 10h-55c-5.524 0-10-4.476-10-10v-55c0-5.524 4.476-10 10-10z" clip-path="url(#grid3x3_svg__b)"></path>
    </svg>`
  },
  {
    id: '4x4-Grid',
    name: '4x4 Grid',
    desc: 'Header, sidebar, content, footer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 270 270">
      <path fill="none" d="M270 0v270H0V0z"></path>
      <path d="M57 10a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM122 10a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H83a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM187 10a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM252 10a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM57 75a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V83a8 8 0 0 1 8-8zM122 75a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H83a8 8 0 0 1-8-8V83a8 8 0 0 1 8-8zM187 75a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8V83a8 8 0 0 1 8-8zM252 75a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8V83a8 8 0 0 1 8-8zM57 140a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM122 140a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H83a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM187 140a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM252 140a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM57 205a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM122 205a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8H83a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM187 205a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8zM252 205a8 8 0 0 1 8 8v39a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8v-39a8 8 0 0 1 8-8z" clip-path="url(#grid4x4_svg__b)"></path>
    </svg>`
  },
  {
  id: 'two-column-header',
  name: 'Two Column + Header',
  desc: 'Header, left sidebar, and main content',
  svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
    <rect></rect>
    <path d="M252 10a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8zM78 58a8 8 0 0 1 8 8v186a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V66a8 8 0 0 1 8-8zM252 58a8 8 0 0 1 8 8v186a8 8 0 0 1-8 8H98a8 8 0 0 1-8-8V66a8 8 0 0 1 8-8z"></path>
  </svg>`
},
{
  id: 'three-column',
  name: 'Three Columns',
  desc: 'Sidebar, content, extra panel',
  svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
    <rect></rect>
    <path d="M18 10h66v250H18zM102 10h66v250h-66zM186 10h66v250h-66z"></path>
  </svg>`
},
{
  id: 'header-two-cols',
  name: 'Header + Two Columns',
  desc: 'Header and two side-by-side sections',
  svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
    <rect></rect>
    <path d="M18 10h234v40H18zM18 66h111v194H18zM135 66h117v194H135z"></path>
  </svg>`
},
{
  id: 'footer',
  name: 'Footer Only',
  desc: 'Main content and footer',
  svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 270">
    <rect></rect>
    <path d="M18 10h234v200H18zM18 222h234v38H18z"></path>
  </svg>`
}
];

  return (
    <div className='sidebar-content'>
      <h2 className='title'>LAYOUTS</h2>
      <div className='sidebar-content-list'>
        {layouts.map((layout) => (
          <div
            key={layout.id}
            className={`layout-item ${selectedLayout === layout.id ? 'active' : ''}`}
            onClick={() => onLayoutChange(layout.id)}
          >
            <div className='layout-icon'>
              <div dangerouslySetInnerHTML={{ __html: layout.svg }} />
            </div>
            <div className='layout-info'>
              <div className='layout-name'>{layout.name}</div>
              <div className='layout-description'>{layout.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarContentList;



