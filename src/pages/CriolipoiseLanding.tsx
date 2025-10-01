import Hero from "@/components/Hero";
import SobreTratamento from "@/components/SobreTratamento";
import AntesDepois from "@/components/AntesDepois";
import Feedbacks from "@/components/Feedbacks";
import CTA from "@/components/CTA";

const CriolipoiseLanding = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SobreTratamento />
      <AntesDepois />
      <Feedbacks />
      <CTA />
    </div>
  );
};

export default CriolipoiseLanding;