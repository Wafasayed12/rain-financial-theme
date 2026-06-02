const ClockIcon = () => (
  <svg className="h-9 w-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-9 w-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="h-9 w-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-9 w-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const features = [
  {
    icon: ClockIcon,
    title: "Quick Approval",
    description: "Get approved in as little as 24 hours with our streamlined process.",
  },
  {
    icon: ShieldIcon,
    title: "Secure & Safe",
    description: "Your data is protected with bank-level security and encryption.",
  },
  {
    icon: CheckCircleIcon,
    title: "Flexible Terms",
    description: "Choose repayment plans that fit your budget and lifestyle.",
  },
  {
    icon: UsersIcon,
    title: "Expert Support",
    description: "Dedicated loan advisors to guide you through every step.",
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground mb-4 sm:mb-6 text-balance">
            Why Choose Rain Financial?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Experience the difference with our customer-first approach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-2xl hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent/10 mb-4 sm:mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 sm:mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
