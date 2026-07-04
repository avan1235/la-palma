const stops = [
  {
    id: "stop-1",
    title: "La Palma & Teneguía Princess",
    category: "Baza noclegowa",
    area: "Fuencaliente",
    visitTime: "start wycieczki",
    highlight: "Resort położony na klifie nad Atlantykiem, blisko południowych krajobrazów wulkanicznych.",
    description:
      "Dobry punkt startowy na objazd wyspy: szybki wyjazd na południe i zachód, widoki na ocean oraz łatwy dostęp do tras samochodowych.",
    tip: "Warto ruszyć wcześnie rano — pierwsze miradory odwiedzisz jeszcze przed największym ruchem.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Palma%20-%20Volcan%20de%20Teneguia%20-%204.jpg",
    creditAuthor: "Ingo Mehling (Wikimedia Commons)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:La_Palma_-_Volcan_de_Teneguia_-_4.jpg",
  },
  {
    id: "stop-2",
    title: "Mirador el Time",
    category: "Punkt widokowy",
    area: "Tijarafe",
    visitTime: "35–45 min",
    highlight: "Jeden z najszerszych widoków na Dolinę Aridane i plantacje bananowców.",
    description:
      "Po erupcji z 2021 r. mirador stał się jednym z najlepszych miejsc do zrozumienia skali zmian w krajobrazie zachodniej części wyspy.",
    tip: "Najpiękniej bywa tu późnym popołudniem, gdy światło miękko przechodzi przez dolinę.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mirador%20del%20time%20la%20Palma.jpg",
    creditAuthor: "Luc Viatour (Wikimedia Commons)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Mirador_del_time_la_Palma.jpg",
  },
  {
    id: "stop-3",
    title: "Mirador de Porís de Candelaria",
    category: "Punkt widokowy",
    area: "Tijarafe",
    visitTime: "45–60 min",
    highlight: "Widok na unikalny osiedlowy zakątek ukryty pod ogromnym klifem i skalnym nawisem.",
    description:
      "To jedno z najbardziej charakterystycznych miejsc La Palmy — mała osada rybacka wygląda jak wciśnięta między ocean a pionową ścianę skał.",
    tip: "Dojazd i zejście bywają wymagające; zachowaj ostrożność na stromych odcinkach.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Por%C3%ADs%20de%20Candelaria%2C%20La%20Palma.jpg",
    creditAuthor: "Pablosievert (Wikimedia Commons)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Por%C3%ADs_de_Candelaria,_La_Palma.jpg",
  },
  {
    id: "stop-4",
    title: "Mirador de Los Dragos",
    category: "Punkt widokowy",
    area: "Puntagorda",
    visitTime: "25–35 min",
    highlight: "Naturalna scena z charakterystycznymi smoczymi drzewami (dracaena drago).",
    description:
      "Smocze drzewa są ikoną Wysp Kanaryjskich, a tutejszy punkt to świetne miejsce na krótką przerwę i zdjęcia północno-zachodniego wybrzeża.",
    tip: "Przy gorszej pogodzie wiatr bywa silny — dobrze mieć lekką kurtkę.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Palma%20-%20Puntagorda%20-%20El%20Roque%20-%20LP-1%20-%20Mirador%20de%20los%20Dragos%20-%20Dracaena%20drago%2007%20ies.jpg",
    creditAuthor: "Frank Vincentz (Wikimedia Commons)",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:La_Palma_-_Puntagorda_-_El_Roque_-_LP-1_-_Mirador_de_los_Dragos_-_Dracaena_drago_07_ies.jpg",
  },
  {
    id: "stop-5",
    title: "Puerto de Puntagorda",
    category: "Natura i relaks",
    area: "Puntagorda",
    visitTime: "60–90 min",
    highlight: "Niewielki port i naturalne kąpieliska wśród lawowych skał.",
    description:
      "Miejsce słynie ze stromego zejścia i klimatu małej przystani; to dobry punkt na spokojny odpoczynek w trakcie intensywnej trasy.",
    tip: "Jeśli planujesz zejście i powrót po schodach, zostaw więcej czasu i zabierz wodę.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Descent%20to%20the%20harbour%20of%20Puerto%20de%20Puntagorda%2C%20La%20Palma%2C%20Canary%20Islands%2C%202015%20-%20panoramio.jpg",
    creditAuthor: "Jarek Prokop (Wikimedia Commons)",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Descent_to_the_harbour_of_Puerto_de_Puntagorda,_La_Palma,_Canary_Islands,_2015_-_panoramio.jpg",
  },
  {
    id: "stop-6",
    title: "Mirador el Topo",
    category: "Punkt widokowy",
    area: "Garafía / El Tablado",
    visitTime: "25–35 min",
    highlight: "Surowe klify północnej La Palmy i rozległe panoramy oceaniczne.",
    description:
      "Mirador ulokowany w dzikiej części wyspy, gdzie krajobraz jest mniej zurbanizowany i pokazuje najbardziej naturalną stronę La Palmy.",
    tip: "Na tej części trasy warto tankować wcześniej — infrastruktura jest rzadsza niż na południu.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/El%20Tablado%2C%20La%20Palma%2C%20looking%20upthe%20barranco.jpg",
    creditAuthor: "Gerda Arendt (Wikimedia Commons, CC0)",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:El_Tablado,_La_Palma,_looking_upthe_barranco.jpg",
  },
  {
    id: "stop-7",
    title: "Mirador de La Tosca",
    category: "Punkt widokowy",
    area: "Barlovento",
    visitTime: "20–30 min",
    highlight: "Krótki postój z szeroką perspektywą na zieloną, północno-wschodnią część wyspy.",
    description:
      "Punkt często pojawia się na trasach objazdowych dzięki łatwemu dojazdowi i dobremu miejscu na zdjęcia bez długiego trekkingu.",
    tip: "To świetny przystanek techniczny przed dalszym odcinkiem do La Fajany i Los Tilos.",
    image: "https://assets.la-palma.travel/uploads/2015/03/barlovento-la-palma-la-tosca-668x332.jpg",
    creditAuthor: "La Palma Travel",
    creditUrl: "https://en.la-palma.travel/point-of-interest/mirador-de-la-tosca",
  },
  {
    id: "stop-8",
    title: "Piscinas de La Fajana",
    category: "Natura i relaks",
    area: "Barlovento",
    visitTime: "45–75 min",
    highlight: "Naturalne baseny oceaniczne osłonięte od fali i świetne na odpoczynek.",
    description:
      "La Fajana to jedno z najpopularniejszych miejsc kąpielowych na północy wyspy — idealne na przerwę między punktami widokowymi.",
    tip: "Przed wejściem do wody sprawdź aktualny stan morza i oznaczenia bezpieczeństwa.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Palma%20-%20La%20Fajana%20-%2002.jpg",
    creditAuthor: "Xosema (Wikimedia Commons)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:La_Palma_-_La_Fajana_-_02.jpg",
  },
  {
    id: "stop-9",
    title: "Cascada De Los Tilos",
    category: "Natura i trekking",
    area: "San Andrés y Sauces",
    visitTime: "60–100 min",
    highlight: "Krótki, efektowny trekking do wodospadu w laurylowym lesie biosfery.",
    description:
      "Los Tilos to jeden z najcenniejszych przyrodniczo obszarów La Palmy. Trasa do wodospadu prowadzi przez zielony, wilgotny i bardzo fotogeniczny teren.",
    tip: "Nawierzchnia bywa śliska; przydadzą się buty z dobrą przyczepnością.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Barranco%20del%20Agua%20%E2%80%93%20Cascada%20de%20Los%20Tilos.jpg",
    creditAuthor: "H. Zell (Wikimedia Commons)",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Barranco_del_Agua_%E2%80%93_Cascada_de_Los_Tilos.jpg",
  },
  {
    id: "stop-10",
    title: "Playa de Nogales",
    category: "Natura i plaża",
    area: "Puntallana",
    visitTime: "45–70 min",
    highlight: "Szeroka plaża z ciemnym piaskiem i widowiskowymi klifami.",
    description:
      "Jedno z najbardziej fotogenicznych wybrzeży na wyspie. Miejsce doceniane za surowy krajobraz, ale wymagające ostrożności przy wodzie.",
    tip: "Silne prądy to norma — traktuj kąpiel jako opcję tylko przy bardzo dobrych warunkach.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Playa%20de%20Nogales%2C%20La%20Palma%2C%20overview.jpg",
    creditAuthor: "Gerda Arendt (Wikimedia Commons, CC0)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Playa_de_Nogales,_La_Palma,_overview.jpg",
  },
  {
    id: "stop-11",
    title: "Real Santuario de Nuestra Señora de las Nieves",
    category: "Historia i kultura",
    area: "Santa Cruz de La Palma",
    visitTime: "35–50 min",
    highlight: "Historyczne sanktuarium patronki wyspy z bogatym dziedzictwem religijnym.",
    description:
      "Świątynia to ważny punkt kultu i tradycji La Palmy. Stanowi ciekawy kontrast wobec naturalnych atrakcji na trasie.",
    tip: "W środku zachowaj spokojny strój i tempo zwiedzania — to aktywne miejsce kultu.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Real%20Santuario%20Insular%20de%20Nuestra%20Se%C3%B1ora%20de%20las%20Nieves%20-%20La%20Palma.jpg",
    creditAuthor: "Perriquito (Wikimedia Commons)",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Real_Santuario_Insular_de_Nuestra_Se%C3%B1ora_de_las_Nieves_-_La_Palma.jpg",
  },
  {
    id: "stop-12",
    title: "Santa Cruz de la Palma",
    category: "Miasto i spacer",
    area: "Stolica wyspy",
    visitTime: "90–140 min",
    highlight: "Kolonialna zabudowa, nadmorska promenada i historyczne centrum.",
    description:
      "Stolica wyspy świetnie zamyka intensywny dzień: można tu połączyć spacer po starówce z kolacją i widokiem na ocean.",
    tip: "Warto zaplanować ten punkt na wieczór, gdy miasto jest przyjemnie oświetlone.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Santa%20Cruz%20de%20La%20Palma%202019-04.jpg",
    creditAuthor: "Hans-Peter Balfanz (Wikimedia Commons)",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Santa_Cruz_de_La_Palma_2019-04.jpg",
  },
  {
    id: "stop-13",
    title: "La Palma & Teneguía Princess",
    category: "Baza noclegowa",
    area: "Fuencaliente",
    visitTime: "zakończenie dnia",
    highlight: "Powrót do bazy i podsumowanie objazdu wyspy.",
    description:
      "Wieczorem możesz zaplanować spokojny relaks i przygotowanie planu na kolejny dzień — np. trekking lub obserwacje nocnego nieba.",
    tip: "Jeśli chcesz sfotografować nocne niebo, sprawdź zachmurzenie i fazę księżyca.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lava%20-%20Volc%C3%A1n%20Tenegu%C3%ADa%20-%20La%20Palma%2002.jpg",
    creditAuthor: "H. Zell (Wikimedia Commons)",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Lava_-_Volc%C3%A1n_Tenegu%C3%ADa_-_La_Palma_02.jpg",
  },
];

const defaultEmbed =
  '<iframe style="border:none" src="https://mapy.com/s/lukobebusa" width="700" height="466" frameborder="0"></iframe>';
const embedStorageKey = "la-palma-custom-map-embed";
const allowedEmbedHosts = [
  "mapy.com",
  "www.mapy.com",
  "google.com",
  "www.google.com",
  "maps.google.com",
  "google.pl",
  "maps.google.pl",
  "google.es",
  "maps.google.es",
];

const routeList = document.getElementById("route-list");
const stopsGrid = document.getElementById("stops-grid");
const filters = document.getElementById("filters");
const mapFrame = document.getElementById("map-frame");
const embedInput = document.getElementById("embed-input");
const applyEmbedBtn = document.getElementById("apply-embed");
const resetEmbedBtn = document.getElementById("reset-embed");
const embedMessage = document.getElementById("embed-message");

let activeCategory = "Wszystkie";

function createRouteButton(stop, index) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = "route-button";
  button.type = "button";
  button.dataset.target = stop.id;
  button.innerHTML = `
    <span class="route-button__index">${index + 1}</span>
    <span class="route-button__title">${stop.title}</span>
  `;

  button.addEventListener("click", () => {
    const target = document.getElementById(stop.id);
    if (!target) {
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveRouteButton(stop.id);
  });

  li.append(button);
  return li;
}

function createStopCard(stop, index) {
  const article = document.createElement("article");
  article.className = "stop-card";
  article.id = stop.id;
  article.dataset.category = stop.category;
  article.innerHTML = `
    <figure class="stop-card__media">
      <img src="${stop.image}" alt="${stop.title}" loading="lazy" />
    </figure>
    <div class="stop-card__body">
      <div class="stop-card__top">
        <h3 class="stop-card__title">${index + 1}. ${stop.title}</h3>
        <span class="stop-card__tag">${stop.category}</span>
      </div>
      <div class="meta">
        <span>📍 ${stop.area}</span>
        <span>⏱ ${stop.visitTime}</span>
      </div>
      <p><strong>${stop.highlight}</strong></p>
      <p>${stop.description}</p>
      <p class="stop-card__tip">Wskazówka: ${stop.tip}</p>
      <p class="credit">Zdjęcie: ${stop.creditAuthor} • <a href="${stop.creditUrl}" target="_blank" rel="noreferrer noopener">źródło</a></p>
    </div>
  `;

  return article;
}

function setActiveRouteButton(targetId) {
  const buttons = routeList.querySelectorAll(".route-button");
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === targetId);
  });
}

function renderRouteAndCards() {
  routeList.innerHTML = "";
  stopsGrid.innerHTML = "";

  stops.forEach((stop, index) => {
    routeList.append(createRouteButton(stop, index));
    stopsGrid.append(createStopCard(stop, index));
  });

  setActiveRouteButton(stops[0].id);
}

function renderFilters() {
  const categories = ["Wszystkie", ...new Set(stops.map((stop) => stop.category))];
  filters.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("is-active", category === activeCategory);

    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      applyFilter();
    });

    filters.append(button);
  });
}

function applyFilter() {
  const cards = stopsGrid.querySelectorAll(".stop-card");
  cards.forEach((card) => {
    const matches =
      activeCategory === "Wszystkie" || card.dataset.category === activeCategory;
    card.classList.toggle("is-hidden", !matches);
  });
}

function attachScrollSpy() {
  const cards = Array.from(stopsGrid.querySelectorAll(".stop-card"));
  if (!cards.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        .forEach((entry) => {
          setActiveRouteButton(entry.target.id);
        });
    },
    {
      root: null,
      rootMargin: "-10% 0px -55% 0px",
      threshold: [0.2, 0.4, 0.7],
    }
  );

  cards.forEach((card) => observer.observe(card));
}

function sanitizeEmbed(rawEmbed) {
  if (!rawEmbed || !rawEmbed.includes("<iframe")) {
    return null;
  }

  const parser = new DOMParser();
  const parsed = parser.parseFromString(rawEmbed, "text/html");
  const iframe = parsed.querySelector("iframe");
  if (!iframe) {
    return null;
  }

  const src = iframe.getAttribute("src") || "";
  if (!src.startsWith("https://")) {
    return null;
  }

  let hostname;
  try {
    hostname = new URL(src).hostname;
  } catch {
    return null;
  }

  const isAllowedHost = allowedEmbedHosts.some(
    (host) => hostname === host || hostname.endsWith(`.${host}`)
  );
  if (!isAllowedHost) {
    return null;
  }

  iframe.setAttribute("style", "border:none");
  iframe.setAttribute("width", "700");
  iframe.setAttribute("height", "466");
  iframe.setAttribute("frameborder", "0");

  return iframe.outerHTML;
}

function loadEmbedFromStorage() {
  const saved = localStorage.getItem(embedStorageKey);
  const validated = sanitizeEmbed(saved || "") || defaultEmbed;
  mapFrame.innerHTML = validated;
  embedInput.value = validated;
}

function setEmbedMessage(text, isError = false) {
  embedMessage.textContent = text;
  embedMessage.style.color = isError ? "#b42318" : "#4d6484";
}

function attachMapEditor() {
  applyEmbedBtn.addEventListener("click", () => {
    const candidate = sanitizeEmbed(embedInput.value.trim());
    if (!candidate) {
      setEmbedMessage(
        "Nie udało się zastosować embedu. Wklej poprawny kod iframe z bezpiecznym adresem (mapy.com lub Google Maps).",
        true
      );
      return;
    }

    mapFrame.innerHTML = candidate;
    embedInput.value = candidate;
    localStorage.setItem(embedStorageKey, candidate);
    setEmbedMessage("Embed zaktualizowany i zapisany lokalnie.");
  });

  resetEmbedBtn.addEventListener("click", () => {
    mapFrame.innerHTML = defaultEmbed;
    embedInput.value = defaultEmbed;
    localStorage.removeItem(embedStorageKey);
    setEmbedMessage("Przywrócono domyślną mapę trasy.");
  });
}

function renderDate() {
  const today = document.getElementById("today");
  if (!today) {
    return;
  }
  today.textContent = new Date().toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

renderRouteAndCards();
renderFilters();
applyFilter();
attachScrollSpy();
loadEmbedFromStorage();
attachMapEditor();
renderDate();
