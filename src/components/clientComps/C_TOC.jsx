"use client"

const C_TOC = ({ children }) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        document.querySelectorAll('.toc-content li a').forEach((section) => {
          if (entry.target.innerText === section.innerHTML) section.classList.add("toc-active")
          else section.classList.remove("toc-active")
        });
      } 
    });
  },{
    // root: null,
    // rootMargin: "-100px",
    // threshold: [1],
  });

  document.querySelectorAll(`
    h2 > a > h2, 
    h3 > a > h3, 
    h4 > a > h4
  `).forEach((section) => {
    observer.observe(section);
  });


  return (
    <>{children}</>
  )
}

export default C_TOC