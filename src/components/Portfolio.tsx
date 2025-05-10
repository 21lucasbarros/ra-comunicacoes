import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "../assets/image/indalecio2.png",
    title: "Painéis em Avenidas Principais",
    category: "Outdoor",
  },
  {
    id: 2,
    image: "../assets/image/indalecio2.png",
    title: "Comunicação Visual para Eventos",
    category: "Eventos",
  },
  {
    id: 3,
    image: "../assets/image/indalecio2.png",
    title: "Campanhas de Conscientização",
    category: "Social",
  },
  {
    id: 4,
    image: "../assets/image/indalecio2.png",
    title: "Mídia em Locais Estratégicos",
    category: "Outdoor",
  },
  {
    id: 5,
    image: "../assets/image/indalecio2.png",
    title: "Feiras e Exposições",
    category: "Eventos",
  },
  {
    id: 6,
    image: "../assets/image/indalecio2.png",
    title: "Campanhas Ambientais",
    category: "Social",
  },
];

type Category = "Todos" | "Outdoor" | "Eventos" | "Social";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-gray-600">
            Conheça alguns de nossos projetos e campanhas de comunicação visual.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {(["Todos", "Outdoor", "Eventos", "Social"] as Category[]).map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            )
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
