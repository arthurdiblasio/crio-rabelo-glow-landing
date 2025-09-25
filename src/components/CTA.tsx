import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingDown } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-destructive animate-pulse" />
              <span className="text-destructive font-bold text-lg">ATENÇÃO: VAGAS LIMITADAS!</span>
            </div>
            <p className="text-destructive/80 text-sm">
              Esta oferta exclusiva da Crio da Rabelo tem limite de vagas. 
              Não perca a oportunidade de transformar seu corpo!
            </p>
          </div>

          {/* Main CTA */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Transforme Seu Corpo</span>
              <br />
              <span className="text-foreground">Hoje Mesmo!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agende sua <strong className="text-primary">avaliação gratuita</strong> e 
              comece sua jornada para o corpo dos seus sonhos com a Crio da Rabelo.
            </p>
          </div>

          {/* Scarcity Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-elegant text-center animate-fade-in">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-bold text-2xl text-destructive mb-1">5</div>
              <div className="text-sm text-muted-foreground">Vagas restantes</div>
            </div>
            
            <div className="card-elegant text-center animate-fade-in">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-bold text-2xl text-primary mb-1">48h</div>
              <div className="text-sm text-muted-foreground">Para agendar</div>
            </div>
            
            <div className="card-elegant text-center animate-fade-in">
              <TrendingDown className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-bold text-2xl text-primary mb-1">-25%</div>
              <div className="text-sm text-muted-foreground">Redução garantida</div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="animate-fade-in mb-8">
            <Button 
              size="lg"
              className="btn-cta text-xl px-16 py-8 mb-4"
            >
              📞 QUERO AGENDAR MINHA VAGA AGORA
            </Button>
            <p className="text-sm text-muted-foreground">
              👥 Mais de 1.000 pacientes já transformaram seus corpos
            </p>
          </div>

          {/* Guarantee */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 animate-fade-in">
            <h3 className="text-xl font-semibold mb-3 text-primary">
              🛡️ Garantia de Satisfação
            </h3>
            <p className="text-muted-foreground text-sm">
              Se você não ficar 100% satisfeita com os resultados, 
              devolvemos seu investimento. Essa é nossa confiança na Crio da Rabelo.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-muted-foreground mb-2">
              📞 Entre em contato agora mesmo:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <span className="font-medium">📱 WhatsApp: (11) 99999-9999</span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="font-medium">📍 Clínica Estética Rabelo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;