import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import "../public/Globals.css";
function App({ Component, pageProps, router }) {
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
      <Component {...pageProps} />
    </motion.div>
  );
}

export default App;
