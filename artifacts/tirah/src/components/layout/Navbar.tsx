import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Wheat, Menu, X } from "lucide-react";
import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const quoteUrl = "https://wa.me/923339044677?text=" + encodeURIComponent("Hello, I would like to request a quote.");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gold shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <Wheat className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="font-ui font-bold text-xl tracking-widest text-text-primary leading-none">
              TIRAH
            </span>
            <span className="font-display font-light text-xs text-text-secondary tracking-widest uppercase mt-1">
              Food Industry
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-ui text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/" ? "text-gold" : "text-text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-ui text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/about" ? "text-gold" : "text-text-primary"
            }`}
          >
            About
          </Link>
          
          <div className="relative group">
            <Link
              href="/products"
              className={`font-ui text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold flex items-center gap-1 py-4 ${
                location === "/products" ? "text-gold" : "text-text-primary"
              }`}
            >
              Products
            </Link>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-bg-surface border border-gold shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 rounded-lg overflow-hidden p-6 grid grid-cols-3 gap-4">
              {categories.map((c) => {
                const Icon = c.icon;
                return (
                  <Link
                    key={c.id}
                    href={`/products#${c.id}`}
                    className="flex flex-col p-4 rounded-md hover:bg-bg-secondary border border-transparent hover:border-gold/30 transition-colors group/item"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="text-gold w-5 h-5" />
                      <span className="font-display font-bold text-lg text-text-primary group-hover/item:text-gold transition-colors">{c.name}</span>
                    </div>
                    <p className="font-body text-sm text-text-secondary line-clamp-2">{c.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href="/why-choose-us"
            className={`font-ui text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/why-choose-us" ? "text-gold" : "text-text-primary"
            }`}
          >
            Why Choose Us
          </Link>
          <Link
            href="/certifications"
            className={`font-ui text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/certifications" ? "text-gold" : "text-text-primary"
            }`}
          >
            Certifications
          </Link>
          <Link
            href="/contact"
            className={`font-ui text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
              location === "/contact" ? "text-gold" : "text-text-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gold-gradient text-bg-primary font-ui font-bold hover:opacity-90 rounded-full px-6 uppercase tracking-wider">
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-bg-primary/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-4 text-text-primary hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-6">
          {["Home", "About", "Products", "Why Choose Us", "Certifications", "Contact"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <Link
                key={item}
                href={href}
                onClick={closeMenu}
                className="font-display text-4xl text-text-primary hover:text-gold transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <Button asChild className="mt-8 bg-gold-gradient text-bg-primary font-ui font-bold rounded-full px-8 py-6 text-lg uppercase tracking-wider">
          <a href={quoteUrl} target="_blank" rel="noopener noreferrer">Get a Quote</a>
        </Button>
      </div>
    </header>
  );
}