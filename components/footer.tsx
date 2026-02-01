import Link from "next/link";

const navigation = {
  divisions: [
    { name: "Real Estate", href: "#divisions" },
    { name: "Venture Studio", href: "#divisions" },
    { name: "Quant Trading", href: "#divisions" },
    { name: "Equipment Finance", href: "#divisions" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Global Presence", href: "#global" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">Alpha Capital</h3>
            <p className="mt-4 text-sm opacity-70 leading-relaxed">
              Premier multi-sector boutique investment firm delivering sophisticated 
              investment solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Divisions
            </h4>
            <ul className="space-y-3">
              {navigation.divisions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Alpha Capital. All rights reserved.
            </p>
            <p className="text-sm opacity-70">
              New York · London · Dubai · Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
