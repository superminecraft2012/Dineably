'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ContactFormModal from './ContactForm';
import ContactLinkHandler from './ContactLinkHandler';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
      <ContactLinkHandler />
    </ModalContext.Provider>
  );
}

