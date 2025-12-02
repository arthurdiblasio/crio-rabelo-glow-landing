import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Location = () => {
  const mapsUrl = "https://www.google.com/maps/place/Studio+Fernanda+Rabelo+%7C+Oz%C3%B4nioterapia,+Est%C3%A9tica+Facial+e+Corporal,+Criolip%C3%B3lise,/@-19.9758494,-44.0216258,17z/data=!3m1!4b1!4m6!3m5!1s0xa6bd68ec3ff529:0x9329734e7095c3f7!8m2!3d-19.9758545!4d-44.0190509!16s%2Fg%2F11sh6h2j8g";

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Nossa Localização</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar! Estamos ao lado do ViaShopping
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elegant overflow-hidden animate-scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8881456882!2d-44.0216258!3d-19.9758494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd68ec3ff529%3A0x9329734e7095c3f7!2sStudio%20Fernanda%20Rabelo%20%7C%20Oz%C3%B4nioterapia%2C%20Est%C3%A9tica%20Facial%20e%20Corporal%2C%20Criolip%C3%B3lise%2C!5e0!3m2!1spt-BR!2sbr!4v1701518400000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Studio Fernanda Rabelo"
              className="w-full"
            />
          </div>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="flex items-center justify-center gap-2 text-foreground mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">R. Agnelo Macedo, 215 - Barreiro, Belo Horizonte - MG</span>
            </div>
            <Button
              size="lg"
              className="btn-cta text-lg px-12 py-6"
              onClick={() => window.open(mapsUrl, '_blank')}
            >
              Ver no Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
