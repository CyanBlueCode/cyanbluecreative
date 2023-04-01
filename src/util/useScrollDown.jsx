import { useState, useEffect } from 'react';

const useScrolldown = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = scrollTop + windowHeight;
      
      if (scrollHeight >= documentHeight) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolledDown;
}


export default useScrolldown;