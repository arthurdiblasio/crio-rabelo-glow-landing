import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingDown } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
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

          {/* Primary CTA Button */}
          <div className="animate-fade-in mb-8">
            <Button
              size="lg"
              className="btn-cta text-xl px-16 py-8 mb-4"
              onClick={() => window.open('https://wa.me/5531972416039?text=Olá! Quero agendar minha avaliação', '_blank')}
            >
              📞 Agendar minha avaliação
            </Button>
            <p className="text-sm text-muted-foreground">
              👥 Mais de 100 pacientes já transformaram seus corpos
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-muted-foreground mb-2">
              📞 Entre em contato agora mesmo:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <span className="font-medium">
                <a href="https://wa.me/5531972416039?text=Olá! Quero agendar minha avaliação', '_blank'">
                  📱 WhatsApp: (31) 97241-6039
                </a>
              </span>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <span className="font-medium"><a href="wwww.studiofernandarabelo.com.br', '_blank'">
                📍Site: wwww.studiofernandarabelo.com.br
              </a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;