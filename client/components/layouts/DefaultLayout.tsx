import { motion } from "framer-motion";

const Layout = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className="max-w-screen-2xl mx-auto"
  >
    {children}
  </motion.div>
);
export default Layout;