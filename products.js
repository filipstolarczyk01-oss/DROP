// ============================================================
// DROP — dane produktów
// Edytuj ręcznie ALBO wygeneruj z feedu Awin przez konwerter.html
//
// Pola:
//  brand, name, color, cat  — opis produktu
//  price / oldPrice         — cena po przecenie / regularna (liczby)
//  currency                 — "PLN" / "USD" / "EUR" / "GBP"
//  img                      — URL zdjęcia (z feedu Awin) — puste = ilustracja
//  url                      — link DO KONKRETNEGO PRODUKTU
//  store, hot, season       — sklep, wyróżnienie, "lato" / "zima" / ""
// ============================================================

const PRODUCTS = [
  // ——— LATO ———
  { brand: "Stone Island", name: "Nylon Metal ECONYL Swim Shorts", color: "Pearl Grey", cat: "Kąpielówki", season: "lato", price: 188, oldPrice: 269, currency: "USD", img: "", url: "https://www.endclothing.com/us/stone-island-nylon-metal-econyl-swim-shorts-k1s15b100009-v0029.html", store: "END.", hot: true },
  { brand: "Stone Island", name: "Micro Stitch Knit Polo", color: "Ivory", cat: "Polo", season: "lato", price: 331, oldPrice: 509, currency: "USD", img: "", url: "https://www.endclothing.com/us/brands/stone-island/tops/polos", store: "END.", hot: true },
  { brand: "Stone Island", name: "Micro Stitch Knit Polo", color: "Navy Blue", cat: "Polo", season: "lato", price: 331, oldPrice: 509, currency: "USD", img: "", url: "https://www.endclothing.com/us/brands/stone-island/tops/polos", store: "END.", hot: false },
  { brand: "Stone Island", name: "Patch Logo T-Shirt", color: "Desert", cat: "T-shirty", season: "lato", price: 153, oldPrice: 219, currency: "USD", img: "", url: "https://www.endclothing.com/us/brands/stone-island/tops", store: "END.", hot: false },
  { brand: "Stone Island", name: "Low Top Sneakers", color: "Oats", cat: "Buty", season: "lato", price: 309, oldPrice: 475, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Tela Paracadute Cargo Trousers", color: "Pearl Grey", cat: "Spodnie", season: "lato", price: 321, oldPrice: 459, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Panama Cotton Old Effect Work Pants", color: "Desert", cat: "Spodnie", season: "lato", price: 344, oldPrice: 529, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Bull Denim-TC Straight Jeans", color: "Black", cat: "Spodnie", season: "lato", price: 395, oldPrice: 659, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Stretch Slim Jeans", color: "Indigo Rinsed", cat: "Spodnie", season: "lato", price: 270, oldPrice: 385, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Organic Cotton Twill Overshirt", color: "Purple Grey", cat: "Overshirty", season: "lato", price: 412, oldPrice: 589, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Scan Camo Ripstop-OVD Short Sleeve Shirt", color: "Black", cat: "Koszule", season: "lato", price: 468, oldPrice: 669, currency: "USD", img: "", url: "https://www.endclothing.com/us/brands/stone-island/tops", store: "END.", hot: false },
  { brand: "Stone Island", name: "Micro Stitch Crew Neck Jumper", color: "Ivory", cat: "Swetry", season: "lato", price: 370, oldPrice: 529, currency: "USD", img: "", url: "https://www.endclothing.com/us/brands/stone-island/tops", store: "END.", hot: false },
  { brand: "Stone Island", name: "Garment Dyed Hoodie", color: "Bright Blue", cat: "Bluzy", season: "", price: 267, oldPrice: 445, currency: "USD", img: "", url: "https://www.endclothing.com/us/brands/stone-island/tops/sweatshirts", store: "END.", hot: false },

  // ——— OKRYCIA WIERZCHNIE ———
  { brand: "Stone Island", name: "Scan Camo Ripstop-OVD Shirt Jacket", color: "Black", cat: "Kurtki", season: "", price: 685, oldPrice: 979, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Nylon Smerigliato-TC Short Parka", color: "Desert", cat: "Parki", season: "", price: 692, oldPrice: 1065, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Nylon Smerigliato-TC Short Parka", color: "Black", cat: "Parki", season: "", price: 746, oldPrice: 1065, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Crinkle Reps Hooded Jacket", color: "Military Green", cat: "Kurtki", season: "", price: 573, oldPrice: 819, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Tela Paracadute Shirt Jacket", color: "Sand", cat: "Overshirty", season: "lato", price: 442, oldPrice: 680, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Cotton Moleskin-TC PrimaLoft Work Jacket", color: "Navy Blue", cat: "Kurtki", season: "zima", price: 990, oldPrice: 1650, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Lightweight Hooded Down Jacket", color: "Navy Blue", cat: "Kurtki puchowe", season: "zima", price: 694, oldPrice: 925, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Crinkle Reps Quilted-TC Vest", color: "Ink", cat: "Kamizelki", season: "zima", price: 645, oldPrice: 1075, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Ghost Cashmere President Jacket", color: "Dark Brown", cat: "Kurtki", season: "zima", price: 2756, oldPrice: 3675, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  // ——— GIGLIO (drugi sklep, ceny w USD, stan 06.07.2026) ———
  { brand: "Stone Island", name: "Hero Jacket in Cotton Canvas", color: "Beige", cat: "Kurtki", season: "", price: 736, oldPrice: 1227, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: true },
  { brand: "Stone Island", name: "Nylon Smerigliato-TC Jacket", color: "Black", cat: "Kurtki", season: "", price: 770, oldPrice: 1027, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Hooded Jacket in Organic Cotton Twill", color: "Olive", cat: "Kurtki", season: "lato", price: 577, oldPrice: 769, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Crinkle Reps Hooded Windbreaker", color: "Navy", cat: "Kurtki", season: "lato", price: 630, oldPrice: 788, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Parachute Canvas Overshirt", color: "Sand", cat: "Overshirty", season: "lato", price: 446, oldPrice: 594, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Piqué Cotton Polo Shirt with Logo", color: "White", cat: "Polo", season: "lato", price: 151, oldPrice: 233, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: true },
  { brand: "Stone Island", name: "Cotton Jersey T-Shirt with Logo Patch", color: "Black", cat: "T-shirty", season: "lato", price: 145, oldPrice: 194, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Crewneck Sweatshirt with Logo", color: "Grey", cat: "Bluzy", season: "", price: 248, oldPrice: 381, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: true },
  { brand: "Stone Island", name: "Crewneck Cotton Sweatshirt with Badge", color: "Navy", cat: "Bluzy", season: "", price: 285, oldPrice: 336, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Stretch Cotton Tela Paracadute Bermuda Shorts", color: "Olive", cat: "Szorty", season: "lato", price: 276, oldPrice: 368, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Cotton Jogging Shorts", color: "Black", cat: "Szorty", season: "lato", price: 242, oldPrice: 323, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Nylon Metal ECONYL Swim Shorts", color: "Navy", cat: "Kąpielówki", season: "lato", price: 189, oldPrice: 252, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Coated Nylon Metal ECONYL Backpack", color: "Black", cat: "Akcesoria", season: "", price: 357, oldPrice: 510, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: true },
  { brand: "Stone Island", name: "Double-Coated Cotton Ripstop Holdall", color: "Olive", cat: "Akcesoria", season: "", price: 572, oldPrice: 762, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
  { brand: "Stone Island", name: "Nylon Bag", color: "Black", cat: "Akcesoria", season: "", price: 258, oldPrice: 304, currency: "USD", img: "", url: "https://www.giglio.com/en-us/stone-island/men.html", store: "Giglio", hot: false },
];
