/* ===================================
   ÇIÇEK BAHÇEM – JAVASCRIPT
   =================================== */

// ===== FLOWER DATA =====
const flowers = [
    {
        id: 1, name: "Gül", emoji: "🌹", latin: "Rosa",
        desc: "Aşkın ve tutkunun sembolü olan güller, bahçelerin vazgeçilmez çiçeğidir. 100'den fazla türü vardır.",
        fullDesc: "Güller, Rosaceae familyasından olup dünyada 100'den fazla türü bulunan en popüler süs bitkilerinden biridir. Antik çağlardan beri güzellik, aşk ve tutkunun sembolü olmuştur. Bakımı düzenli budama ve bol güneş ışığı gerektirir.",
        season: "yaz", difficulty: "Orta", sunlight: "Tam Güneş",
        water: "Düzenli", bloom: "Haziran - Ekim",
        color: "linear-gradient(135deg, #FFB6C1, #FF69B4)",
        tips: ["Haftada 2-3 kez derin sulama yapın", "Solmuş çiçekleri hemen kesin", "İlkbaharda budama yapın", "Yaprak bitlerini kontrol edin"],
        tags: ["yaz", "orta"]
    },
    {
        id: 2, name: "Lale", emoji: "🌷", latin: "Tulipa",
        desc: "İlkbaharın müjdecisi laleler, canlı renkleriyle bahçeye neşe katar. Soğandan yetiştirilir.",
        fullDesc: "Laleler, Liliaceae familyasından soğanlı bitkilerdir. Hollanda'nın simgesi olan laleler, aslında Orta Asya kökenlidir ve Osmanlı döneminde Avrupa'ya tanıtılmıştır. 3000'den fazla kayıtlı çeşidi bulunur.",
        season: "ilkbahar", difficulty: "Kolay", sunlight: "Tam Güneş / Yarı Gölge",
        water: "Az-Orta", bloom: "Mart - Mayıs",
        color: "linear-gradient(135deg, #E8B4CB, #D4A0B9)",
        tips: ["Soğanları sonbaharda dikin", "İyi drene olan toprak kullanın", "Soğanlara temas etmeyin", "Yapraklar sararana kadar kesmeyin"],
        tags: ["ilkbahar", "kolay"]
    },
    {
        id: 3, name: "Papatya", emoji: "🌼", latin: "Bellis perennis",
        desc: "Saflığın ve masumiyetin simgesi papatyalar, dayanıklı ve bakımı kolay çiçeklerdir.",
        fullDesc: "Papatyalar, Asteraceae familyasından çok yıllık bitkilerdir. Beyaz yaprakları ve sarı göbeği ile tanınan papatyalar, hem süs bitkisi hem de şifalı bitki olarak kullanılır. Papatya çayı sakinleştirici etkileriyle bilinir.",
        season: "ilkbahar", difficulty: "Kolay", sunlight: "Tam Güneş",
        water: "Az", bloom: "Nisan - Eylül",
        color: "linear-gradient(135deg, #FFF5E6, #FFE4C9)",
        tips: ["Kuraklığa dayanıklıdır", "Aşırı sulamadan kaçının", "Güneşli yer seçin", "Kendi kendine yayılabilir"],
        tags: ["ilkbahar", "kolay"]
    },
    {
        id: 4, name: "Ayçiçeği", emoji: "🌻", latin: "Helianthus annuus",
        desc: "Güneşe dönen dev çiçekler! Ayçiçekleri bahçeye neşe ve sıcaklık katar.",
        fullDesc: "Ayçiçeği, Kuzey Amerika kökenli tek yıllık bir bitkidir. Güneşe dönme özelliği (heliotropizm) ile bilinir. 3 metreye kadar boylanabilir ve çekirdekleri hem yenilebilir hem de yağ üretiminde kullanılır.",
        season: "yaz", difficulty: "Kolay", sunlight: "Tam Güneş",
        water: "Orta", bloom: "Temmuz - Eylül",
        color: "linear-gradient(135deg, #FFEAA7, #FFD93D)",
        tips: ["Direkt tohum ekimi yapın", "Derin kökleri için derin sulayın", "Rüzgardan koruyun", "Kuşlar için tohum bırakın"],
        tags: ["yaz", "kolay"]
    },
    {
        id: 5, name: "Lavanta", emoji: "🪻", latin: "Lavandula",
        desc: "Mis kokulu mor çiçekleriyle lavanta, hem göze hem ruha hitap eden bir bitkidir.",
        fullDesc: "Lavanta, Lamiaceae familyasından aromatik bir bitkidir. Akdeniz kökenli olan lavanta, kokusu, rengi ve şifalı özellikleriyle dünyaca ünlüdür. Uçucu yağı aromaterapi, kozmetik ve mutfakta kullanılır.",
        season: "yaz", difficulty: "Kolay", sunlight: "Tam Güneş",
        water: "Az", bloom: "Haziran - Ağustos",
        color: "linear-gradient(135deg, #DDA0DD, #DA70D6)",
        tips: ["Kuru ve alkalin toprak sevin", "Aşırı sulamadan kaçının", "Çiçek açtıktan sonra budayın", "Kışın mulç ile koruyun"],
        tags: ["yaz", "kolay"]
    },
    {
        id: 6, name: "Orkide", emoji: "🌺", latin: "Orchidaceae",
        desc: "Egzotik güzellikleriyle orkideler, zarif ve sofistike bir görünüm sunar.",
        fullDesc: "Orkideler, dünyada en geniş çiçekli bitki familyasından biridir. 28.000'den fazla türü bulunan orkideler, tropik bölgelerden kutuplara kadar her yerde yetişebilir. Karmaşık çiçek yapıları ve muazzam çeşitlilikleri ile tanınırlar.",
        season: "yaz", difficulty: "Zor", sunlight: "Dolaylı Işık",
        water: "Az-Orta", bloom: "Yıl Boyu",
        color: "linear-gradient(135deg, #F8E8F0, #F0C0D8)",
        tips: ["Dolaylı güneş ışığı verin", "Buz küpü ile sulayın", "Özel orkide toprağı kullanın", "Nemli ortam sağlayın"],
        tags: ["yaz", "zor"]
    },
    {
        id: 7, name: "Sümbül", emoji: "💜", latin: "Hyacinthus",
        desc: "Yoğun ve tatlı kokusuyla sümbüller, ilkbaharın en renkli çiçeklerinden biridir.",
        fullDesc: "Sümbüller, soğanlı çok yıllık bitkilerdir. Akdeniz ve İran kökenli olan sümbüller, ilkbaharın erken döneminde çiçek açar. Yoğun kokuları ve canlı renkleriyle bahçelerde ve evlerde çok tercih edilirler.",
        season: "ilkbahar", difficulty: "Kolay", sunlight: "Tam Güneş / Yarı Gölge",
        water: "Orta", bloom: "Mart - Nisan",
        color: "linear-gradient(135deg, #E8D5F5, #D0B0E8)",
        tips: ["Soğanları sonbaharda dikin", "Serin ortamda çiçek açar", "Çiçek salkımını destekleyin", "Saksıda da yetişir"],
        tags: ["ilkbahar", "kolay"]
    },
    {
        id: 8, name: "Yasemin", emoji: "🤍", latin: "Jasminum",
        desc: "Büyüleyici kokusuyla akşamları açan yasemin, bahçeye romantizm katar.",
        fullDesc: "Yasemin, Oleaceae familyasından tırmanıcı ya da çalı formunda büyüyen bir bitkidir. 200'den fazla türü olan yasemin, özellikle beyaz çiçekleri ve yoğun kokusuyla bilinir. Parfüm endüstrisinin en değerli çiçeklerinden biridir.",
        season: "yaz", difficulty: "Orta", sunlight: "Tam Güneş / Yarı Gölge",
        water: "Orta", bloom: "Haziran - Eylül",
        color: "linear-gradient(135deg, #F5F5DC, #FFFAF0)",
        tips: ["Tırmanma desteği sağlayın", "Düzenli budama yapın", "İlkbaharda gübreleme yapın", "Kışın soğuktan koruyun"],
        tags: ["yaz", "orta"]
    },
    {
        id: 9, name: "Kamelya", emoji: "🌺", latin: "Camellia",
        desc: "Kış aylarında çiçek açan zarif kamelya, bahçenizi kışın bile renklendirir.",
        fullDesc: "Kamelya, Theaceae familyasından yaprak dökmeyen bir çalıdır. Doğu Asya kökenli olan kamelya, kış aylarında çiçek açmasıyla özeldir. Çay bitkisi de kamelya ailesine aittir (Camellia sinensis).",
        season: "kislik", difficulty: "Orta", sunlight: "Yarı Gölge",
        water: "Düzenli", bloom: "Kasım - Mart",
        color: "linear-gradient(135deg, #FFE4E1, #FFC0CB)",
        tips: ["Asidik toprak tercih edin", "Rüzgardan korunaklı yer seçin", "Düzenli ancak fazla olmayan sulama", "Azalea-kamelya gübresi kullanın"],
        tags: ["kislik", "orta"]
    },
    {
        id: 10, name: "Nergis", emoji: "🌼", latin: "Narcissus",
        desc: "İlkbaharın habercisi nergisler, sarı ve beyaz tonlarıyla neşe saçar.",
        fullDesc: "Nergis, Amaryllidaceae familyasından soğanlı bir bitkidir. İlkbahar başında çiçek açan nergisler, dayanıklı yapılarıyla bahçıvanların favorisidir. Trompet şekilli çiçekleri ve tatlı kokusuyla tanınır.",
        season: "ilkbahar", difficulty: "Kolay", sunlight: "Tam Güneş",
        water: "Az-Orta", bloom: "Şubat - Nisan",
        color: "linear-gradient(135deg, #FFF8DC, #FFE4B5)",
        tips: ["Soğanları 15 cm derinliğe dikin", "Gruplar halinde daha güzel görünür", "Çiçekler solduktan sonra yaprakları bırakın", "Fare ve tavşanlar yemez"],
        tags: ["ilkbahar", "kolay"]
    },
    {
        id: 11, name: "Kadife Çiçeği", emoji: "🧡", latin: "Tagetes",
        desc: "Turuncu ve sarı tonlarıyla kadife çiçeği, zararlıları uzaklaştırmada da etkilidir.",
        fullDesc: "Kadife çiçeği, Asteraceae familyasından tek yıllık bir bitkidir. Canlı turuncu ve sarı çiçekleriyle bahçeye sıcaklık katar. Doğal zararlı kovucu özelliği sayesinde sebze bahçelerinde de yaygın kullanılır.",
        season: "sonbahar", difficulty: "Kolay", sunlight: "Tam Güneş",
        water: "Az-Orta", bloom: "Haziran - Kasım",
        color: "linear-gradient(135deg, #FFE0B2, #FFB74D)",
        tips: ["Tohum ile kolayca yetiştirin", "Solmuş çiçekleri koparın", "Sebze bahçesinde ekim yapın", "Sıcaklığı sever"],
        tags: ["sonbahar", "kolay"]
    },
    {
        id: 12, name: "Kardelen", emoji: "❄️", latin: "Galanthus",
        desc: "Karların arasından çıkan narin kardelen, umudun ve yeni başlangıcların çiçeğidir.",
        fullDesc: "Kardelen, Amaryllidaceae familyasından soğanlı küçük bir bitkidir. Kış sonunda, karlar erimeden çiçek açan ilk bitkilerden biridir. Beyaz çan şekilli çiçekleri ile zarif bir görünüm sunar.",
        season: "kislik", difficulty: "Kolay", sunlight: "Yarı Gölge",
        water: "Az", bloom: "Ocak - Mart",
        color: "linear-gradient(135deg, #F0F8FF, #E0E8F0)",
        tips: ["Ağaç altlarına dikin", "Soğanları sonbaharda dikin", "Doğallaşmasına izin verin", "Nemli toprak tercih edin"],
        tags: ["kislik", "kolay"]
    },
    {
        id: 13, name: "Sakura", emoji: "🌸", latin: "Prunus serrulata",
        desc: "Japon kiraz çiçeği, pembe bulutlar gibi açarak büyüleyici bir manzara sunar.",
        fullDesc: "Sakura, Japon kültürünün simgesi olan kiraz ağacı çiçeğidir. İlkbaharda kısa bir süre açan bu çiçekler, yaşamın geçiciliğini (mono no aware) sembolize eder. Pembe ve beyaz tonlarıyla hayranlık uyandırır.",
        season: "ilkbahar", difficulty: "Orta", sunlight: "Tam Güneş",
        water: "Düzenli", bloom: "Mart - Nisan",
        color: "linear-gradient(135deg, #FFE4EC, #FFB6C1)",
        tips: ["Geniş alana ihtiyaç duyar", "İyi drene olan toprak kullanın", "Çiçeklenme sonrası budayın", "Sabırlı olun, ağaç büyümesi zaman alır"],
        tags: ["ilkbahar", "orta"]
    },
    {
        id: 14, name: "Ortanca", emoji: "💠", latin: "Hydrangea",
        desc: "Toprak pH'ına göre renk değiştiren ortancalar, geniş çiçek kümeleriyle göz kamaştırır.",
        fullDesc: "Ortanca, Hydrangeaceae familyasından çalı formunda büyüyen çok yıllık bir bitkidir. Büyük, top şeklindeki çiçek kümeleriyle dikkat çeker. Toprak pH'ına göre mavi, pembe veya mor renkte çiçek açar.",
        season: "yaz", difficulty: "Orta", sunlight: "Yarı Gölge",
        water: "Bol", bloom: "Haziran - Eylül",
        color: "linear-gradient(135deg, #D0E8F5, #B0C0E8)",
        tips: ["Asidik toprak mavi, bazik pembe çiçek verir", "Bol su isteyen bir bitkidir", "Yarı gölge ideal yerdir", "Kuru çiçekleri dekoratif kullanın"],
        tags: ["yaz", "orta"]
    },
    {
        id: 15, name: "Sardunya", emoji: "🌺", latin: "Pelargonium",
        desc: "Balkon ve pencere pervazlarının vazgeçilmezi sardunya, canlı renkleriyle enerji verir.",
        fullDesc: "Sardunya, Geraniaceae familyasından yarı dayanıklı çok yıllık bir bitkidir. Güney Afrika kökenli olan sardunya, kolay bakımı ve uzun çiçeklenme dönemiyle dünyanın en popüler balkon çiçeklerinden biridir.",
        season: "yaz", difficulty: "Kolay", sunlight: "Tam Güneş",
        water: "Orta", bloom: "Mayıs - Kasım",
        color: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
        tips: ["Bol güneş ışığı verin", "Toprak kuruduğunda sulayın", "Solmuş çiçekleri koparın", "Kışın içeri alın"],
        tags: ["yaz", "kolay"]
    },
    {
        id: 16, name: "Menekşe", emoji: "💜", latin: "Viola",
        desc: "Küçük ama sevimli menekşeler, gölge bahçelerin en sadık çiçeğidir.",
        fullDesc: "Menekşe, Violaceae familyasından tek veya çok yıllık bir bitkidir. Küçük, zarif çiçekleriyle tanınan menekşeler, gölge alanları seven bitkilerdendir. Afrika menekşesi (Saintpaulia) ev ortamında en çok yetiştirilen türdür.",
        season: "ilkbahar", difficulty: "Kolay", sunlight: "Yarı Gölge",
        water: "Orta", bloom: "Mart - Haziran",
        color: "linear-gradient(135deg, #9B59B6, #8E44AD)",
        tips: ["Dolaylı ışık tercih eder", "Yapraklarını ıslatmayın", "Serin ortamda daha iyi çiçek açar", "Özel menekşe toprağı kullanın"],
        tags: ["ilkbahar", "kolay"]
    },
    {
        id: 17, name: "Krizantem", emoji: "🏵️", latin: "Chrysanthemum",
        desc: "Sonbaharın kraliçesi krizantemler, mevsimin son renklerini bahçeye taşır.",
        fullDesc: "Krizantem, Asteraceae familyasından çok yıllık bir bitkidir. Uzakdoğu kültüründe önemli bir yere sahip olan krizantem, Japonya'nın ulusal çiçeğidir. Sonbaharda çiçek açan nadir bitkilerden biridir.",
        season: "sonbahar", difficulty: "Orta", sunlight: "Tam Güneş",
        water: "Düzenli", bloom: "Eylül - Kasım",
        color: "linear-gradient(135deg, #FFD700, #FFA500)",
        tips: ["Yaz ortasında tepe budaması yapın", "İyi hava sirkülasyonu sağlayın", "Tam güneş alan yer seçin", "Don öncesi koruma sağlayın"],
        tags: ["sonbahar", "orta"]
    },
    {
        id: 18, name: "Zambak", emoji: "🪷", latin: "Lilium",
        desc: "Asalet ve zarafetin simgesi zambaklar, görkemli çiçekleriyle bahçeyi taçlandırır.",
        fullDesc: "Zambak, Liliaceae familyasından soğanlı çok yıllık bir bitkidir. Büyük ve gösterişli çiçekleriyle bilinir. Kokulu türleri bahçeye harika bir koku katar. Beyaz zambak, saflık ve masumiyetin sembolüdür.",
        season: "yaz", difficulty: "Orta", sunlight: "Tam Güneş / Yarı Gölge",
        water: "Orta", bloom: "Haziran - Ağustos",
        color: "linear-gradient(135deg, #FFFFFF, #FFF0F5)",
        tips: ["Derin dikim yapın (soğan boyunun 3 katı)", "İyi drene olan toprak tercih edin", "Saksıda da yetişir", "Kedilere zehirlidir, dikkat edin"],
        tags: ["yaz", "orta"]
    }
];

// ===== PALETTE FLOWERS =====
const paletteFlowers = [
    { emoji: "🌹", name: "Gül" },
    { emoji: "🌷", name: "Lale" },
    { emoji: "🌼", name: "Papatya" },
    { emoji: "🌻", name: "Ayçiçeği" },
    { emoji: "🪻", name: "Lavanta" },
    { emoji: "🌺", name: "Orkide" },
    { emoji: "🌸", name: "Sakura" },
    { emoji: "💐", name: "Buket" },
    { emoji: "🪷", name: "Zambak" },
    { emoji: "💮", name: "Beyaz Ç." },
    { emoji: "🌿", name: "Yeşillik" },
    { emoji: "🍀", name: "Yonca" },
    { emoji: "🌱", name: "Fide" },
    { emoji: "🪴", name: "Saksı" },
    { emoji: "🌾", name: "Buğday" },
    { emoji: "🍃", name: "Yaprak" },
    { emoji: "🦋", name: "Kelebek" },
    { emoji: "🐝", name: "Arı" },
];

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const flowersGrid = document.getElementById('flowersGrid');
const paletteItems = document.getElementById('paletteItems');
const gardenCanvas = document.getElementById('gardenCanvas');
const gardenPlantedArea = document.getElementById('gardenPlantedArea');
const gardenInstructions = document.getElementById('gardenInstructions');
const plantedCount = document.getElementById('plantedCount');
const clearGarden = document.getElementById('clearGarden');
const saveGarden = document.getElementById('saveGarden');
const flowerModal = document.getElementById('flowerModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const ctaForm = document.getElementById('ctaForm');
const ctaSuccess = document.getElementById('ctaSuccess');

let selectedPaletteFlower = null;
let plantedFlowers = 0;

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderFlowerCards();
    renderPalette();
    initScrollAnimations();
    initCounterAnimation();
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE NAV TOGGLE =====
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== RENDER FLOWER CARDS =====
function renderFlowerCards(filter = 'all') {
    const filtered = filter === 'all' ? flowers : flowers.filter(f => f.tags.includes(filter));

    flowersGrid.innerHTML = filtered.map(flower => `
        <div class="flower-card" data-id="${flower.id}" data-season="${flower.season}">
            <div class="flower-card-visual" style="background: ${flower.color};">
                <div class="flower-bg-pattern">
                    ${flower.emoji.repeat(12)}
                </div>
                <span class="flower-emoji">${flower.emoji}</span>
            </div>
            <div class="flower-card-body">
                <h3 class="flower-card-name">${flower.name}</h3>
                <p class="flower-card-latin">${flower.latin}</p>
                <p class="flower-card-desc">${flower.desc}</p>
                <div class="flower-card-meta">
                    <span class="flower-tag season-${flower.season === 'yaz' ? 'summer' : flower.season === 'ilkbahar' ? 'spring' : flower.season === 'sonbahar' ? 'autumn' : 'winter'}">${flower.season === 'kislik' ? 'Kışa Dayanıklı' : flower.season.charAt(0).toUpperCase() + flower.season.slice(1)}</span>
                    <span class="flower-tag difficulty-${flower.difficulty === 'Kolay' ? 'easy' : flower.difficulty === 'Orta' ? 'medium' : 'hard'}">${flower.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Re-init scroll animations for new cards
    setTimeout(() => {
        initScrollAnimations();
    }, 100);

    // Add click event
    document.querySelectorAll('.flower-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openFlowerModal(id);
        });
    });
}

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderFlowerCards(btn.dataset.filter);
    });
});

// ===== FLOWER MODAL =====
function openFlowerModal(id) {
    const flower = flowers.find(f => f.id === id);
    if (!flower) return;

    modalBody.innerHTML = `
        <div class="modal-flower-header" style="background: ${flower.color};">
            <span class="modal-flower-emoji">${flower.emoji}</span>
        </div>
        <div class="modal-flower-info">
            <h2>${flower.name}</h2>
            <span class="latin-name">${flower.latin}</span>
            <p class="description">${flower.fullDesc}</p>
            <div class="modal-details-grid">
                <div class="modal-detail">
                    <div class="modal-detail-label">Mevsim</div>
                    <div class="modal-detail-value">${flower.bloom}</div>
                </div>
                <div class="modal-detail">
                    <div class="modal-detail-label">Güneş</div>
                    <div class="modal-detail-value">${flower.sunlight}</div>
                </div>
                <div class="modal-detail">
                    <div class="modal-detail-label">Sulama</div>
                    <div class="modal-detail-value">${flower.water}</div>
                </div>
                <div class="modal-detail">
                    <div class="modal-detail-label">Zorluk</div>
                    <div class="modal-detail-value">${flower.difficulty}</div>
                </div>
            </div>
            <div class="modal-care-tips">
                <h4>🌿 Bakım İpuçları</h4>
                <ul>
                    ${flower.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    flowerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
flowerModal.addEventListener('click', (e) => {
    if (e.target === flowerModal) closeModal();
});

function closeModal() {
    flowerModal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== RENDER PALETTE =====
function renderPalette() {
    paletteItems.innerHTML = paletteFlowers.map((flower, i) => `
        <div class="palette-item" data-index="${i}" data-emoji="${flower.emoji}">
            <span class="p-emoji">${flower.emoji}</span>
            <span class="p-name">${flower.name}</span>
        </div>
    `).join('');

    document.querySelectorAll('.palette-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.palette-item').forEach(p => p.classList.remove('selected'));
            item.classList.add('selected');
            selectedPaletteFlower = item.dataset.emoji;
        });
    });
}

// ===== GARDEN PLANTING =====
let justDragged = false; // Prevent planting after drag

gardenCanvas.addEventListener('click', (e) => {
    // Don't plant if we just finished dragging
    if (justDragged) {
        justDragged = false;
        return;
    }

    // Don't plant if clicking on an existing flower
    if (e.target.closest('.planted-flower')) return;

    if (!selectedPaletteFlower) {
        showToast('Önce bir çiçek seçin! 🌸');
        return;
    }

    const rect = gardenCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only plant on the ground area (bottom 60%)
    if (y < rect.height * 0.35) {
        showToast('Çiçekler toprağa dikilir! Yeşil alana tıklayın 🌱');
        return;
    }

    plantFlower(x, y);
});

function plantFlower(x, y) {
    const flower = document.createElement('div');
    flower.className = 'planted-flower';
    flower.textContent = selectedPaletteFlower;

    // Random size variation
    const scale = 0.8 + Math.random() * 0.6;
    flower.style.left = `${x - 16}px`;
    flower.style.top = `${y - 16}px`;
    flower.style.fontSize = `${scale * 2}rem`;

    // Add stem for plant-like emojis
    const plantEmojis = ['🌹', '🌷', '🌼', '🌻', '🪻', '🌺', '🌸', '🪷', '💮', '🌾'];
    if (plantEmojis.includes(selectedPaletteFlower)) {
        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.height = `${10 + Math.random() * 15}px`;
        flower.appendChild(stem);
    }

    gardenPlantedArea.appendChild(flower);

    // Update count
    plantedFlowers++;
    plantedCount.textContent = plantedFlowers;

    // Hide instructions
    gardenInstructions.classList.add('hidden');

    // Show toast
    const messages = [
        `${selectedPaletteFlower} dikildi!`,
        `Güzel bir ${selectedPaletteFlower}! Bahçen büyüyor!`,
        `Harika! ${selectedPaletteFlower} yerine yerleşti!`,
        `${selectedPaletteFlower} toprağa kavuştu! 🌱`,
    ];
    showToast(messages[Math.floor(Math.random() * messages.length)]);

    // Make draggable + deletable
    makeDraggable(flower);
    makeDeleteable(flower);
}

function makeDraggable(el) {
    let isDragging = false;
    let hasMoved = false;
    let startX, startY, origX, origY;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        hasMoved = false;
        el.style.cursor = 'grabbing';
        el.style.zIndex = 25;
        startX = e.clientX;
        startY = e.clientY;
        origX = el.offsetLeft;
        origY = el.offsetTop;
        e.preventDefault();
        e.stopPropagation();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        // Only count as "moved" if dragged more than 5px (prevents accidental micro-drags)
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            hasMoved = true;
        }

        el.style.left = `${origX + dx}px`;
        el.style.top = `${origY + dy}px`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            el.style.cursor = 'grab';
            el.style.zIndex = 15;

            // If we actually moved, set flag so canvas click doesn't plant a new flower
            if (hasMoved) {
                justDragged = true;
                // Reset the flag after a short delay in case click event fires
                setTimeout(() => { justDragged = false; }, 100);
            }
        }
    });
}

function makeDeleteable(el) {
    el.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Add a shrink animation before removing
        el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        el.style.transform = 'scale(0)';
        el.style.opacity = '0';

        setTimeout(() => {
            el.remove();
            plantedFlowers--;
            if (plantedFlowers < 0) plantedFlowers = 0;
            plantedCount.textContent = plantedFlowers;

            // Show instructions again if garden is empty
            if (plantedFlowers === 0) {
                gardenInstructions.classList.remove('hidden');
            }
        }, 300);

        showToast('Çiçek söküldü! 🗑️');
    });
}

// ===== CLEAR GARDEN =====
clearGarden.addEventListener('click', () => {
    gardenPlantedArea.innerHTML = '';
    plantedFlowers = 0;
    plantedCount.textContent = 0;
    gardenInstructions.classList.remove('hidden');
    showToast('Bahçe temizlendi! Yeni bir başlangıç 🌱');
});

// ===== SAVE GARDEN =====
saveGarden.addEventListener('click', () => {
    showToast('Bahçen kaydedildi! 📸✨');
});

// ===== TOAST =====
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}



// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.flower-card, .tip-card, .season-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// ===== COUNTER ANIMATION =====
function initCounterAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) observer.observe(statsSection);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, stepTime);
}

// ===== CTA FORM =====
ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ctaForm.style.display = 'none';
    ctaSuccess.style.display = 'block';
    showToast('Bahçe ailemize hoş geldiniz! 🌸');
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroFlowers = document.querySelector('.hero-flowers');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }

    if (heroFlowers && scrolled < window.innerHeight) {
        heroFlowers.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
