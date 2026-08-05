#!/usr/bin/env node
// ============================================================
// feed-to-products.js — konwerter feedu Awin -> products.js
//
// Użycie:
//   node feed-to-products.js feed.csv [maks_liczba_produktow]
//
// Skąd wziąć feed:
//   Panel Awin -> Toolbox -> Product Feeds -> wybierz program
//   (np. Farfetch, END., Zalando) -> Download (format CSV).
//   Feed zawiera: nazwę, markę, cenę, cenę przed przeceną,
//   ZDJĘCIE (aw_image_url) i TWÓJ link afiliacyjny (aw_deep_link).
//
// Skrypt bierze tylko produkty, które faktycznie są przecenione,
// i sortuje je od największej przeceny.
// ============================================================

const fs = require("fs");

const file = process.argv[2];
const limit = parseInt(process.argv[3] || "200", 10);
if (!file) { console.error("Użycie: node feed-to-products.js feed.csv [limit]"); process.exit(1); }

// --- prosty parser CSV (obsługuje cudzysłowy i przecinki w polach) ---
function parseCSV(text) {
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else {
      if (c === '"') q = true;
      else if (c === ",") { row.push(cell); cell = ""; }
      else if (c === "\n" || c === "\r") {
        if (cell !== "" || row.length) { row.push(cell); rows.push(row); row = []; cell = ""; }
        if (c === "\r" && text[i + 1] === "\n") i++;
      } else cell += c;
    }
  }
  if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

// --- typowe nazwy kolumn w feedach Awin (różne programy = różne nazwy) ---
const COL = {
  name: ["product_name", "name", "aw_product_name"],
  brand: ["brand_name", "brand", "merchant_brand"],
  cat: ["merchant_category", "category_name", "merchant_product_category_path", "category"],
  price: ["search_price", "store_price", "price"],
  oldPrice: ["rrp_price", "base_price", "product_price_old", "previous_price"],
  currency: ["currency"],
  img: ["aw_image_url", "merchant_image_url", "large_image", "image_url"],
  url: ["aw_deep_link", "deep_link", "merchant_deep_link"],
  store: ["merchant_name"],
  color: ["colour", "color"],
};

const csv = fs.readFileSync(file, "utf8");
const rows = parseCSV(csv);
const header = rows[0].map(h => h.trim().toLowerCase());
const idx = {};
for (const key in COL) idx[key] = COL[key].map(n => header.indexOf(n)).find(i => i >= 0) ?? -1;

console.log("Wykryte kolumny:", Object.fromEntries(Object.entries(idx).map(([k, v]) => [k, v >= 0 ? header[v] : "BRAK"])));

const get = (r, k) => (idx[k] >= 0 ? (r[idx[k]] || "").trim() : "");
const num = s => parseFloat(String(s).replace(/[^\d.,]/g, "").replace(",", ".")) || 0;

const products = [];
for (let i = 1; i < rows.length; i++) {
  const r = rows[i];
  const price = num(get(r, "price"));
  const oldPrice = num(get(r, "oldPrice"));
  if (!price || !oldPrice || oldPrice <= price) continue; // tylko realne przeceny
  const rawCat = get(r, "cat");
  products.push({
    brand: get(r, "brand") || "—",
    name: get(r, "name"),
    color: get(r, "color"),
    cat: rawCat ? rawCat.split(/[>|\/]/).pop().trim() : "Inne",
    price, oldPrice,
    currency: (get(r, "currency") || "PLN").toUpperCase(),
    img: get(r, "img"),
    url: get(r, "url"),
    store: get(r, "store") || "Sklep",
    hot: false,
  });
}

products.sort((a, b) => (1 - b.price / b.oldPrice) - (1 - a.price / a.oldPrice));
const top = products.slice(0, limit);
top.slice(0, Math.min(6, top.length)).forEach(p => (p.hot = true)); // 6 największych przecen = HOT

const out = "// Wygenerowano automatycznie przez feed-to-products.js — " + new Date().toISOString() +
  "\nconst PRODUCTS = " + JSON.stringify(top, null, 2) + ";\n";
fs.writeFileSync("products.js", out, "utf8");
console.log(`\nZapisano ${top.length} produktów do products.js (z ${products.length} przecenionych w feedzie).`);
console.log("Wgraj products.js razem z index.html na hosting — gotowe.");
