import { CONTACT_NUMBER } from "@/lib/whatsapp";

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  quickReplies?: string[];
  whatsappCTA?: boolean;
  whatsappMessage?: string;
}

export const WHATSAPP_CONTACT = CONTACT_NUMBER;

export const INITIAL_QUICK_REPLIES = [
  "💄 Lipsticks & Shades",
  "🌸 Perfumes & Oud",
  "🎨 Palettes & Eye Makeup",
  "🎁 Gift / Bridal Box",
  "📦 Order Kaise Karein?",
  "📍 Shop Location",
];

interface BotResponse {
  text: string;
  quickReplies?: string[];
  whatsappCTA?: boolean;
}

export function getBotResponse(input: string): BotResponse {
  const msg = input.toLowerCase().trim();

  // ── Greetings ──────────────────────────────────────────────────────────────
  if (/\b(hi|hello|salam|assalam|hey|aoa|helo|walaikum|good morning|good evening|good afternoon|namaste)\b/.test(msg)) {
    return {
      text: "Assalam-o-Alaikum! 💄✨ Welcome to **AYAN Cosmetics**!\n\nMain hoon **Ayan AI** — aapka personal automated luxury beauty manager.\n\nHamari **100% Authenticity Guarantee** ke sath hum sirf original globally sourced products offer karte hain. Koi copy, koi replica — absolutely nahi! ✅\n\nMain aapki selection mein kya help kar sakta/sakti hoon? 🥂",
      quickReplies: INITIAL_QUICK_REPLIES,
    };
  }

  // ── Instagram ──────────────────────────────────────────────────────────────
  if (/instagram|insta|ig|social media|@ayan/.test(msg)) {
    return {
      text: "📸 **Follow Us on Instagram!**\n\n**@ayancosmetics.official**\n\nHamara Instagram par aapko milega:\n• 🎬 Live product swatches & unboxings\n• 💄 Daily makeup looks & tutorials\n• 🔥 Flash sale & exclusive discount announcements\n• 🎁 Giveaways & special community offers\n\nFollow karein aur AYAN beauty community ka hissa banein! 💋",
      quickReplies: ["📦 Products Dekhne Hain", "🎁 Gift Box Order"],
      whatsappCTA: true,
    };
  }

  // ── Shade Matching ─────────────────────────────────────────────────────────
  if (/shade|swatch|colour|color|rang|tone|fair|medium|dusky|dark|undertone|warm|cool|neutral|skin match/.test(msg)) {
    return {
      text: "💄 **Expert Shade Matching — Guaranteed Perfection!**\n\nDigital screens par sahi color match karna almost impossible hai — isiliye hum har customer ko **Real Swatches & Live Photos** personally bhejte hain! 📸\n\nPerfect match ke liye Rehan Khan ko batayein:\n• 🎯 Kaunsa product? *(Foundation, Lipstick, Concealer)*\n• 💡 Skin undertone? *(Warm, Cool, Neutral)*\n• 🤳 Optional: apni selfie ya current shade ki pic share karein\n\nHum **exact match guarantee** ke sath dispatch karte hain! ✅",
      quickReplies: ["💋 Lipstick Match", "🟤 Foundation Match", "📸 WhatsApp Par Swatches"],
      whatsappCTA: true,
    };
  }

  // ── Lipstick ───────────────────────────────────────────────────────────────
  if (/lipstick|lip color|lip colour|lippie|\blip\b|lip gloss|lip liner/.test(msg)) {
    return {
      text: "💋 **Premium Lipstick Collection — 100% Original:**\n\n• **Luxury Brands:** Charlotte Tilbury, MAC, Huda Beauty, NYX, NARS, L'Oreal Paris\n• **Finishes Available:**\n  — Ultra-Matte Power ✨\n  — Satin Cream Luxury 💋\n  — High-Shine Mirror Gloss 🌟\n  — Velvet Liquid Transfer-Proof 👑\n• **Shade Universe:** Perfect Nudes, Deep Reds, Soft Pinks, Rich Mauves, Classic Berry\n\nDaily wear ke liye alag, party glam ke liye alag — kaunsa occasion hai? Main best shade suggest karoon! 🎯",
      quickReplies: ["🌙 Party Glam Shades", "☀️ Daily Soft Nudes", "💰 Lipstick Prices", "📸 Live Swatches"],
      whatsappCTA: true,
    };
  }

  // ── Foundation / Base ──────────────────────────────────────────────────────
  if (/foundation|base makeup|coverage|bb cream|cc cream|primer|setting spray|setting powder/.test(msg)) {
    return {
      text: "🌟 **Flawless Base — Professional Coverage:**\n\n• **Formulas:** Full Matte Coverage, Dewy Luminous Glow, Everyday Sheer Tint, Buildable Medium\n• **Brands:** NYX, Huda Beauty, L'Oreal, Maybelline, MAC, Charlotte Tilbury\n• **All Skin Types:** Oily, Dry, Combination, Sensitive\n\n💡 **Pro Stylist Tip:** Maximum longevity ke liye:\n**Primer → Foundation → Concealer → Setting Powder → Lock Spray**\n\nYe complete **Full Face Base Bundle** ek special discounted price par available hai! 👇",
      quickReplies: ["🎨 Full Coverage Matte", "✨ Dewy Glow Finish", "💡 Complete Base Bundle", "🟤 Shade Match"],
      whatsappCTA: true,
    };
  }

  // ── Full Face Bundle Cross-Sell ─────────────────────────────────────────────
  if (/complete base|base set|full face|combo|bundle|kit/.test(msg)) {
    return {
      text: "✨ **AYAN Signature Full Face Base Bundle:**\n\nSalon-grade results — ghar par:\n\n1. 🟤 **Custom Shade Foundation** — Matched to your exact skin\n2. 🎯 **HD Spot Concealer** — Correct & brighten undereye\n3. 🥚 **Pro Beauty Blender** — Seamless airbrush finish\n4. ✨ **Matte Lock Setting Powder** — 16-hour stay guarantee\n\n🎁 Bundle par exclusive **combo discount** milta hai vs individual pricing!\n\nWhatsApp par apna skin tone batayein — Rehan Khan personally curate karenge! 💬",
      whatsappCTA: true,
    };
  }

  // ── Perfume / Fragrance ────────────────────────────────────────────────────
  if (/perfume|fragrance|scent|attar|spray|body mist|cologne|oud|خوشبو|mehek|itr/.test(msg)) {
    return {
      text: "🌸 **Luxury Fragrances & Premium Oud Collection:**\n\n**Signature Scent Profiles:**\n• 🕌 **Majestic Oud** — Rich, deep, long-lasting oriental warmth\n• 🌺 **French Floral** — Rose, jasmine & peony bouquets\n• 🪵 **Rich Woody** — Sandalwood, cedarwood, amber luxe\n• 🌊 **Fresh Aqua** — Clean, crisp marine notes for daily wear\n• 🍬 **Sweet Gourmand** — Vanilla musk, warm caramel\n\n✅ **100% Original Designer Concentrates** — Zero duplicates, zero dilution\n🎁 Premium velvet gift-wrapping available!\n\nApna preferred mood ya occasion batayein! 🥂",
      quickReplies: ["👤 Daily Personal Scent", "🎁 Gift Occasion", "🕌 Premium Oud", "🌺 Floral Light"],
      whatsappCTA: true,
    };
  }

  // ── Palette / Eye Makeup ───────────────────────────────────────────────────
  if (/palette|eyeshadow|eye shadow|smokey|eye makeup|eyeliner|mascara|lash|kajal|highlighter|blush|contour/.test(msg)) {
    return {
      text: "🎨 **High-Pigment Eye & Face Palettes:**\n\n• **Brands:** Huda Beauty, Morphe, Charlotte Tilbury, Urban Decay, Too Faced\n• **Texture:** Butter-smooth zero fallout, true-to-pan pigment\n• **Finishes:** Ultra-matte, Metallic glitter, Pressed Shimmer, Duo-Chrome\n• **Vibe Range:**\n  — 🌸 Everyday Sophisticated Nudes\n  — 🔥 Dramatic Bridal Smokey Glam\n  — ✨ Festival Rainbow & Editorial\n\nReal swatch videos personally WhatsApp par share karte hain! Kaunsa look chahiye? 💬",
      quickReplies: ["🌟 Natural Nude Palettes", "🎭 Smokey Glam Kits", "💍 Bridal Eye Palette", "📸 Swatch Videos"],
      whatsappCTA: true,
    };
  }

  // ── Skincare ───────────────────────────────────────────────────────────────
  if (/skincare|skin care|moisturizer|serum|toner|face wash|cleanser|sunscreen|spf|mask|acne|glow|whitening|vitamin c|niacinamide|hyaluronic/.test(msg)) {
    return {
      text: "🌿 **Advanced Skincare — Clinically Sourced Originals:**\n\n• 🧴 Gentle Hydrating Cleansers & Gel Face Washes\n• 💧 Target Serums — Vitamin C Brightening, Niacinamide Pore Refiner, Hyaluronic Hydration\n• 🛡️ Non-greasy SPF 50+ Invisible Sunscreens\n• 🌙 Night Recovery Creams & Repair Moisturizers\n• 🔴 Salicylic Acid Spot Treatments *(Acne Control)*\n\nApni main skin concern batayein — main personalized routine suggest karoon! 💬",
      quickReplies: ["✨ Glow & Brightening", "🔴 Acne & Oil Control", "💧 Dry Skin Repair", "🛡️ SPF Sunscreen"],
      whatsappCTA: true,
    };
  }

  // ── Gift / Occasion ────────────────────────────────────────────────────────
  if (/gift|beauty box|birthday|wedding|dawat|shaadi|barat|present|hamper|anniversary|eid|occasion/.test(msg)) {
    return {
      text: "🎁 **Custom Premium Beauty Boxes & Gift Hampers:**\n\nHar occasion ke liye tailored luxury packages! Select karein:\n\n• **👤 Recipient:** Bride, Friend, Mother, Sister, Office Gift?\n• **🎯 Occasion:** Birthday, Nikkah, Dawat, Anniversary, Eid?\n• **💰 Budget:** Starter / Full Glam / Luxury?\n\n🚀 **Same-day Karachi delivery available!**\n🎀 Elegant rigid luxury box packaging included\n\nApna budget bracket select karein: 👇",
      quickReplies: ["💝 1k–3k Starter Box", "✨ 3k–7k Full Glam", "👑 7k+ Luxury Box", "💍 Bridal Package"],
      whatsappCTA: true,
    };
  }

  // ── Bridal ─────────────────────────────────────────────────────────────────
  if (/bride|bridal|dulhan|shadi ka|nikkah|barat/.test(msg)) {
    return {
      text: "💍 **The Signature Bridal Glow Box — Ultimate Luxury:**\n\n✨ **Pro Base Kit:** Foundation + Primer + Lock-in Spray\n💋 **Lip Wardrobe:** 3 coordinated shades *(nude, rose, red)*\n🎨 **Glam Palette:** Metallic highlights, warm blush & eyeshadow\n🌸 **Imperial Fragrance:** Premium long-lasting signature perfume\n🌿 **Glow Serum:** Brightening overnight treatment\n🎀 **Presentation:** Magnetic ribbon luxury rigid box\n\n💰 *Range: Rs. 5,000 – Rs. 15,000+ based on brand selection*\n\nRehan Khan personally curate karenge — WhatsApp par discuss karein! 👑",
      quickReplies: ["💰 Bridal Quote Mangwao", "📱 WhatsApp Par Discuss"],
      whatsappCTA: true,
    };
  }

  // ── Budget: Starter 1k–3k ──────────────────────────────────────────────────
  if (/1[,.]?000.*3[,.]?000|budget.*1k|budget.*2k|budget.*3k|1000.*3000|under 3000|1k.?2k|2k.?3k|starter/.test(msg)) {
    return {
      text: "💝 **Starter Glam Box — Rs. 1,000 to 3,000:**\n\n• 💋 1 Premium Matte Lipstick *(shade matched)*\n• 🌸 Luxury Travel-size Body Mist / Perfume\n• 👁️ High-volume Mascara ya intense Kohl Kajal\n• ✨ Translucent mini setting powder\n• 🎀 Classic clean gift box wrapping\n\nPerfect for birthdays, Eid gifts, or friendly gestures!\nWhatsApp par confirm karo directly! 💬",
      whatsappCTA: true,
    };
  }

  // ── Budget: Full Glam 3k–7k ────────────────────────────────────────────────
  if (/3[,.]?000.*7[,.]?000|budget.*[45]k|budget.*6k|budget.*7k|3000.*7000|3k.?7k|full glam/.test(msg)) {
    return {
      text: "✨ **Executive Full Glam Box — Rs. 3,000 to 7,000:**\n\n• 💄 2 Luxury Lipsticks *(nude daily + bold statement)*\n• 🟤 Branded HD Foundation *(shade matched)*\n• 🎨 Mini Eye & Glam Palette *(blush + highlight + eye)*\n• 🌸 Premium Full-size Designer Fragrance\n• ✨ HD Concealer + Setting Powder\n• 🎁 Luxury signature rigid gift box\n\nHamara most popular package! Customization ke liye: 💬",
      whatsappCTA: true,
    };
  }

  // ── Budget: Luxury 7k+ ─────────────────────────────────────────────────────
  if (/7[,.]?000|budget.*[89]k|budget.*10k|budget.*12k|luxury box|above 7|7k\+|premium box/.test(msg)) {
    return {
      text: "👑 **Haute Luxury Beauty Box — Rs. 7,000+:**\n\n• 💄 3 Premium Branded Lipsticks / Mirror Glosses\n• 🟤 Full Coverage Base Kit *(Foundation + Primer + Concealer)*\n• 🎨 Full-size Master Eyeshadow Palette *(12–16 pan)*\n• 🌸 Premium imported designer luxury perfume\n• 🌿 Vitamin C Glow Serum set\n• 💅 Nail kit or highlighter palette bonus\n• 🎀 Royal ribbon magnetic closure luxury box\n\nPerfect for bridal setups or ultra-luxurious gifting! 💬",
      whatsappCTA: true,
    };
  }

  // ── Pricing ────────────────────────────────────────────────────────────────
  if (/price|kitna|cost|rate|how much|keemat|qeemat|afford|budget|worth/.test(msg)) {
    return {
      text: "💰 **AYAN Cosmetics — Transparent Pricing Guide:**\n\n• 💋 **Lipsticks:** Rs. 800 – 4,500\n• 🟤 **Foundations:** Rs. 1,200 – 5,500\n• 🌸 **Perfumes:** Rs. 1,500 – 8,000+\n• 🎨 **Eye Palettes:** Rs. 1,500 – 6,500\n• 🌿 **Skincare Serums:** Rs. 1,000 – 4,000\n• 🎁 **Gift Boxes:** Custom from Rs. 1,000\n• 💍 **Bridal Packages:** Rs. 5,000 – 15,000+\n\nExact latest rate ke liye product name WhatsApp par bhejein! 📦",
      quickReplies: ["💋 Lipstick Price", "🌸 Perfume Rates", "🎁 Gift Box Budget"],
      whatsappCTA: true,
    };
  }

  // ── How to Order ───────────────────────────────────────────────────────────
  if (/order|buy|kharid|chahiye|lena hai|purchase|mangwana|book|confirm|checkout/.test(msg)) {
    return {
      text: "📦 **How to Order — 3-Step Fast Checkout:**\n\n1️⃣ **Select:** Product ya description WhatsApp par share karein\n2️⃣ **Connect:** Niche WhatsApp click karein — Rehan Khan assist karenge\n3️⃣ **Dispatch:** Confirm hote hi same/next-day processing!\n\n🚀 **Delivery:**\n• Karachi → Same-day / Next-day express\n• Nationwide → 2–3 business days *(tracked)*\n\n💳 **Payment:**\n• COD *(Karachi only)* • EasyPaisa • JazzCash • Bank Transfer",
      quickReplies: ["💳 COD Available?", "🏙️ Karachi Delivery", "🇵🇰 Nationwide"],
      whatsappCTA: true,
    };
  }

  // ── Delivery ───────────────────────────────────────────────────────────────
  if (/delivery|shipping|deliver|courier|parcel|dispatch|send/.test(msg)) {
    return {
      text: "🚀 **Express Delivery — Pakistan Wide:**\n\n• 🏙️ **Karachi:** Same-day OR next-day *(order before 3pm)*\n• 🇵🇰 **Nationwide:** 2–3 business days via tracked courier\n• 📦 Secure anti-damage packing included\n• 🔒 Tamper-proof luxury packaging for gift orders\n\n💳 Cash on Delivery *(Karachi)*, EasyPaisa, JazzCash, Bank Transfer\n\nOrder confirm karne ke liye WhatsApp! ✅",
      whatsappCTA: true,
    };
  }

  // ── Location ───────────────────────────────────────────────────────────────
  if (/address|kahan|location|shop|store|visit|aana|where|mall|find you|karachi|saima/.test(msg)) {
    return {
      text: "📍 **Visit AYAN Cosmetics — Karachi Outlet:**\n\n🏪 **Shop No. G-16**\nSaima Shopping Mall\nMain Rashid Minhas Road, Karachi\n\n⚡ **In-Store Experience:**\n• Live product testing & texture checks\n• Personal shade matching consultation\n• Same-day walk-in purchase & gift wrapping\n\n📞 **Call / WhatsApp:** 0333-2304145 *(Rehan Khan)*\n🗺️ *Search: 'Saima Shopping Mall Rashid Minhas Road Karachi'*",
      quickReplies: ["📦 Online Delivery", "📱 WhatsApp Before Visiting"],
      whatsappCTA: true,
    };
  }

  // ── Authenticity ───────────────────────────────────────────────────────────
  if (/original|asli|authentic|fake|replica|genuine|duplicate|imported|copy|real/.test(msg)) {
    return {
      text: "✅ **100% Authenticity Guarantee — AYAN Absolute Promise:**\n\n• 🔒 Directly sourced from verified international distributors\n• 📋 Batch codes & product verification on every item\n• 🎬 Live unboxing videos available on request via WhatsApp\n• 💰 **100% refund** if any product is proven non-authentic\n\n❌ **Zero Tolerance Policy:** Fake products, counter copies, super-copies, diluted perfumes — all strictly banned\n\nShop with complete confidence! 💋",
      quickReplies: ["📦 Order Now", "💄 Explore Products"],
      whatsappCTA: true,
    };
  }

  // ── Payment ────────────────────────────────────────────────────────────────
  if (/payment|pay|easypaisa|jazzcash|cash|bank|transfer|cod|online payment/.test(msg)) {
    return {
      text: "💳 **Payment Methods — Flexible & Secure:**\n\n• 💵 **Cash on Delivery (COD):** Karachi mein available ✅\n• 📱 **EasyPaisa:** Instant digital transfer ✅\n• 📱 **JazzCash:** Instant digital transfer ✅\n• 🏦 **Bank Transfer:** Account details WhatsApp par share kiye jate hain ✅\n\n🔒 Har transaction Rehan Khan personally confirm karte hain.\n\nOrder ke liye WhatsApp par message karein! 👇",
      whatsappCTA: true,
    };
  }

  // ── Deals / Discount ───────────────────────────────────────────────────────
  if (/deal|discount|sale|offer|promo|cheap|best price|save/.test(msg)) {
    return {
      text: "🔥 **AYAN Cosmetics — Exclusive Deals & Offers:**\n\n• 💰 **Bundle Discounts:** Foundation + Concealer + Blender combo par save karein\n• 🎁 **Gift Box Value:** Custom boxes mein single items se better value\n• 📸 **Instagram Flash Sales:** **@ayancosmetics.official** follow karein for surprise drops\n• 🎯 **Loyalty Rates:** Repeat customers ko special pricing milti hai\n\nCurrent deals ke liye **WhatsApp par message karein** — Rehan Khan latest offers share karte hain! 💬",
      quickReplies: ["📸 Instagram Follow", "🎁 Bundle Deal"],
      whatsappCTA: true,
    };
  }

  // ── Default ────────────────────────────────────────────────────────────────
  return {
    text: "Shukriya aapke message ka! 😊\n\nAapki query closer address karne ke liye ek option select karein, ya **Rehan Khan** se directly connect karein:\n\n📞 **0333-2304145**\n\nWoh personally assist karenge! 💋",
    quickReplies: INITIAL_QUICK_REPLIES,
    whatsappCTA: true,
  };
}
