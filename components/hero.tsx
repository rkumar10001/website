import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              Premier Multi-Sector Investment Firm
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
            Sophisticated Investment Management Through Deep Market Expertise
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Managing proprietary funds across real estate, technology startups,
            quantitative trading strategies, and equipment financing. We deliver
            results through disciplined capital allocation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <Link href="#divisions">
                Explore Our Divisions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border pt-10">
            {[
              { label: "Real Estate", value: "UK & UAE" },
              { label: "Venture Studio", value: "Global" },
              { label: "Quant Trading", value: "US Markets" },
              { label: "Equipment Finance", value: "India" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-1 font-serif text-lg font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
