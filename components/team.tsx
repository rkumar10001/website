const team = [
  {
    name: "Animesh Saxena",
    role: "Managing Partner",
    focus: "Venture Studio, Quant Trading",
    credentials: "IIT Kharagpur, IIM Lucknow, Ex-CIO, Family Office",
    experience: "18+ years in investments",
    image: "/images/animesh-saxena.png",
  },
  {
    name: "Rajesh Kumar",
    role: "Managing Partner",
    focus: "Real Estate, Equipment Finance",
    credentials: "IIT Delhi, Multiple business owner",
    experience: "20+ years in business consulting",
    image: "/images/rajesh-kumar.png",
  },
  {
    name: "Kashyap Barnawal",
    role: "Principal",
    focus: "Fractional CFO Services",
    credentials: "CA (ICAI), CIMA, Ex-Big 4",
    experience: "15+ years of senior financial leadership",
    image: "/images/kashyap.png",
  },
  {
    name: "Anand Ingle",
    role: "Principal",
    focus: "Growth Advisory",
    credentials: "IIM Lucknow, 30 Under 30 Awardee",
    experience: "12+ years of startup/SME growth advisory",
    image: "/images/anand.png",
  },
  {
    name: "Amritpal Singh",
    role: "Principal",
    focus: "Equipment Financing",
    credentials: "Masters from Southern New Hampshire University",
    experience: "12+ years in construction & heavy equipment",
    image: "/images/amritpal.png",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Our Team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Experienced professionals with deep expertise across investment disciplines
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-background rounded-xl border border-border p-6 transition-shadow hover:shadow-lg text-center ${index >= 3 ? "lg:col-span-1" : ""
                }`}
            >
              {member.image && (
                <div className="mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover object-top mx-auto"
                  />
                </div>
              )}
              <h3 className="font-semibold text-foreground text-lg mb-2">{member.name}</h3>
              <p className="text-primary text-sm font-medium">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-1">{member.focus}</p>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{member.credentials}</p>
                <p className="text-sm text-muted-foreground mt-1">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
