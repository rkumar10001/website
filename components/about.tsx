export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight text-balance">
              A Premier Boutique Investment Firm
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Alpha Capital is a premier multi-sector boutique investment firm
              managing proprietary funds across real estate, technology startups,
              in-house derivatives strategies across global equities and commodities,
              high-yield debt and heavy equipment financing.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We deliver sophisticated investment solutions through deep market
              expertise and disciplined capital allocation. Our approach combines
              rigorous analysis with strategic insight to generate sustainable returns.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "4", label: "Investment Divisions" },
              { number: "20+", label: "Professionals" },
              { number: "4", label: "Global Offices" },
              { number: "100+", label: "Years Combined Team Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-background rounded-lg border border-border p-6 text-center"
              >
                <p className="font-serif text-4xl font-semibold text-foreground">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
