import { Link } from "wouter";
import { Wheat, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary pt-20 pb-8 border-t border-gold relative overflow-hidden grain">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Wheat className="text-gold w-10 h-10 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="font-ui font-bold text-2xl tracking-widest text-text-primary leading-none">
                  TIRAH
                </span>
                <span className="font-display font-light text-sm text-text-secondary tracking-widest uppercase mt-1">
                  Food Industry
                </span>
              </div>
            </Link>
            <p className="font-display italic text-2xl text-gold mb-4">
              "Rooted in Quality. Grown for the World."
            </p>
            <p className="font-body text-text-secondary">
              Premium agricultural food exports connecting nature's finest with global markets.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-ui font-bold text-lg text-text-primary uppercase tracking-widest mb-6 border-b border-gold/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-body text-text-secondary">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gold transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-gold transition-colors">Certifications</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-ui font-bold text-lg text-text-primary uppercase tracking-widest mb-6 border-b border-gold/30 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 font-body text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span>
                  Wazir Dhund, Karkhano Market,<br />
                  District Khyber, Jamrud,<br />
                  Peshawar, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+923339044677" className="hover:text-gold transition-colors">+92 333 9044677</a>
                  <a href="tel:+923059054953" className="hover:text-gold transition-colors">+92 305 9054953</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:zakirullahfbr2023@gmail.com" className="hover:text-gold transition-colors">
                  zakirullahfbr2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gold-gradient opacity-30 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between font-body text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Tirah Food Industry. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-ui tracking-widest text-gold text-xs uppercase">Exporting Quality Since 2020</p>
        </div>
      </div>
    </footer>
  );
}