import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    company: "Tech Corp",
    text: "Arrocha",
    rating: 5,
  },
  {
    id: 2,
    name: "Erik Medeiros",
    position: "Desenvolvedor Full Stack",
    company: "GBM",
    text: "Vapo.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kallani Fernandes",
    position: "Jiu-Jiteiro",
    company: "UNISANTA",
    text: "Vamo soltinho?",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextTestimonial = () => {
    setDirection("right");
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection("left");
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonialVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-white-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            variants={containerVariants}
          >
            O Que Nossos Clientes Dizem
          </motion.h2>
          <motion.p className="text-gray-600" variants={containerVariants}>
            Conheça as experiências de quem já trabalhou conosco.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-blue-200 opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </div>

            <div className="relative h-72 md:h-64">
              <AnimatePresence mode="wait" custom={direction}>
                {testimonials.map((testimonial, index) =>
                  index === activeIndex ? (
                    <motion.div
                      key={testimonial.id}
                      custom={direction}
                      variants={testimonialVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="bg-white p-8 rounded-xl shadow-lg absolute inset-0"
                    >
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star
                              size={20}
                              className={
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          </motion.div>
                        ))}
                      </div>
                      <motion.p
                        className="text-gray-700 italic mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        "{testimonial.text}"
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="font-bold text-blue-900">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </motion.div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full p-2 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? "right" : "left");
                      setActiveIndex(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full p-2 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
