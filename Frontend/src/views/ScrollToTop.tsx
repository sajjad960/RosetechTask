import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="primary"
      className={`scroll-to-top-btn ${isVisible ? 'show' : 'hide'} bg-black  position-fixed bottom-0 end-0 m-3`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </Button>
  );
};

export default ScrollToTop;
