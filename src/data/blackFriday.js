// src/data/blackFriday.js
// One place to edit Black Friday dates + offers.
// Used by: sections/BlackFridayBanner.jsx (Home) and sections/BlackFridaySpecials.jsx (Promo).

// Dates are local time. Before START the banner shows "starts ...";
// after END everything hides automatically.
export const BF_START = new Date(2026, 10, 22, 0, 0, 0); // Sun, Nov 22, 2026
export const BF_END = new Date(2026, 10, 30, 23, 59, 59); // Mon, Nov 30, 2026

export const BF_START_LABEL = "Sunday, Nov 22";
export const BF_END_LABEL = "Monday, Nov 30";
export const BF_START_SHORT = "Nov 22";
export const BF_END_SHORT = "Nov 30";

export function getBlackFridayStatus(now = new Date()) {
  if (now > BF_END) return "ended";
  if (now < BF_START) return "upcoming";
  return "live";
}

export const TBL_PHONE_DISPLAY = "(623) 213-8996";
export const TBL_PHONE_TEL = "tel:+16232138996";
export const TBL_SMS = "sms:+16232138996";
export const TBL_GIFT_CARD_URL =
  "https://clients.mangomint.com/gift-cards/tbeautylounge";

/* ---------- T Beauty Lounge ---------- */

export const TBL_DOORBUSTER = {
  eyebrow: "DOORBUSTER",
  title: "Give One, Keep One",
  highlight: "Buy a $250 gift card, get a $75 voucher for yourself",
  description:
    "Treat someone you love to a $250 gift card, and we'll give you a $75 voucher to keep.",
  note: "Voucher must be used by June 2027.",
};

export const TBL_PACKAGES = [
  {
    id: "microneedling-3-plus-1",
    eyebrow: "MICRONEEDLING",
    title: 'The "3+1" Microneedling Package',
    highlight: "$1,200",
    regular: "$1,600",
    description:
      "Buy a 3-session microneedling package and get your 4th session free.",
  },
  {
    id: "unlimited-laser",
    eyebrow: "LASER HAIR REMOVAL",
    title: "1-Year Unlimited Small Area Laser Pass",
    highlight: "$600",
    regular: "$756",
    description:
      "Unlimited small-area laser hair removal sessions for a full year.",
  },
  {
    id: "glow-now-glow-later",
    eyebrow: "HYDRODIAMOND",
    title: '"Glow Now, Glow Later" Facial Pack',
    highlight: "$640",
    regular: "$960",
    description:
      "6 Glass Skin Express HydroDiamond facials for the price of 4.",
  },
];

export const TBL_PACKAGE_TERMS = [
  "Packages must be paid in full at purchase. No payment plans.",
  "All Black Friday packages must be activated by March 31, 2027.",
];

/* ---------- Teresa / TAI Longevity & Aesthetics ---------- */

export const TERESA_SPECIALS = [
  {
    title: "BOGO Under-Eye PRF with Filler Combo",
    highlight: "$900",
  },
  {
    title: "IV Muse Cells & Exosomes",
    highlight: "$4,500",
    savings: "$2,000 off",
  },
  {
    title: "Filler",
    highlight: "Buy 2, Get 1 Free",
    savings: "$800 value",
  },
  {
    title: "Daxxify, 100 Units",
    highlight: "$675",
    savings: "$225 off",
  },
  {
    title: "Lip Filler",
    highlight: "$500",
    savings: "$175 off",
  },
  {
    title: "TAI Aesthetics Skincare",
    highlight: "25% off",
  },
];
