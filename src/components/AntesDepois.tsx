import antesDepois1 from "@/assets/antes-depois-1.jpeg";
import antesDepois2 from "@/assets/antes-depois-1.jpeg";
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Resultado 1 */}
          <div className="card-elegant group animate-slide-in-left" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={antesDepois1}
                alt="Antes e depois - resultado 1 da criolipolise"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                90 dias
              </div> */}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Abdômen</h3>
              <p className="text-muted-foreground group-hover:translate-y-[-2px] transition-transform duration-300">Redução de 4cm na circunferência</p>
              <div className="flex justify-center items-center gap-2 mt-2 group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl">⭐</span>
                <span className="text-sm text-primary font-medium">"Resultado surpreendente!"</span>
              </div>
            </div>
          </div>

          {/* Resultado 2 */}
          <div className="card-elegant group animate-slide-in-right" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={antesDepois2}
                alt="Antes e depois - resultado 2 da criolipolise"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                45 dias
              </div> */}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Culote & Coxas</h3>
              <p className="text-muted-foreground group-hover:translate-y-[-2px] transition-transform duration-300">Contorno corporal definido</p>
              <div className="flex justify-center items-center gap-2 mt-2 group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl">⭐</span>
                <span className="text-sm text-primary font-medium">"Exatamente o que esperava!"</span>
              </div>
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
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">-4cm</div>
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