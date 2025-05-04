import { Calendar, Lightbulb, Monitor, Users } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 opacity-0 transition-all duration-1000"
      style={{ transitionDelay: `${delay}ms` }}
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
      <div className="bg-blue-100 rounded-full p-3 inline-block mb-4">
        <div className="text-blue-600">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600">
              Comunicação visual estratégica para conectar sua marca ao público
              certo.
            </p>
          </div>

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

          <div
            className="mt-16 bg-blue-50 rounded-xl p-8 opacity-0 transition-all duration-1000"
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
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
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="../assets/image/indalecio.jpeg"
                  alt="Billboard advertising"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
