import React, { useState, useEffect } from 'react';
import { AiOutlineUp } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    window.scrollTo(0, 0);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [pathname]);

  return (
    isVisible && (
      <div onClick={scrollToTop}>
        <AiOutlineUp />
      </div>
    )
  );
};

export default ScrollToTop;
