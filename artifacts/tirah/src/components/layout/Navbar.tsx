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

  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group z-50">
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
        <nav className="hidden lg:flex items-center gap-8">
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

        <div className="hidden lg:block">
          <Button asChild className="bg-gold-gradient text-bg-primary font-ui font-bold hover:opacity-90 rounded-full px-6 uppercase tracking-wider">
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-text-primary hover:text-gold transition-colors z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`absolute top-full left-0 right-0 z-50 lg:hidden origin-top transition-all duration-200 ease-out ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-gold bg-bg-surface shadow-2xl overflow-hidden">
          <nav className="flex flex-col py-2">
            {["Home", "About", "Products", "Why Choose Us", "Certifications", "Contact"].map(
              (item) => {
                const href =
                  item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                const active = location === href;
                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={closeMenu}
                    className={`px-6 py-4 font-ui text-base uppercase tracking-widest transition-colors ${
                      active
                        ? "text-gold font-bold"
                        : "text-text-primary font-semibold hover:text-gold"
                    }`}
                  >
                    {item}
                  </Link>
                );
              },
            )}
          </nav>
          <div className="p-4 border-t border-gold/20 bg-bg-secondary/40">
            <Button
              asChild
              className="w-full bg-gold-gradient text-bg-primary font-ui font-bold rounded-full px-8 py-6 text-base uppercase tracking-wider"
            >
              <a href={quoteUrl} target="_blank" rel="noopener noreferrer">
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}