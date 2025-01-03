import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-navy">Welcome to BlueSky</h1>
        <p className="text-xl mb-8 text-navy/80">Elevate Your Web Experience with Next.js</p>
        <Button size="lg" className="bg-royal-blue hover:bg-royal-blue/90 text-powder-blue">Get Started</Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">Why Choose BlueSky?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <CheckCircle className="w-8 h-8 text-royal-blue" />, title: "Quality", description: "Top-notch code quality and best practices" },
            { icon: <Star className="w-8 h-8 text-royal-blue" />, title: "Experience", description: "Years of expertise in web development" },
            { icon: <TrendingUp className="w-8 h-8 text-royal-blue" />, title: "Performance", description: "Optimized for speed and efficiency" },
            { icon: <Users className="w-8 h-8 text-royal-blue" />, title: "Support", description: "24/7 customer support and assistance" },
          ].map((item, index) => (
            <Card key={index} className="bg-sky-blue/20 border-royal-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-navy">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-navy/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development'", description: "Custom websites tailored to your needs" },
            { title: "Mobile Apps", description: "Cross-platform mobile applications" },
            { title: "UI/UX Design", description: "Intuitive and attractive user interfaces" },
          ].map((service, index) => (
            <Card key={index} className="bg-sky-blue/20 border-royal-blue/20">
              <CardHeader>
                <CardTitle className="text-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "E-commerce Platform", image: "https://www.svgrepo.com/show/255083/commerce-ecommerce.svg" },
            { title: "Social Media Dashboard", image: "https://www.svgrepo.com/show/508963/social-bakers.svg" },
            { title: "Fitness Tracking App", image: "https://www.svgrepo.com/show/530581/cell-phone.svg" },
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden bg-sky-blue/20 border-royal-blue/20">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-contain" />
              <CardHeader>
                <CardTitle className="text-navy">{project.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "MongoDB", "PostgreSQL"].map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-royal-blue text-powder-blue text-lg py-1 px-3">{tech}</Badge>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-navy">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 text-navy/80">Lets create something amazing together</p>
        <Button size="lg" className="bg-royal-blue hover:bg-royal-blue/90 text-powder-blue">Contact Us</Button>
      </section>
    </div>
  )
}

