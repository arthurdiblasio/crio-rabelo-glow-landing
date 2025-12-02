import Hero from "@/components/Hero";
import HistoriaCrio from "@/components/HistoriaCrio";
import SobreTratamento from "@/components/SobreTratamento";
import AntesDepois from "@/components/AntesDepois";
import Feedbacks from "@/components/Feedbacks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const CriolipoiseLanding = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HistoriaCrio />
      <SobreTratamento />
      <AntesDepois />
      <Feedbacks />
      <FAQ />
      <CTA />
    </div>
  );
};

export default CriolipoiseLanding;