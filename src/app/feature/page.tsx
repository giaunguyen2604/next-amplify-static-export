import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Shield } from "lucide-react"

export default function Feature() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-navy">Our Features</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy/80">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-sky-blue/20 border-royal-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center text-navy">
                <CheckCircle className="mr-2 text-royal-blue" />
                Easy to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-navy/80">Our intuitive interface makes it simple for anyone to get started.</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-blue/20 border-royal-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center text-navy">
                <Zap className="mr-2 text-royal-blue" />
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-navy/80">Experience blazing-fast performance with our optimized codebase.</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-blue/20 border-royal-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center text-navy">
                <Shield className="mr-2 text-royal-blue" />
                Secure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-navy/80">Rest easy knowing your data is protected with our advanced security measures.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-navy/80">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((plan) => (
            <Card key={plan} className="bg-sky-blue/20 border-royal-blue/20">
              <CardHeader>
                <CardTitle className="text-navy">{plan}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[1, 2, 3].map((feature) => (
                    <li key={feature} className="flex items-center text-navy/80">
                      <CheckCircle className="mr-2 text-royal-blue" />
                      Feature {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-4 w-full bg-royal-blue hover:bg-royal-blue/90 text-powder-blue">Choose {plan}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-navy/80">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"].map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-royal-blue text-powder-blue text-lg py-1 px-3">{tech}</Badge>
          ))}
        </div>
      </section>
    </div>
  )
}

