"use client"

import { Button } from "./ui/button"

const ArrowRightIcon = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const SparklesIcon = () => (
  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
)

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-10 right-5 w-48 h-48 sm:w-72 sm:h-72 bg-accent/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-5 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-xs sm:text-sm">
              <SparklesIcon />
              <span className="font-medium text-foreground">Trusted by 5,000+ clients nationwide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight sm:leading-[1.15] text-balance">
              Your Trusted Partner in <span className="text-primary italic">Financial Solutions</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
              Get the financial support you need with our flexible loan options. Quick approval, competitive rates, and
              personalized service to help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground group px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for a Loan
                <ArrowRightIcon />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <img
                src="/professional-financial-consultation-meeting.jpg"
                alt="Professional financial consultation"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-card p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-primary/20 hidden sm:block z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-primary">5k+</span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-foreground">Happy Clients</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Trusted nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
