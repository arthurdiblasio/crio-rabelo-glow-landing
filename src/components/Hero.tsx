import { Button } from "@/components/ui/button";
import equipamentoCrio from "@/assets/equipamento-crio.jpg";
import antesDepois1 from "@/assets/antes-depois-real-1.jpg";
import antesDepois2 from "@/assets/antes-depois-real-2.jpg";
import logo from "@/assets/logo-new.png";

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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          {/* Logo do Studio */}
          <div className="mb-4 mt-2 flex justify-center">
            {/* <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 inline-block border border-primary/20"> */}
            <img
              src={logo}
              alt="Studio Fernanda Rabelo - Beleza e Saúde"
              className="h-40 w-auto object-contain"
            />
            {/* </div> */}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Crio da Rabelo</span>
            <br />
            <span className="text-foreground">Elimine Gordura</span>
            <br />
            <span className="text-foreground">Sem Cirurgia</span>
          </h1>

          {/* Fotos Antes e Depois no Hero */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-primary/20 animate-scale-in" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <h3 className="text-lg font-semibold text-center mb-4 text-primary">Resultados Reais dos Nossos Clientes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <img
                  src={antesDepois1}
                  alt="Resultado antes e depois da criolipolise - Cliente 1"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">Resultados reais em poucas semanas</p>
              </div>
              <div className="text-center">
                <img
                  src={antesDepois2}
                  alt="Resultado antes e depois da criolipolise - Cliente 2"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <p className="text-sm text-muted-foreground">Transformação visível e duradoura</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          O tratamento revolucionário que congela e elimina células de gordura definitivamente.
          <strong className="text-primary"> Resultados visíveis em 30 dias.</strong>
        </p>

        {/* Prova Social */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary/20 animate-bounce-in" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
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
        </div>

        {/* CTA Button */}
        <div className="animate-scale-in flex justify-center mt-12" style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}>

          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/553172416039?text=Olá! Quero agendar minha avaliação", "_blank")}
            className="btn-cta text-lg px-12 py-6 mb-8"
          >
            Agendar minha avaliação
          </Button>
        </div>
        <p className="text-sm pb-4 text-muted-foreground">
          ✅ Consulta e avaliação gratuita • ✅ Espaço Aconchegante • ✅ Ótima Localização (Ao lado do ViaShopping)
        </p>
      </div>
    </section>
  );
};

export default Hero;