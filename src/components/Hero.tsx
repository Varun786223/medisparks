import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="pt-16 min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health, 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with trusted healthcare professionals, book appointments instantly, 
                and manage your health journey with MediSpark's innovative platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-medium group">
                Book Appointment Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Find a Doctor
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Easy Booking</p>
                <p className="text-xs text-muted-foreground">24/7 online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-medium text-foreground">Secure & Private</p>
                <p className="text-xs text-muted-foreground">HIPAA compliant</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">Quick Care</p>
                <p className="text-xs text-muted-foreground">Same day slots</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Healthcare professionals in modern medical facility" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">1000+ Patients</p>
                  <p className="text-sm text-muted-foreground">Trust MediSpark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;