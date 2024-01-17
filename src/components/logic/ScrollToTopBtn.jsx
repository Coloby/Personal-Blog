import React, { useState, useEffect } from 'react';

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
        <div onClick={scrollToTop} className="w-12 h-12 flex items-center justify-center rounded-full bg-box_shade rounded-lg shadow-md text-primary_text_color">
          ↑
        </div>
      }
    </div>
  );
}

export default ScrollToTopBtn;