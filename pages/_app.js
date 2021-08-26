import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import { useState } from "react";
import "../public/Globals.css";
function App({ Component, pageProps, router }) {
  const [isOpen, SetIsOpen] = useState(1);
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0.5,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Component {...pageProps} isOpen={isOpen} setIsOpen={SetIsOpen} />
    </motion.div>
  );
}

export default App;
