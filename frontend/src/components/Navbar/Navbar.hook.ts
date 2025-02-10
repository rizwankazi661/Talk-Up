import { useState } from "react";

export const useNavbar = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modal: any) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return { activeModal, openModal, closeModal };
};
