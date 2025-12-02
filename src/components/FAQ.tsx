import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "O Crio da Rabelo dói?",
    answer: "Um leve desconforto no início devido ao frio, mas logo passa. O procedimento é tranquilo e totalmente suportável."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Apenas 1 sessão por área. O corpo continua eliminando gordura pelos próximos 90 dias."
  },
  {
    question: "Quando começo a ver resultados?",
    answer: "Entre 20 e 30 dias, com o resultado final em até 90 dias."
  },
  {
    question: "Quanto de gordura posso perder?",
    answer: "De 20% a 30% da gordura localizada em apenas uma sessão."
  },
  {
    question: "A gordura volta?",
    answer: "Não. As células eliminadas são destruídas definitivamente."
  },
  {
    question: "O Crio da Rabelo é seguro?",
    answer: "Sim! Tecnologia de resfriamento controlado e aplicação por profissional qualificada."
  },
  {
    question: "Quais áreas posso tratar?",
    answer: "Abdômen, flancos, culotes, costas, coxas, braços, papada e mais."
  },
  {
    question: "Quanto tempo dura o procedimento?",
    answer: "De 45 a 60 minutos por área."
  },
  {
    question: "Quem não pode fazer?",
    answer: "Gestantes, lactantes, pessoas com sensibilidade ao frio, hérnia no local ou condições circulatórias específicas."
  },
  {
    question: "O que posso sentir após a sessão?",
    answer: "Dormência, leve inchaço ou sensibilidade temporária."
  },
  {
    question: "Posso voltar à rotina depois?",
    answer: "Sim! Não há tempo de recuperação."
  },
  {
    question: "O resultado é definitivo?",
    answer: "Sim. As células destruídas não se regeneram."
  },
  {
    question: "Quanto custa?",
    answer: "Os valores variam conforme a necessidade de cada paciente, porque cada corpo é único. Por isso, fazemos uma avaliação personalizada, indicando o melhor plano para seu objetivo."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            <span className="text-gradient">Perguntas Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
            Tire suas dúvidas sobre o Crio da Rabelo
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-elegant hover:shadow-strong transition-all duration-300 data-[state=open]:shadow-strong"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
