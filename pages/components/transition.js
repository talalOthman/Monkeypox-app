import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
    const { asPath } = useRouter();
    const variants = {
        out: {
            opacity: 0,
            y: -100,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        in: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        },
        inactive: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            },
        },
        scaleDown: {
            scale: 0.8,
            y: 100,
            transition: {
                duration: 0.4
            }
        },
    };
    return (
        <div className="effect-2">
            <AnimatePresence initial={false} exitBeforeEnter>
                <motion.div
                    key={asPath}
                    variants={variants}
                    initial="in"
                    animate="inactive"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;