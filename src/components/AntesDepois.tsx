import antesDepoisRealC1 from "@/assets/resultado-4-600.webp";
import antesDepoisRealD1 from "@/assets/resultado-4-1200.webp";
import antesDepoisRealC2 from "@/assets/resultado-3-600.webp";
import antesDepoisRealD2 from "@/assets/resultado-3-1200.webp";
import { Button } from "./ui/button";

const AntesDepois = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Resultados Reais</span>
            <br />
            <span className="text-foreground">de Pacientes Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja as transformações incríveis alcançadas com a Crio da Rabelo.
            Resultados que falam por si só.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Resultado 1 */}
          <div className="card-elegant group animate-slide-in-left" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="relative overflow-hidden rounded-xl">
              {/* <img
                src={antesDepoisReal1}
                width={578}
                height={463}
                alt="Antes e depois - resultado 1 da criolipolise"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              /> */}
              <picture>
                <source
                  srcSet={antesDepoisRealC1}
                  media="(max-width: 700px)"
                />

                <img
                  src={antesDepoisRealD1}
                  alt="Equipamento de criolipolise moderno"
                  width="1200"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </picture>
            </div>
          </div>

          {/* Resultado 2 */}
          <div className="card-elegant group animate-slide-in-right" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
            <div className="relative overflow-hidden rounded-xl">
              <picture>
                <source
                  srcSet={antesDepoisRealC2}
                  media="(max-width: 700px)"
                />

                <img
                  src={antesDepoisRealD2}
                  alt="Equipamento de criolipolise moderno"
                  width="1200"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-bounce-in" style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: "0.85s", animationFillMode: "backwards" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30</div>
            <div className="text-sm text-muted-foreground">Dias para começar a ver os resultados</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: "1s", animationFillMode: "backwards" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">-5cm</div>
            <div className="text-sm text-muted-foreground">Redução média</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: "1.15s", animationFillMode: "backwards" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Cirurgias necessárias</div>
          </div>
        </div>
      </div>
      <div className="animate-fade-in flex justify-center mt-12">
        <Button
          size="lg"
          className="btn-cta text-xl px-16 py-8"
          onClick={() => window.open('https://wa.me/5531972416039?text=Olá! Quero agendar minha avaliação', '_blank')}
        >
          Agendar minha avaliação
        </Button>
      </div>
    </section>
  );
};

export default AntesDepois;
