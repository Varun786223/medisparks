import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    rating: 4.9,
    reviews: 127,
    location: "Downtown Clinic",
    nextAvailable: "Today",
    image: "/api/placeholder/300/300",
    specialties: ["Heart Surgery", "Preventive Care", "Hypertension"]
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ years",
    rating: 4.8,
    reviews: 89,
    location: "Medical Center",
    nextAvailable: "Tomorrow",
    image: "/api/placeholder/300/300",
    specialties: ["Stroke Care", "Epilepsy", "Headache Treatment"]
  },
  {
    name: "Dr. Emily Davis",
    specialty: "Pediatrician",
    experience: "10+ years",
    rating: 4.9,
    reviews: 156,
    location: "Children's Clinic",
    nextAvailable: "Today",
    image: "/api/placeholder/300/300",
    specialties: ["Child Development", "Vaccinations", "Adolescent Care"]
  },
  {
    name: "Dr. Robert Wilson",
    specialty: "Orthopedist",
    experience: "18+ years",
    rating: 4.7,
    reviews: 203,
    location: "Sports Medicine Center",
    nextAvailable: "Next Week",
    image: "/api/placeholder/300/300",
    specialties: ["Sports Injuries", "Joint Replacement", "Arthritis"]
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team of board-certified physicians and specialists are committed to 
            providing exceptional care with compassion and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-subtle rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-medical-blue/10 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    className={`absolute -top-2 -right-2 ${
                      doctor.nextAvailable === 'Today' ? 'bg-secondary' : 'bg-muted'
                    }`}
                  >
                    {doctor.nextAvailable}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-muted-foreground">{doctor.experience} experience</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-muted-foreground">({doctor.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {doctor.specialties.slice(0, 2).map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-hero hover:opacity-90 group/btn">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;