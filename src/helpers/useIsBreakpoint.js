import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

function useIsBreakpoint(breakpoint = 768) {
  const [width, setWidth] = useState(window.innerWidth);

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
