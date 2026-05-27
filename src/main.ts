type ShopAction = "prev" | "next" | "wishlist" | "cart" | "checkout";
type ShopMode = "camera" | "pointer";
type Currency = "NGN" | "USD";

interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  price: number;
  currency?: Currency;
  signal: string;
  description: string;
  image: string;
  variants: string[];
}

interface CartItem {
  productId: string;
  variant: string;
}

interface HandState {
  x: number;
  y: number;
  visible: boolean;
}

const products: Product[] = [
  {
    id: "highfashion-black-tracksuit",
    brand: "Highfashion",
    name: "HF Black Track Set",
    category: "Tracksuit",
    price: 286.96,
    currency: "USD",
    signal: "Full look",
    description: "A black Highfashion zip jacket and matching track pants with tonal patterning and clean studio styling.",
    image: "./assets/highfashion-black-tracksuit.jpg",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "highfashion-blue-denim-set",
    brand: "Highfashion",
    name: "HF Blue Denim Set",
    category: "Denim set",
    price: 956.53,
    currency: "USD",
    signal: "Short sleeve set",
    description: "A light blue monogram denim shirt and matching shorts set with a boxy street-luxury silhouette.",
    image: "./assets/highfashion-blue-denim-set.jpg",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "highfashion-ice-track-set",
    brand: "Highfashion",
    name: "HF Ice Track Set",
    category: "Tracksuit",
    price: 286.96,
    currency: "USD",
    signal: "Ice blue colorway",
    description: "A pale blue technical tracksuit with black geometric panels, zip jacket, and relaxed drawstring pants.",
    image: "./assets/highfashion-ice-track-set.jpg",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "highfashion-distressed-knit",
    brand: "Highfashion",
    name: "HF Distressed Knit",
    category: "Knitwear",
    price: 239.13,
    currency: "USD",
    signal: "Studded detail",
    description: "A grey distressed knit with metal accents, raw edge finishing, and black leather-look trouser styling.",
    image: "./assets/highfashion-distressed-knit.jpg",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "outterspace-black-zip-shirt",
    brand: "Outterspace Luxury",
    name: "Outterspace Floral Zip Shirt",
    category: "Zip shirt",
    price: 313600,
    signal: "Dept. of Floral",
    description: "A black short-sleeve zip shirt with Outterspace chest typography and a clean oversized luxury drape.",
    image: "./assets/outterspace-black-zip-shirt.png",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "outterspace-portrait-set",
    brand: "Outterspace Luxury",
    name: "Outterspace Portrait Set",
    category: "Set",
    price: 272000,
    signal: "Art print co-ord",
    description: "A cream button shirt and matching shorts set with surreal portrait artwork and Outterspace socks styling.",
    image: "./assets/outterspace-portrait-set.png",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "outterspace-lobster-plaid-set",
    brand: "Outterspace Luxury",
    name: "Mr Crab Plaid Set",
    category: "Set",
    price: 302400,
    signal: "Lobster graphic",
    description: "A blue plaid long-sleeve shirt and shorts set with bold lobster artwork and Outterspace side branding.",
    image: "./assets/outterspace-lobster-plaid-set.png",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "outterspace-pink-crab-shirt",
    brand: "Outterspace Luxury",
    name: "Pink Mr Crab Layer Shirt",
    category: "Shirt",
    price: 155000,
    signal: "Layered sleeve",
    description: "A pink gingham layered shirt with oversized sleeves, lobster front graphic, and raw hem detailing.",
    image: "./assets/outterspace-pink-crab-shirt.png",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "ylcollectives-studios-rugby",
    brand: "YLCollectives",
    name: "YL Studios Rugby",
    category: "Rugby top",
    price: 420000,
    signal: "YL Racing patch",
    description: "A black rugby pullover with a white collar, embroidered patches, and bold yellow YL Studios lettering.",
    image: "./assets/ylcollectives-studios-rugby.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "ylcollectives-cream-crewneck",
    brand: "YLCollectives",
    name: "YL Cream Crewneck",
    category: "Sweatshirt",
    price: 300000,
    signal: "Clean logo piece",
    description: "A cream crewneck with black rib panels, red shoulder stitching, and a minimal YL chest mark.",
    image: "./assets/ylcollectives-cream-crewneck.png",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "ylcollectives-varsity-jacket",
    brand: "YLCollectives",
    name: "YL Varsity Jacket",
    category: "Outerwear",
    price: 750000,
    signal: "Club jacket",
    description: "A burgundy and navy varsity jacket with oversized YL patches, striped ribbing, and star detailing.",
    image: "./assets/ylcollectives-varsity-jacket.png",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "ylcollectives-flame-cap",
    brand: "YLCollectives",
    name: "YL Flame Cap",
    category: "Headwear",
    price: 208500,
    signal: "Embroidered flames",
    description: "A blue cap with red and yellow flame embroidery, distressed brim details, and a yellow YL front logo.",
    image: "./assets/ylcollectives-flame-cap.png",
    variants: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "zttw-ambitions-sleeveless",
    brand: "ZTTWCollective",
    name: "ZTTW Ambitions Sleeveless Tee",
    category: "Sleeveless tee",
    price: 240000,
    signal: "Ambitions graphic",
    description: "A black sleeveless tee with a bold AMBITIONS front graphic and championship photo print.",
    image: "./assets/zttw-ambitions-sleeveless.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "zttw-pattern-long-sleeve",
    brand: "ZTTWCollective",
    name: "ZTTW Pattern Long Sleeve",
    category: "Long sleeve",
    price: 375000,
    signal: "Layered print",
    description: "A dark patterned long-sleeve top with green, rust, black, and white graphic movement.",
    image: "./assets/zttw-pattern-long-sleeve.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "zttw-26-polo",
    brand: "ZTTWCollective",
    name: "ZTTW 26 Patch Polo",
    category: "Polo",
    price: 405000,
    signal: "Patchwork panels",
    description: "A color-block long-sleeve polo with red, cream, green, blue panels and a jeweled 26 chest patch.",
    image: "./assets/zttw-26-polo.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "zttw-blue-varsity-jacket",
    brand: "ZTTWCollective",
    name: "ZTTW Blue Varsity Jacket",
    category: "Outerwear",
    price: 720000,
    signal: "Leather sleeve jacket",
    description: "A white and blue varsity jacket with green ZTTW chest artwork and oversized sleeve lettering.",
    image: "./assets/zttw-blue-varsity-jacket.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "gocrazy-jalamia",
    brand: "GoCrazy",
    name: "Jalamia",
    category: "Robe",
    price: 450000,
    signal: "Crystal studded",
    description: "A long black hooded jalamia covered in bright crystal detailing with a GoCrazy mascot chest patch.",
    image: "./assets/gocrazy-jalamia.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "gocrazy-bombe-paillette-leather-jacket",
    brand: "GoCrazy",
    name: "BOMBE À PAILLETTE LEATHER JACKET",
    category: "Leather jacket",
    price: 1120000,
    signal: "Hooded leather",
    description: "A cropped black hooded leather jacket with studded GoCrazy lettering and a polished oversized fit.",
    image: "./assets/gocrazy-bombe-paillette-leather-jacket.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "gocrazy-opium-spandex-u6",
    brand: "GoCrazy",
    name: "OPIUM SPANDEX U6",
    category: "Spandex top",
    price: 320000,
    signal: "Mascot hood",
    description: "A fitted black spandex hooded top with a deep neckline, studded hood, and GoCrazy mascot chest mark.",
    image: "./assets/gocrazy-opium-spandex-u6.webp",
    variants: ["S", "M", "L", "XL"]
  },
  {
    id: "gocrazy-kings-mascot-denim-jorts",
    brand: "GoCrazy",
    name: "KINGS MASCOT DENIM JORTS",
    category: "Denim jorts",
    price: 640000,
    signal: "Mascot denim",
    description: "Black denim jorts with blue GoCrazy sequin artwork, mascot pocket graphics, and contrast stitching.",
    image: "./assets/gocrazy-kings-mascot-denim-jorts.webp",
    variants: ["S", "M", "L", "XL"]
  }
];

const brands = ["Highfashion", "Outterspace Luxury", "YLCollectives", "ZTTWCollective", "GoCrazy"];

const actions: Record<ShopAction, { label: string; x: -1 | 0 | 1; y: -1 | 0 | 1 }> = {
  prev: { label: "Previous", x: -1, y: 0 },
  next: { label: "Next", x: 1, y: 0 },
  wishlist: { label: "Wishlist", x: 0, y: -1 },
  cart: { label: "Add to cart", x: 0, y: 1 },
  checkout: { label: "Checkout", x: 1, y: 1 }
};

const HOLD_DURATION = 780;
const ACTION_COOLDOWN = 420;
const SWIPE_MIN_DISTANCE = 0.26;
const SWIPE_MAX_VERTICAL_DRIFT = 0.16;
const SWIPE_MAX_DURATION = 720;
const SWIPE_COOLDOWN = 620;

const state: {
  index: number;
  variantIndex: number;
  cart: CartItem[];
  wishlist: Set<string>;
  mode: ShopMode;
  activeAction: ShopAction | null;
  holdStartedAt: number;
  holdProgress: number;
  holdCompletedAction: ShopAction | null;
  lastActionAt: number;
  swipeStart: { x: number; y: number; time: number } | null;
  lastSwipeAt: number;
  hand: HandState;
  checkoutComplete: boolean;
} = {
  index: 0,
  variantIndex: 0,
  cart: [],
  wishlist: new Set(),
  mode: "pointer",
  activeAction: null,
  holdStartedAt: 0,
  holdProgress: 0,
  holdCompletedAction: null,
  lastActionAt: 0,
  swipeStart: null,
  lastSwipeAt: 0,
  hand: { x: 0.5, y: 0.5, visible: false },
  checkoutComplete: false
};

const els = {
  stage: required<HTMLElement>("#gestureStage"),
  video: required<HTMLVideoElement>("#cameraFeed"),
  canvas: required<HTMLCanvasElement>("#handCanvas"),
  cursor: required<HTMLElement>("#handCursor"),
  card: required<HTMLElement>("#productCard"),
  image: required<HTMLImageElement>("#productImage"),
  category: required<HTMLElement>("#productCategory"),
  index: required<HTMLElement>("#productIndex"),
  name: required<HTMLElement>("#productName"),
  description: required<HTMLElement>("#productDescription"),
  price: required<HTMLElement>("#productPrice"),
  signal: required<HTMLElement>("#productSignal"),
  variants: required<HTMLElement>("#variantRow"),
  status: required<HTMLElement>("#statusText"),
  cameraButton: required<HTMLButtonElement>("#cameraButton"),
  fallbackButton: required<HTMLButtonElement>("#fallbackButton"),
  zones: [...document.querySelectorAll<HTMLElement>(".gesture-zone")],
  brandRail: required<HTMLElement>("#brandRail"),
  cartItems: required<HTMLElement>("#cartItems"),
  cartTotal: required<HTMLElement>("#cartTotal"),
  checkoutButton: required<HTMLButtonElement>("#checkoutButton"),
  confirmation: required<HTMLElement>("#confirmation")
};

const ctx = els.canvas.getContext("2d");
let handLandmarker: any;
let cameraStream: MediaStream | undefined;
let animationFrame = 0;
let holdFrame = 0;

function required<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
}

function currentProduct(): Product {
  return products[state.index];
}

function formatCurrency(value: number, currency: Currency = "NGN"): string {
  const locale = currency === "USD" ? "en-US" : "en-NG";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function renderProduct(direction?: "next" | "prev"): void {
  const product = currentProduct();
  if (direction) {
    els.card.classList.add(direction === "next" ? "shifting-next" : "shifting-prev");
    window.setTimeout(() => els.card.classList.remove("shifting-next", "shifting-prev"), 180);
  }

  els.image.src = product.image;
  els.image.alt = product.name;
  els.category.textContent = product.category;
  els.index.textContent = `${product.brand} · ${state.index + 1} / ${products.length}`;
  els.name.textContent = product.name;
  els.description.textContent = product.description;
  els.price.textContent = formatCurrency(product.price, product.currency);
  els.signal.textContent = product.signal;
  els.variants.innerHTML = product.variants
    .map((variant, index) => `<button class="${index === state.variantIndex ? "active" : ""}" data-variant="${index}" type="button">${variant}</button>`)
    .join("");
  els.variants.querySelectorAll<HTMLButtonElement>("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.variantIndex = Number(button.dataset.variant);
      renderProduct();
    });
  });
  renderBrands();
}

function renderBrands(): void {
  els.brandRail.innerHTML = brands
    .map((brand) => {
      const count = products.filter((product) => product.brand === brand).length;
      const active = currentProduct().brand === brand ? "active" : "";
      return `<button class="${active}" data-brand="${brand}" type="button"><span>${brand}</span><strong>${count}</strong></button>`;
    })
    .join("");
  els.brandRail.querySelectorAll<HTMLButtonElement>("button").forEach((button) => {
    button.addEventListener("click", () => {
      const targetBrand = button.dataset.brand;
      const index = products.findIndex((product) => product.brand === targetBrand);
      if (index >= 0) {
        state.index = index;
        state.variantIndex = 0;
        renderProduct();
        setStatus(`${targetBrand} selected.`);
      }
    });
  });
}

function renderCart(): void {
  if (!state.cart.length) {
    els.cartItems.innerHTML = `<div class="cart-empty">Hold Add to cart to build an order. When the cart has items, hold Checkout to confirm without touching the product stage.</div>`;
  } else {
    els.cartItems.innerHTML = state.cart
      .map((item) => {
        const product = products.find((candidate) => candidate.id === item.productId);
        if (!product) return "";
        return `<div class="cart-item"><img src="${product.image}" alt=""><div><strong>${product.name}</strong><span>${product.brand} · ${item.variant} · ${formatCurrency(product.price, product.currency)}</span></div></div>`;
      })
      .join("");
  }

  const totals = state.cart.reduce<Record<Currency, number>>((sum, item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    if (!product) return sum;
    const currency = product.currency ?? "NGN";
    sum[currency] = (sum[currency] ?? 0) + product.price;
    return sum;
  }, {} as Record<Currency, number>);
  const totalText = Object.entries(totals)
    .map(([currency, total]) => formatCurrency(total, currency as Currency))
    .join(" + ");
  els.cartTotal.textContent = totalText || formatCurrency(0);
  els.checkoutButton.disabled = state.cart.length === 0;
}

function setStatus(message: string): void {
  els.status.textContent = message;
}

function setMode(mode: ShopMode): void {
  state.mode = mode;
  els.cameraButton.classList.toggle("active", mode === "camera");
  els.fallbackButton.classList.toggle("active", mode === "pointer");
}

function resizeCanvas(): void {
  const ratio = window.devicePixelRatio || 1;
  els.canvas.width = Math.round(window.innerWidth * ratio);
  els.canvas.height = Math.round(window.innerHeight * ratio);
  ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function actionFromPoint(x: number, y: number): ShopAction | null {
  const edge = 0.24;
  if (x < edge && y > 0.26 && y < 0.74) return "prev";
  if (x > 1 - edge && y > 0.26 && y < 0.74) return "next";
  if (y < edge && x > 0.28 && x < 0.72) return "wishlist";
  if (y > 0.72 && x > 0.72) return "checkout";
  if (y > 1 - edge && x > 0.28 && x < 0.68) return "cart";
  return null;
}

function updateHand(x: number, y: number, visible = true): void {
  const now = performance.now();
  state.hand = { x: clamp(x, 0, 1), y: clamp(y, 0, 1), visible };
  const rect = els.stage.getBoundingClientRect();
  const px = state.hand.x * rect.width;
  const py = state.hand.y * rect.height;
  els.cursor.style.left = `${px}px`;
  els.cursor.style.top = `${py}px`;
  els.cursor.style.opacity = visible ? "1" : "0.38";

  const action = visible ? actionFromPoint(state.hand.x, state.hand.y) : null;
  trackSwipe(state.hand, action, now);
  setActiveAction(action);
  updateHold(action, now);
}

function setActiveAction(action: ShopAction | null): void {
  if (state.activeAction !== action) {
    state.holdStartedAt = 0;
    state.holdCompletedAction = null;
    setHoldProgress(0);
  }
  state.activeAction = action;
  els.cursor.classList.toggle("locked", Boolean(action));
  els.zones.forEach((zone) => zone.classList.toggle("active", zone.dataset.action === action));
}

function updateHold(action: ShopAction | null, now: number): void {
  if (!action) {
    state.holdStartedAt = 0;
    state.holdCompletedAction = null;
    setHoldProgress(0);
    stopHoldTick();
    return;
  }

  if (state.holdCompletedAction === action) {
    setHoldProgress(0);
    return;
  }

  if (now - state.lastActionAt < ACTION_COOLDOWN) {
    setHoldProgress(0);
    scheduleHoldTick();
    return;
  }

  if (!state.holdStartedAt) {
    state.holdStartedAt = now;
    setHoldProgress(0.02);
    scheduleHoldTick();
    return;
  }

  const progress = clamp((now - state.holdStartedAt) / HOLD_DURATION, 0, 1);
  setHoldProgress(progress);

  if (progress >= 1) {
    performAction(action);
    state.holdCompletedAction = action;
    state.holdStartedAt = 0;
    setHoldProgress(0);
  } else {
    scheduleHoldTick();
  }
}

function scheduleHoldTick(): void {
  if (holdFrame) return;
  holdFrame = requestAnimationFrame(() => {
    holdFrame = 0;
    if (state.activeAction) {
      updateHold(state.activeAction, performance.now());
    }
  });
}

function stopHoldTick(): void {
  if (!holdFrame) return;
  cancelAnimationFrame(holdFrame);
  holdFrame = 0;
}

function setHoldProgress(progress: number): void {
  state.holdProgress = progress;
  const degrees = `${Math.round(progress * 360)}deg`;
  els.cursor.style.setProperty("--hold-degrees", degrees);
  els.cursor.style.setProperty("--hold-progress", progress.toFixed(3));
  els.zones.forEach((zone) => {
    const isActive = zone.dataset.action === state.activeAction;
    zone.style.setProperty("--hold-degrees", isActive ? degrees : "0deg");
  });
}

function trackSwipe(hand: HandState, action: ShopAction | null, now: number): void {
  if (!hand.visible || action) {
    state.swipeStart = null;
    return;
  }

  const current = { x: hand.x, y: hand.y, time: now };
  if (!state.swipeStart || now - state.swipeStart.time > SWIPE_MAX_DURATION) {
    state.swipeStart = current;
    return;
  }

  const dx = current.x - state.swipeStart.x;
  const dy = Math.abs(current.y - state.swipeStart.y);
  const canSwipe = Math.abs(dx) >= SWIPE_MIN_DISTANCE
    && dy <= SWIPE_MAX_VERTICAL_DRIFT
    && now - state.lastSwipeAt > SWIPE_COOLDOWN;

  if (canSwipe) {
    const action: ShopAction = dx < 0 ? "next" : "prev";
    state.lastSwipeAt = now;
    state.swipeStart = current;
    performAction(action);
  }
}

function performAction(action: ShopAction): void {
  state.lastActionAt = performance.now();
  const product = currentProduct();

  if (action === "next" || action === "prev") {
    state.variantIndex = 0;
    state.index = action === "next"
      ? (state.index + 1) % products.length
      : (state.index - 1 + products.length) % products.length;
    renderProduct(action);
    setStatus(`${actions[action].label}: ${currentProduct().name}`);
    return;
  }

  if (action === "wishlist") {
    if (state.wishlist.has(product.id)) {
      state.wishlist.delete(product.id);
      setStatus(`${product.name} removed from wishlist.`);
    } else {
      state.wishlist.add(product.id);
      setStatus(`${product.name} saved to wishlist.`);
    }
    return;
  }

  if (action === "checkout") {
    checkout();
    return;
  }

  const variant = product.variants[state.variantIndex];
  state.cart.push({ productId: product.id, variant });
  state.checkoutComplete = false;
  els.confirmation.hidden = true;
  els.card.classList.add("added");
  window.setTimeout(() => els.card.classList.remove("added"), 180);
  renderCart();
  setStatus(`${product.name} in ${variant} added to cart.`);
}

function checkout(): void {
  if (!state.cart.length) return;
  state.checkoutComplete = true;
  els.confirmation.hidden = false;
  setStatus(`Purchase confirmed for ${state.cart.length} item${state.cart.length === 1 ? "" : "s"}.`);
}

function setupPointerMode(): void {
  const updateFromEvent = (event: PointerEvent | TouchEvent) => {
    if (state.mode !== "pointer") return;
    const point = "touches" in event ? event.touches[0] : event;
    if (!point) return;
    const rect = els.stage.getBoundingClientRect();
    updateHand((point.clientX - rect.left) / rect.width, (point.clientY - rect.top) / rect.height, true);
  };

  els.stage.addEventListener("pointermove", updateFromEvent);
  els.stage.addEventListener("pointerdown", updateFromEvent);
  els.stage.addEventListener("touchmove", updateFromEvent, { passive: true });
  els.stage.addEventListener("pointerleave", () => updateHand(state.hand.x, state.hand.y, false));
  els.stage.addEventListener("touchend", () => updateHand(state.hand.x, state.hand.y, false));
  els.zones.forEach((zone) => {
    zone.addEventListener("pointerdown", (event) => event.stopPropagation());
    zone.addEventListener("mousedown", (event) => event.stopPropagation());
    zone.addEventListener("mouseup", (event) => event.stopPropagation());
    zone.addEventListener("touchstart", (event) => event.stopPropagation(), { passive: true });
    zone.addEventListener("click", (event) => {
      event.stopPropagation();
      const action = zone.dataset.action as ShopAction | undefined;
      if (action && performance.now() - state.lastActionAt > 250) performAction(action);
    });
  });
}

async function startCameraMode(): Promise<void> {
  stopCamera();
  setMode("camera");
  setStatus("Requesting camera permission...");

  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error(`Camera access is unavailable on this page. Open the app from ${location.origin || "http://127.0.0.1:5174"}, not file://.`);
    }
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
      audio: false
    });
    els.video.srcObject = cameraStream;
    await els.video.play();
    els.video.classList.add("live");
  } catch (error) {
    console.error(error);
    setMode("pointer");
    setStatus(cameraErrorMessage(error));
    return;
  }

  setStatus("Camera on. Loading MediaPipe hand tracker...");

  try {
    handLandmarker = handLandmarker ?? await createHandLandmarker();
    setStatus("Hold a gesture zone to select it, or swipe across the stage to browse products.");
    detectHands();
  } catch (error) {
    console.error(error);
    setMode("pointer");
    setStatus("Camera is on, but hand tracking could not load. Pointer mode is ready; check your internet connection for MediaPipe.");
  }
}

async function createHandLandmarker(): Promise<any> {
  const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18");
  const fileset = await vision.FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm"
  );
  const options = {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
      delegate: "GPU"
    },
    runningMode: "VIDEO",
    numHands: 1
  };

  try {
    return await vision.HandLandmarker.createFromOptions(fileset, options);
  } catch (error) {
    console.warn("GPU hand tracker failed; retrying with CPU.", error);
    return await vision.HandLandmarker.createFromOptions(fileset, {
      ...options,
      baseOptions: {
        ...options.baseOptions,
        delegate: "CPU"
      }
    });
  }
}

function cameraErrorMessage(error: unknown): string {
  if (error instanceof DOMException && error.name === "NotAllowedError") {
    return "Camera permission is blocked. Click the camera/lock icon in the address bar, allow camera access for this site, reload, then press Camera again.";
  }
  if (error instanceof DOMException && error.name === "NotFoundError") {
    return "No camera was found on this device. Pointer mode is ready.";
  }
  if (location.protocol === "file:") {
    return "Camera needs a local server. Open the localhost preview URL instead of the file URL.";
  }
  return error instanceof Error ? error.message : "Camera could not start. Pointer mode is ready.";
}

function stopCamera(): void {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = undefined;
  }
  els.video.classList.remove("live");
  els.video.srcObject = null;
  ctx?.clearRect(0, 0, els.canvas.width, els.canvas.height);
}

function detectHands(): void {
  if (state.mode !== "camera" || !handLandmarker || !els.video.videoWidth) return;

  const result = handLandmarker.detectForVideo(els.video, performance.now());
  drawLandmarks(result.landmarks?.[0]);

  if (result.landmarks?.[0]) {
    const indexTip = result.landmarks[0][8];
    const stageRect = els.stage.getBoundingClientRect();
    const x = (1 - indexTip.x) * window.innerWidth;
    const y = indexTip.y * window.innerHeight;
    updateHand((x - stageRect.left) / stageRect.width, (y - stageRect.top) / stageRect.height, true);
  } else {
    updateHand(state.hand.x, state.hand.y, false);
  }

  animationFrame = requestAnimationFrame(detectHands);
}

function drawLandmarks(points?: Array<{ x: number; y: number }>): void {
  if (!ctx) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if (!points) return;

  ctx.strokeStyle = "rgba(101, 246, 255, 0.78)";
  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.lineWidth = 2;

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16],
    [13, 17], [17, 18], [18, 19], [19, 20],
    [0, 17]
  ];

  ctx.beginPath();
  connections.forEach(([a, b]) => {
    ctx.moveTo((1 - points[a].x) * window.innerWidth, points[a].y * window.innerHeight);
    ctx.lineTo((1 - points[b].x) * window.innerWidth, points[b].y * window.innerHeight);
  });
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc((1 - point.x) * window.innerWidth, point.y * window.innerHeight, index === 8 ? 7 : 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

els.cameraButton.addEventListener("click", startCameraMode);
els.fallbackButton.addEventListener("click", () => {
  stopCamera();
  setMode("pointer");
  setStatus("Pointer mode. Hold a zone to select, or swipe across the stage to browse.");
});
els.checkoutButton.addEventListener("click", checkout);
window.addEventListener("resize", resizeCanvas);

resizeCanvas();
setupPointerMode();
setMode("pointer");
renderProduct();
renderCart();
updateHand(0.5, 0.5, true);

export {};
