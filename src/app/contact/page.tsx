"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to soon!",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-navy">Contact Us</h1>
      <Card className="max-w-2xl mx-auto bg-sky-blue/20 border-royal-blue/20">
        <CardHeader>
          <CardTitle className="text-navy">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-navy/80">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-powder-blue border-royal-blue/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-navy/80">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-powder-blue border-royal-blue/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-navy/80">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-powder-blue border-royal-blue/20"
              />
            </div>
            <Button type="submit" className="bg-royal-blue hover:bg-royal-blue/90 text-powder-blue">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

