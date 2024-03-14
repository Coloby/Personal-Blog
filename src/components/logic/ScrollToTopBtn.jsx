import { useEffect, useState } from 'react';
// @ts-ignore

function ScrollToTopBtn() {
 const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 cursor-pointer">
      {
        isVisible && 
        <div onClick={scrollToTop} className="w-10 h-10 flexy rounded-full border border-primary/40 rounded-lg shadow-md text-primary_text_color">
          <div className="flexy w-6 h-6 bg-primary/10 rounded-lg">
            ↑
          </div>
        </div>
      }
    </div>
  );
}

export default ScrollToTopBtn;