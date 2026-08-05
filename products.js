// ============================================================
// DROP — dane produktów
// Ten plik możesz edytować ręcznie ALBO wygenerować automatycznie
// z feedu Awin komendą:  node feed-to-products.js twoj-feed.csv
//
// Pola:
//  brand    — marka
//  name     — nazwa produktu
//  color    — kolorystyka (opcjonalne)
//  cat      — kategoria (dowolna nazwa; filtry budują się same)
//  price    — cena po przecenie (liczba)
//  oldPrice — cena regularna (liczba)
//  currency — "PLN" / "USD" / "EUR"
//  img      — adres URL zdjęcia (z feedu Awin lub sklepu)
//  url      — link do produktu (TWÓJ link afiliacyjny z Awin!)
//  store    — nazwa sklepu
//  hot      — true = badge HOT
// ============================================================

const PRODUCTS = [
  // Przykładowe realne przeceny (END. Summer Sale, stan 06.07.2026).
  // Pole img jest puste — po rejestracji w Awin podmień dane na feed
  // z linkami afiliacyjnymi i zdjęciami (patrz README.md).
  { brand: "Stone Island", name: "Cotton Moleskin-TC PrimaLoft Work Jacket", color: "Navy Blue", cat: "Kurtki", price: 990, oldPrice: 1650, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Nylon Metal EcoNyl PrimaLoft Bomber Jacket", color: "Steel Blue", cat: "Kurtki", price: 957, oldPrice: 1595, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Light Compact Touch Poly-TC Hooded Jacket", color: "Military Green", cat: "Kurtki", price: 791, oldPrice: 1319, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Metal Lamina Poly Ripstop Stand Collar Jacket", color: "Black", cat: "Kurtki", price: 720, oldPrice: 1200, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Ghost Cashmere President Jacket", color: "Dark Brown", cat: "Kurtki", price: 2756, oldPrice: 3675, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Lightweight Hooded Down Jacket", color: "Navy Blue", cat: "Kurtki puchowe", price: 694, oldPrice: 925, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: true },
  { brand: "Stone Island", name: "Crinkle Reps Hooded Jacket", color: "Military Green", cat: "Kurtki", price: 573, oldPrice: 819, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Nylon Smerigliato-TC Short Parka", color: "Desert", cat: "Parki", price: 692, oldPrice: 1065, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Crinkle Reps Quilted-TC Vest", color: "Ink", cat: "Kamizelki", price: 645, oldPrice: 1075, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Marina Oxford Overshirt", color: "Blue", cat: "Overshirty", price: 306, oldPrice: 510, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Tela Paracadute Shirt Jacket", color: "Sand", cat: "Overshirty", price: 408, oldPrice: 680, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
  { brand: "Stone Island", name: "Garment Dyed Hoodie", color: "Bright Blue", cat: "Bluzy", price: 267, oldPrice: 445, currency: "USD", img: "", url: "https://www.endclothing.com/us/sale/stone-island", store: "END.", hot: false },
];
