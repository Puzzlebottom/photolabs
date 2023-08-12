import { useState, useRef, useEffect } from 'react';

const useModal = () => {
  const [showSimilar, setShowSimilar] = useState(false);
  const modalRef = useRef(null);


  const toggleSimilar = () => setShowSimilar(!showSimilar);

  const scrollTo = (position) => {
    const scrollingElement = modalRef.current;
    if (position === 'top') {
      scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (position === 'similar') {
      const target = scrollingElement.querySelector('button#similar-photos');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (showSimilar) {
      scrollTo('similar');
    }
    if (!showSimilar) {
      scrollTo('top');
    }
  }, [showSimilar]);

  return { showSimilar, modalRef, toggleSimilar, scrollTo };
};

export default useModal;