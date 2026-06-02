const AwardIcon = () => (
  <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const TargetIcon = () => (
  <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-foreground text-balance leading-tight">
              About Rain Financial Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              With over 15 years of experience in the financial services industry, Rain Financial has helped thousands
              of individuals and businesses achieve their financial goals.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
              Our commitment to transparency, competitive rates, and exceptional customer service has made us a trusted
              name in lending solutions across the nation.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-6">
              <div className="text-center sm:text-left">
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/10 mb-3 sm:mb-4">
                  <AwardIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-1 sm:mb-2">15+</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/10 mb-3 sm:mb-4">
                  <TargetIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-1 sm:mb-2">5000+</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Loans Approved</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent/10 mb-3 sm:mb-4">
                  <HeartIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-1 sm:mb-2">98%</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 sm:mt-12 lg:mt-0">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 via-primary/10 to-accent/30 p-6 sm:p-8 lg:p-12 flex items-center justify-center shadow-xl border border-accent/20">
              <div className="text-center space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-foreground text-balance leading-tight">
                  Your Financial Success is Our Mission
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  We believe in building lasting relationships based on trust and mutual growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
