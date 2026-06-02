"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const PhoneIcon = () => (
  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SendIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll contact you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      loanType: "",
      amount: "",
      message: "",
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground mb-4 sm:mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Ready to take the next step? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-accent/20">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm sm:text-base">+1 (555) 123-4567</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Mon-Fri 9am-6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-accent/20">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MailIcon />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Email</h3>
                <p className="text-muted-foreground text-sm sm:text-base">info@rainfinancial.com</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-accent/20">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPinIcon />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1 sm:mb-2">Office</h3>
                <p className="text-muted-foreground text-sm sm:text-base">123 Financial District</p>
                <p className="text-muted-foreground text-sm sm:text-base">New York, NY 10004</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-card p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-border"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="h-12 rounded-xl border-border focus:border-accent"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="h-12 rounded-xl border-border focus:border-accent"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="h-12 rounded-xl border-border focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="loanType" className="text-base font-medium">
                  Loan Type
                </Label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="flex h-12 w-full rounded-xl border border-border bg-background px-4 py-2 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  required
                >
                  <option value="">Select loan type</option>
                  <option value="home">Home Loan</option>
                  <option value="auto">Auto Loan</option>
                  <option value="personal">Personal Loan</option>
                  <option value="education">Education Loan</option>
                  <option value="business">Business Loan</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-base font-medium">
                  Loan Amount
                </Label>
                <Input
                  id="amount"
                  name="amount"
                  type="text"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="$50,000"
                  className="h-12 rounded-xl border-border focus:border-accent"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your loan requirements..."
                className="flex min-h-[140px] w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Application
              <SendIcon />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
