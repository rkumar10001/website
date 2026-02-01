import { MapPin, Phone } from "lucide-react";

const offices = [
  {
    city: "London",
    address: "3rd Floor, 86-90 Paul Street, London EC2A 4NE, UK",
    phone: "+44 7707 923 956",
    timezone: "GMT",
  },
  {
    city: "Dubai",
    address: "Shams – 01, Al Bataeh, Sharjah Media City, Sharjah, UAE",
    phone: "+971 56 216 7073",
    timezone: "GST",
  },
  {
    city: "Mumbai",
    address: "811, Lodha Supremus, Kolshet Rd, Thane West 400 601, India",
    phone: "+91 98339 95441",
    timezone: "IST",
  },
  {
    city: "New York",
    address: "1177 6th Ave, New York, NY 10036, USA",
    phone: "+1 516 666 4604",
    timezone: "EST",
  },
];

export function GlobalPresence() {
  return (
    <section id="global" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Global Presence
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
              Offices Across Major Markets
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With offices across all major markets in the US, UK, Middle East and Asia,
              we have a global footprint that positions us well to tap into our network
              and domain expertise and integrate it into our clients&apos; roadmap.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With 20+ professionals across these offices, we bring solid experience
              and understanding of the fund management ecosystem and a diverse set of
              domain expertise.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "4", label: "Global Offices" },
                { value: "20+", label: "Professionals" },
                { value: "3", label: "Continents" },
                { value: "24/7", label: "Coverage" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-lg border border-border p-4">
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {office.city}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {office.address}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      {office.phone}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {office.timezone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
