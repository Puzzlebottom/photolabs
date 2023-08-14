import { useState, useRef, useEffect } from 'react';


const useModal = () => {
  const [showSimilar, setShowSimilar] = useState(false);
  const modalRef = useRef(null);

  /**
   * This shows or hides the photo objects contained within each photo's similar_photos value 
  */
  const toggleSimilar = () => setShowSimilar(!showSimilar);

  /**
   * Controls the automatic scroll positions of the PhotoDetailsModal : 
   * when the similar photos are displayed, the modal scrolls to them; 
   * if one of the similar photos is selected, the modal scrolls back to top
   */
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

  /**
   * This turned out a bit wonky, since when the similar photos element is hidden, 
   * the height of the modal doesn't require scrolling.  So you get smooth scrolling 
   * when you show the similar photos, but an unavoidable snap to top when you close it.  
   * The solution might just be to eliminate the show/hide functionality altogether.
   */
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