"use client";

import { useState } from "react";
import { Building2, Rocket, TrendingUp, Truck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const divisions = [
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    tagline: "Leveraged Growth. Strategic Geographies. Maximized Cash Flow.",
    description:
      "Our Real Estate division executes a high-conviction strategy focused on two of the world's most dynamic property markets: the United Kingdom and the United Arab Emirates. We employ active management and sophisticated capital structuring to deliver enhanced leveraged yields.",
    focus:
      "Premium residential assets optimized for Short-Term Rental (STR) and corporate housing markets, alongside selective commercial assets.",
    markets: ["United Kingdom", "United Arab Emirates"],
    portfolioImage: "/images/real-estate-portfolio.png",
  },
  {
    id: "venture-studio",
    name: "Venture Studio",
    icon: Rocket,
    tagline: "More Than Money. A Co-Building Partnership.",
    description:
      "Alpha Capital operates a dynamic venture capital arm dedicated to fueling early-stage technology startups across the USA, UK, Europe, and the Middle East. We are more than passive investors—we function as a Venture Studio, providing institutional-grade advisory services.",
    focus:
      "We augment founding teams with fractional C-suite resources, giving startups the financial rigor and strategic thinking of a $10M revenue company, even at $500K ARR.",
    markets: ["USA", "Canada", "UK", "Europe", "Middle East", "Asia"],
    portfolioImage: "/images/venture-studio-portfolio.png",
  },
  {
    id: "quant-trading",
    name: "Quant Trading",
    icon: TrendingUp,
    tagline: "Mathematical Precision. Asymmetric Returns.",
    description:
      "At the heart of Alpha Capital lies our Quant Trading division—a proprietary trading operation driven by advanced quantitative models, mid-frequency execution, and deep market structure expertise.",
    focus:
      "We invest capital in complex, non-linear strategies in highly liquid US exchanges, focusing on capturing alpha through Commodities Futures and Equity Options.",
    markets: ["US Exchanges"],
    strategies: [
      "Commodities Futures",
      "Equity Options",
      "Non-linear Strategies",
      "Mid-frequency Execution",
    ],
  },
  {
    id: "equipment-financing",
    name: "Equipment Financing",
    icon: Truck,
    tagline: "Enabling Growth Through Asset-Backed Solutions.",
    description:
      "Our Equipment Financing division provides specialized financing solutions for heavy machinery and construction equipment, supporting businesses in scaling their operational capacity.",
    focus:
      "High-yield debt structures and flexible financing arrangements for essential heavy equipment and machinery.",
    markets: ["India"],

  },
];

export function Divisions() {
  const [activeDivision, setActiveDivision] = useState(divisions[0]);

  return (
    <section id="divisions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Our Divisions
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Four Pillars of Investment Excellence
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diversified strategies across high-conviction asset classes
          </p>
        </div>

        {/* Division tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {divisions.map((division) => (
            <button
              type="button"
              key={division.id}
              onClick={() => setActiveDivision(division)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all",
                activeDivision.id === division.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              <division.icon className="h-4 w-4" />
              {division.name}
            </button>
          ))}
        </div>

        {/* Active division content */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <activeDivision.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {activeDivision.name}
                </h3>
              </div>

              <p className="text-lg font-medium text-foreground mb-4">
                {activeDivision.tagline}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeDivision.description}
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm font-medium text-foreground mb-1">Focus Area</p>
                <p className="text-sm text-muted-foreground">{activeDivision.focus}</p>
              </div>


            </div>

            <div className="lg:col-span-2 bg-muted/30 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Markets
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeDivision.markets.map((market) => (
                  <span
                    key={market}
                    className="px-3 py-1 rounded-full bg-background border border-border text-sm text-foreground"
                  >
                    {market}
                  </span>
                ))}
              </div>

              {activeDivision.portfolioImage ? (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    Portfolio
                  </h4>
                  <img
                    src={activeDivision.portfolioImage || "/placeholder.svg"}
                    alt={`${activeDivision.name} Portfolio`}
                    className="w-full rounded-lg"
                  />
                </div>
              ) : (
                (activeDivision.services || activeDivision.strategies || activeDivision.offerings) && (
                  <>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      {activeDivision.services
                        ? "Services"
                        : activeDivision.strategies
                          ? "Strategies"
                          : "Offerings"}
                    </h4>
                    <ul className="space-y-2">
                      {(
                        activeDivision.services ||
                        activeDivision.strategies ||
                        activeDivision.offerings
                      )?.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
