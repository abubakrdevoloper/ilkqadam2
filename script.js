/**
 * ILK QADAM — Educational Gaming Platform
 * Full Core Engine, Mini-Games, Web Audio Synthesizer, Confetti, Shop, AI Assistant & Analytics
 */

// ==========================================================================
// 1. DATA STRUCTURES & AGE WORLDS
// ==========================================================================

const AGE_WORLDS = {
  "3-5": {
    name: "LITTLE EXPLORERS",
    title: "Kashf et. O‘rgan. O‘yna.",
    desc: "Ranglar, shakllar, jonivorlar va qiziqarli kichik jumboqlar olamiga xush kelibsan!",
    theme: "theme-3-5",
    hero: "Kichik qadamlar buyuk kashfiyotlarga olib boradi.",
    orb: "🎨",
    games: [
      ["Rangni top", "Ekrandagi rangga mos to‘g‘ri javobni tanla.", "🎨", "Aql", "quiz-color", 15],
      ["Shakllar olami", "Shakllarni tanib, to‘g‘ri nomini top.", "🔷", "Aql", "quiz-shape", 15],
      ["Hayvonlar va tovushlar", "Jonivorlar va ularning belgilarini aniqla.", "🐾", "Aql", "quiz-animal", 15],
      ["Rasm xotirasi", "Bir xil belgilarni juftlab top.", "🧩", "Xotira", "memory", 20],
      ["Oddiy hisob", "Rasmdagi va sonlardagi oddiy misollarni yech.", "🔢", "Aql", "math-easy", 15],
      ["Chaqqon qo‘llar", "Paydo bo‘lgan yulduzchani tez bosib ol!", "⚡", "Tezlik", "reflex", 20],
      ["Topishmoqlar xazinasi", "Kichkintoylar uchun qiziqarli topishmoqlar.", "💡", "Aql", "riddles-kids", 15]
    ]
  },
  "5-9": {
    name: "ADVENTURE WORLD",
    title: "Sarguzasht seni kutmoqda.",
    desc: "Mantiq, kuzatuvchanlik, tabiat va hisob-kitob bilan yangi bosqichlarni och!",
    theme: "theme-5-9",
    hero: "Har bir jumboq — yangi kashfiyot maydoni.",
    orb: "🗺️",
    games: [
      ["Xazina izlovchi", "Dunyo va tabiat haqidagi qiziqarli savollarga javob ber.", "🗺️", "Aql", "quiz-general", 20],
      ["Matematika sprinti", "Qo‘shish va ayirish misollarini tez yech.", "➗", "Aql", "math-easy", 20],
      ["So‘z ustasi", "Aralashgan harflardan to‘g‘ri so‘zni yasa.", "🔤", "Aql", "word", 20],
      ["Xotira sinovi", "Yashiringan ramzlarni eslab qol va juftla.", "🧠", "Xotira", "memory", 25],
      ["Mantiq labirinti", "Sonlar qatoridagi qonuniyatni aniqla.", "🔍", "Strategiya", "sequence", 25],
      ["Tezkor reaksiya", "Nishon paydo bo‘lishi bilan darhol bosing!", "⚡", "Tezlik", "reflex", 20],
      ["Ranglar jangi", "So‘z ma’nosi va rang o‘rtasidagi farqni top!", "🎯", "Tezlik", "stroop", 25],
      ["Xalq topishmoqlari", "O‘zbek xalq topishmoqlarining javobini top.", "💡", "Aql", "riddles-mid", 20]
    ]
  },
  "9-15": {
    name: "NEXT GENERATION",
    title: "Keyingi darajangni och.",
    desc: "Tez fikrla, intellektual salohiyatingni oshir va g‘oliblik sari intil!",
    theme: "theme-9-15",
    hero: "O‘zingning keyingi darajangga chiq va cho‘qqini zabt et.",
    orb: "🚀",
    games: [
      ["Brain Battle", "Mantiqiy va ilmiy savollar bilan tafakkuringni sina.", "🧠", "Aql", "quiz-general", 25],
      ["Matematika Pro", "Ko‘paytirish va murakkabroq arifmetik amallarni yech.", "∑", "Aql", "math-hard", 25],
      ["Ketma-ketlik kodi", "Qonuniyatni topib, qatorni to‘g‘ri davom ettir.", "⌁", "Strategiya", "sequence", 25],
      ["Xotira Pro", "Kartalar joylashuvini eslab qolib juftliklarni top.", "◉", "Xotira", "memory", 30],
      ["So‘z chaqqonligi", "Harflardan yashirin so‘zni tezkorlik bilan tuz.", "Aa", "Tezlik", "word", 25],
      ["Chaqqon refleks", "Ekrandagi nishonlarni eng yuqori tezlikda tut!", "⚡", "Tezlik", "reflex", 30],
      ["Ranglar to‘qnashuvi", "Stroop effekti — miyangni chalg‘ituvchi sinov!", "🎯", "Tezlik", "stroop", 30],
      ["Zukko topishmoqlar", "Falsafiy va mantiqiy topishmoqlarni top.", "💡", "Aql", "riddles-hard", 25]
    ]
  },
  "15-20": {
    name: "ELITE ZONE",
    title: "Strategiyangni namoyish et.",
    desc: "Raqobat, tahlil, tezkor qarorlar va strategik fikrlash maydoni.",
    theme: "theme-15-20",
    hero: "Chegarangni o‘zing belgilaysan — mukammallikka intil.",
    orb: "♜",
    games: [
      ["Taktik viktorina", "Fan, tarix va axborot texnologiyalari bo‘yicha sinov.", "♜", "Aql", "quiz-hard", 30],
      ["Matematika Arena", "Tezkor hisoblash va murakkab tenglamalar.", "∑", "Aql", "math-hard", 30],
      ["Mantiqiy kod", "Sonlar va qoidalar orasidagi yashirin algoritm.", "⌘", "Strategiya", "sequence", 30],
      ["Xotira Master", "Qisqa muddatli vizual xotira sinovi.", "◉", "Xotira", "memory", 30],
      ["Tezkor refleks", "Millisekundlarda qaror qabul qil va bosing!", "⚡", "Tezlik", "reflex", 35],
      ["Ranglar jangi Pro", "Diqqatni jamlash va chalg‘ituvchi signallarni yengish.", "🎯", "Tezlik", "stroop", 35],
      ["Lug‘at dueli", "Katta so‘z boyligingni namoyish et.", "Aa", "Aql", "word", 30]
    ]
  },
  "21-25": {
    name: "PRO ARENA",
    title: "Aql bilan ustunlikka erish.",
    desc: "Biznes, mantiq, hisob-kitob va real hayotiy qarorlar maydoni.",
    theme: "theme-21-25",
    hero: "Har bir to‘g‘ri qaror yangi ufqlarni ochadi.",
    orb: "♟",
    games: [
      ["Biznes va mantiq", "Strategik vaziyatlarda eng to‘g‘ri javobni tanla.", "▥", "Strategiya", "quiz-hard", 35],
      ["Raqamlar tahlili", "Tezkor moliyaviy va matematik hisob-kitoblar.", "∑", "Aql", "math-hard", 35],
      ["Deduksiya kodi", "Murakkab ketma-ketlik va mantiqiy bog‘lanishlar.", "⌕", "Strategiya", "sequence", 35],
      ["Xotira laboratoriyasi", "Miyani yosh va tetik saqlash uchun vizual mashq.", "◉", "Xotira", "memory", 35],
      ["Refleks sinovi", "Tezkor axborot oqimida reaksiyangni sinab ko‘r.", "⚡", "Tezlik", "reflex", 40],
      ["Fokus jangi", "Chalg‘ituvchi ranglar sinovidan muvaffaqiyatli o‘t.", "🎯", "Tezlik", "stroop", 35]
    ]
  },
  "26-30": {
    name: "MASTER MIND",
    title: "Tafakkuringni charxla.",
    desc: "Chuqur tahlil, strategiya va aqliy tetiklik uchun intellektual klub.",
    theme: "theme-26-30",
    hero: "Tajriba va aql — sening eng katta quroling.",
    orb: "♕",
    games: [
      ["Strategik qaror", "Tahliliy vaziyatlarda eng samarali yondashuvni top.", "♜", "Strategiya", "quiz-hard", 40],
      ["Hisobiy tahlil", "Murakkab matematik amallarni yech.", "▤", "Aql", "math-hard", 40],
      ["Deduktiv mantiq", "Qonuniyatlar va yashirin mantiqiy qatorlar.", "⌕", "Aql", "sequence", 40],
      ["Xotira Master", "Vizual xotirani faol saqlash mashqi.", "◉", "Xotira", "memory", 40],
      ["Reaksiya tezligi", "Neyronlar faolligi va diqqat tezligi.", "⚡", "Tezlik", "reflex", 40],
      ["Stroop testi", "Kognitiv moslashuvchanlikni oshirish.", "🎯", "Tezlik", "stroop", 40]
    ]
  },
  "31-40": {
    name: "LEGENDS CLUB",
    title: "Tajriba va tafakkur maydoni.",
    desc: "Klassik mantiq, universal bilim va aqliy musobaqa olami.",
    theme: "theme-31-40",
    hero: "Aqlning yangi qirralarini har kuni kashf et.",
    orb: "🏆",
    games: [
      ["Klassik bilim", "Tarix, geografiya, fan va madaniyat sinovlari.", "♜", "Aql", "quiz-hard", 40],
      ["Mantiqiy zanjir", "Sonlar va qonuniyatlarni mantiqan yech.", "▦", "Aql", "sequence", 40],
      ["Hisob-kitob sprinti", "Miyani charxlovchi arifmetik sinovlar.", "∑", "Aql", "math-hard", 40],
      ["Xotira akademiyasi", "Vizual diqqat va eslab qolish qobiliyati.", "◉", "Xotira", "memory", 40],
      ["Refleks arenasi", "Qaror qabul qilish tezligini yuqori darajada saqla.", "⚡", "Tezlik", "reflex", 40],
      ["Diqqat jangi", "Optik va kognitiv ranglar sinovi.", "🎯", "Tezlik", "stroop", 40]
    ]
  }
};

// Rich Question Bank
const QUIZZES = {
  "quiz-color": [
    ["Qaysi biri osmon rangiga eng o‘xshash?", "Qizil", "Ko‘k", "Sariq", "Yashil", 1],
    ["Quyosh ko‘pincha qaysi rangda tasvirlanadi?", "Binafsha", "Yashil", "Sariq", "Jigarrang", 2],
    ["Daraxt barglari bahorda qaysi rangda bo‘ladi?", "Yashil", "Qizil", "Ko‘k", "Oq", 0],
    ["Pomidor pishganda qaysi rangga kiradi?", "Qora", "Sariq", "Qizil", "Binafsha", 2],
    ["Qor qanday rangda bo‘ladi?", "Oq", "Yashil", "Ko‘k", "Pushti", 0]
  ],
  "quiz-shape": [
    ["Uchta tomoni va uchta burchagi bor shakl qaysi?", "Doira", "Uchburchak", "Kvadrat", "To‘g‘ri to‘rtburchak", 1],
    ["To‘rtta teng tomoni bor shakl nima deb ataladi?", "Doira", "Uchburchak", "Kvadrat", "Yulduz", 2],
    ["Futbol to‘pi qaysi geometrik shaklga o‘xshaydi?", "Doira (Shar)", "Kvadrat", "Uchburchak", "Piramida", 0],
    ["Tuxum qaysi shaklga eng yaqin?", "Oval", "Kvadrat", "Uchburchak", "Kub", 0]
  ],
  "quiz-animal": [
    ["Qaysi jonivor 'miyov' deb ovoz chiqaradi?", "It", "Mushuk", "Sigir", "Ot", 1],
    ["Eng uzun bo‘yinli hayvon qaysi?", "Quyon", "Mushuk", "Jirafa", "Tulki", 2],
    ["Asalni qaysi mehnatkash hasharot tayyorlaydi?", "Asalari", "Kapalak", "Chumoli", "Ninachi", 0],
    ["Qaysi hayvon 'cho‘l kemasi' deb ataladi?", "Ot", "Tuya", "Fil", "Bo‘ri", 1],
    ["Daraxtda sakrab yuruvchi yong‘oqxo‘r jonivor qaysi?", "Moshuk", "Olmaxon", "Tipratikan", "Sher", 1]
  ],
  "quiz-general": [
    ["Quyosh tizimidagi eng ulkan sayyora qaysi?", "Yer", "Mars", "Yupiter", "Venera", 2],
    ["O‘zbekiston Respublikasining poytaxti qaysi shahar?", "Samarqand", "Buxoro", "Toshkent", "Xiva", 2],
    ["Bir kilometr necha metrga teng?", "100 metr", "500 metr", "1000 metr", "10 000 metr", 2],
    ["O‘simliklar fotosintez jarayoni uchun nimadan foydalanadi?", "Quyosh nuri", "Plastik", "Temir", "Muz", 0],
    ["Yer sharidagi eng katta okean qaysi?", "Hind okeani", "Tinch okeani", "Atlantika okeani", "Shimoliy Muz okeani", 1],
    ["Bir kunda necha soat bor?", "12 soat", "24 soat", "48 soat", "60 soat", 1],
    ["Alisher Navoiy qaysi asrning buyuk shoiri hisoblanadi?", "X asr", "XV asr", "XIX asr", "XX asr", 1],
    ["Kompyuterning 'miyasi' deb qaysi qurilma aytiladi?", "Monitor", "Protsessor (CPU)", "Klaviatura", "Sichqoncha", 1]
  ],
  "quiz-hard": [
    ["Fotosintez jarayonida o‘simliklar asosan qaysi gazni o‘zlashtiradi?", "Kislorod", "Karbonat angidrid", "Azot", "Argon", 1],
    ["Dunyoning eng katta maydonga ega materigi qaysi?", "Afrika", "Yevropa", "Osiyo", "Avstraliya", 2],
    ["Suvning kimyoviy formulasi to‘g‘ri ko‘rsatilgan javobni toping:", "CO2", "H2O", "O2", "NaCl", 1],
    ["Yer atmosferasida eng ko‘p uchraydigan gaz qaysi?", "Kislorod", "Azot", "Karbonat angidrid", "Geliy", 1],
    ["Algoritm tushunchasi qaysi buyuk alloma nomi bilan bog‘liq?", "Ibn Sino", "Al-Xorazmiy", "Mirzo Ulug‘bek", "Beruniy", 1],
    ["Dunyo bo‘yicha eng chuqur ko‘l qaysi?", "Kaspiy", "Boykal", "Viktoriya", "Aral", 1],
    ["Nur tezligi vakuumda taxminan sekundiga qancha?", "300 000 km/s", "150 000 km/s", "30 000 km/s", "1 000 000 km/s", 0]
  ],
  "riddles-kids": [
    ["O‘zi bitta, ko‘zi mingta. Bu nima?", "Ko‘zoynak", "G‘alvir (elak)", "Daraxt", "Yulduz", 1],
    ["Kunduzi uxlaydi, kechasi yonadi. Bu nima?", "Oy / Chiroq", "Quyosh", "Qor", "Muz", 0],
    ["Qanoti bor, uchmaydi, suv tagida suzadi. Bu nima?", "Baliq", "Qush", "Qurbaqa", "Toshbaqa", 0]
  ],
  "riddles-mid": [
    ["Katta oq saroy, eshigi ham yo‘q, derazasi ham yo‘q. Bu nima?", "Qovun", "Tuxum", "Tarvuz", "Uy", 1],
    ["Yurganda izi yo‘q, so‘yganda qoni yo‘q. Bu nima?", "Qayiq / Kema", "Chumoli", "Ilon", "Shamol", 0],
    ["Og‘zi yo‘q, tili bor, gapirgani hisobi bor. Bu nima?", "Kitob", "Radio", "Telefon", "Soat", 0]
  ],
  "riddles-hard": [
    ["Har qancha yesang ham to‘ymaysan, ushlab ham ololmaysan. Bu nima?", "Havo / Nafas", "Suv", "Shakar", "Non", 0],
    ["Senga tegishli, ammo boshqalar sendan ko‘proq ishlatadi. Bu nima?", "Sening isming", "Kiyiming", "Telefoning", "Kitobing", 0],
    ["Qanchalik ko‘p olsang, shunchalik kattalashadi. Bu nima?", "Chuqur (o‘ra)", "Tog‘", "Boylik", "Qor uyumi", 0]
  ]
};

// Rich Uzbek Word Anagrams (Guaranteed Latin Unicode)
const WORD_LIBRARY = [
  ["KITOB", "B O T I K", "Bilim xazinasi"],
  ["MAKTAB", "T A K M A B", "O‘qish va ta’lim maskani"],
  ["DARAXT", "T A R D A X", "Meva beruvchi yashil o‘simlik"],
  ["VATAN", "T A N A V", "Tug‘ilib o‘sgan muqaddas zamin"],
  ["QUYOSH", "S H Q O U Y", "Koinotimizdagi eng yorqin yulduz"],
  ["YULDUZ", "Z U L Y D U", "Tungi osmonda miltillovchi jism"],
  ["BILIM", "L I M I B", "Inson aqlini boyituvchi boylik"],
  ["SHAXMAT", "M A T S H A X", "Aql va strategiya o‘yini"],
  ["KOMPYUTER", "P O T E R K U Y M", "Zamonaviy hisoblash mashinasi"],
  ["DOSTLIK", "S T I K D O L", "Insonlar orasidagi samimiy rishta"]
];

// Virtual Shop Catalog
const SHOP_CATALOG = {
  avatars: [
    { id: "av_star", symbol: "✦", name: "Yulduzcha", price: 0, desc: "Boshlang‘ich yorqin nishon." },
    { id: "av_bolt", symbol: "⚡", name: "Chaqmoq", price: 50, desc: "Tezkor va shijoatli o‘yinchilar uchun." },
    { id: "av_rocket", symbol: "🚀", name: "Raketa", price: 100, desc: "Yuqori darajalarga uchuvchi avatar." },
    { id: "av_target", symbol: "🎯", name: "Mergan", price: 150, desc: "Aniq va xatosiz natijalar ramzi." },
    { id: "av_lion", symbol: "🦁", name: "Arslon", price: 200, desc: "Maydondagi yetakchi va jasur bilimdon." },
    { id: "av_dragon", symbol: "🐉", name: "Ajdaho", price: 300, desc: "Kuchli qudrat va olovli g‘alaba ramzi." },
    { id: "av_crown", symbol: "👑", name: "Qirol Toji", price: 400, desc: "Reyting peshqadami bo‘lganlar uchun." },
    { id: "av_robot", symbol: "🤖", name: "Kiber Robot", price: 500, desc: "Kelajak texnologiyasi va aql timsoli." },
    { id: "av_wizard", symbol: "🧙", name: "Sehrgar", price: 650, desc: "Barcha jumboqlarni oson yechuvchi donishmand." },
    { id: "av_diamond", symbol: "💎", name: "Olmos", price: 1000, desc: "Eng qimmatli va afsonaviy o‘yinchi nishoni." }
  ],
  titles: [
    { id: "ti_beginner", name: "Boshlovchi", price: 0, desc: "O‘yin olamiga ilk qadam qo‘ygan izlanuvchi." },
    { id: "ti_smart", name: "Zukko Fikr", price: 80, desc: "Har bir jumboqqa oqilona yondashuvchi." },
    { id: "ti_speed", name: "Tezkor Fikr", price: 120, desc: "Chaqqonlik va chaqmoqdek tezlik sohibi." },
    { id: "ti_master", name: "Grossmeyster", price: 250, desc: "Strategik tafakkur yetakchisi." },
    { id: "ti_cyber", name: "Kiber Chempion", price: 500, desc: "Texnologiya va intellektning uyg‘unligi." },
    { id: "ti_legend", name: "Afsonaviy O‘yinchi", price: 1000, desc: "ILK QADAM platformasining eng nufuzli unvoni." }
  ],
  frames: [
    { id: "none", name: "Oddiy ramka", price: 0, desc: "Klassik shaffof ramka." },
    { id: "frame-neon", name: "Neon Binafsha", price: 120, desc: "Ko‘zni qamamashtiruvchi binafsha yorug‘lik." },
    { id: "frame-gold", name: "Oltin Nur", price: 250, desc: "G‘oliblar uchun taraluvchi sof oltin nurlari." },
    { id: "frame-emerald", name: "Kiber Zumrad", price: 350, desc: "Kiberpank uslubidagi zumrad yashil nur." },
    { id: "frame-cosmic", name: "Kosmik Moviy", price: 500, desc: "Fazoviy energiyaga ega moviy galaktika nuri." }
  ],
  boosters: [
    { id: "booster_hint", name: "50/50 Maslahat", price: 30, desc: "Savolli o‘yinlarda 2 ta noto‘g‘ri javobni o‘chiradi.", count: 1 },
    { id: "booster_xp", name: "2x XP Kuchaytirgich", price: 50, desc: "Keyingi yakunlangan o‘yinda 2 barobar ko‘p tajriba beradi.", count: 1 }
  ]
};

// Achievements Specifications
const ACHIEVEMENTS_DEF = [
  { id: "ach_first_step", name: "Ilk Qadam", icon: "🌱", desc: "1 ta o‘yinni to‘liq yakunla.", uc: 25, xp: 20, check: p => (p.games || 0) >= 1 },
  { id: "ach_smart_5", name: "Zukko Bilimdon", icon: "🧠", desc: "5 ta o‘yinda g‘alabaga erish.", uc: 50, xp: 40, check: p => (p.wins || 0) >= 5 },
  { id: "ach_fast_reflex", name: "Tezkor Refleks", icon: "⚡", desc: "Refleks o‘yinida 380 ms dan tezroq natija ko‘rsat.", uc: 60, xp: 50, check: p => p.bestReflex && p.bestReflex <= 380 },
  { id: "ach_rich", name: "Boyvachcha", icon: "💰", desc: "Hisobingda 200 ta ILK UC to‘pla.", uc: 70, xp: 60, check: p => (p.uc || 0) >= 200 },
  { id: "ach_lvl_5", name: "Chempion", icon: "🏆", desc: "5-darajaga (LVL 5) yetib bor.", uc: 100, xp: 100, check: p => (p.xp || 0) >= 400 },
  { id: "ach_shopper", name: "Birinchi Xarid", icon: "🛒", desc: "Do‘kondan ilk buyumingni sotib ol.", uc: 35, xp: 30, check: p => (p.shopPurchases || 0) >= 1 },
  { id: "ach_streak_3", name: "O‘chmas Olov", icon: "🔥", desc: "3 kunlik kirish seriyasiga erish.", uc: 50, xp: 40, check: p => (p.streak || 1) >= 3 },
  { id: "ach_memory_master", name: "Xotira Fenomeni", icon: "🧩", desc: "Xotira o‘yinini muvaffaqiyatli yakunla.", uc: 40, xp: 35, check: p => (p.memoryWins || 0) >= 1 }
];

// ==========================================================================
// 2. WEB AUDIO SYNTHESIZER (Pure Zero-Dependency Native Audio)
// ==========================================================================

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem("ilkQadamSoundEnabled") !== "false";
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("ilkQadamSoundEnabled", this.enabled);
    return this.enabled;
  }

  play(type) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      switch (type) {
        case "click": {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(600, t);
          osc.frequency.exponentialRampToValueAtTime(300, t + 0.05);
          gain.gain.setValueAtTime(0.12, t);
          gain.gain.linearRampToValueAtTime(0.001, t + 0.05);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.05);
          break;
        }
        case "correct": {
          // Melodic major chord chime C5 -> E5 -> G5 -> C6
          const notes = [523.25, 659.25, 783.99, 1046.5];
          notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, t + idx * 0.07);
            gain.gain.setValueAtTime(0, t + idx * 0.07);
            gain.gain.linearRampToValueAtTime(0.18, t + idx * 0.07 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.07 + 0.35);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t + idx * 0.07);
            osc.stop(t + idx * 0.07 + 0.35);
          });
          break;
        }
        case "wrong": {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(220, t);
          osc.frequency.exponentialRampToValueAtTime(130, t + 0.22);
          gain.gain.setValueAtTime(0.15, t);
          gain.gain.linearRampToValueAtTime(0.001, t + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.22);
          break;
        }
        case "coin": {
          // Sparkling double-bell tone
          [987.77, 1318.51].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, t + idx * 0.08);
            gain.gain.setValueAtTime(0.2, t + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.28);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t + idx * 0.08);
            osc.stop(t + idx * 0.08 + 0.28);
          });
          break;
        }
        case "fanfare":
        case "levelUp": {
          // Celebratory fanfare progression
          const fanfare = [440, 554.37, 659.25, 880];
          fanfare.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, t + idx * 0.09);
            gain.gain.setValueAtTime(0.22, t + idx * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.09 + 0.45);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(t + idx * 0.09);
            osc.stop(t + idx * 0.09 + 0.45);
          });
          break;
        }
      }
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }
}

const sound = new AudioSynth();

// ==========================================================================
// 3. CONFETTI CELEBRATION ENGINE (60fps Canvas Particle Physics)
// ==========================================================================

class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animating = false;
    this.colors = ["#a07eff", "#4de2c7", "#f7d070", "#ff7688", "#67e8a9", "#60a5fa"];
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(count = 70) {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: window.innerWidth * 0.5 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.4,
        w: Math.random() * 8 + 5,
        h: Math.random() * 8 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.9) * 18,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        alpha: 1,
        gravity: 0.38
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.render();
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rot += p.vRot;
      p.alpha -= 0.012;

      if (p.alpha <= 0 || p.y > window.innerHeight) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rot * Math.PI) / 180);
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

let confetti = null;

// ==========================================================================
// 4. PLAYER DATA & STATE MANAGEMENT
// ==========================================================================

const $ = id => document.getElementById(id);
const STORAGE_KEY = "ilkQadamPlayerV2";
const ALL_PLAYERS_KEY = "ilkQadamDirectoryV2";

let player = null;
let activeGameIndex = null;
let activeRiddleQuestion = null;
let toastTimer = null;

// Multi-round Game Engine State
let multiGameState = {
  active: false,
  gameType: "",
  round: 1,
  totalRounds: 3,
  score: 0,
  questions: [],
  currentQuestion: null,
  answered: false,
  usedHint: false,
  memoryState: { pairs: [], revealed: [], matched: [] },
  reflexTimer: null,
  reflexStartTime: 0
};

// Date helper
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

// Level helper
function levelInfo(xp) {
  const level = Math.floor((xp || 0) / 100) + 1;
  const current = (xp || 0) % 100;
  return {
    level,
    current,
    next: 100,
    percent: Math.min(100, Math.floor((current / 100) * 100))
  };
}

// Current world helper
function currentWorld() {
  return AGE_WORLDS[player.age] || AGE_WORLDS["9-15"];
}

// Local Storage Loaders & Savers
function loadActivePlayer() {
  try {
    let p = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!p) {
      p = JSON.parse(localStorage.getItem("ilkQadamPlayerV1"));
    }
    return p;
  } catch (e) {
    return null;
  }
}

function loadAllPlayers() {
  try {
    return JSON.parse(localStorage.getItem(ALL_PLAYERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function savePlayer() {
  if (!player) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(player));

  // Sync to directory
  const all = loadAllPlayers();
  const idx = all.findIndex(p => p.name.toLowerCase() === player.name.toLowerCase());
  if (idx >= 0) {
    all[idx] = player;
  } else {
    all.push(player);
  }
  localStorage.setItem(ALL_PLAYERS_KEY, JSON.stringify(all));
}

// Daily Streak Processor
function processDailyStreak(p) {
  const today = todayStr();
  if (!p.lastVisitDate) {
    p.streak = 1;
    p.lastVisitDate = today;
    return;
  }
  if (p.lastVisitDate === today) {
    return; // Already visited today
  }

  // Calculate day difference
  const last = new Date(p.lastVisitDate);
  const now = new Date(today);
  const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    p.streak = (p.streak || 1) + 1;
  } else if (diffDays > 1) {
    p.streak = 1; // Streak broken
  }
  p.lastVisitDate = today;
}

// ==========================================================================
// 5. INITIALIZATION & ROUTING
// ==========================================================================

function init() {
  confetti = new ConfettiEngine("confettiCanvas");

  // Load sound state
  updateSoundButtonUI();
  $("soundToggle").addEventListener("click", () => {
    const isEnabled = sound.toggle();
    updateSoundButtonUI();
    showToast(isEnabled ? "🔊 Ovozlar yoqildi" : "🔇 Ovozlar o‘chirildi");
    sound.play("click");
  });

  // Check saved players on welcome screen
  renderSavedProfilesOnWelcome();

  // Load active player if exists
  const saved = loadActivePlayer();
  if (saved && saved.name && AGE_WORLDS[saved.age]) {
    enterDashboard(saved);
  }

  // Attach core UI events
  $("entryForm").addEventListener("submit", handleEntry);
  $("exploreGames").addEventListener("click", () => { sound.play("click"); showView("games"); });
  $("openShopHome").addEventListener("click", () => { sound.play("click"); showView("shop"); });
  $("changeUser").addEventListener("click", logout);
  $("logoutBtn").addEventListener("click", logout);
  $("dailyClaim").addEventListener("click", claimDailyBonus);
  $("profileShortcut").addEventListener("click", () => { sound.play("click"); showView("profile"); });
  $("ucPillShortcut").addEventListener("click", () => { sound.play("click"); showView("shop"); });

  // Navigation listeners
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      sound.play("click");
      showView(btn.dataset.view);
    });
  });

  // Shop Tabs
  document.querySelectorAll("[data-shop-cat]").forEach(tab => {
    tab.addEventListener("click", () => {
      sound.play("click");
      document.querySelectorAll("[data-shop-cat]").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderShopItems(tab.dataset.shopCat);
    });
  });

  // Profile Settings Listeners
  $("saveProfileSettings").addEventListener("click", saveProfileCustomization);
  $("exportDataBtn").addEventListener("click", exportPlayerData);
  $("importDataInput").addEventListener("change", importPlayerData);
  $("resetDataBtn").addEventListener("click", resetPlayerData);

  // Game Modal Listeners
  $("gameRestart").addEventListener("click", () => {
    sound.play("click");
    if (activeGameIndex !== null) launchGame(activeGameIndex);
  });
  $("gameNextOrFinish").addEventListener("click", handleNextOrFinishGame);
  $("useHintBtn").addEventListener("click", useHint);

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      sound.play("click");
      $(btn.dataset.close).classList.add("hidden");
    });
  });

  $("gameModal").addEventListener("click", e => {
    if (e.target === $("gameModal")) {
      $("gameModal").classList.add("hidden");
    }
  });

  // Game Library Filters & Search
  document.querySelectorAll(".filter-chip[data-filter]").forEach(chip => {
    chip.addEventListener("click", () => {
      sound.play("click");
      document.querySelectorAll(".filter-chip[data-filter]").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      renderGames(chip.dataset.filter, $("gameSearchInput").value);
    });
  });

  $("gameSearchInput").addEventListener("input", e => {
    const activeChip = document.querySelector(".filter-chip[data-filter].selected");
    const cat = activeChip ? activeChip.dataset.filter : "all";
    renderGames(cat, e.target.value);
  });

  // Leaderboard Tabs
  $("leaderFilterAll").addEventListener("click", () => {
    sound.play("click");
    $("leaderFilterAll").classList.add("selected");
    $("leaderFilterWorld").classList.remove("selected");
    renderLeaderboard("all");
  });
  $("leaderFilterWorld").addEventListener("click", () => {
    sound.play("click");
    $("leaderFilterWorld").classList.add("selected");
    $("leaderFilterAll").classList.remove("selected");
    renderLeaderboard("world");
  });

  // ILK AI Chatbot
  $("aiFab").addEventListener("click", openAI);
  $("aiClose").addEventListener("click", closeAI);
  $("aiOpenFooter").addEventListener("click", openAI);
  $("aiForm").addEventListener("submit", sendAI);

  document.querySelectorAll(".ai-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      sound.play("click");
      $("aiInput").value = chip.dataset.aiPrompt;
      sendAI(new Event("submit"));
    });
  });
}

function updateSoundButtonUI() {
  const icon = $("soundIcon");
  if (icon) {
    icon.textContent = sound.enabled ? "🔊" : "🔇";
  }
}

// Welcome Screen Saved Profiles
function renderSavedProfilesOnWelcome() {
  const all = loadAllPlayers();
  const list = $("savedProfilesList");
  const section = $("savedProfilesSection");
  if (!list || !section) return;

  if (all.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  list.innerHTML = all.map(p => `
    <button class="saved-profile-btn" data-player-name="${escapeHTML(p.name)}">
      <span class="btn-avatar">${p.avatar || "✦"}</span>
      <span>${escapeHTML(p.name)}</span>
      <small style="color:#bba8ff">(${p.age} yosh)</small>
    </button>
  `).join("");

  list.querySelectorAll("[data-player-name]").forEach(btn => {
    btn.addEventListener("click", () => {
      sound.play("click");
      const chosen = all.find(x => x.name === btn.dataset.playerName);
      if (chosen) {
        enterDashboard(chosen);
      }
    });
  });
}

function handleEntry(e) {
  e.preventDefault();
  const rawName = $("username").value.trim().replace(/\s+/g, "_");
  const age = $("ageGroup").value;

  if (rawName.length < 3) {
    $("entryError").textContent = "O‘yinchi nomi kamida 3 ta belgidan iborat bo‘lsin.";
    sound.play("wrong");
    return;
  }
  if (!/^[\p{L}\p{N}_-]+$/u.test(rawName)) {
    $("entryError").textContent = "Faqat harf, raqam, pastki chiziq yoki tire ishlatishingiz mumkin.";
    sound.play("wrong");
    return;
  }
  if (!AGE_WORLDS[age]) {
    $("entryError").textContent = "Iltimos, o‘zingizga mos yosh toifasini tanlang.";
    sound.play("wrong");
    return;
  }

  const all = loadAllPlayers();
  let existing = all.find(p => p.name.toLowerCase() === rawName.toLowerCase());

  if (existing) {
    existing.age = age; // update age if changed
    player = existing;
  } else {
    player = {
      name: rawName,
      age: age,
      uc: 0,
      xp: 0,
      games: 0,
      wins: 0,
      avatar: "✦",
      title: "Boshlovchi",
      frame: "none",
      inventory: {
        avatars: ["av_star"],
        titles: ["ti_beginner"],
        frames: ["none"],
        boosters: { hint: 1, xp: 0 }
      },
      streak: 1,
      lastVisitDate: todayStr(),
      claimedDate: "",
      missions: {},
      achievements: {},
      history: [],
      skills: { logic: 20, speed: 20, memory: 20, math: 20, vocab: 20 },
      created: Date.now()
    };
  }

  savePlayer();
  enterDashboard(player);
}

function enterDashboard(data) {
  player = {
    uc: 0,
    xp: 0,
    games: 0,
    wins: 0,
    avatar: "✦",
    title: "Boshlovchi",
    frame: "none",
    streak: 1,
    claimedDate: "",
    missions: {},
    achievements: {},
    history: [],
    ...data
  };

  player.inventory = player.inventory || {};
  player.inventory.avatars = player.inventory.avatars || ["av_star"];
  player.inventory.titles = player.inventory.titles || ["ti_beginner"];
  player.inventory.frames = player.inventory.frames || ["none"];
  player.inventory.boosters = player.inventory.boosters || { hint: 1, xp: 0 };
  player.skills = player.skills || { logic: 20, speed: 20, memory: 20, math: 20, vocab: 20 };

  processDailyStreak(player);
  savePlayer();

  $("welcome").classList.add("hidden");
  $("dashboard").classList.remove("hidden");
  $("mobileNav").classList.remove("hidden");
  $("aiFab").classList.remove("hidden");

  document.body.className = currentWorld().theme;

  renderAll();
  showView("home");

  // Welcome sound
  sound.play("coin");
}

function logout() {
  sound.play("click");
  player = null;
  localStorage.removeItem(STORAGE_KEY);
  $("dashboard").classList.add("hidden");
  $("mobileNav").classList.add("hidden");
  $("aiFab").classList.add("hidden");
  $("aiPanel").classList.add("hidden");
  $("welcome").classList.remove("hidden");
  $("username").value = "";
  $("ageGroup").value = "";
  $("entryError").textContent = "";
  renderSavedProfilesOnWelcome();
}

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  const targetView = $("view-" + name);
  if (targetView) targetView.classList.add("active-view");

  document.querySelectorAll(".nav-item[data-view], .mobile-nav [data-view]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === name);
  });

  const titles = {
    home: "Bosh sahifa",
    games: "O‘yinlar",
    shop: "Do‘kon",
    missions: "Topshiriqlar",
    achievements: "Yutuqlar",
    analytics: "Tahlil & Aql",
    leaderboard: "Reyting",
    profile: "Profil"
  };

  $("crumbName").textContent = titles[name] || name;

  if (name === "shop") renderShopItems("avatars");
  if (name === "achievements") renderAchievements();
  if (name === "analytics") renderAnalytics();
  if (name === "leaderboard") renderLeaderboard("all");
  if (name === "profile") renderProfile();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// 6. RENDER MASTER
// ==========================================================================

function renderAll() {
  if (!player) return;
  const w = currentWorld();
  const lv = levelInfo(player.xp || 0);

  // Topbar
  $("worldLabel").textContent = w.name;
  $("greetingName").textContent = player.name;
  $("topUsername").textContent = player.name;
  $("topTitle").textContent = player.title || "Boshlovchi";
  $("topAvatar").textContent = player.avatar || "✦";
  $("ucBalance").textContent = player.uc || 0;
  $("streakCount").textContent = player.streak || 1;

  // Hero Section - Fixed unclosed <em> tag bug!
  const heroWords = w.hero.split(" ");
  if (heroWords.length > 2) {
    $("heroTitle").innerHTML = `${escapeHTML(heroWords[0])} <em>${escapeHTML(heroWords[1])}</em> ${escapeHTML(heroWords.slice(2).join(" "))}`;
  } else {
    $("heroTitle").textContent = w.hero;
  }
  $("heroDescription").textContent = w.desc;
  $("heroOrbSymbol").textContent = w.orb || "✦";

  // Quick Stats
  $("statUc").textContent = player.uc || 0;
  $("statXp").textContent = (player.xp || 0) + " XP";
  $("statGames").textContent = player.games || 0;
  $("statWins").textContent = player.wins || 0;
  const winRate = player.games ? Math.round((player.wins / player.games) * 100) : 0;
  $("statWinRate").textContent = `${winRate}% samaradorlik`;
  $("levelText").textContent = `${lv.level}-daraja`;

  // Progress Bar
  $("levelBadge").textContent = "LVL " + lv.level;
  $("xpProgressText").textContent = `${lv.current} / 100 XP`;
  $("xpPercent").textContent = `${lv.percent}%`;
  $("xpBar").style.width = `${lv.percent}%`;
  const needed = 100 - lv.current;
  $("nextLevelMsg").textContent = `Keyingi darajaga yetish uchun yana ${needed} XP to‘plang.`;

  // Daily Claim
  const claimedToday = player.claimedDate === todayStr();
  const dailyRewardAmount = 20 + (player.streak || 1) * 5;
  $("dailyRewardAmount").textContent = `+${dailyRewardAmount} UC`;
  $("dailyClaim").disabled = claimedToday;
  $("dailyClaim").textContent = claimedToday ? "Olingan ✓" : "Bonusni olish";
  $("dailyStatus").textContent = claimedToday
    ? "Bugungi bonus olindi. Ertaga yangi seriya bonusi kuting!"
    : `Har kungi kirish seriyangiz: ${player.streak} kun!`;

  // Render Sub-Views
  renderHomeBrainSkills();
  renderFeaturedGames();
  renderGames("all");
  renderMissions();
  checkAchievements();
}

// Render Mini Brain Skills Grid on Home
function renderHomeBrainSkills() {
  const container = $("homeSkillsGrid");
  if (!container) return;
  const skills = player.skills || { logic: 20, speed: 20, memory: 20, math: 20, vocab: 20 };

  const items = [
    { name: "Mantiq", icon: "🧠", val: skills.logic || 20 },
    { name: "Tezlik", icon: "⚡", val: skills.speed || 20 },
    { name: "Xotira", icon: "🧩", val: skills.memory || 20 },
    { name: "Hisob", icon: "∑", val: skills.math || 20 },
    { name: "Lug‘at", icon: "Aa", val: skills.vocab || 20 }
  ];

  container.innerHTML = items.map(s => `
    <div class="skill-mini-card">
      <div class="skill-mini-icon">${s.icon}</div>
      <b>${s.name}</b>
      <span>${Math.min(100, s.val)}%</span>
    </div>
  `).join("");
}

// Daily Claim Bonus
function claimDailyBonus() {
  if (player.claimedDate === todayStr()) return;
  const bonus = 20 + (player.streak || 1) * 5;
  player.claimedDate = todayStr();
  player.uc = (player.uc || 0) + bonus;
  player.xp = (player.xp || 0) + 15;
  savePlayer();
  renderAll();

  sound.play("fanfare");
  confetti.fire(60);
  showToast(`Kunlik bonus: +${bonus} ILK UC va +15 XP qo‘shildi!`);
}

// ==========================================================================
// 7. GAMES CATALOG & RENDERING
// ==========================================================================

function gameCardHTML(g, i) {
  const glowColors = ["#a88aff", "#4de2c7", "#60a5fa", "#f59e0b", "#ec4899", "#10b981"];
  const color = glowColors[i % glowColors.length];
  return `
    <article class="game-card" data-game="${i}" style="--card-glow: ${color}">
      <div class="game-symbol">${g[2]}</div>
      <h4>${escapeHTML(g[0])}</h4>
      <p>${escapeHTML(g[1])}</p>
      <div class="game-meta">
        <span>${escapeHTML(g[3])} · 3 daqiqa</span>
        <span class="game-reward">✦ +${g[5]} UC</span>
      </div>
    </article>
  `;
}

function attachGameClickEvents(container) {
  container.querySelectorAll("[data-game]").forEach(card => {
    card.addEventListener("click", () => {
      sound.play("click");
      launchGame(Number(card.dataset.game));
    });
  });
}

function renderFeaturedGames() {
  const games = currentWorld().games.slice(0, 3);
  const container = $("featuredGames");
  container.innerHTML = games.map((g, i) => gameCardHTML(g, i)).join("");
  attachGameClickEvents(container);
}

function renderGames(filter = "all", searchQuery = "") {
  const games = currentWorld().games;
  let filtered = filter === "all" ? games : games.filter(g => g[3] === filter);

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(g => g[0].toLowerCase().includes(q) || g[1].toLowerCase().includes(q));
  }

  $("gameCount").textContent = `${filtered.length} TA O‘YIN`;
  const container = $("allGames");
  container.innerHTML = filtered.length > 0
    ? filtered.map((g, i) => gameCardHTML(g, games.indexOf(g))).join("")
    : `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--muted)">Hech qanday o‘yin topilmadi.</div>`;
  attachGameClickEvents(container);
}

// ==========================================================================
// 8. INTERACTIVE MULTI-ROUND GAME ENGINE
// ==========================================================================

function launchGame(index) {
  const g = currentWorld().games[index];
  if (!g) return;
  activeGameIndex = index;

  multiGameState = {
    active: true,
    gameType: g[4],
    round: 1,
    totalRounds: (g[4] === "memory" || g[4] === "reflex") ? 1 : 3,
    score: 0,
    questions: [],
    currentQuestion: null,
    answered: false,
    usedHint: false,
    memoryState: { pairs: [], revealed: [], matched: [] },
    reflexTimer: null,
    reflexStartTime: 0
  };

  $("gameCategory").textContent = g[3].toUpperCase();
  $("gameReward").textContent = `✦ +${g[5]} UC`;
  $("gameTitle").textContent = g[0];
  $("gameInstructions").textContent = g[1];
  $("gameFeedback").textContent = "";
  $("gameNextOrFinish").disabled = false;
  $("gameNextOrFinish").innerHTML = `Keyingi <span>→</span>`;

  // Update Hint button availability
  updateHintButton();

  $("gameModal").classList.remove("hidden");
  loadRound();
}

function updateHintButton() {
  const hintBtn = $("useHintBtn");
  const hintsCount = player.inventory?.boosters?.hint || 0;
  $("hintCountBadge").textContent = hintsCount;

  if (multiGameState.gameType.startsWith("quiz") || multiGameState.gameType.startsWith("riddles")) {
    hintBtn.classList.remove("hidden");
    hintBtn.disabled = hintsCount <= 0 || multiGameState.answered || multiGameState.usedHint;
  } else {
    hintBtn.classList.add("hidden");
  }
}

function useHint() {
  if (multiGameState.usedHint || (player.inventory?.boosters?.hint || 0) <= 0) return;
  player.inventory.boosters.hint--;
  multiGameState.usedHint = true;
  savePlayer();
  updateHintButton();
  sound.play("coin");

  // Disable 2 wrong options in quiz
  const q = multiGameState.currentQuestion;
  if (q && q.correct !== undefined) {
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== q.correct);
    // Shuffle wrong indices
    wrongIndices.sort(() => Math.random() - 0.5);
    const toHide = wrongIndices.slice(0, 2);
    const options = $("gameStage").querySelectorAll(".quiz-option");
    toHide.forEach(idx => {
      if (options[idx]) options[idx].classList.add("hidden-50");
    });
    showToast("💡 50/50 Maslahat: 2 ta noto‘g‘ri javob olib tashlandi!");
  }
}

function loadRound() {
  multiGameState.answered = false;
  multiGameState.usedHint = false;
  $("gameFeedback").textContent = "";
  $("gameRoundIndicator").textContent = `Bosqich: ${multiGameState.round} / ${multiGameState.totalRounds}`;
  $("gameScoreIndicator").textContent = `To‘g‘ri: ${multiGameState.score}`;
  updateHintButton();

  if (multiGameState.round === multiGameState.totalRounds) {
    $("gameNextOrFinish").innerHTML = `Natijani yakunlash <span>✓</span>`;
  } else {
    $("gameNextOrFinish").innerHTML = `Keyingi <span>→</span>`;
  }

  buildGameRound(multiGameState.gameType);
}

function buildGameRound(type) {
  const stage = $("gameStage");

  // A. QUIZ OR RIDDLE
  if (type.startsWith("quiz") || type.startsWith("riddles")) {
    const list = QUIZZES[type] || QUIZZES["quiz-general"];
    const item = list[Math.floor(Math.random() * list.length)];
    multiGameState.currentQuestion = {
      q: item[0],
      options: item.slice(1, 5),
      correct: item[5]
    };

    stage.innerHTML = `
      <div style="width: 100%">
        <div class="quiz-question">${escapeHTML(item[0])}</div>
        <div class="quiz-options">
          ${item.slice(1, 5).map((opt, i) => `
            <button class="quiz-option" data-answer="${i}">${escapeHTML(opt)}</button>
          `).join("")}
        </div>
      </div>
    `;

    stage.querySelectorAll("[data-answer]").forEach(btn => {
      btn.addEventListener("click", () => answerQuizRound(Number(btn.dataset.answer)));
    });
    return;
  }

  // B. ARITHMETIC / MATH
  if (type === "math-easy" || type === "math-hard") {
    const isHard = type === "math-hard";
    const ops = isHard ? ["+", "-", "×"] : ["+", "-"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, answer;

    if (op === "+") {
      a = isHard ? Math.floor(Math.random() * 60) + 15 : Math.floor(Math.random() * 15) + 3;
      b = isHard ? Math.floor(Math.random() * 50) + 12 : Math.floor(Math.random() * 12) + 2;
      answer = a + b;
    } else if (op === "-") {
      a = isHard ? Math.floor(Math.random() * 70) + 30 : Math.floor(Math.random() * 18) + 8;
      b = Math.floor(Math.random() * (a - 2)) + 1;
      answer = a - b;
    } else {
      a = Math.floor(Math.random() * 12) + 3;
      b = Math.floor(Math.random() * 9) + 2;
      answer = a * b;
    }

    multiGameState.currentQuestion = { answer };

    stage.innerHTML = `
      <div>
        <div class="quiz-question">${a} ${op} ${b} = ?</div>
        <input class="game-input" id="mathAnswerInput" type="number" placeholder="Javobni kiriting..." autocomplete="off">
        <br>
        <button class="primary-btn" id="mathCheckBtn" style="margin-top: 14px">Tasdiqlash</button>
      </div>
    `;

    $("mathAnswerInput").focus();
    $("mathAnswerInput").addEventListener("keydown", e => {
      if (e.key === "Enter") $("mathCheckBtn").click();
    });

    $("mathCheckBtn").addEventListener("click", () => {
      if (multiGameState.answered) return;
      const input = $("mathAnswerInput").value.trim();
      if (input === "") {
        $("gameFeedback").textContent = "Iltimos, avval javobni kiriting!";
        $("gameFeedback").style.color = "var(--error)";
        return;
      }
      const isCorrect = Number(input) === answer;
      gradeRound(isCorrect, `Ajoyib! To‘g‘ri javob: ${answer}`, `To‘g‘ri javob ${answer} edi.`);
    });
    return;
  }

  // C. NUMBER SEQUENCE
  if (type === "sequence") {
    const start = Math.floor(Math.random() * 8) + 2;
    const step = Math.floor(Math.random() * 6) + 2;
    const seq = [start, start + step, start + 2 * step, start + 3 * step];
    const answer = start + 4 * step;

    multiGameState.currentQuestion = { answer };

    stage.innerHTML = `
      <div>
        <div class="muted small" style="margin-bottom: 6px">Qonuniyatni topib, qatorni davom ettiring:</div>
        <div class="sequence-display">${seq.join(" · ")} · ?</div>
        <input class="game-input" id="seqAnswerInput" type="number" placeholder="Keyingi son..." autocomplete="off">
        <br>
        <button class="primary-btn" id="seqCheckBtn" style="margin-top: 14px">Tekshirish</button>
      </div>
    `;

    $("seqAnswerInput").focus();
    $("seqAnswerInput").addEventListener("keydown", e => {
      if (e.key === "Enter") $("seqCheckBtn").click();
    });

    $("seqCheckBtn").addEventListener("click", () => {
      if (multiGameState.answered) return;
      const val = $("seqAnswerInput").value.trim();
      if (val === "") return;
      const isCorrect = Number(val) === answer;
      gradeRound(isCorrect, `Barakalla! Keyingi son: ${answer}`, `To‘g‘ri javob: ${answer}`);
    });
    return;
  }

  // D. WORD ANAGRAM
  if (type === "word") {
    const item = WORD_LIBRARY[Math.floor(Math.random() * WORD_LIBRARY.length)];
    const word = item[0];
    const scrambled = item[1];
    const hint = item[2];

    multiGameState.currentQuestion = { word };

    // Scramble letters for clickable bubbles
    const letters = word.split("").sort(() => Math.random() - 0.5);

    stage.innerHTML = `
      <div>
        <div class="muted small" style="margin-bottom: 4px">💡 Maslahat: ${escapeHTML(hint)}</div>
        <div class="sequence-display" style="letter-spacing: 6px">${scrambled}</div>
        <div class="word-bubbles-row">
          ${letters.map((l, idx) => `<button class="letter-bubble" data-letter="${l}">${l}</button>`).join("")}
        </div>
        <input class="game-input" id="wordAnswerInput" placeholder="Harflarni tering yoki yozing..." autocomplete="off">
        <br>
        <div style="display: flex; gap: 8px; justify-content: center; margin-top: 14px">
          <button class="outline-btn" id="wordClearBtn">Tozalash</button>
          <button class="primary-btn" id="wordCheckBtn">Tekshirish</button>
        </div>
      </div>
    `;

    stage.querySelectorAll("[data-letter]").forEach(btn => {
      btn.addEventListener("click", () => {
        sound.play("click");
        $("wordAnswerInput").value += btn.dataset.letter;
      });
    });

    $("wordClearBtn").addEventListener("click", () => {
      $("wordAnswerInput").value = "";
    });

    $("wordCheckBtn").addEventListener("click", () => {
      if (multiGameState.answered) return;
      const input = $("wordAnswerInput").value.trim().toUpperCase();
      const isCorrect = input === word;
      gradeRound(isCorrect, `To‘g‘ri! Yashiringan so‘z: ${word}`, `To‘g‘ri so‘z: ${word}`);
    });
    return;
  }

  // E. MEMORY GAME (3D Flip Cards)
  if (type === "memory") {
    const icons = ["⭐", "🚀", "💎", "🦁", "🎯", "⚡"];
    const chosen = icons.slice(0, 4);
    const pairs = [...chosen, ...chosen].sort(() => Math.random() - 0.5);

    multiGameState.memoryState = { pairs, revealed: [], matched: [] };

    stage.innerHTML = `
      <div>
        <p class="muted small" style="margin-bottom: 14px">Bir xil rasmlarni toping. Har safar 2 ta kartani oching.</p>
        <div class="memory-grid">
          ${pairs.map((_, i) => `<button class="memory-tile" data-tile="${i}">?</button>`).join("")}
        </div>
      </div>
    `;

    stage.querySelectorAll("[data-tile]").forEach(btn => {
      btn.addEventListener("click", () => flipMemoryTile(Number(btn.dataset.tile)));
    });
    return;
  }

  // F. SPEED REFLEX (Chaqqon Reaksiya)
  if (type === "reflex") {
    stage.innerHTML = `
      <div>
        <p class="muted small" style="margin-bottom: 12px">Nishon paydo bo‘lishi bilan uning ustiga imkon qadar tez bosing!</p>
        <div class="reflex-arena" id="reflexArena">
          <div style="position: absolute; top: 40%; left: 0; right: 0; color: var(--muted); font-size: 13px" id="reflexWaitMsg">
            Tayyor turing...
          </div>
        </div>
      </div>
    `;

    const delay = Math.floor(Math.random() * 1800) + 1000;
    multiGameState.reflexTimer = setTimeout(() => {
      spawnReflexTarget();
    }, delay);
    return;
  }

  // G. STROOP TEST (Ranglar Jangi)
  if (type === "stroop") {
    const colors = [
      { name: "QIZIL", color: "#f87171" },
      { name: "YASHIL", color: "#4ade80" },
      { name: "KO‘K", color: "#60a5fa" },
      { name: "SARIQ", color: "#facc15" }
    ];

    const wordItem = colors[Math.floor(Math.random() * colors.length)];
    // Pick different ink color
    const otherColors = colors.filter(c => c.name !== wordItem.name);
    const inkItem = otherColors[Math.floor(Math.random() * otherColors.length)];

    multiGameState.currentQuestion = { correctName: inkItem.name };

    stage.innerHTML = `
      <div>
        <div class="muted small">DIQQAT: Matn nima deb yozilganiga EMAS, uning RANGIGA qarab tanlang!</div>
        <div class="stroop-word" style="color: ${inkItem.color}">${wordItem.name}</div>
        <div class="stroop-buttons">
          ${colors.map(c => `
            <button class="stroop-btn" data-color="${c.name}">${c.name}</button>
          `).join("")}
        </div>
      </div>
    `;

    stage.querySelectorAll("[data-color]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (multiGameState.answered) return;
        const chosen = btn.dataset.color;
        const isCorrect = chosen === inkItem.name;
        gradeRound(isCorrect, "Ajoyib e’tibor! Rang to‘g‘ri topildi.", `Noto‘g‘ri! Matn rangi ${inkItem.name} edi.`);
      });
    });
  }
}

// Memory Tile Handler
function flipMemoryTile(i) {
  const mem = multiGameState.memoryState;
  if (mem.matched.includes(i) || mem.revealed.includes(i) || mem.revealed.length >= 2) return;

  sound.play("click");
  mem.revealed.push(i);
  const tiles = $("gameStage").querySelectorAll("[data-tile]");
  tiles[i].textContent = mem.pairs[i];
  tiles[i].classList.add("revealed");

  if (mem.revealed.length === 2) {
    const [a, b] = mem.revealed;
    if (mem.pairs[a] === mem.pairs[b]) {
      // Match found
      mem.matched.push(a, b);
      tiles[a].classList.add("matched");
      tiles[b].classList.add("matched");
      mem.revealed = [];
      sound.play("coin");

      if (mem.matched.length === mem.pairs.length) {
        multiGameState.score = 1;
        multiGameState.answered = true;
        player.memoryWins = (player.memoryWins || 0) + 1;
        savePlayer();
        sound.play("fanfare");
        confetti.fire(50);
        $("gameFeedback").textContent = "✓ Ajoyib! Barcha kartalarni juftlab topdingiz!";
        $("gameFeedback").style.color = "var(--success)";
        $("gameNextOrFinish").innerHTML = `Natijani yakunlash <span>✓</span>`;
      }
    } else {
      sound.play("wrong");
      setTimeout(() => {
        tiles[a].textContent = "?";
        tiles[b].textContent = "?";
        tiles[a].classList.remove("revealed");
        tiles[b].classList.remove("revealed");
        mem.revealed = [];
      }, 700);
    }
  }
}

// Reflex Target Spawner
function spawnReflexTarget() {
  const arena = $("reflexArena");
  if (!arena) return;
  const waitMsg = $("reflexWaitMsg");
  if (waitMsg) waitMsg.remove();

  const symbols = ["⚡", "🎯", "⭐", "🚀"];
  const sym = symbols[Math.floor(Math.random() * symbols.length)];

  const target = document.createElement("div");
  target.className = "reflex-target";
  target.textContent = sym;

  const maxX = arena.clientWidth - 60;
  const maxY = arena.clientHeight - 60;
  const posX = Math.max(10, Math.floor(Math.random() * maxX));
  const posY = Math.max(10, Math.floor(Math.random() * maxY));

  target.style.left = posX + "px";
  target.style.top = posY + "px";

  multiGameState.reflexStartTime = performance.now();
  sound.play("click");

  target.addEventListener("click", () => {
    const reactionTime = Math.round(performance.now() - multiGameState.reflexStartTime);
    target.remove();

    if (!player.bestReflex || reactionTime < player.bestReflex) {
      player.bestReflex = reactionTime;
      savePlayer();
    }

    let quality = "Ajoyib tezlik!";
    if (reactionTime < 300) quality = "⚡ Chaqmoqdek tez!";
    else if (reactionTime < 450) quality = "🚀 Juda chaqqon!";
    else quality = "Yaxshi refleks!";

    multiGameState.score = 1;
    multiGameState.answered = true;
    sound.play("correct");

    $("gameFeedback").innerHTML = `✓ ${quality} Reaksiya vaqti: <b>${reactionTime} ms</b>`;
    $("gameFeedback").style.color = "var(--success)";
    $("gameNextOrFinish").innerHTML = `Natijani yakunlash <span>✓</span>`;
  });

  arena.appendChild(target);
}

// Quiz Round Answering
function answerQuizRound(index) {
  if (multiGameState.answered) return;
  const q = multiGameState.currentQuestion;
  const isCorrect = index === q.correct;
  const buttons = $("gameStage").querySelectorAll(".quiz-option");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    else if (i === index && !isCorrect) btn.classList.add("wrong");
  });

  gradeRound(isCorrect, "To‘g‘ri javob! Barakalla!", "Noto‘g‘ri javob. Keyingi safar e’tiborliroq bo‘ling!");
}

function gradeRound(isCorrect, successMsg, failMsg) {
  multiGameState.answered = true;
  if (isCorrect) {
    multiGameState.score++;
    sound.play("correct");
    $("gameFeedback").textContent = "✓ " + successMsg;
    $("gameFeedback").style.color = "var(--success)";
  } else {
    sound.play("wrong");
    $("gameFeedback").textContent = "✕ " + failMsg;
    $("gameFeedback").style.color = "var(--error)";
  }

  $("gameScoreIndicator").textContent = `To‘g‘ri: ${multiGameState.score}`;
}

// Modal Next or Finish Handler
function handleNextOrFinishGame() {
  sound.play("click");
  if (!multiGameState.answered && multiGameState.gameType !== "memory") {
    $("gameFeedback").textContent = "Avval topshiriqqa javob bering!";
    $("gameFeedback").style.color = "var(--error)";
    return;
  }

  if (multiGameState.round < multiGameState.totalRounds) {
    multiGameState.round++;
    loadRound();
  } else {
    finishGame();
  }
}

// Finalize Game & Award Points
function finishGame() {
  if (activeGameIndex === null) return;
  const g = currentWorld().games[activeGameIndex];

  const won = multiGameState.score > 0;
  const perfect = multiGameState.score === multiGameState.totalRounds;

  let baseReward = won ? g[5] : Math.max(3, Math.floor(g[5] / 4));
  let xpReward = won ? 30 : 10;

  if (perfect && multiGameState.totalRounds > 1) {
    baseReward += 10; // Perfect score bonus
    xpReward += 15;
  }

  // 2x XP Booster Check
  if (player.inventory?.boosters?.xp > 0) {
    xpReward *= 2;
    player.inventory.boosters.xp--;
    showToast("⚡ 2x XP Kuchaytirgich ishlatildi!");
  }

  // Update Player Stats
  player.uc = (player.uc || 0) + baseReward;
  player.xp = (player.xp || 0) + xpReward;
  player.games = (player.games || 0) + 1;
  if (won) player.wins = (player.wins || 0) + 1;

  // Update Brain Skills
  player.skills = player.skills || { logic: 20, speed: 20, memory: 20, math: 20, vocab: 20 };
  const cat = g[3];
  if (cat === "Aql") player.skills.logic = Math.min(100, (player.skills.logic || 20) + 3);
  if (cat === "Tezlik") player.skills.speed = Math.min(100, (player.skills.speed || 20) + 3);
  if (cat === "Xotira") player.skills.memory = Math.min(100, (player.skills.memory || 20) + 3);
  if (cat === "Strategiya") player.skills.logic = Math.min(100, (player.skills.logic || 20) + 2);

  // History Log
  player.history = player.history || [];
  player.history.unshift({
    name: g[0],
    category: g[3],
    reward: baseReward,
    xp: xpReward,
    won: won,
    date: todayStr()
  });
  player.history = player.history.slice(0, 20);

  savePlayer();
  renderAll();

  // Celebration
  if (won) {
    sound.play("fanfare");
    confetti.fire(70);
  } else {
    sound.play("coin");
  }

  $("gameFeedback").innerHTML = `<b>Natija:</b> ${multiGameState.score}/${multiGameState.totalRounds} to‘g‘ri · <b>+${baseReward} UC</b> va <b>+${xpReward} XP</b> olindi!`;
  $("gameFeedback").style.color = "var(--success)";
  $("gameNextOrFinish").disabled = true;
  $("gameNextOrFinish").textContent = "Saqlandi ✓";

  showToast(`+${baseReward} ILK UC va +${xpReward} XP hisobingizga qo‘shildi!`);
}

// ==========================================================================
// 9. VIRTUAL SHOP (Do'kon)
// ==========================================================================

function renderShopItems(category = "avatars") {
  const container = $("shopGrid");
  if (!container) return;

  $("shopBalanceDisplay").textContent = `${player.uc || 0} UC`;
  const items = SHOP_CATALOG[category] || [];
  player.inventory = player.inventory || { avatars: ["av_star"], titles: ["ti_beginner"], frames: ["none"], boosters: { hint: 0, xp: 0 } };

  container.innerHTML = items.map(item => {
    let owned = false;
    let equipped = false;

    if (category === "avatars") {
      owned = player.inventory.avatars?.includes(item.id);
      equipped = player.avatar === item.symbol;
    } else if (category === "titles") {
      owned = player.inventory.titles?.includes(item.id);
      equipped = player.title === item.name;
    } else if (category === "frames") {
      owned = player.inventory.frames?.includes(item.id);
      equipped = player.frame === item.id;
    } else if (category === "boosters") {
      owned = false; // consumables can always be bought
    }

    let buttonHtml = "";
    if (equipped) {
      buttonHtml = `<button class="shop-btn equipped" disabled>O‘rnatilgan ✓</button>`;
    } else if (owned) {
      buttonHtml = `<button class="shop-btn equip" data-equip-cat="${category}" data-item-id="${item.id}">O‘rnatish</button>`;
    } else {
      const canAfford = (player.uc || 0) >= item.price;
      buttonHtml = `<button class="shop-btn buy" data-buy-cat="${category}" data-item-id="${item.id}" ${canAfford ? "" : "disabled"}>
        ${item.price === 0 ? "Bepul" : `Sotib olish (${item.price} UC)`}
      </button>`;
    }

    const preview = item.symbol || (category === "frames" ? "✨" : category === "titles" ? "🏷️" : "⚡");

    return `
      <article class="shop-card">
        <div class="shop-item-preview">${preview}</div>
        <h4>${escapeHTML(item.name)}</h4>
        <p>${escapeHTML(item.desc)}</p>
        <div class="shop-price-tag">✦ ${item.price} UC</div>
        ${buttonHtml}
      </article>
    `;
  }).join("");

  // Buy Listeners
  container.querySelectorAll("[data-buy-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      sound.play("click");
      buyShopItem(btn.dataset.buyCat, btn.dataset.itemId);
    });
  });

  // Equip Listeners
  container.querySelectorAll("[data-equip-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      sound.play("click");
      equipShopItem(btn.dataset.equipCat, btn.dataset.itemId);
    });
  });
}

function buyShopItem(category, itemId) {
  const catalog = SHOP_CATALOG[category];
  const item = catalog.find(x => x.id === itemId);
  if (!item) return;

  if ((player.uc || 0) < item.price) {
    showToast("Mablag‘ yetarli emas! O‘yinlarda qatnashib ko‘proq UC to‘plang.");
    sound.play("wrong");
    return;
  }

  player.uc -= item.price;
  player.shopPurchases = (player.shopPurchases || 0) + 1;

  if (category === "avatars") {
    player.inventory.avatars = player.inventory.avatars || [];
    if (!player.inventory.avatars.includes(itemId)) player.inventory.avatars.push(itemId);
    player.avatar = item.symbol;
  } else if (category === "titles") {
    player.inventory.titles = player.inventory.titles || [];
    if (!player.inventory.titles.includes(itemId)) player.inventory.titles.push(itemId);
    player.title = item.name;
  } else if (category === "frames") {
    player.inventory.frames = player.inventory.frames || [];
    if (!player.inventory.frames.includes(itemId)) player.inventory.frames.push(itemId);
    player.frame = item.id;
  } else if (category === "boosters") {
    player.inventory.boosters = player.inventory.boosters || { hint: 0, xp: 0 };
    if (itemId === "booster_hint") player.inventory.boosters.hint += 1;
    if (itemId === "booster_xp") player.inventory.boosters.xp += 1;
  }

  savePlayer();
  renderAll();
  renderShopItems(category);

  sound.play("fanfare");
  confetti.fire(50);
  showToast(`“${item.name}” muvaffaqiyatli xarid qilindi!`);
}

function equipShopItem(category, itemId) {
  const catalog = SHOP_CATALOG[category];
  const item = catalog.find(x => x.id === itemId);
  if (!item) return;

  if (category === "avatars") player.avatar = item.symbol;
  if (category === "titles") player.title = item.name;
  if (category === "frames") player.frame = item.id;

  savePlayer();
  renderAll();
  renderShopItems(category);

  sound.play("coin");
  showToast(`“${item.name}” o‘rnatildi!`);
}

// ==========================================================================
// 10. MISSIONS & ACHIEVEMENTS
// ==========================================================================

function renderMissions() {
  const items = [
    { title: "Birinchi Qadam", desc: "Bitta o‘yinni to‘liq yakunlang.", uc: 20, done: (player.games || 0) >= 1, sym: "🌱" },
    { title: "Faol O‘yinchi", desc: "Jami 3 ta o‘yinda ishtirok eting.", uc: 30, done: (player.games || 0) >= 3, sym: "⚡" },
    { title: "Tajriba Sohibi", desc: "Jami 100 XP to‘plang.", uc: 40, done: (player.xp || 0) >= 100, sym: "✦" },
    { title: "G‘alaba Sari", desc: "Kamida bitta o‘yinda g‘alaba qozoning.", uc: 25, done: (player.wins || 0) >= 1, sym: "♜" },
    { title: "Seriya Qo‘riqchisi", desc: "Kunlik seriyani davom ettiring.", uc: 35, done: (player.streak || 1) >= 2, sym: "🔥" }
  ];

  player.missions = player.missions || {};
  let completedCount = 0;

  $("missionList").innerHTML = items.map((m, i) => {
    const isClaimed = !!player.missions[i];
    if (isClaimed) completedCount++;

    return `
      <article class="mission-card">
        <div class="mission-symbol">${m.sym}</div>
        <div class="mission-info">
          <b>${escapeHTML(m.title)}</b>
          <p>${escapeHTML(m.desc)}</p>
        </div>
        <span class="game-reward">✦ +${m.uc} UC</span>
        <button class="claim-btn" data-mission="${i}" ${m.done && !isClaimed ? "" : "disabled"}>
          ${isClaimed ? "Olingan ✓" : m.done ? "Olish" : "Bajarilmagan"}
        </button>
      </article>
    `;
  }).join("");

  $("missionProgressCount").textContent = `${completedCount} / ${items.length} BAJARILDI`;

  $("missionList").querySelectorAll("[data-mission]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.mission);
      const mission = items[idx];
      if (!mission || player.missions[idx] || !mission.done) return;

      player.missions[idx] = true;
      player.uc = (player.uc || 0) + mission.uc;
      player.xp = (player.xp || 0) + 20;

      savePlayer();
      renderAll();

      sound.play("fanfare");
      confetti.fire(50);
      showToast(`+${mission.uc} ILK UC va +20 XP topshiriq mukofoti olindi!`);
    });
  });
}

function checkAchievements() {
  player.achievements = player.achievements || {};
  ACHIEVEMENTS_DEF.forEach(ach => {
    if (!player.achievements[ach.id] && ach.check(player)) {
      player.achievements[ach.id] = true;
      player.uc = (player.uc || 0) + ach.uc;
      player.xp = (player.xp || 0) + ach.xp;
      savePlayer();
      sound.play("fanfare");
      confetti.fire(70);
      showToast(`🎖️ Yangi yutuq: “${ach.name}”! +${ach.uc} UC olindi.`);
    }
  });
}

function renderAchievements() {
  const container = $("achievementsGrid");
  if (!container) return;

  player.achievements = player.achievements || {};
  let unlockedCount = 0;

  container.innerHTML = ACHIEVEMENTS_DEF.map(ach => {
    const isUnlocked = !!player.achievements[ach.id];
    if (isUnlocked) unlockedCount++;

    return `
      <article class="achievement-card ${isUnlocked ? "unlocked" : "locked"}">
        <div class="achievement-icon">${ach.icon}</div>
        <h4>${escapeHTML(ach.name)}</h4>
        <p>${escapeHTML(ach.desc)}</p>
        <span class="achievement-badge">
          ${isUnlocked ? "✓ Ochilgan (+ " + ach.uc + " UC)" : "✦ " + ach.uc + " UC mukofot"}
        </span>
      </article>
    `;
  }).join("");

  $("achievementCount").textContent = `${unlockedCount} / ${ACHIEVEMENTS_DEF.length} OCHILGAN`;
}

// ==========================================================================
// 11. ANALYTICS & BRAIN SKILLS
// ==========================================================================

function renderAnalytics() {
  const bars = $("analyticsBars");
  const tips = $("analyticsTips");
  const historyList = $("historyTable");
  if (!bars || !tips || !historyList) return;

  const skills = player.skills || { logic: 20, speed: 20, memory: 20, math: 20, vocab: 20 };

  const skillData = [
    { name: "Mantiqiy Tafakkur (Deduksiya)", val: skills.logic || 20 },
    { name: "Diqqat va Reaksiya Tezligi", val: skills.speed || 20 },
    { name: "Vizual Xotira", val: skills.memory || 20 },
    { name: "Matematik Hisob-kitob", val: skills.math || 20 },
    { name: "So‘z Boyligi va Lingvistika", val: skills.vocab || 20 }
  ];

  bars.innerHTML = skillData.map(s => `
    <div class="skill-bar-item">
      <div class="skill-bar-head">
        <span>${s.name}</span>
        <span>${Math.min(100, s.val)}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="width: ${Math.min(100, s.val)}%"></div>
      </div>
    </div>
  `).join("");

  // Tips list
  tips.innerHTML = `
    <div class="tip-card">
      <b>🎯 Kunlik mashg‘ulot:</b>
      Kuniga kamida 2 xil toifadagi (masalan, Mantiq va Xotira) o‘yinlarni o‘ynash neyron aloqalarini mustahkamlaydi.
    </div>
    <div class="tip-card">
      <b>⚡ Tezlik siri:</b>
      Refleks o‘yinlarida xotirjamlik va barmoqlarni ekranga yaqin tutish reaksiyani 50-80 ms ga oshiradi.
    </div>
    <div class="tip-card">
      <b>🧩 Xotira mashqi:</b>
      Karta belgilarini ochayotganda ularni ichingizda so‘z bilan takrorlash eslab qolishni osonlashtiradi.
    </div>
  `;

  // History table
  const hist = player.history || [];
  $("historyCount").textContent = `${hist.length} ta o‘yin`;

  if (hist.length === 0) {
    historyList.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--muted)">Hozircha o‘yinlar tarixi mavjud emas.</div>`;
  } else {
    historyList.innerHTML = hist.map(h => `
      <div class="history-row">
        <div class="history-left">
          <span class="history-icon">${h.won ? "🏆" : "🎯"}</span>
          <div>
            <div class="history-name">${escapeHTML(h.name)}</div>
            <div class="history-date">${h.date} · ${escapeHTML(h.category || "O‘yin")}</div>
          </div>
        </div>
        <div class="history-reward">+${h.reward} UC (+${h.xp} XP)</div>
      </div>
    `).join("");
  }
}

// ==========================================================================
// 12. LEADERBOARD (Dynamic Real + Local Directory Players)
// ==========================================================================

function renderLeaderboard(filter = "all") {
  const container = $("leaderRows");
  if (!container) return;

  const allLocal = loadAllPlayers();
  const currentMe = {
    name: player.name,
    xp: player.xp || 0,
    avatar: player.avatar || "✦",
    title: player.title || "Boshlovchi",
    age: player.age,
    isMe: true
  };

  // Pre-populated realistic community players
  let baseCommunity = [
    { name: "Nova_07", xp: 680, avatar: "⚡", title: "Kiber Chempion", age: "9-15" },
    { name: "MindWave", xp: 520, avatar: "🧠", title: "Grossmeyster", age: "15-20" },
    { name: "PixelFox", xp: 390, avatar: "🦊", title: "Tezkor Fikr", age: "5-9" },
    { name: "Zukko_Ali", xp: 310, avatar: "🚀", title: "Zukko Fikr", age: "9-15" },
    { name: "Jasur_Gamer", xp: 220, avatar: "🦁", title: "Boshlovchi", age: "3-5" }
  ];

  // Merge with local players
  let list = [...baseCommunity];
  allLocal.forEach(loc => {
    if (loc.name.toLowerCase() !== player.name.toLowerCase()) {
      list.push({
        name: loc.name,
        xp: loc.xp || 0,
        avatar: loc.avatar || "✦",
        title: loc.title || "Boshlovchi",
        age: loc.age,
        isMe: false
      });
    }
  });

  list.push(currentMe);

  // Filter if world selected
  if (filter === "world") {
    list = list.filter(item => item.age === player.age);
  }

  // Sort by XP descending
  list.sort((a, b) => b.xp - a.xp);

  container.innerHTML = list.map((r, i) => {
    const isMe = r.isMe || r.name.toLowerCase() === player.name.toLowerCase();
    const rankClass = i === 0 ? "top-1" : i === 1 ? "top-2" : i === 2 ? "top-3" : "";
    const rankBadge = i === 0 ? "👑 #1" : i === 1 ? "🥈 #2" : i === 2 ? "🥉 #3" : `#${i + 1}`;

    return `
      <div class="leader-row ${isMe ? "me" : ""}">
        <span class="rank ${rankClass}">${rankBadge}</span>
        <span class="leader-user">
          <span class="leader-avatar">${r.avatar}</span>
          ${escapeHTML(r.name)} ${isMe ? '<small style="color:var(--accent-light)">(Sen)</small>' : ""}
        </span>
        <span style="font-size:11px; color:#aab5ce">${escapeHTML(r.title)}</span>
        <b>${r.xp} XP</b>
        <span>LVL ${levelInfo(r.xp).level}</span>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 13. PROFILE CUSTOMIZATION & DATA BACKUP
// ==========================================================================

function renderProfile() {
  const lv = levelInfo(player.xp || 0);

  $("profileAvatar").textContent = player.avatar || "✦";
  $("profileName").textContent = player.name;
  $("profileTitleDisplay").textContent = player.title || "Boshlovchi";
  $("profileWorld").textContent = currentWorld().name;
  $("profileLevel").textContent = `${lv.level}-DARAJA (${player.age} yosh)`;
  $("profileUc").textContent = player.uc || 0;
  $("profileXp").textContent = player.xp || 0;
  $("profileGames").textContent = player.games || 0;

  $("boosterHintCount").textContent = `${player.inventory?.boosters?.hint || 0} ta`;
  $("boosterXpCount").textContent = `${player.inventory?.boosters?.xp || 0} ta`;

  // Apply Frame Glow
  const glow = $("profileFrameGlow");
  glow.className = "profile-frame-glow " + (player.frame || "");

  // Populate Selects with Unlocked Items
  populateProfileSelects();
}

function populateProfileSelects() {
  const inv = player.inventory || { avatars: ["av_star"], titles: ["ti_beginner"], frames: ["none"] };

  // Avatars Select
  const avSelect = $("avatarSelect");
  avSelect.innerHTML = (inv.avatars || ["av_star"]).map(id => {
    const item = SHOP_CATALOG.avatars.find(x => x.id === id);
    if (!item) return "";
    return `<option value="${item.symbol}" ${player.avatar === item.symbol ? "selected" : ""}>${item.symbol} ${item.name}</option>`;
  }).join("");

  // Titles Select
  const tiSelect = $("titleSelect");
  tiSelect.innerHTML = (inv.titles || ["ti_beginner"]).map(id => {
    const item = SHOP_CATALOG.titles.find(x => x.id === id);
    if (!item) return "";
    return `<option value="${item.name}" ${player.title === item.name ? "selected" : ""}>${item.name}</option>`;
  }).join("");

  // Frames Select
  const frSelect = $("frameSelect");
  frSelect.innerHTML = (inv.frames || ["none"]).map(id => {
    const item = SHOP_CATALOG.frames.find(x => x.id === id);
    if (!item) return "";
    return `<option value="${item.id}" ${player.frame === item.id ? "selected" : ""}>${item.name}</option>`;
  }).join("");
}

function saveProfileCustomization() {
  player.avatar = $("avatarSelect").value || player.avatar;
  player.title = $("titleSelect").value || player.title;
  player.frame = $("frameSelect").value || player.frame;

  savePlayer();
  renderAll();

  sound.play("coin");
  showToast("Profil sozlamalari saqlandi!");
}

function exportPlayerData() {
  sound.play("click");
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(player, null, 2));
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `ILK_QADAM_${player.name}_backup.json`);
  dlAnchor.click();
  showToast("Profil fayli yuklab olindi!");
}

function importPlayerData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = event => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported && imported.name) {
        player = imported;
        savePlayer();
        renderAll();
        sound.play("fanfare");
        confetti.fire(60);
        showToast("Profil ma’lumotlari muvaffaqiyatli tiklandi!");
      } else {
        throw new Error("Invalid format");
      }
    } catch (err) {
      sound.play("wrong");
      showToast("Xatolik: Noto‘g‘ri profil fayli!");
    }
  };
  reader.readAsText(file);
}

function resetPlayerData() {
  sound.play("wrong");
  if (confirm("Haqiqatan ham barcha natijalarni tozalab, boshidan boshlamoqchimisiz?")) {
    player.uc = 0;
    player.xp = 0;
    player.games = 0;
    player.wins = 0;
    player.history = [];
    player.missions = {};
    player.achievements = {};
    savePlayer();
    renderAll();
    showToast("Barcha natijalar tozalandi.");
  }
}

// ==========================================================================
// 14. ILK AI 2.0 INTELLECTUAL ASSISTANT
// ==========================================================================

function openAI() {
  sound.play("click");
  $("aiPanel").classList.remove("hidden");
  $("aiInput").focus();
}

function closeAI() {
  sound.play("click");
  $("aiPanel").classList.add("hidden");
}

function sendAI(e) {
  e.preventDefault();
  const input = $("aiInput");
  const msg = input.value.trim();
  if (!msg) return;

  sound.play("click");
  addAIChat(msg, "user");
  input.value = "";

  setTimeout(() => {
    const reply = generateAIReply(msg);
    addAIChat(reply, "bot");
    sound.play("coin");
  }, 350);
}

function addAIChat(text, who) {
  const container = $("aiMessages");
  const div = document.createElement("div");
  div.className = "chat-bubble " + who;
  div.innerHTML = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateAIReply(msg) {
  const m = msg.toLowerCase();
  const w = currentWorld();
  const games = w.games;

  // Active Riddle Answer Checker
  if (activeRiddleQuestion) {
    const userAns = m;
    const correct = activeRiddleQuestion.ans.toLowerCase();
    const isCorrect = userAns.includes(correct) || correct.includes(userAns);
    activeRiddleQuestion = null;

    if (isCorrect) {
      player.uc = (player.uc || 0) + 10;
      savePlayer();
      renderAll();
      confetti.fire(40);
      return `🎉 <b>Ofarin, to‘ppa-to‘g‘ri!</b> Javob: <i>${correct}</i> edi. Ajoyib topqirligingiz uchun <b>+10 ILK UC</b> taqdim etildi! Yana topishmoq xohlaysizmi?`;
    } else {
      return `Yaxshi urinish, lekin to‘g‘ri javob <b>${correct}</b> edi. Xafa bo‘lmang, yana bitta topishmoq aytaymi?`;
    }
  }

  // Riddle Request
  if (m.includes("topishmoq") || m.includes("topishmoq ayt")) {
    const riddles = [
      { q: "O‘zi bitta, ko‘zi mingta. Bu nima?", ans: "g'alvir" },
      { q: "Katta oq saroy, eshigi ham yo‘q, derazasi ham. Bu nima?", ans: "tuxum" },
      { q: "Kunduzi uxlaydi, kechasi yonadi. Bu nima?", ans: "oy" },
      { q: "Og‘zi yo‘q, tili bor, gapirgani hisobi bor. Bu nima?", ans: "kitob" },
      { q: "Har qancha yesang ham to‘ymaysan, ushlab ham ololmaysan. Bu nima?", ans: "havo" }
    ];
    const pick = riddles[Math.floor(Math.random() * riddles.length)];
    activeRiddleQuestion = pick;
    return `🧩 <b>Topishmoq:</b><br><br>“${pick.q}”<br><br><i>Javobingizni quyidagi maydonga yozing!</i>`;
  }

  // Greetings
  if (/salom|assalom|qalaysiz|qalesiz|hello/.test(m)) {
    return `Assalomu alaykum, <b>${escapeHTML(player.name)}</b>! ${w.name} dunyosida ko‘rganimdan mamnunman. Bugun qaysi o‘yinda yangi rekord o‘rnatamiz?`;
  }

  // UC and Balance
  if (/uc|ball|balans|pul|tanga/.test(m)) {
    return `Sizda hozir <b>${player.uc || 0} ta ILK UC</b> mavjud. Bu virtual ballaringizni yangi <b>Do‘kon</b> bo‘limida ajoyib avatarlar, unvonlar va profil ramkalariga almashtirishingiz mumkin!`;
  }

  // Level and XP
  if (/daraja|level|xp|tajriba/.test(m)) {
    const lv = levelInfo(player.xp || 0);
    const needed = 100 - lv.current;
    return `Hozirda siz <b>${lv.level}-daraja</b>dasiz (${player.xp || 0} XP). Keyingi darajaga o‘tish uchun yana <b>${needed} XP</b> to‘plashingiz kerak. Har bir g‘alaba sizni yangi marraga yaqinlashtiradi!`;
  }

  // Game Recommendation
  if (/o‘yin tavsiya|tavsiya|nima o‘yn|zerikdim/.test(m)) {
    const pick = games[Math.floor(Math.random() * games.length)];
    return `Sizga <b>“${pick[0]}”</b> (${pick[3]}) o‘yinini sinab ko‘rishni maslahat beraman! ${pick[1]} Bu o‘yinni muvaffaqiyatli yakunlab, <b>+${pick[5]} UC</b> gacha mukofot olishingiz mumkin.`;
  }

  // Rules and Help
  if (/qanday|yordam|qoida|ko‘rsatma/.test(m)) {
    return `Platformada qatnashish juda oson:<br>
    1. <b>O‘yinlar</b> bo‘limidan o‘zingizga yoqqan o‘yinni tanlang.<br>
    2. Savollar yoki topshiriqlarni bajaring.<br>
    3. ILK UC va XP to‘plab, <b>Do‘kon</b>da profil ramkalari va yangi avatarlarni oching!`;
  }

  // Default intelligent fallback
  const randomGame = games[Math.floor(Math.random() * games.length)];
  return `Sizni tushundim! Aqliy qobiliyatlaringizni oshirish uchun <b>“${randomGame[0]}”</b> o‘yinini yoki <b>“🧩 Menga topishmoq ayt”</b> deb yozib topishmoq yechishni sinab ko‘ring!`;
}

// ==========================================================================
// 15. TOAST & UTILITIES
// ==========================================================================

function showToast(message) {
  const t = $("toast");
  if (!t) return;
  t.innerHTML = message;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
  }, 2800);
}

function escapeHTML(str) {
  return String(str || "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

// Bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", init);
