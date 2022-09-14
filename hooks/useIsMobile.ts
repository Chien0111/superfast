import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const isMobileCurrent = window.innerWidth <= 984;
      if (isMobileCurrent !== isMobile) {
        setIsMobile(isMobileCurrent);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  return isMobile;
};
