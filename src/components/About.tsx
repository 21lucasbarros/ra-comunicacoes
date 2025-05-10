import { motion } from "framer-motion";

export default function About() {
  const yearsSince1999 = new Date().getFullYear() - 1999;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            variants={itemVariants}
          >
            Nossa História
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Mais de {yearsSince1999} anos conectando marcas e pessoas.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <img
                  src="../assets/image/indalecio.png"
                  alt="Outdoor advertising billboard"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              R&A Comunicação Visual
            </motion.h3>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Fundada em 1999, a R&A Comunicação Visual traz mais de{" "}
              {yearsSince1999} anos de experiência em mídias exteriores e
              eventos. Nossa jornada começou com o compromisso de oferecer
              soluções visuais impactantes que conectam marcas ao seu público.
            </motion.p>
            <motion.p
              className="text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Ao longo dos anos, nos especializamos em painéis publicitários
              estrategicamente posicionados, promovendo não apenas nossos
              clientes, mas também valores educacionais, ambientais e sociais
              importantes para a comunidade.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring" }}
              >
                <div className="text-blue-600 font-bold text-3xl mb-1">
                  {yearsSince1999}+
                </div>
                <div className="text-gray-600 text-sm">Anos de experiência</div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring" }}
              >
                <div className="text-blue-600 font-bold text-3xl mb-1">23+</div>
                <div className="text-gray-600 text-sm">
                  Clientes satisfeitos
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
