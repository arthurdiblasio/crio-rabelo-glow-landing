import historiaVideo from "@/assets/videos/historia-crio-rabelo.mp4";

const HistoriaCrio = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-2 md:px-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl md:text-4xl font-bold text-center mb-4 px-2 animate-fade-in-up">
            <span className="text-gradient">Nossa História</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 px-2 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
            Conheça a história por trás da Crio da Rabelo
          </p>

          <div className="card-elegant-video overflow-hidden animate-scale-in mx-2 md:mx-0 max-w-4xl mx-auto" style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}>
            <video
              width="100%"
              controls
              controlsList="nodownload noremoteplayback"
              preload="metadata"
              className="w-full aspect-video object-cover h-svh"
            >
              <source src={historiaVideo} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaCrio;
