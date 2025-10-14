import feedback1 from "@/assets/videos/feedback-crio-da-rabelo.mp4";
import feedback2 from "@/assets/feedback-2.jpg";

const Feedbacks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-2 md:px-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 px-2">
            <span className="text-gradient">Depoimentos Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 px-2">
            Veja o que nossas clientes dizem sobre a Crio da Rabelo
          </p>

          {/* Imagens de Feedbacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 px-2 md:px-0">
            <div className="card-elegant overflow-hidden animate-fade-in">
              <img
                src={feedback1}
                alt="Depoimento de cliente satisfeita - mensagem WhatsApp"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="card-elegant overflow-hidden animate-fade-in">
              <img
                src={feedback2}
                alt="Depoimento de cliente satisfeita - mensagem Instagram"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Vídeos de Feedbacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">
            <div className="card-elegant overflow-hidden animate-fade-in">
              {/* <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/D8adzsFh1fE?modestbranding=1&rel=0&showinfo=0"
                title="Depoimento de cliente - Vídeo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <video
                width="100%"
                controls
                controlsList="nodownload noremoteplayback"
                preload="metadata"
                className="w-full aspect-video">
                <source src={feedback1} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
            <div className="card-elegant overflow-hidden animate-fade-in">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-sm text-muted-foreground">
                    Vídeo depoimento 2<br />
                    (Adicione o link do seu vídeo aqui)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;