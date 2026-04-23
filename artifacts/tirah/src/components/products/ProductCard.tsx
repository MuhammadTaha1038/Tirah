import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import type { Product } from "@/data/products";

const FALLBACK = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80";

// Map product name -> precise search keyword for best Flickr image match.
// Names not in this map use a slugified version of the product name.
const KEYWORD_OVERRIDES: Record<string, string> = {
  "Red Chilli": "red,chili,pepper,dried",
  "Red Chilli Flakes": "red,chili,flakes",
  "Red Chilli Bedgi Stem": "red,chili,whole",
  "Dry Ginger Delux": "ginger,fresh,raw",
  "Cardamom": "cardamom,pods",
  "Turmeric Powder": "turmeric,powder",
  "Ginger Powder": "ginger,spice",
  "Dry Ginger Flakes": "ginger,dried",
  "Turmeric Finger Japan": "turmeric,root",
  "Bay Leaves": "bay,leaf",
  "Turmeric Finger Bulb": "turmeric,root",
  "Turmeric Finger": "turmeric,whole",
  "Nutmeg": "nutmeg",
  "Cloves and Powder": "cloves",

  "Mustard Seeds": "mustard,seeds",
  "Black Cumin": "black,cumin,seeds",
  "Leaves Fenugreek Seeds": "fenugreek,seeds",
  "Fennel Seeds": "fennel,seeds",
  "Cumin Seed": "cumin,seeds",
  "Black Cumin Nigella": "nigella",
  "Coriander Seeds": "coriander,seeds",
  "Black Pepper": "black,peppercorns",
  "Cinnamon": "cinnamon,sticks",
  "Chia Seeds": "chia,seeds",
  "Black Sesame Seeds": "black,sesame,seeds",
  "Brown Flax Seed": "brown,flax,seeds",
  "Natural Sesame Seed": "sesame,seeds,white",
  "Golden Flax Seeds": "flax,seeds",
  "Hulled Sesame Seed": "sesame,seeds",
  "Quinoa Seeds": "quinoa,grain",
  "Brown Sesame Seeds": "brown,sesame,seeds",

  "Cashew Nuts": "cashew,raw",
  "Peanuts": "peanuts,bowl",
  "Almond": "almond,raw",
  "Pistachio": "pistachio,nuts",
  "Black Raisin": "raisins,dark",
  "Green Raisin": "sultana,raisins",
  "Raw Peanuts": "peanuts,raw",
  "Raisin": "raisins,bowl",
  "Desiccated Coconuts": "coconut,desiccated",

  "Rice": "basmati,rice",
  "Grain": "wheat,grain",

  "Dehydrated Red Onion": "dehydrated,onion",
  "Red Onion Powder": "onion,powder",
  "Dehydrated White Onion": "dried,onion",
  "Garlic Granules": "garlic",
  "Dry Tomato": "dried,tomato",
  "Tomato Powder": "tomato,powder",
  "Tomato Flakes": "dried,tomato",
  "Dehydrated Beetroots": "beetroot",

  "Peanut Oil": "peanut,oil",
  "Sunflower Oil": "sunflower,oil",
  "Sesame Oil": "sesame,oil",

  "Soyabean": "soybean",
  "Mung Bean": "mung,bean",
  "Kabuli Chickpeas": "chickpeas",
  "Desi Chickpeas": "chickpeas",

  "Food Colour": "food,colour",
  "Colour": "food,colouring",

  "Citric Acid": "citrus,lemon",
  "Monosodium Glutamate (MSG)": "salt,crystals",
  "Dextrose Monohydrate": "sugar,crystals",
  "Corn Starch": "corn,starch",
  "Coffee": "coffee,beans",
  "Coffee Beans and Powder": "coffee,powder",
  "Cacao Powder": "cocoa,powder",

  "Soyabean Meal": "soybean",
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Stable hash so each product gets the same Flickr photo every time.
function hash(str: string) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i);
  return Math.abs(h);
}

export default function ProductCard({ product }: { product: Product }) {
  const [imgFailed, setImgFailed] = useState(false);
  const baseKeyword = KEYWORD_OVERRIDES[product.name] || slugify(product.name);
  // Always append ",food" so Flickr returns food/cooking photos, not people/pets.
  const keyword = /(^|,)food(,|$)/.test(baseKeyword) ? baseKeyword : `${baseKeyword},food`;
  const seed = hash(product.name);
  const imageUrl = imgFailed
    ? FALLBACK
    : `https://loremflickr.com/600/600/${keyword}?lock=${seed}`;

  const message = `Hello Tirah Food Industry, I'm interested in buying ${product.name} (Origin: ${product.origin}). Please share pricing and availability.`;
  const whatsappUrl = `https://wa.me/923339044677?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative flex flex-col bg-bg-surface border border-gold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-gold-lg hover:border-gold-strong"
    >
      <div className="aspect-square overflow-hidden bg-bg-secondary relative">
        <img
          src={imageUrl}
          alt={product.name}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      </div>

      <div className="flex-1 flex flex-col p-5 gap-3">
        <h3 className="font-ui font-bold text-lg text-gold tracking-wide leading-tight">
          {product.name}
        </h3>
        <p className="font-body italic text-sm text-text-secondary flex-1">
          Origin: {product.origin}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 bg-gold-gradient text-bg-primary font-ui font-bold tracking-widest uppercase text-xs px-4 py-3 rounded-md hover:opacity-95 hover:shadow-gold transition-all"
        >
          <FaWhatsapp className="w-4 h-4" />
          Buy on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
