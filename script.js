/* 
Z kuşağına özgü örnek veri listeleri
İleride API veya kullanıcı eklemesiyle genişletilebilir
*/

let emojis = ["😂", "🤣", "🔥", "💀", "😭", "😍", "😎", "🤯", "🥶", "🫶"];
let abbreviations = ["slm", "nbr", "kib", "asap", "brb", "lol", "wtf", "idk", "imo", "tbh"];
let englishWords = ["cool", "fake", "mood", "cringe", "vibe",
    "story", "like", "post", "follow", "trend"];

/*
Bu fonksiyon kullanıcının yazdığı metni analiz eder
Emoji, kısaltma ve İngilizce kelimeleri bulur
*/
function analyzeText() {

    // Kullanıcının girdiği metni al ve küçük harfe çevir
    const text = document.getElementById('textInput').value.toLowerCase();

    // Metin içinde geçen öğeleri filtrele
    const foundEmojis = emojis.filter(e => text.includes(e));
    const foundAbbr = abbreviations.filter(a => text.includes(a));
    const foundEng = englishWords.filter(w => text.includes(w));

    // Sonuçları ekrana yazdır
    document.getElementById('result').innerHTML =
        '<p><b>Emojiler:</b> ' + (foundEmojis.join(', ') || 'Yok') + '</p>' +
        '<p><b>Kısaltmalar:</b> ' + (foundAbbr.join(', ') || 'Yok') + '</p>' +
        '<p><b>İngilizce Kelimeler:</b> ' + (foundEng.join(', ') || 'Yok') + '</p>';
}

/*
Bu fonksiyon sadece ekranı temizler
Veri listelerini veya hafızayı etkilemez
*/
function temporaryClear() {
    document.getElementById('textInput').value = '';
    document.getElementById('result').innerHTML = '';
}