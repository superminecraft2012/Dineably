'use client';

import { useEffect } from 'react';
import { useModal } from './ModalProvider';

/**
 * This component automatically converts all #contact links to modal triggers
 * No need to modify individual pages!
 */
export default function ContactLinkHandler() {
  const { openModal } = useModal();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the clicked element or its parent is a link to #contact
      const link = target.closest('a[href="#contact"]');
      
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        openModal();
      }
    };

    // Add click listener to the document
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [openModal]);

  return null; // This component doesn't render anything
}

