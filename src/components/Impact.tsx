import { Globe, Heart, Leaf } from "lucide-react";

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
    <>
      <div
        className={`bg-white rounded-lg shadow-lg p-6 border-t-4 opacity-0 translate-y-10 transition-all duration-1000`}
        style={{ borderColor: color, transitionDelay: `${delay}ms` }}
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  el.classList.remove("opacity-0", "translate-y-10");
                  el.classList.add("opacity-100", "translate-y-0");
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }
        }}
      >
        <div
          className={`rounded-full p-3 inline-block mb-4`}
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
}

export default function Impact() {
  return (
    <>
      <section
        id="impact"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-opacity duration-1000"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0");
                      el.classList.add("opacity-100");
                    }
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nosso Impacto Social
            </h2>
            <p className="text-gray-600">
              Acreditamos que a comunicação visual pode educar, transformar e
              inspirar. Nossa missão vai além da publicidade – buscamos gerar
              impacto positivo.
            </p>
          </div>

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

          <div
            className="mt-16 text-center opacity-0 transition-opacity duration-1000 delay-500"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.classList.remove("opacity-0");
                      el.classList.add("opacity-100");
                    }
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Juntos, Causamos Um Impacto Maior
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Trabalhamos com nossos clientes para integrar mensagens de valor
              social às suas campanhas publicitárias, gerando retorno para a
              marca e impacto positivo para a sociedade.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center"
            >
              Faça Parte Dessa Transformação
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
