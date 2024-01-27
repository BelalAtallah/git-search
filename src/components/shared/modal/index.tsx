import { ReactNode } from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop";
import './modal.css';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface IModal {
  handleClose: () => void;
  children: ReactNode;
}
const Modal = ({ handleClose, children }: IModal) => {
  return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          className="modal bg-slate-700 z-30 shadow-2xl"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
          <motion.button
            className="modal-button"
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClose}
          >
            X
          </motion.button>
        </motion.div>
      </Backdrop>
  );
};

export default Modal;
