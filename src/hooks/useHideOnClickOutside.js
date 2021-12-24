import { useEffect, useRef } from 'react';

const useHideOnClickOutside = (handler) => {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref]);
  return ref;
};

export default useHideOnClickOutside;
