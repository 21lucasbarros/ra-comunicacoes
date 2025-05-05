import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const yearsSince1999 = new Date().getFullYear() - 1999;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-white" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  Comunicação Visual desde 1999
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6"
              >
                Conectando <br />
                <span className="text-blue-600">Marcas</span> e{" "}
                <span className="text-blue-600">Pessoas</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 max-w-xl"
              >
                Há mais de {yearsSince1999} anos criando soluções visuais
                impactantes que transformam a maneira como sua marca se comunica
                com o mundo.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
                >
                  Fale Conosco
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-semibold transition-all duration-300 border border-blue-200 shadow-sm hover:shadow-md"
                >
                  Ver Portfólio
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-lg z-0"></div>
                <div className="relative grid grid-cols-12 grid-rows-6 gap-4 z-10">
                  <div className="col-span-8 row-span-6 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="../assets/image/indalecio.jpeg"
                      alt="Outdoor advertising"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="col-span-4 row-span-3 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="../assets/image/indalecio.jpeg"
                      alt="Digital billboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-4 row-span-3 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="../assets/image/indalecio.jpeg"
                      alt="Event display"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown className="animate-bounce" size={32} />
      </motion.div>
    </section>
  );
}
