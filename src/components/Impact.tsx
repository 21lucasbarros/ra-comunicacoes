import { Globe, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface ImpactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

function ImpactCard({
  title,
  description,
  icon,
  color,
  delay,
}: ImpactCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg p-6 border-t-4`}
      style={{ borderColor: color }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay * 0.001,
        ease: "easeOut",
      }}
    >
      <motion.div
        className={`rounded-full p-3 inline-block mb-4`}
        style={{ backgroundColor: `${color}20` }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div style={{ color }}>{icon}</div>
      </motion.div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function Impact() {
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
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
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
            Nosso Impacto Social
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Acreditamos que a comunicação visual pode educar, transformar e
            inspirar. Nossa missão vai além da publicidade – buscamos gerar
            impacto positivo.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ImpactCard
            title="Educação Ambiental"
            description="Promovemos conteúdos educativos sobre sustentabilidade e proteção ambiental em nossos painéis publicitários."
            icon={<Leaf size={24} />}
            color="#10B981"
            delay={100}
          />
          <ImpactCard
            title="Responsabilidade Social"
            description="Conectamos valores corporativos a causas sociais relevantes, gerando valor tanto para marcas quanto para a comunidade."
            icon={<Heart size={24} />}
            color="#EF4444"
            delay={200}
          />
          <ImpactCard
            title="Mensagens de Utilidade Pública"
            description="Reservamos espaço em nossas mídias para campanhas de conscientização e informações de utilidade pública."
            icon={<Globe size={24} />}
            color="#3B82F6"
            delay={300}
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <motion.h3
            className="text-2xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Juntos, Causamos Um Impacto Maior
          </motion.h3>
          <motion.p
            className="text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Trabalhamos com nossos clientes para integrar mensagens de valor
            social às suas campanhas publicitárias, gerando retorno para a marca
            e impacto positivo para a sociedade.
          </motion.p>
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Faça Parte Dessa Transformação
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
