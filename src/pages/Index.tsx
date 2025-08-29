import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import AppointmentBooking from "@/components/AppointmentBooking";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <AppointmentBooking />
    </div>
  );
};

export default Index;