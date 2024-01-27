import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IBackdrop {
  children: ReactNode;
  onClick: () => void;
}
const Backdrop = ({ children, onClick }: IBackdrop) => {
  return (
    <motion.div
      data-testid="backdrop"
      className="absolute top-0 left-0 h-full w-full bg-[#26232354] backdrop-blur-sm overflow-y-hidden flex justify-center items-center z-10"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
