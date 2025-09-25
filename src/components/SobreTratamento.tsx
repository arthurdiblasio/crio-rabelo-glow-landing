import { CheckCircle, Snowflake, Zap, Shield } from "lucide-react";

const SobreTratamento = () => {
  const beneficios = [
    {
      icon: <Snowflake className="w-8 h-8 text-primary" />,
      titulo: "Congelamento Seletivo",
      descricao: "Atinge apenas as células de gordura, preservando tecidos saudáveis"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      titulo: "Eliminação Natural",
      descricao: "O corpo elimina as células mortas naturalmente pelo sistema linfático"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      titulo: "100% Seguro",
      descricao: "FDA aprovado, sem cortes, sem anestesia, sem tempo de recuperação"
    }
  ];

  const diferenciais = [
    "Redução de até 25% da gordura localizada",
    "Sessão de apenas 35 minutos",
    "Volta às atividades imediatamente",
    "Resultados definitivos e naturais",
    "Tecnologia cientificamente comprovada",
    "Profissionais especializados certificados"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Como Funciona</span>
            <br />
            <span className="text-foreground">a Crio da Rabelo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A criolipolise é a única tecnologia não invasiva capaz de eliminar 
            células de gordura definitivamente através do congelamento controlado.
          </p>
        </div>

        {/* Processo */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="card-elegant text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{beneficio.titulo}</h3>
              <p className="text-muted-foreground">{beneficio.descricao}</p>
            </div>
          ))}
        </div>

        {/* Diferenciais */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Por que escolher</span> a Crio da Rabelo?
            </h3>
            <p className="text-muted-foreground">
              O método mais avançado e eficaz para eliminação de gordura localizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{diferencial}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Está pronta para a transformação?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Agende sua avaliação gratuita e descubra como a Crio da Rabelo 
              pode transformar seu corpo de forma definitiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                Avaliação gratuita
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                Sem compromisso
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                Resultado garantido
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreTratamento;