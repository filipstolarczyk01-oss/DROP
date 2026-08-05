# DROP — Twoja strona z przecenami. Instrukcja od zera do zarabiania

## Co masz w pakiecie

- `index.html` — cała strona (design, filtry, karty produktów, modal). Zero budowania, działa po otwarciu w przeglądarce.
- `products.js` — lista produktów, którą strona wyświetla. Edytujesz ją ręcznie albo generujesz automatycznie.
- `feed-to-products.js` — skrypt, który zamienia feed produktowy z Awin (setki produktów ze zdjęciami i Twoimi linkami prowizyjnymi) w gotowy `products.js`.

## Krok 1 — Zobacz stronę u siebie (1 minuta)

Otwórz `index.html` dwuklikiem w przeglądarce. Strona działa od razu na przykładowych danych.

## Krok 2 — Wystaw stronę do internetu za darmo (5 minut)

Najprostsza opcja, bez konta git i bez terminala:

1. Wejdź na **app.netlify.com/drop** (Netlify Drop).
2. Przeciągnij cały folder `drop-site` na stronę.
3. Dostajesz publiczny adres typu `twoja-nazwa.netlify.app` — to już jest Twoja strona.
4. (Później) W ustawieniach Netlify możesz podpiąć własną domenę, np. `drop.pl` (koszt domeny ~20–60 zł/rok, np. w OVH lub home.pl).

Alternatywa: Vercel (vercel.com) — analogicznie, też darmowy.

## Krok 3 — Prawdziwe zdjęcia i setki produktów: rejestracja w Awin

Awin to sieć afiliacyjna, w której są programy m.in. Farfetch, END., Zalando (w tym Lounge), About You i wielu innych sklepów z modą premium.

1. Zarejestruj się jako wydawca na **awin.com** (typ: content/website; podajesz adres swojej strony z kroku 2 — dlatego najpierw ją wystawiamy). Przy rejestracji Awin pobiera kaucję ok. 5 GBP/EUR, którą zwraca przy pierwszej wypłacie.
2. Po akceptacji konta aplikuj do programów sklepów modowych (każdy sklep akceptuje osobno; opisz stronę jako "agregator przecen mody premium").
3. Po akceptacji przez sklep: **Toolbox → Product Feeds** → wybierz program → pobierz feed w formacie **CSV**. Feed zawiera nazwy, marki, ceny, ceny przed przeceną, **adresy zdjęć** i **Twoje linki afiliacyjne** (kolumny `aw_image_url` i `aw_deep_link`).

## Krok 4 — Wgraj produkty na stronę (2 minuty)

Potrzebujesz Node.js (nodejs.org — instalacja "dalej, dalej"). Potem w folderze projektu:

```
node feed-to-products.js feed.csv 200
```

Skrypt: bierze z feedu tylko produkty realnie przecenione, sortuje od największej przeceny, oznacza top 6 jako HOT i zapisuje `products.js`. Wgraj zaktualizowany folder na Netlify (znowu przeciągnij) — strona pokazuje prawdziwe produkty z prawdziwymi zdjęciami i Twoimi linkami prowizyjnymi.

Powtarzaj to np. 2 razy w tygodniu (świeży feed → skrypt → wgranie), żeby ceny były aktualne.

## Krok 5 — Zarabianie: jak to działa

- Ktoś klika "Zobacz w sklepie" → trafia do sklepu przez Twój link → kupuje → Ty dostajesz prowizję (w modzie zwykle ok. 5–10% wartości zamówienia; przy kurtce za 3000 zł to 150–300 zł z jednej transakcji).
- Wypłaty robi Awin zbiorczo, po zatwierdzeniu transakcji przez sklepy (zwykle po upływie okresu zwrotów, tj. 1–2 miesiące).

## Formalności w Polsce (ważne)

- Na start wystarczy **działalność nierejestrowana**: możesz zarabiać do 75% minimalnego wynagrodzenia miesięcznie bez zakładania firmy (sprawdź aktualny limit — zmienia się z płacą minimalną). Prowadzisz prostą ewidencję przychodów, rozliczasz w PIT rocznym.
- Po przekroczeniu limitu — rejestrujesz JDG (możesz na ryczałcie).
- Na stronie **musi** być informacja o linkach afiliacyjnych (jest już w stopce) — to wymóg uczciwości wobec użytkowników i regulaminów sieci afiliacyjnych.
- Dodaj prostą politykę prywatności, jeśli włączysz statystyki (np. darmowy, zgodny z RODO Plausible/GoatCounter zamiast Google Analytics — mniej formalności).

## Jak ściągnąć pierwszy ruch (bez budżetu)

1. **TikTok/Instagram Reels** — krótkie wideo "Stone Island −40%, linki na stronie". Znasz się na tych markach, to Twoja przewaga.
2. **Grupy FB / Wykop** o modzie premium i streetwear — wrzucaj konkretne okazje, nie spam.
3. **Newsletter / kanał na Telegramie** z alertami cenowymi — najwierniejsi odbiorcy.

## Co dalej (gdy ruszy)

- Automatyczne odświeżanie feedu (skrypt na serwerze/cron zamiast ręcznego wgrywania) — mogę Ci to zbudować.
- Alerty cenowe na e-mail, przeliczanie walut na PLN, strona "okazja dnia".

## Praca z iPhone'a (bez komputera)

Cały proces da się przejść na telefonie:

1. **Podgląd strony**: pliku index.html nie otworzysz dwuklikiem jak na komputerze, ale po wgraniu na hosting (punkt 2) widzisz ją normalnie w Safari.
2. **Hosting z telefonu**: najpewniejsza droga to GitHub + Netlify, oba przez Safari:
   - załóż konto na github.com → "New repository" → "uploading an existing file" → wgraj pliki projektu (Safari pozwala wybrać pliki z aplikacji Pliki),
   - załóż konto na netlify.com → "Import from Git" → wskaż repozytorium → Deploy. Od teraz każda podmiana pliku na GitHubie automatycznie aktualizuje stronę.
3. **Konwerter feedu**: zamiast skryptu Node użyj pliku **konwerter.html** — wgraj go na hosting razem z resztą (albo otwórz lokalnie) i wejdź na adres twoja-strona/konwerter.html. Wybierasz CSV z feedu Awin (pobrany Safari → zapisany w Plikach), klikasz "Generuj", pobierasz products.js i podmieniasz go w repozytorium na GitHubie (ołówek/Upload w interfejsie webowym). Feed nigdzie nie jest wysyłany — wszystko liczy się na Twoim telefonie.
4. **Awin**: rejestracja i pobieranie feedów działają w Safari bez problemu.

Uwaga: feedy dużych sklepów potrafią mieć dziesiątki MB — na telefonie wybieraj w panelu Awin feed zawężony do jednej kategorii (np. tylko odzież męska), będzie lżej.
