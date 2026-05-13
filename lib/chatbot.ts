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
  "🌸 Perfumes",
  "🎨 Palettes & Eye Makeup",
  "🎁 Gift / Beauty Box",
  "📦 Order karna hai",
  "📍 Shop ka Address",
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
      text: "Assalam-o-Alaikum! 💄✨ Welcome to **AYAN Cosmetics**!\n\nMain hoon **Ayan AI** — aapka personal beauty consultant aur AYAN ka virtual manager.\n\nAaj main aapki kya madad kar sakta hoon? 😊",
      quickReplies: INITIAL_QUICK_REPLIES,
    };
  }

  // ── Shades / Colors / Swatches ─────────────────────────────────────────────
  if (/shade|swatch|colour|color|rang|tone|fair|medium|dusky|dark|undertone|warm|cool|neutral/.test(msg)) {
    return {
      text: "💄 **Shade Matching — Hamari Specialty!**\n\nBilkul sahi jagah aaye hain! Screen par rang kabhi kabhi mislead karta hai — isiliye hum **Real Swatches (asli photos)** bhejte hain! 📸\n\nAap ki thodi help chahiye:\n\n• **Kaunsa product** chahiye? _(Lipstick / Foundation / Concealer / Palette)_\n• **Skin tone** kya hai? _(Fair / Medium / Dusky / Dark)_\n• **Finish** pasand hai? _(Matte / Satin / Glossy / Shimmer)_\n\nYeh batayein ya seedha WhatsApp pe message karein — Rehan bhai personally **exact shade match** karwayenge! ✅",
      quickReplies: ["💋 Lipstick shade chahiye", "🟤 Foundation match", "🎨 Palette shades", "📱 WhatsApp pe bata deta/deti hoon"],
      whatsappCTA: true,
    };
  }

  // ── Lipstick ───────────────────────────────────────────────────────────────
  if (/lipstick|lip color|lip colour|lippie|\blip\b/.test(msg)) {
    return {
      text: "💋 **Lipsticks — AYAN ki Jaan!**\n\nHamre paas kamal ki range hai:\n\n• **Brands:** Charlotte Tilbury, MAC, Huda Beauty, NYX, NARS & more\n• **Shades:** Nudes, Reds, Pinks, Mauves, Berries, Corals\n• **Finishes:** Matte • Satin • Glossy • Metallic • Velvet\n• **100% Original** — guaranteed ✅\n\n📸 Aapki skin tone batayein — hum specific shades ki **real swatch photos** WhatsApp pe bhejte hain!\n\n*Kya aap kisi event ke liye le rahe hain ya daily use ke liye?*",
      quickReplies: ["🌙 Event / Party ke liye", "☀️ Daily use", "💰 Price range poochni hai", "📸 Swatches dekhne hain"],
      whatsappCTA: true,
    };
  }

  // ── Foundation / Base ──────────────────────────────────────────────────────
  if (/foundation|base makeup|coverage|bb cream|cc cream|primer/.test(msg)) {
    return {
      text: "🌟 **Foundations & Base Products:**\n\n• Full Coverage, Medium, Sheer — sab options\n• **Skin tones covered:** Fair, Medium, Dusky, Dark ✅\n• **Finishes:** Matte, Dewy, Satin\n• **Brands:** NYX, Huda Beauty, L'Oreal, Maybelline & more\n\n💡 *Pro Tip:* Foundation ke sath hum **Concealer + Beauty Blender** bhi suggest karte hain for a flawless finish — ek complete base set!\n\n📸 Exact shade match ke liye skin tone batayein — real swatches WhatsApp pe bhejte hain! 🎯",
      quickReplies: ["🎨 Full coverage chahiye", "✨ Dewy finish", "💡 Complete base set", "📸 Shade match karna hai"],
      whatsappCTA: true,
    };
  }

  // ── Complete base set cross-sell ────────────────────────────────────────────
  if (/complete base|base set|full face|combo|bundle/.test(msg)) {
    return {
      text: "✨ **Complete Base Set — Best Value!**\n\nHamara suggested **Full Face Base Bundle:**\n\n1. 🟤 Foundation (shade matched)\n2. 🎯 Concealer (under-eyes + spots)\n3. 🥚 Beauty Blender / Sponge\n4. ✨ Setting Powder / Spray\n\nSab original branded! Bundle mein thoda discount bhi milta hai — WhatsApp pe final quote lo! 💬\n\n**0333-2304145** pe message karo — Rehan bhai best deal karwayenge! 👑",
      whatsappCTA: true,
    };
  }

  // ── Perfume / Fragrance ────────────────────────────────────────────────────
  if (/perfume|fragrance|scent|attar|spray|body mist|cologne|خوشبو|mehek/.test(msg)) {
    return {
      text: "🌸 **Perfumes & Fragrances — Premium Selection!**\n\nHamre paas shandar collection hai:\n\n• **Types:** Floral 🌺 • Woody 🪵 • Oud 🕌 • Fresh 🌊 • Oriental 🌙\n• **Longevity:** Long-lasting formulas\n• **100% Designer Branded** — koi duplicate nahi ✅\n• **Gift Wrapping** available 🎁\n\nKya aap apne liye le rahe hain ya gift ke liye? 🎀\n\n*Occasion ya mood batayein — main perfect scent suggest karta hoon!*",
      quickReplies: ["👤 Apne liye", "🎁 Gift ke liye", "🌺 Floral scent", "🌙 Oud / Oriental", "📦 Order karna hai"],
      whatsappCTA: true,
    };
  }

  // ── Palette / Eye makeup ───────────────────────────────────────────────────
  if (/palette|eyeshadow|eye shadow|smokey|eye makeup|highlighter|blush|contour/.test(msg)) {
    return {
      text: "🎨 **Eye & Face Palettes:**\n\n• **Brands:** Huda Beauty, Morphe, NYX, Charlotte Tilbury\n• **Finishes:** Matte + Shimmer combos\n• **Looks:** Everyday Neutral • Smokey • Glam • Bridal\n• Highly pigmented, long-lasting formula 💪\n\n💡 *Pro Tip:* Palette ke sath **Makeup Brushes Set** bhi available hai — perfect blend ke liye!\n\n📸 Real swatches WhatsApp pe dekhne hain? Batayein kaunsa look chahiye — hum best option suggest karenge! ✨",
      quickReplies: ["🌟 Everyday neutral", "🎭 Smokey / Glam", "💍 Bridal palette", "🖌️ Brushes bhi chahiye"],
      whatsappCTA: true,
    };
  }

  // ── Skincare ───────────────────────────────────────────────────────────────
  if (/skincare|skin care|moisturizer|serum|toner|face wash|cleanser|sunscreen|spf|mask|acne|glow/.test(msg)) {
    return {
      text: "🌿 **Skincare — Glow Se Shuru Hota Hai Sab!**\n\nHamri skincare range:\n\n• Face Wash & Cleansers\n• Moisturizers (Normal / Dry / Oily)\n• Brightening Serums ✨\n• Sunscreen SPF 30 & 50\n• Sheet Masks\n• All branded & original! ✅\n\nApni **skin type** aur **main concern** batayein:\n_(Glow / Acne / Dryness / Dark spots / Anti-aging)_\n\nMain aapke liye **customized skincare routine** suggest karta hoon! 💬",
      quickReplies: ["✨ Glow chahiye", "🔴 Acne problem", "💧 Dry skin", "🛡️ Sunscreen chahiye", "📱 WhatsApp pe detail poochni hai"],
      whatsappCTA: true,
    };
  }

  // ── Gift / Beauty Box ──────────────────────────────────────────────────────
  if (/gift|beauty box|bride|bridal|birthday|wedding|dawat|shaadi|barat|present|hamper|anniversary/.test(msg)) {
    return {
      text: "🎁 **Customized Beauty Boxes — Bilkul Aapke Hisaab Se!**\n\nSabse pehle kuch quick sawal — taake hum ek **perfect, personalized box** banayein:\n\n• **1. Yeh kiske liye hai?** _(Bride / Birthday girl / Friend / Maa / Behen)_\n• **2. Budget kya hai?** _(PKR mein rough idea)_\n• **3. Uski skin type ya favorite colors?** _(Optional but helpful!)_\n\nInn details se hum ek **signature box concept** banate hain — jaise *\"The Bridal Glow Box\"* ya *\"The Daily Glam Set\"* 👑\n\nAbhi batayein ya WhatsApp pe message karein! 💬",
      quickReplies: ["💍 Bride ke liye", "🎂 Birthday gift", "💐 Dawat / Event", "💰 Budget batana hai", "📱 WhatsApp pe discuss karna hai"],
      whatsappCTA: true,
    };
  }

  // ── Bridal box ─────────────────────────────────────────────────────────────
  if (/bride|bridal|dulhan|shadi ka|nikkah/.test(msg)) {
    return {
      text: "💍 **The Bridal Glow Box — Our Signature!**\n\nDulhan ke liye hum banate hain:\n\n✨ **Full Face Base:** Foundation + Concealer + Setting Spray\n💋 **Lip Collection:** 2-3 premium shades (nudes + bold)\n🎨 **Eye Palette:** Bridal-worthy shimmer & matte combo\n🌸 **Signature Fragrance:** Long-lasting designer perfume\n🌿 **Glow Skincare:** Serum + Moisturizer\n🎀 **Premium Gift Packaging** with ribbon\n\n**Range:** 5,000 - 15,000+ PKR depending on brands\n\nBudget aur dulhan ki skin tone batayein — hum ek special quote tayyar karte hain! 👑",
      quickReplies: ["💰 Budget batana hai", "📱 WhatsApp pe full detail"],
      whatsappCTA: true,
    };
  }

  // ── Budget ranges ──────────────────────────────────────────────────────────
  if (/1[,.]?000.*3[,.]?000|budget.*1k|budget.*2k|budget.*3k|1000.*3000|under 3000|1k.?2k|2k.?3k/.test(msg)) {
    return {
      text: "💝 **Starter Glam Box — 1,000 to 3,000 PKR**\n\n✅ Yeh aa sakta hai:\n• 💋 1 Premium Lipstick (shade matched)\n• 🌸 Mini Perfume ya Body Mist\n• 👁️ Mascara ya Kajal\n• 🎀 Cute branded packaging\n\nYeh ek **pyara, thoughtful gift** hai jo budget mein perfectly fit ho jata hai!\n\n_Main abhi is box ki detail Rehan bhai se confirm karta hoon — aap tab tak hamara Instagram check karen: **@ayancosmetics.official** 📱_\n\nFinal karne ke liye WhatsApp karein! 💬",
      whatsappCTA: true,
    };
  }

  if (/3[,.]?000.*7[,.]?000|budget.*[45]k|budget.*6k|budget.*7k|3000.*7000|3k.?7k/.test(msg)) {
    return {
      text: "✨ **The Complete Glam Box — 3,000 to 7,000 PKR**\n\n✅ Yeh aa sakta hai:\n• 💄 2 Premium Lipsticks (nude + bold)\n• 🟤 Foundation (skin tone matched)\n• 🎨 Mini Eyeshadow Palette\n• 🌸 Designer Perfume / Fragrance\n• 🎁 Beautiful branded gift box\n\nYeh ek **complete head-to-toe glam package** hai — perfect for birthdays aur dawat events!\n\nCustomize karne ke liye WhatsApp pe message karein — skin tone + preference batayein! 💬",
      whatsappCTA: true,
    };
  }

  if (/7[,.]?000|budget.*[89]k|budget.*10k|luxury|premium box|above 7|7k\+/.test(msg)) {
    return {
      text: "👑 **The Luxury Beauty Box — 7,000+ PKR**\n\n✅ Yeh aa sakta hai:\n• 💄 2-3 Premium Branded Lipsticks\n• 🟤 Full Coverage Foundation\n• 🎨 Full-size Eyeshadow Palette\n• 🌸 Designer Perfume (full size)\n• 🌿 Skincare mini set (Serum + Moisturizer)\n• 🎀 **Premium ribbon packaging** — gift-ready\n\nBridal sets aur corporate gifting ke liye **bulk orders** bhi available hain!\n\nYeh ek **premium, unforgettable gift** hoga! WhatsApp pe full consultation lein: 💬",
      whatsappCTA: true,
    };
  }

  // ── Price ──────────────────────────────────────────────────────────────────
  if (/price|kitna|cost|rate|how much|keemat|qeemat|afford|budget/.test(msg)) {
    return {
      text: "💰 **Pricing — Competitive & Fair!**\n\nHamari rough ranges:\n\n• 💋 Lipsticks: **800 – 4,500 PKR** (brand by brand)\n• 🟤 Foundations: **1,200 – 5,000 PKR**\n• 🌸 Perfumes: **1,500 – 8,000+ PKR**\n• 🎨 Palettes: **1,500 – 6,000 PKR**\n• 🎁 Beauty Boxes: **1,000 PKR se shuru**\n\n_Note: Prices updated regularly — exact rate ke liye WhatsApp pe confirm zaroor karein!_\n\nKaunsa product mein interested hain? 😊",
      quickReplies: ["💋 Lipstick price", "🌸 Perfume price", "🎨 Palette price", "🎁 Gift box price"],
      whatsappCTA: true,
    };
  }

  // ── Order ──────────────────────────────────────────────────────────────────
  if (/order|buy|kharid|chahiye|lena hai|purchase|mangwana|book|confirm/.test(msg)) {
    return {
      text: "📦 **Order Karna — Bilkul Asaan Hai!**\n\n**3 simple steps:**\n\n1️⃣ Jo product chahiye uska naam batayein\n2️⃣ WhatsApp pe **0333-2304145** pe message karein\n3️⃣ Rehan bhai confirm kar ke **fast dispatch** karenge!\n\n🚀 **Delivery:**\n• 🏙️ Karachi: Same day / Next day\n• 🇵🇰 Nationwide: 2-3 business days, tracking available\n\n💳 **Payment:** Easy Paisa / JazzCash / Bank Transfer / COD (Karachi)\n\nAbhi WhatsApp karein — hum intezaar mein hain! 💬",
      whatsappCTA: true,
    };
  }

  // ── Hesitation / thinking ──────────────────────────────────────────────────
  if (/soch|thinking|decide|not sure|pata nahi|samajh nahi|confused|kaun sa|which one/.test(msg)) {
    return {
      text: "Bilkul sahi hai — beauty mein sahi choice important hoti hai! 😊\n\n_Main abhi is beauty selection ki **customized detail** banakar Rehan bhai se confirm karta hoon._\n\nAap tab tak hamara **Instagram** check karein — wahan real product photos aur customer looks mil jayenge:\n\n📱 **@ayancosmetics.official**\n\nPhir hum sath mil ke decide karte hain — koi jaldi nahi! 💕\n\nYa seedha WhatsApp pe puchein — Rehan bhai personally guide karenge! 💬",
      quickReplies: ["📸 Instagram dekh leti/leta hoon", "📱 WhatsApp pe poochna hai", "💄 Product suggest karo"],
      whatsappCTA: true,
    };
  }

  // ── Delivery ───────────────────────────────────────────────────────────────
  if (/delivery|ship|courier|kitne din|how long|jaldi|dispatch|track/.test(msg)) {
    return {
      text: "🚀 **Delivery Information:**\n\n📍 **Karachi:** Same day ya next day delivery!\n\n🇵🇰 **Nationwide (All Cities):**\n• TCS / Leopards / Post Ex\n• **2-3 business days**\n• Tracking number order ke baad WhatsApp pe milega\n\n💳 **Payment Options:**\n• Easy Paisa / JazzCash\n• Bank Transfer\n• COD — Karachi mein available!\n\nKisi bhi query ke liye: **0333-2304145** 📞",
      whatsappCTA: true,
    };
  }

  // ── Address / Location ─────────────────────────────────────────────────────
  if (/address|kahan|location|shop|store|visit|aana|where|mall|find you/.test(msg)) {
    return {
      text: "📍 **AYAN Cosmetics — Visit Us!**\n\n🏪 **Shop No G-16**\nSaima Shopping Mall\nMain Rashid Minhas Road, Karachi\n\n🕐 In-store experience mein aake directly products try kar sakte hain!\n\n📞 **Call / WhatsApp:**\n• **0333-2304145** (Primary)\n• **0340-1808907** (Alt)\n\n📧 **Email:** ayan.cosmeticspk@gmail.com\n\n🗺️ Google Maps: *\"Saima Shopping Mall Rashid Minhas Road Karachi\"*",
      quickReplies: ["📱 Pehle WhatsApp pe confirm karna hai", "📦 Online order prefer karta/karti hoon"],
      whatsappCTA: true,
    };
  }

  // ── Contact ────────────────────────────────────────────────────────────────
  if (/contact|number|phone|call|reach|helpline|email|connect/.test(msg)) {
    return {
      text: "📞 **AYAN Cosmetics — Hum Yahan Hain!**\n\n💬 **WhatsApp / Call:**\n• **0333-2304145** — Primary (Rehan Khan)\n• **0340-1808907** — Alternate\n\n📧 **Email:** ayan.cosmeticspk@gmail.com\n\n🌐 **Website:** www.ayan-cosmetics.com\n\n📱 **Social:**\n• Instagram: **@ayancosmetics.official**\n• Facebook: **@ayancosmetics.official**\n\n_WhatsApp pe sabse fast response milti hai — 5-10 min mein!_ ⚡",
      whatsappCTA: true,
    };
  }

  // ── Social media ───────────────────────────────────────────────────────────
  if (/instagram|facebook|social|insta|fb|@ayan|follow/.test(msg)) {
    return {
      text: "📱 **Follow Us — @ayancosmetics.official**\n\nHamari feed mein milega:\n\n✨ New arrivals — sab se pehle\n💄 Real makeup looks & tutorials\n🎁 Giveaways & special offers\n📸 Honest product swatches\n⭐ Customer reviews & unboxings\n\n**Instagram + Facebook:** @ayancosmetics.official\n\nFollow karo aur miss mat karo — beauty deals aati rehti hain! 🔔💕",
      quickReplies: ["📦 Order karna hai", "🎁 Gift box chahiye", "💄 Products dekhne hain"],
    };
  }

  // ── Original / authentic ───────────────────────────────────────────────────
  if (/original|asli|authentic|fake|replica|genuine|duplicate|imported/.test(msg)) {
    return {
      text: "✅ **100% Original — AYAN Ka Wada!**\n\n🏆 Hum sirf **genuine branded products** deal karte hain:\n\n• ❌ Koi replica nahi\n• ❌ Koi duplicate nahi — kabhi bhi\n• ✅ Direct sourced branded items\n• ✅ Har product pe authenticity guarantee\n• ✅ Rehan bhai personally quality check karte hain\n\n_Koi doubt ho toh WhatsApp pe puchein — product verification photos aur receipts share kar sakte hain!_ 📸\n\nYahi hamari **reputation** aur **trust** hai — 100% original ya kuch nahi! 💪",
      quickReplies: ["📦 Order karna hai", "💄 Products browse karna hai"],
      whatsappCTA: true,
    };
  }

  // ── Return / Exchange ──────────────────────────────────────────────────────
  if (/return|exchange|refund|wapas|replace|damaged|broken/.test(msg)) {
    return {
      text: "🔄 **Returns & Exchange Policy:**\n\nHamari policy customer-first hai:\n\n• **Damaged product** mila? — Seedha WhatsApp pe photo bhejein, replacement arrange karenge\n• **Wrong item** aaya? — Hum responsible hain, fix karenge\n• **General exchange** — case by case basis pe Rehan bhai handle karte hain\n\n_Koi bhi issue ho, seedha **0333-2304145** pe message karein — hum solution dhundhenge!_ 💬\n\nAapki satisfaction hamari priority hai! 🙏",
      whatsappCTA: true,
    };
  }

  // ── Mascara / Eyeliner / specific products ─────────────────────────────────
  if (/mascara|eyeliner|kajal|kohl/.test(msg)) {
    return {
      text: "👁️ **Eye Products — Drama Eyes Ready!**\n\n• **Mascaras:** Volumizing, Lengthening, Waterproof\n• **Eyeliners:** Felt tip, Gel, Pencil, Liquid\n• **Kajal / Kohl:** Intense black, smudge-proof\n• Brands: Huda Beauty, NYX, Maybelline & more\n\n💡 *Pro Tip:* Palette ke sath ek **good eyeliner + mascara combo** lete hain toh look complete hota hai — bundle mein better value milti hai!\n\nOrder ya inquiry ke liye WhatsApp karein! 💬",
      quickReplies: ["🎨 Palette bhi chahiye", "📦 Order karna hai"],
      whatsappCTA: true,
    };
  }

  // ── Default fallback ───────────────────────────────────────────────────────
  return {
    text: "Shukriya aapke message ke liye! 😊\n\nMain thoda aur samajhna chahta hoon — kya aap in mein se select kar sakte hain?\n\nYa seedha **Rehan bhai** se WhatsApp pe baat karein — woh personally aapki poori madad karenge:\n\n📞 **0333-2304145**",
    quickReplies: INITIAL_QUICK_REPLIES,
    whatsappCTA: true,
  };
}
