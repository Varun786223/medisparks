import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Baby, 
  Bone,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care for adults and families with experienced physicians.",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced heart care with state-of-the-art diagnostic and treatment options.",
    color: "accent"
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Specialized care for neurological conditions and brain health.",
    color: "secondary"
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care from routine exams to advanced surgical procedures.",
    color: "primary"
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Gentle, comprehensive healthcare for infants, children, and adolescents.",
    color: "accent"
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Treatment for bones, joints, and musculoskeletal system disorders.",
    color: "secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by board-certified specialists 
            using the latest medical technology and evidence-based treatments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-medium">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;