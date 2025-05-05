import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

type FormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/lucasweacked21@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 3000);
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">
            Entre em Contato
          </h2>
          <p className="text-sm sm:text-base text-gray-600 px-2 sm:px-0">
            Estamos prontos para ajudar a transformar sua visão em comunicação
            visual impactante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 text-blue-600 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Email
                    </h4>
                    <a
                      href="mailto:agenciaracomunicacaovisual@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
                    >
                      agenciaracomunicacaovisual@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 text-blue-600 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Telefone
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      (13) 99806-1936
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 text-blue-600 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                      Endereço
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      São Vicente, São Paulo - Brasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 bg-gray-50 rounded-lg p-4 sm:p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Clock size={18} className="text-blue-600 sm:w-5 sm:h-5" />
                  Horário de Atendimento
                </h4>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Segunda à Sexta: 9h às 18h
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Entre em contato para agendar uma consulta e discutir seu
                  projeto.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full"
          >
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
                Envie sua Mensagem
              </h3>

              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 p-4 sm:p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Send
                        size={24}
                        className="text-green-500 sm:w-8 sm:h-8"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-sm sm:text-base">
                    Agradecemos o seu contato. Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="seu.email@exemplo.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
                      >
                        Telefone (opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="(99) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Descreva seu projeto ou dúvida..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2 sm:mr-3"></div>
                        Enviando...
                      </div>
                    ) : (
                      <>
                        Enviar Mensagem{" "}
                        <Send size={16} className="ml-2 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
