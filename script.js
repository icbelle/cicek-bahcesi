// ============================================================
// Çiçek Bahçesi – script.js  (Complete)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------
  // 1. FLOWER DATA (16 flowers)
  // ----------------------------------------------------------
  const flowers = [
    {
      id: 'gul',
      name: 'Gül',
      emoji: '🌹',
      latin: 'Rosa',
      desc: 'Aşkın ve tutkunun zamansız sembolü.',
      fullDesc: 'Gül, yüzyıllardır şiirlere, şarkılara ve bahçelere ilham veren eşsiz bir çiçektir. Dünyada 30.000\'den fazla gül çeşidi bulunur ve her renk farklı bir anlam taşır.',
      season: 'İlkbahar – Yaz',
      difficulty: 'Orta',
      sunlight: 'Tam güneş',
      water: 'Düzenli',
      bloom: 'Mayıs – Ekim',
      color: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      tips: ['Sabah erken saatte sulayın.', 'Solmuş çiçekleri düzenli budayın.', 'Kış aylarında köklerini koruyun.'],
      tags: ['romantik', 'klasik', 'kokulu']
    },
    {
      id: 'lale',
      name: 'Lale',
      emoji: '🌷',
      latin: 'Tulipa',
      desc: 'Osmanlı zarafetinin ve baharın müjdecisi.',
      fullDesc: 'Lale, Osmanlı İmparatorluğu döneminde kültürel bir simge olmuş ve "Lale Devri" adıyla bir döneme adını vermiştir. Hollanda\'da büyük bir ekonomik çılgınlığa yol açmıştır.',
      season: 'İlkbahar',
      difficulty: 'Kolay',
      sunlight: 'Tam güneş',
      water: 'Az',
      bloom: 'Mart – Mayıs',
      color: 'linear-gradient(135deg, #fd79a8, #e84393)',
      tips: ['Soğanları sonbaharda dikin.', 'İyi drene olan toprak kullanın.', 'Soğuk kış geçirmesi gerekir.'],
      tags: ['zarif', 'bahar', 'osmanlı']
    },
    {
      id: 'papatya',
      name: 'Papatya',
      emoji: '🌼',
      latin: 'Bellis perennis',
      desc: 'Masumiyetin ve sadeliğin simgesi.',
      fullDesc: 'Papatya, dünyanın en yaygın çiçeklerinden biridir. Hem süs bitkisi hem de şifalı bitki olarak kullanılır. Papatya çayı rahatlatıcı etkisiyle bilinir.',
      season: 'İlkbahar – Yaz',
      difficulty: 'Çok Kolay',
      sunlight: 'Tam güneş / Yarı gölge',
      water: 'Az',
      bloom: 'Nisan – Eylül',
      color: 'linear-gradient(135deg, #ffeaa7, #fdcb6e)',
      tips: ['Hemen her yerde yetişir.', 'Fazla sulamadan kaçının.', 'Tohumlarını rüzgâr taşır.'],
      tags: ['sade', 'doğal', 'şifalı']
    },
    {
      id: 'aycicegi',
      name: 'Ayçiçeği',
      emoji: '🌻',
      latin: 'Helianthus annuus',
      desc: 'Güneşi takip eden neşeli dev.',
      fullDesc: 'Ayçiçeği, güneşe doğru dönen yapısıyla (heliotropizm) ünlüdür. Tohumları hem besleyici bir atıştırmalık hem de yağ üretiminde kullanılır.',
      season: 'Yaz',
      difficulty: 'Kolay',
      sunlight: 'Tam güneş',
      water: 'Düzenli',
      bloom: 'Haziran – Eylül',
      color: 'linear-gradient(135deg, #f9ca24, #f0932b)',
      tips: ['Bol güneş alan yere dikin.', 'Uzun boylanır, destek çubuğu kullanın.', 'Tohumları kurutup saklayın.'],
      tags: ['neşeli', 'büyük', 'yenilebilir']
    },
    {
      id: 'lavanta',
      name: 'Lavanta',
      emoji: '🪻',
      latin: 'Lavandula',
      desc: 'Huzurun ve sakinliğin mor güzeli.',
      fullDesc: 'Lavanta, etkileyici kokusu ve mor rengiyle bahçelerin vazgeçilmezidir. Aromaterapi, kozmetik ve mutfakta geniş kullanım alanı bulur.',
      season: 'Yaz',
      difficulty: 'Kolay',
      sunlight: 'Tam güneş',
      water: 'Az',
      bloom: 'Haziran – Ağustos',
      color: 'linear-gradient(135deg, #a29bfe, #6c5ce7)',
      tips: ['Kuru ve taşlı toprakları sever.', 'Aşırı sulamadan kaçının.', 'Çiçekleri kurutarak poşelerde kullanın.'],
      tags: ['aromatik', 'mor', 'rahatlatıcı']
    },
    {
      id: 'orkide',
      name: 'Orkide',
      emoji: '🌺',
      latin: 'Orchidaceae',
      desc: 'Egzotik güzelliğin ve zarafetin kralı.',
      fullDesc: 'Orkide, 25.000\'den fazla türüyle dünyanın en büyük çiçekli bitki ailesidir. Her kıtada doğal olarak yetişir ve eşsiz çiçek formlarıyla büyüler.',
      season: 'Tüm yıl (iç mekân)',
      difficulty: 'Zor',
      sunlight: 'Dolaylı ışık',
      water: 'Az – Orta',
      bloom: 'Tüm yıl',
      color: 'linear-gradient(135deg, #fd79a8, #e056a0)',
      tips: ['Doğrudan güneşten koruyun.', 'Köklerinin hava almasını sağlayın.', 'Haftada bir buz küpüyle sulayın.'],
      tags: ['egzotik', 'zarif', 'iç mekân']
    },
    {
      id: 'sumbul',
      name: 'Sümbül',
      emoji: '💜',
      latin: 'Hyacinthus',
      desc: 'Baharın kokulu habercisi.',
      fullDesc: 'Sümbül, yoğun ve tatlı kokusuyla baharın gelişini müjdeler. Soğanlı bir bitki olup özellikle saksıda yetiştirmeye çok uygundur.',
      season: 'İlkbahar',
      difficulty: 'Kolay',
      sunlight: 'Tam güneş / Yarı gölge',
      water: 'Orta',
      bloom: 'Mart – Nisan',
      color: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      tips: ['Soğanları sonbaharda dikin.', 'Soğuk kışlamaya ihtiyaç duyar.', 'Saksıda da güzel yetişir.'],
      tags: ['kokulu', 'soğanlı', 'bahar']
    },
    {
      id: 'sakura',
      name: 'Sakura',
      emoji: '🌸',
      latin: 'Prunus serrulata',
      desc: 'Japon kültürünün pembe hazinesi.',
      fullDesc: 'Sakura (kiraz çiçeği), Japonya\'nın ulusal çiçeğidir. Kısa ömürlü çiçeklenmesiyle hayatın geçiciliğini ve güzelliğini simgeler.',
      season: 'İlkbahar',
      difficulty: 'Orta',
      sunlight: 'Tam güneş',
      water: 'Düzenli',
      bloom: 'Mart – Nisan',
      color: 'linear-gradient(135deg, #ffc0cb, #ff69b4)',
      tips: ['Geniş alana ihtiyaç duyar.', 'İlk yıllarda düzenli sulayın.', 'Budama ile şekil verin.'],
      tags: ['japon', 'pembe', 'ağaç']
    },
    {
      id: 'kamelya',
      name: 'Kamelya',
      emoji: '🌺',
      latin: 'Camellia japonica',
      desc: 'Kışın açan zarif güzel.',
      fullDesc: 'Kamelya, kış aylarında çiçek açan nadir bitkilerdendir. Parlak yaprakları ve mükemmel simetrili çiçekleriyle bahçelerde göz kamaştırır.',
      season: 'Kış – İlkbahar',
      difficulty: 'Orta',
      sunlight: 'Yarı gölge',
      water: 'Düzenli',
      bloom: 'Ocak – Mart',
      color: 'linear-gradient(135deg, #ff6348, #ee5a24)',
      tips: ['Asidik toprak sever.', 'Rüzgârdan korunaklı yere dikin.', 'Kireçli sudan kaçının.'],
      tags: ['kış', 'zarif', 'yaprak dökmeyen']
    },
    {
      id: 'nergis',
      name: 'Nergis',
      emoji: '🌼',
      latin: 'Narcissus',
      desc: 'Baharın altın sarısı trompeti.',
      fullDesc: 'Nergis, baharın en erken çiçek açan bitkilerinden biridir. Yunan mitolojisindeki Narkissos efsanesinden adını alır. Soğanlı ve dayanıklı bir bitkidir.',
      season: 'İlkbahar',
      difficulty: 'Çok Kolay',
      sunlight: 'Tam güneş / Yarı gölge',
      water: 'Az',
      bloom: 'Şubat – Nisan',
      color: 'linear-gradient(135deg, #feca57, #ff9f43)',
      tips: ['Soğanları gruplar halinde dikin.', 'Yaprakları doğal olarak solmaya bırakın.', 'Her yıl çoğalır.'],
      tags: ['bahar', 'sarı', 'mitolojik']
    },
    {
      id: 'kadife',
      name: 'Kadife Çiçeği',
      emoji: '🧡',
      latin: 'Tagetes',
      desc: 'Bahçenin turuncu koruyucusu.',
      fullDesc: 'Kadife çiçeği, canlı turuncu ve sarı tonlarıyla bahçelere renk katar. Zararlı böcekleri uzaklaştırma özelliğiyle doğal bir bahçe koruyucusudur.',
      season: 'Yaz – Sonbahar',
      difficulty: 'Çok Kolay',
      sunlight: 'Tam güneş',
      water: 'Orta',
      bloom: 'Haziran – Kasım',
      color: 'linear-gradient(135deg, #f39c12, #e67e22)',
      tips: ['Sebze bahçesine yakın dikin.', 'Solmuş çiçekleri koparın.', 'Tohumdan kolayca yetişir.'],
      tags: ['koruyucu', 'turuncu', 'dayanıklı']
    },
    {
      id: 'kardelen',
      name: 'Kardelen',
      emoji: '❄️',
      latin: 'Galanthus',
      desc: 'Karların arasından yükselen umut.',
      fullDesc: 'Kardelen, kışın sonunda karların arasından çiçek açarak baharın müjdesini verir. Küçük beyaz çiçekleriyle umudun ve yeniden doğuşun simgesidir.',
      season: 'Kış sonu – İlkbahar',
      difficulty: 'Kolay',
      sunlight: 'Yarı gölge',
      water: 'Az',
      bloom: 'Şubat – Mart',
      color: 'linear-gradient(135deg, #dfe6e9, #b2bec3)',
      tips: ['Ağaç altlarına dikin.', 'Doğal ortamından koparmayın.', 'Gruplar halinde daha güzel görünür.'],
      tags: ['kış', 'beyaz', 'umut']
    },
    {
      id: 'zambak',
      name: 'Zambak',
      emoji: '🪷',
      latin: 'Lilium',
      desc: 'Saflığın ve asaletin çiçeği.',
      fullDesc: 'Zambak, gösterişli çiçekleri ve güçlü kokusuyla asaletin simgesidir. Düğünlerde ve özel günlerde en çok tercih edilen çiçeklerden biridir.',
      season: 'Yaz',
      difficulty: 'Orta',
      sunlight: 'Tam güneş / Yarı gölge',
      water: 'Düzenli',
      bloom: 'Haziran – Ağustos',
      color: 'linear-gradient(135deg, #ffffff, #ffeaa7)',
      tips: ['Derin saksılarda yetiştirin.', 'Soğanları nemli tutun ama ıslatmayın.', 'Yaprak bitlerinden koruyun.'],
      tags: ['asil', 'kokulu', 'düğün']
    },
    {
      id: 'ortanca',
      name: 'Ortanca',
      emoji: '💐',
      latin: 'Hydrangea',
      desc: 'Toprak pH\'ına göre renk değiştiren sihirbaz.',
      fullDesc: 'Ortanca, toprağın asitlik düzeyine göre mavi, pembe veya mor çiçekler açan büyüleyici bir bitkidir. Büyük çiçek kümeleriyle bahçelere ihtişam katar.',
      season: 'Yaz',
      difficulty: 'Orta',
      sunlight: 'Yarı gölge',
      water: 'Bol',
      bloom: 'Haziran – Eylül',
      color: 'linear-gradient(135deg, #74b9ff, #a29bfe)',
      tips: ['Asidik toprakta mavi, bazik toprakta pembe açar.', 'Sabah güneşi, öğleden sonra gölge ideal.', 'Bol su verin ama su birikintisi olmasın.'],
      tags: ['renkli', 'gösterişli', 'gölge']
    },
    {
      id: 'sardunya',
      name: 'Sardunya',
      emoji: '🌺',
      latin: 'Pelargonium',
      desc: 'Balkonların ve pencerelerin neşesi.',
      fullDesc: 'Sardunya, kolay bakımı ve uzun çiçeklenme dönemiyle balkon ve pencere bahçeciliğinin vazgeçilmez bitkisidir. Kırmızı, pembe, beyaz ve mor gibi pek çok renkte bulunur.',
      season: 'İlkbahar – Sonbahar',
      difficulty: 'Çok Kolay',
      sunlight: 'Tam güneş',
      water: 'Orta',
      bloom: 'Mayıs – Ekim',
      color: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      tips: ['Saksıda mükemmel yetişir.', 'Fazla sulamayın, kök çürümesine dikkat.', 'Solmuş yaprakları temizleyin.'],
      tags: ['balkon', 'kolay', 'renkli']
    },
    {
      id: 'menekse',
      name: 'Menekşe',
      emoji: '💜',
      latin: 'Viola odorata',
      desc: 'Alçakgönüllülüğün mor güzeli.',
      fullDesc: 'Menekşe, mütevazı görünümü ve tatlı kokusuyla sevilen bir çiçektir. Hem süs bitkisi hem de yenilebilir çiçek olarak kullanılır. Osmanlı mutfağında şerbet yapımında tercih edilmiştir.',
      season: 'İlkbahar',
      difficulty: 'Kolay',
      sunlight: 'Yarı gölge',
      water: 'Orta',
      bloom: 'Mart – Mayıs',
      color: 'linear-gradient(135deg, #8e44ad, #9b59b6)',
      tips: ['Gölgelik alanları tercih edin.', 'Nemli toprakta mutlu olur.', 'Yenilebilir çiçekleri salatalara ekleyin.'],
      tags: ['mütevazı', 'yenilebilir', 'gölge']
    }
  ];

  // ----------------------------------------------------------
  // 2. PALETTE FLOWERS (12 items)
  // ----------------------------------------------------------
  const paletteFlowers = [
    { emoji: '🌹', name: 'Gül' },
    { emoji: '🌷', name: 'Lale' },
    { emoji: '🌼', name: 'Papatya' },
    { emoji: '🌻', name: 'Ayçiçeği' },
    { emoji: '🪻', name: 'Lavanta' },
    { emoji: '🌺', name: 'Orkide' },
    { emoji: '🌸', name: 'Sakura' },
    { emoji: '💜', name: 'Sümbül' },
    { emoji: '🪷', name: 'Zambak' },
    { emoji: '❄️', name: 'Kardelen' },
    { emoji: '🧡', name: 'Kadife' },
    { emoji: '💐', name: 'Ortanca' }
  ];

  // ----------------------------------------------------------
  // 3. DARK MODE
  // ----------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;

  // Restore saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('theme', next);
      showToast(next === 'dark' ? '🌙 Gece modu aktif' : '☀️ Gündüz modu aktif');
    });
  }

  // ----------------------------------------------------------
  // 4. DAILY FLOWER
  // ----------------------------------------------------------
  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function initDailyFlower() {
    const dayIndex = getDayOfYear() % flowers.length;
    const flower = flowers[dayIndex];

    const emojiEl = document.getElementById('dailyFlowerEmoji');
    const nameEl = document.getElementById('dailyFlowerName');
    const descEl = document.getElementById('dailyFlowerDesc');
    const factsEl = document.getElementById('dailyFlowerFacts');
    const visualEl = document.getElementById('dailyFlowerVisual');

    if (emojiEl) emojiEl.textContent = flower.emoji;
    if (nameEl) nameEl.textContent = flower.name;
    if (descEl) descEl.textContent = flower.fullDesc;
    if (factsEl) {
      factsEl.innerHTML = `
        <span>📅 <strong>Mevsim:</strong> ${flower.season}</span>
        <span>☀️ <strong>Güneş:</strong> ${flower.sunlight}</span>
        <span>💧 <strong>Su:</strong> ${flower.water}</span>
        <span>🌱 <strong>Zorluk:</strong> ${flower.difficulty}</span>
      `;
    }
    if (visualEl) visualEl.style.background = flower.color;
  }

  initDailyFlower();

  // ----------------------------------------------------------
  // 5. QUIZ – 'Sen Hangi Çiçeksin?'
  // ----------------------------------------------------------
  const quizQuestions = [
    {
      question: 'Hafta sonu için ideal planın hangisi?',
      options: [
        { text: 'Romantik bir akşam yemeği', type: 'gul' },
        { text: 'Lavanta tarlalarında yürüyüş', type: 'lavanta' },
        { text: 'Güneşli bir piknik', type: 'aycicegi' },
        { text: 'Kitap okuyarak huzurlu bir gün', type: 'papatya' }
      ]
    },
    {
      question: 'Hangi renk seni en iyi yansıtır?',
      options: [
        { text: 'Tutkulu kırmızı', type: 'gul' },
        { text: 'Huzurlu mor', type: 'lavanta' },
        { text: 'Enerjik sarı', type: 'aycicegi' },
        { text: 'Gizemli pembe', type: 'orkide' }
      ]
    },
    {
      question: 'Arkadaşların seni nasıl tanımlar?',
      options: [
        { text: 'Romantik ve duygusal', type: 'gul' },
        { text: 'Sakin ve bilge', type: 'lavanta' },
        { text: 'Neşeli ve enerjik', type: 'aycicegi' },
        { text: 'Sade ve samimi', type: 'papatya' }
      ]
    },
    {
      question: 'Favori mevsimin hangisi?',
      options: [
        { text: 'İlkbahar – yeni başlangıçlar', type: 'papatya' },
        { text: 'Yaz – sıcak günler', type: 'aycicegi' },
        { text: 'Sonbahar – huzurlu renkler', type: 'lavanta' },
        { text: 'Kış – romantik akşamlar', type: 'gul' }
      ]
    },
    {
      question: 'Hayatta en çok neye değer verirsin?',
      options: [
        { text: 'Aşk ve tutku', type: 'gul' },
        { text: 'İç huzur ve denge', type: 'lavanta' },
        { text: 'Özgürlük ve macera', type: 'aycicegi' },
        { text: 'Zarafet ve estetik', type: 'orkide' }
      ]
    }
  ];

  const quizResults = {
    gul: { emoji: '🌹', name: 'Gül', desc: 'Sen bir Gülsün! Romantik, tutkulu ve çevrendeki insanlara ilham veriyorsun. Aşkın ve güzelliğin simgesisin.' },
    lavanta: { emoji: '🪻', name: 'Lavanta', desc: 'Sen bir Lavantasın! Sakin, huzurlu ve bilgesin. Yanında olan herkes kendini rahat hisseder.' },
    aycicegi: { emoji: '🌻', name: 'Ayçiçeği', desc: 'Sen bir Ayçiçeğisin! Neşeli, enerjik ve iyimsersin. Gittiğin her yere güneş gibi ışık saçarsın.' },
    papatya: { emoji: '🌼', name: 'Papatya', desc: 'Sen bir Papatyasın! Sade, samimi ve doğalsın. Herkesin güvenip sevdiği bir insansın.' },
    orkide: { emoji: '🌺', name: 'Orkide', desc: 'Sen bir Orkidesin! Zarif, gizemli ve benzersizsin. Eşsiz güzelliğinle herkesi büyülersin.' }
  };

  let currentQuestion = 0;
  let quizAnswers = [];

  const quizBox = document.getElementById('quizBox');
  const quizQuestionEl = document.getElementById('quizQuestion');
  const quizOptionsEl = document.getElementById('quizOptions');
  const quizProgressEl = document.getElementById('quizProgress');
  const quizResultEl = document.getElementById('quizResult');
  const resultEmojiEl = document.getElementById('resultEmoji');
  const resultNameEl = document.getElementById('resultName');
  const resultDescEl = document.getElementById('resultDesc');
  const restartQuizBtn = document.getElementById('restartQuizBtn');

  function renderQuiz() {
    if (!quizBox) return;
    const q = quizQuestions[currentQuestion];
    if (quizQuestionEl) quizQuestionEl.textContent = q.question;
    if (quizOptionsEl) {
      quizOptionsEl.innerHTML = '';
      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => {
          quizAnswers.push(opt.type);
          currentQuestion++;
          if (currentQuestion < quizQuestions.length) {
            renderQuiz();
          } else {
            showQuizResult();
          }
        });
        quizOptionsEl.appendChild(btn);
      });
    }
    if (quizProgressEl) {
      const pct = ((currentQuestion) / quizQuestions.length) * 100;
      quizProgressEl.style.width = pct + '%';
    }
  }

  function showQuizResult() {
    if (quizQuestionEl) quizQuestionEl.style.display = 'none';
    if (quizOptionsEl) quizOptionsEl.style.display = 'none';

    // Count types
    const counts = {};
    quizAnswers.forEach(t => counts[t] = (counts[t] || 0) + 1);
    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    const result = quizResults[winner];

    if (quizProgressEl) quizProgressEl.style.width = '100%';
    if (resultEmojiEl) resultEmojiEl.textContent = result.emoji;
    if (resultNameEl) resultNameEl.textContent = result.name;
    if (resultDescEl) resultDescEl.textContent = result.desc;
    if (quizResultEl) quizResultEl.style.display = 'block';
  }

  function restartQuiz() {
    currentQuestion = 0;
    quizAnswers = [];
    if (quizQuestionEl) quizQuestionEl.style.display = '';
    if (quizOptionsEl) quizOptionsEl.style.display = '';
    if (quizResultEl) quizResultEl.style.display = 'none';
    renderQuiz();
  }

  if (restartQuizBtn) restartQuizBtn.addEventListener('click', restartQuiz);
  renderQuiz();

  // ----------------------------------------------------------
  // 6. FLOWER CARDS
  // ----------------------------------------------------------
  const cardsContainer = document.getElementById('flowersGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderFlowerCards(filter = 'all') {
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';
    const filtered = filter === 'all'
      ? flowers
      : flowers.filter(f => f.tags.includes(filter) || f.season.toLowerCase().includes(filter) || f.difficulty.toLowerCase().includes(filter));

    filtered.forEach(flower => {
      const card = document.createElement('div');
      card.className = 'flower-card';
      card.style.setProperty('--card-gradient', flower.color);
      card.innerHTML = `
        <div class="flower-card-visual" style="background:${flower.color}">
          <span class="flower-card-emoji">${flower.emoji}</span>
        </div>
        <div class="flower-card-info">
          <h3>${flower.name}</h3>
          <p class="flower-card-latin">${flower.latin}</p>
          <p>${flower.desc}</p>
          <div class="flower-card-tags">
            ${flower.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      `;
      card.addEventListener('click', () => openModal(flower));
      cardsContainer.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFlowerCards(btn.dataset.filter || 'all');
    });
  });

  renderFlowerCards();

  // ----------------------------------------------------------
  // 7. INTERACTIVE GARDEN WITH TOUCH SUPPORT
  // ----------------------------------------------------------
  const gardenCanvas = document.getElementById('gardenCanvas');
  const plantedCountEl = document.getElementById('plantedCount');
  const clearGardenBtn = document.getElementById('clearGarden');
  const gardenPalette = document.getElementById('paletteItems');

  let selectedPaletteFlower = paletteFlowers[0];
  let plantedFlowers = [];
  let plantedCountNum = 0;

  // Build palette
  if (gardenPalette) {
    paletteFlowers.forEach((pf, i) => {
      const item = document.createElement('button');
      item.className = 'palette-item' + (i === 0 ? ' active' : '');
      item.innerHTML = `<span class="palette-emoji">${pf.emoji}</span><span class="palette-name">${pf.name}</span>`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.palette-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        selectedPaletteFlower = pf;
      });
      gardenPalette.appendChild(item);
    });
  }

  // Plant flower on canvas click / tap
  if (gardenCanvas) {
    gardenCanvas.addEventListener('click', (e) => {
      if (e.target !== gardenCanvas) return; // don't plant on existing flowers
      const rect = gardenCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      plantFlower(x, y);
    });

    // Also handle tap on canvas (for mobile, when target is the canvas itself)
    gardenCanvas.addEventListener('touchend', (e) => {
      // Only plant if directly tapping canvas (not a flower)
      // Planting is handled via click for simplicity, touchend here is a fallback
    });
  }

  function plantFlower(x, y) {
    const el = document.createElement('div');
    el.className = 'planted-flower';
    el.textContent = selectedPaletteFlower.emoji;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.touchAction = 'none'; // prevent scroll on touch
    el.title = selectedPaletteFlower.name;

    // Drag state
    let isDragging = false;
    let justDragged = false;
    let startX, startY, origLeft, origTop;

    // --- MOUSE DRAG ---
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = false;
      justDragged = false;
      startX = e.clientX;
      startY = e.clientY;
      origLeft = parseInt(el.style.left);
      origTop = parseInt(el.style.top);
      el.style.zIndex = '100';
      el.style.cursor = 'grabbing';

      const onMouseMove = (ev) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          isDragging = true;
        }
        if (isDragging) {
          el.style.left = (origLeft + dx) + 'px';
          el.style.top = (origTop + dy) + 'px';
        }
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        el.style.zIndex = '';
        el.style.cursor = 'grab';
        if (isDragging) {
          justDragged = true;
          setTimeout(() => { justDragged = false; }, 300);
        }
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    // --- TOUCH DRAG ---
    el.addEventListener('touchstart', (e) => {
      e.preventDefault(); // prevent scroll
      isDragging = false;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      origLeft = parseInt(el.style.left);
      origTop = parseInt(el.style.top);
      el.style.zIndex = '100';

      const onTouchMove = (ev) => {
        ev.preventDefault();
        const t = ev.touches[0];
        const dx = t.clientX - startX;
        const dy = t.clientY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          isDragging = true;
        }
        if (isDragging) {
          el.style.left = (origLeft + dx) + 'px';
          el.style.top = (origTop + dy) + 'px';
        }
      };

      const onTouchEnd = () => {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        el.style.zIndex = '';
        if (isDragging) {
          justDragged = true;
          setTimeout(() => { justDragged = false; }, 300);
        } else {
          // Check for double tap
          const now = Date.now();
          if (el._lastTapTime && (now - el._lastTapTime < 300)) {
            removeFlower(el);
            return;
          }
          el._lastTapTime = now;
        }
      };

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd);
    }, { passive: false });

    // --- DOUBLE CLICK DELETE (desktop) ---
    el.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      if (!justDragged) {
        removeFlower(el);
      }
    });

    // Entrance animation
    el.style.transform = 'scale(0)';
    el.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    gardenCanvas.appendChild(el);
    plantedFlowers.push(el);
    plantedCountNum++;
    updatePlantedCount();

    requestAnimationFrame(() => {
      el.style.transform = 'scale(1)';
    });
  }

  function removeFlower(el) {
    el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    el.style.transform = 'scale(0)';
    el.style.opacity = '0';
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
      plantedFlowers = plantedFlowers.filter(f => f !== el);
      plantedCountNum--;
      if (plantedCountNum < 0) plantedCountNum = 0;
      updatePlantedCount();
    }, 300);
  }

  function updatePlantedCount() {
    if (plantedCountEl) plantedCountEl.textContent = plantedCountNum;
  }

  // Clear garden
  if (clearGardenBtn) {
    clearGardenBtn.addEventListener('click', () => {
      plantedFlowers.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      plantedFlowers = [];
      plantedCountNum = 0;
      updatePlantedCount();
      showToast('🧹 Bahçe temizlendi!');
    });
  }

  // ----------------------------------------------------------
  // 8. MODAL
  // ----------------------------------------------------------
  const modal = document.getElementById('flowerModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');

  function openModal(flower) {
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
      <div class="modal-header" style="text-align: center; margin-bottom: 20px;">
        <div class="modal-emoji" style="font-size: 4rem; font-family: 'Apple Color Emoji', 'Segoe UI Emoji'; line-height: 1;">${flower.emoji}</div>
        <h2 class="modal-name" style="font-family: 'Playfair Display', serif; font-size: 2rem; margin: 10px 0 5px;">${flower.name}</h2>
        <div class="modal-latin" style="font-style: italic; color: var(--text-light);">${flower.latin}</div>
      </div>
      <p class="modal-desc" style="color: var(--text-secondary); margin-bottom: 20px; text-align: center;">${flower.fullDesc}</p>
      
      <div class="modal-details" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; background: var(--bg-secondary); padding: 15px; border-radius: var(--radius-md);">
        <div class="detail-item"><span class="detail-label">📅 Mevsim:</span> <span>${flower.season}</span></div>
        <div class="detail-item"><span class="detail-label">🌱 Zorluk:</span> <span>${flower.difficulty}</span></div>
        <div class="detail-item"><span class="detail-label">☀️ Güneş:</span> <span>${flower.sunlight}</span></div>
        <div class="detail-item"><span class="detail-label">💧 Su:</span> <span>${flower.water}</span></div>
        <div class="detail-item"><span class="detail-label">🌸 Çiçeklenme:</span> <span>${flower.bloom}</span></div>
      </div>
      
      <div class="modal-tips">
        <h3 style="font-family: 'Playfair Display', serif; margin-bottom: 10px;">💡 İpuçları</h3>
        <ul style="list-style: disc; padding-left: 20px; color: var(--text-muted);">
          ${flower.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  
  // Close when clicking outside of modal content
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ----------------------------------------------------------
  // NAVBAR SCROLL EFFECT
  // ----------------------------------------------------------
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ----------------------------------------------------------
  // SCROLL ANIMATIONS (Intersection Observer)
  // ----------------------------------------------------------
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(el => observer.observe(el));
  }

  // ----------------------------------------------------------
  // COUNTER ANIMATION
  // ----------------------------------------------------------
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target) || 0;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };

          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // ----------------------------------------------------------
  // CTA FORM
  // ----------------------------------------------------------
  const ctaForm = document.getElementById('ctaForm');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = ctaForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast('🌸 Teşekkürler! Çiçek bülteni için kaydınız alındı.');
        emailInput.value = '';
      } else {
        showToast('⚠️ Lütfen geçerli bir e-posta adresi girin.');
      }
    });
  }

  // ----------------------------------------------------------
  // TOAST NOTIFICATION
  // ----------------------------------------------------------
  function showToast(message, duration = 3000) {
    // Remove existing toast if any
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--card-bg, #333);
      color: var(--text-primary, #fff);
      padding: 14px 28px;
      border-radius: 16px;
      font-size: 0.95rem;
      z-index: 10000;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
      opacity: 0;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  // ----------------------------------------------------------
  // SMOOTH SCROLL (nav links)
  // ----------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----------------------------------------------------------
  // COUNTER ANIMATION
  // ----------------------------------------------------------
  function initCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          let count = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const updateCount = () => {
            count += increment;
            if (count < target) {
              entry.target.innerText = Math.ceil(count);
              requestAnimationFrame(updateCount);
            } else {
              entry.target.innerText = target;
            }
          };
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
  }

  initCounterAnimation();

}); // end DOMContentLoaded
