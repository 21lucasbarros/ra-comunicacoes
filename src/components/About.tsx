import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yearsSince1999 = new Date().getFullYear() - 1999;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nossa História
            </h2>
            <p className="text-gray-600">
              Mais de {yearsSince1999} anos conectando marcas e pessoas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="opacity-0 transition-opacity duration-1000"
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
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                  <img
                    src="../assets/image/indalecio.jpeg"
                    alt="Outdoor advertising billboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="opacity-0 transition-opacity duration-1000 delay-300"
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
                R&a comunicação Visual
              </h3>
              <p className="text-gray-700 mb-4">
                Fundada em 1999, a R&a comunicação Visual traz mais de{" "}
                {yearsSince1999} anos de experiência em mídias exteriores e
                eventos. Nossa jornada começou com o compromisso de oferecer
                soluções visuais impactantes que conectam marcas ao seu público.
              </p>
              <p className="text-gray-700 mb-6">
                Ao longo dos anos, nos especializamos em painéis publicitários
                estrategicamente posicionados, promovendo não apenas nossos
                clientes, mas também valores educacionais, ambientais e sociais
                importantes para a comunidade.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-blue-600 font-bold text-3xl mb-1">
                    {yearsSince1999}+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Anos de experiência
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-blue-600 font-bold text-3xl mb-1">
                    100+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Clientes satisfeitos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
