import fs from 'fs';
import path from 'path';

const filePath = path.resolve('artifacts/tirah/src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(
  'export type Category = { id: string; name: string; description: string; icon: any; products: Product[] };',
  'export type Category = { id: string; name: string; description: string; icon: any; image: string; products: Product[] };'
);

const images = {
  'spices': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
  'seeds': 'https://images.unsplash.com/photo-1502747192348-e8cb55dbbade?w=600&q=80',
  'nuts-dried-fruits': 'https://images.unsplash.com/photo-1599598425947-330026e6cb3e?w=600&q=80',
  'grains': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
  'dehydrated-products': 'https://images.unsplash.com/photo-1628812683931-1e967a6d5108?w=600&q=80',
  'edible-oil': 'https://images.unsplash.com/photo-1474979266404-7eaacabcd21f?w=600&q=80',
  'pulses': 'https://images.unsplash.com/photo-1515543904379-3d757afe72e6?w=600&q=80',
  'food-colours': 'https://images.unsplash.com/photo-1516053336712-4ebee09312b6?w=600&q=80',
  'food-chemicals': 'https://images.unsplash.com/photo-1616474136154-15992f801f94?w=600&q=80',
  'feed-ingredients': 'https://images.unsplash.com/photo-1504930268766-d71549a376eb?w=600&q=80'
};

for (const [id, image] of Object.entries(images)) {
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?description:\\s*".*?",)`);
  content = content.replace(regex, `$1\n    image: "${image}",`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('products.ts updated successfully.');

const homePath = path.resolve('artifacts/tirah/src/pages/Home.tsx');
let homeContent = fs.readFileSync(homePath, 'utf-8');

// Update Fonts (All small texts bolder)
homeContent = homeContent.replace(
  'className="font-ui text-xs md:text-sm uppercase tracking-[0.5em] text-gold"', 
  'className="font-ui text-xs md:text-sm uppercase tracking-[0.5em] text-gold font-bold"'
);

homeContent = homeContent.replace(
  'className="font-body italic text-lg md:text-2xl text-text-secondary max-w-2xl"',
  'className="font-body italic text-lg md:text-2xl text-text-secondary max-w-2xl font-medium"'
);

homeContent = homeContent.replace(
  'className="font-ui uppercase tracking-[0.25em] text-xs text-text-secondary"',
  'className="font-ui uppercase tracking-[0.25em] text-xs text-text-secondary font-bold"'
);

homeContent = homeContent.replace(
  'className="font-ui text-xs uppercase tracking-[0.3em] text-text-secondary"',
  'className="font-ui text-xs uppercase tracking-[0.3em] text-text-secondary font-bold"'
);

// category counts text
homeContent = homeContent.replace(
  'className="mt-2 font-ui text-xs uppercase tracking-widest text-text-secondary"',
  'className="mt-2 font-ui text-xs uppercase tracking-widest text-text-secondary font-bold"'
);

// features labels
homeContent = homeContent.replace(
  'className="font-ui text-sm uppercase tracking-widest text-text-primary"',
  'className="font-ui text-sm uppercase tracking-widest text-text-primary font-bold"'
);

// certification labels
homeContent = homeContent.replace(
  'className="font-ui uppercase tracking-[0.3em] text-xs text-gold"',
  'className="font-ui uppercase tracking-[0.3em] text-xs text-gold font-bold"'
);

// realistic image for categories
const initialIconMarkup = `<div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-bg-primary" />
                    </div>`;
                    
const finalIconMarkup = `<div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gold/30 shadow-md">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    </div>`;

homeContent = homeContent.replace(initialIconMarkup, finalIconMarkup);

fs.writeFileSync(homePath, homeContent, 'utf-8');
console.log('Home.tsx updated successfully.');
