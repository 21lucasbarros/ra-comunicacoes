import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearsSince1999 = currentYear - 1999;

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <div className="text-3xl font-bold text-blue-900">
                R&<span className="text-blue-600">A</span>
              </div>
              <div className="text-sm text-blue-600">Comunicação Visual</div>
            </div>
            <p className="text-gray-600 mb-4">
              Com {yearsSince1999} anos de experiência, oferecemos soluções em
              mídia exterior e eventos que conectam marcas a pessoas com impacto
              visual e social.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} R&A Comunicação Visual. Todos os direitos
              reservados.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "Sobre", id: "about" },
                { name: "Serviços", id: "services" },
                { name: "Portfólio", id: "portfolio" },
                { name: "Impacto Social", id: "impact" },
                { name: "Contato", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-900">Contato</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                <a
                  href="mailto:agenciaracomunicacaovisual@gmail.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  agenciaracomunicacaovisual@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                (13) 99806-1936
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                São Vicente, São Paulo - Brasil
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-bold mb-2 text-blue-900 flex items-center gap-2">
                <Clock size={18} className="text-blue-600" />
                Horário de Atendimento
              </h4>
              <p className="text-gray-600 text-sm pl-6">
                Segunda à Sexta: 9h às 18h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-blue-600 text-sm">
          <p>
            Site desenvolvido por Lucas Barros Simon para R&A Comunicação Visual
            • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
