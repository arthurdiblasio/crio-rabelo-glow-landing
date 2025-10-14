import feedback1 from "@/assets/feedback-1.jpg";
import feedback2 from "@/assets/feedback-2.jpg";

const Feedbacks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Depoimentos Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Veja o que nossas clientes dizem sobre a Crio da Rabelo
          </p>

          {/* Imagens de Feedbacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <div className="card-elegant overflow-hidden animate-fade-in">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-sm text-muted-foreground">
                    Vídeo depoimento 1<br />
                                      </p>
                </div>
              </div>
            </div> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/shorts/D8adzsFh1fE"
              title="YouTube video player"
            ></iframe>
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