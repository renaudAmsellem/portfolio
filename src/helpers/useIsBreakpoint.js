import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

function useIsBreakpoint(breakpoint = 768) {
  const isBrowser = () => typeof window !== "undefined"
  const initialValue = isBrowser() ? window.innerWidth : 1000;
  const [width, setWidth] = useState(initialValue);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const debouncedHandleResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  }, []);

  return width <= breakpoint;
}

export default useIsBreakpoint;
