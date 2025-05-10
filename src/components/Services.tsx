import { Calendar, Lightbulb, Monitor, Users } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay * 0.001,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="bg-blue-100 rounded-full p-3 inline-block mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="text-blue-600">{icon}</div>
      </motion.div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            variants={itemVariants}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Comunicação visual estratégica para conectar sua marca ao público
            certo.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Painéis Publicitários"
            description="Painéis estrategicamente posicionados em áreas de alta visibilidade para maximizar o impacto da sua marca."
            icon={<Monitor size={24} />}
            delay={100}
          />
          <ServiceCard
            title="Eventos e Feiras"
            description="Soluções visuais completas para destacar sua marca em eventos, feiras e exposições."
            icon={<Calendar size={24} />}
            delay={200}
          />
          <ServiceCard
            title="Campanhas Criativas"
            description="Desenvolvimento de campanhas visuais criativas e impactantes que traduzem a essência da sua marca."
            icon={<Lightbulb size={24} />}
            delay={300}
          />
          <ServiceCard
            title="Comunicação Social"
            description="Integração de mensagens de utilidade pública com valores corporativos para criar impacto positivo."
            icon={<Users size={24} />}
            delay={400}
          />
        </div>

        <motion.div
          className="mt-16 bg-blue-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Mídia Exterior Estratégica
              </h3>
              <p className="text-gray-700 mb-6">
                Nossos painéis publicitários são posicionados em pontos
                estratégicos de alta visibilidade, garantindo que sua mensagem
                alcance o público certo. Combinamos localização, design e
                mensagem para criar impacto duradouro.
              </p>
              <ul className="space-y-3">
                {[
                  "Análise estratégica de locais de alto tráfego",
                  "Design personalizado para sua marca",
                  "Manutenção e atualização regular",
                  "Relatórios de visibilidade e impacto",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="../assets/image/indalecio.png"
                alt="Billboard advertising"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
