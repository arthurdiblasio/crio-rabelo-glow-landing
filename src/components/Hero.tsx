import { Button } from "@/components/ui/button";
import equipamentoCrio from "@/assets/equipamento-crio.jpg";
import antesDepois1 from "@/assets/antes-depois-1.jpeg";
import antesDepois2 from "@/assets/antes-depois-1.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img
          src={equipamentoCrio}
          alt="Equipamento de criolipolise moderno"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6">
          <img className="w-full h-48 object-cover rounded-lg" src="src\assets\logo.png" alt="Logo do Studio Fernanda Rabelo" />

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Crio da Rabelo</span>
            <br />
            <span className="text-foreground">Elimine Gordura</span>
            <br />
            <span className="text-foreground">Sem Cirurgia</span>
          </h1>

          {/* Fotos Antes e Depois no Hero */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-primary/20">
            <h3 className="text-lg font-semibold text-center mb-4 text-primary">Resultados Reais dos Nossos Clientes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <img
                  src={antesDepois1}
                  alt="Resultado antes e depois da criolipolise - Cliente 1"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">Cliente perdeu 6cm em 4 semanas</p>
              </div>
              <div className="text-center">
                <img
                  src={antesDepois2}
                  alt="Resultado antes e depois da criolipolise - Cliente 2"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">Cliente perdeu 8cm em 5 semanas</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          O tratamento revolucionário que congela e elimina células de gordura definitivamente.
          <strong className="text-primary"> Resultados visíveis em 30 dias.</strong>
        </p>

        {/* Prova Social */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Clientes Atendidas</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Taxa de Satisfação</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-sm text-muted-foreground">Avaliação Google</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary/10">
            <p className="text-sm text-center text-muted-foreground italic">
              "Perdi 8cm de circunferência abdominal em apenas 4 semanas!" - <span className="text-primary">Maria S.</span>
            </p>
          </div>
        </div>

        {/* Urgency elements */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Apenas 5 vagas restantes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Oferta válida até 30/09</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="btn-cta text-lg px-12 py-6 mb-8"
        >
          🚀 QUERO MINHA VAGA AGORA
        </Button>

        <p className="text-sm text-muted-foreground">
          ✅ Consulta e avaliação gratuita • ✅ Resultados garantidos • ✅ Tecnologia FDA aprovada
        </p>
      </div>
    </section>
  );
};

export default Hero;