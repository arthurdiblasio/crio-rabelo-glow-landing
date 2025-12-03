import { Button } from "@/components/ui/button";
import equipamentoCrio from "@/assets/equipamento-crio.webp";
import antesDepoisC from "@/assets/antes-depois-real-1-600.webp";
import antesDepoisD from "@/assets/antes-depois-real-1-1200.webp";
import antesDepois2C from "@/assets/antes-depois-real-2-600.webp";
import antesDepois2D from "@/assets/antes-depois-real-2-1200.webp";
import logo from "@/assets/logo-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero animate-fade-in">
        {/* <img
          src={equipamentoCrio}
          alt="Equipamento de criolipolise moderno"
          className="w-full h-full object-cover opacity-20 animate-scale-in"
        /> */}
        <picture>
          <source
            srcSet={equipamentoCrio}
            media="(max-width: 700px)"
          />

          <img
            src={equipamentoCrio}
            alt="Equipamento de criolipolise moderno"
            width="1200"
            height="800"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-10 animate-scale-in"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          {/* Logo do Studio */}
          <div className="mb-4 mt-2 flex justify-center animate-scale-in">
            {/* <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 inline-block border border-primary/20"> */}
            <img
              src={logo}
              alt="Studio Fernanda Rabelo - Beleza e Saúde"
              className="h-40 w-auto object-contain hover:scale-110 transition-transform duration-500"
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
            <h4 className="text-xl font-semibold text-center mb-4 text-primary animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}>Resultados Reais dos Nossos Clientes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center group animate-slide-in-left" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
                <div className="relative overflow-hidden rounded-lg mb-2">
                  {/* <img
                    src={antesDepois1}
                    width={578}
                    height={463}
                    alt="Resultado antes e depois da criolipolise - Cliente 1"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    fetchPriority="high"
                    loading="eager"
                  /> */}
                  <picture>
                    <source
                      srcSet={antesDepoisC}
                      media="(max-width: 700px)"
                    />

                    <img
                      src={antesDepoisD}
                      alt="Resultado antes e depois da criolipolise - Cliente 1"
                      width="1200"
                      height="800"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}>Resultados reais em poucas semanas</p>
              </div>
              <div className="text-center group animate-slide-in-right" style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}>
                <div className="relative overflow-hidden rounded-lg mb-2">
                  {/* <img
                    src={antesDepois2}
                    width={578}
                    height={463}
                    fetchPriority="high"
                    loading="eager"
                    alt="Resultado antes e depois da criolipolise - Cliente 2"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  /> */}
                  <picture>
                    <source
                      srcSet={antesDepois2C}
                      media="(max-width: 700px)"
                    />

                    <img
                      src={antesDepois2D}
                      alt="Resultado antes e depois da criolipolise - Cliente 2"
                      width="1200"
                      height="800"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}>Transformação visível e duradoura</p>
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
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm pb-4 text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </span>
            Consulta e avaliação gratuita
          </span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </span>
            Espaço Aconchegante
          </span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </span>
            Ótima Localização (Ao lado do ViaShopping)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;