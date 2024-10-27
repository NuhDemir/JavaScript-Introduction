var models = [
    { name: 'Electro Guitar', image: 'img/guitar.jpg', cardText:'Elimdeki elektro gitarlar, çeşitli ton seçenekleri ve yüksek kaliteli manyetik sistemleriyle, her müzisyenin ihtiyaçlarına uygun zengin ses paletleri sunarak performansınızı en üst seviyeye çıkarır.', link: 'https://www.pexels.com/tr-tr/' },
    { name: 'Oud', image: 'img/oud.jpg', cardText:'Udi, yumuşak ve melodik sesiyle öne çıkan, genellikle sekiz telden oluşan, Orta Doğu ve Akdeniz müziğinde yaygın olarak kullanılan bir tür yaylı çalgıdır.', link: 'https://www.pexels.com/tr-tr/' },
    { name: 'Piano', image: 'img/piano.jpg', cardText:'Piyano, 88 tuşu ile zengin tonlar ve dinamikler sunarak hem solo performanslar hem de orkestral eserlerde sıklıkla kullanılan, yaygın olarak bilinen bir klavye çalgısıdır.', link: 'https://www.pexels.com/tr-tr/' },
    { name: 'Violin', image: 'img/violin.jpg', cardText:'Viyolin, dört telden oluşan ve yayla çalınarak melodik ve harmonik zenginlik sunan, klasik müzikten folk müziğine kadar birçok türde yer alan, oldukça zarif bir yaylı çalgıdır.', link: 'https://www.pexels.com/tr-tr/' },
    { name: 'Saxophone', image: 'img/saxophone.jpg', cardText:'Saksafon, metal gövdesi ve kamış ağızlığı ile üretilen, zengin tonları ve expressif yapısıyla caz, klasik ve pop müzik gibi birçok türde sıkça kullanılan bir nefesli çalgıdır.', link: 'https://www.pexels.com/tr-tr/' },
];

var index = 0; // Başlangıçta 0'dan başlıyor
var slideCount = models.length;
var settings = {
    duration: 4000, // ms cinsinden süre
    random: false
}

init(settings);
showSlide(index); // Başlangıçta index'i geçiriyoruz

// Buttonlar
document.querySelector('.iconoir-dot-arrow-left').addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = slideCount - 1; // Index sıfırın altına inerse en son slayta gider
    }
    showSlide(index);
});

document.querySelector('.iconoir-dot-arrow-right').addEventListener('click', function () {
    index++;
    if (index >= slideCount) {
        index = 0; // Index slayt sayısını aşarsa başa döner
    }
    showSlide(index);
});

// Otomatik slide işlemi
function init(settings) {
    var prev;
    setInterval(function() {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev);
            prev = index;
        } else {
            index++;
            if (index >= slideCount) {
                index = 0; // Index slayt sayısını aşarsa başa döner
            }
        }
        showSlide(index);
    }, settings.duration);
}

function showSlide(i) {
    index = i;

    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    // Fade out efekti
    const card = document.querySelector('.card');
    card.classList.add('fade-out');

    setTimeout(() => {
        document.querySelector('.card-title').textContent = models[index].name;
        document.querySelector('.card-text').textContent = models[index].cardText;
        document.querySelector('.card-img-top').setAttribute('src', models[index].image);
        document.querySelector('.card-link').setAttribute('href', models[index].link);
        
        // Fade in efekti
        card.classList.remove('fade-out');
        card.classList.add('fade-in');
    }, 500); // 500ms sonra içerik değişimi
}
