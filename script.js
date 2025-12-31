

let emojis = ["😂", "🤣", "🔥", "💀", "😭", "😍", "😎", "🤯", "🥶", "🫶"];
let abbreviations = ["slm", "nbr", "kib", "asap", "brb", "lol", "wtf", "idk", "imo", "tbh"];
let englishWords = ["cool", "fake", "mood", "cringe", "vibe",
    "story", "like", "post", "follow", "trend"];

function analyzeText() {

    const text = document.getElementById('textInput').value.toLowerCase();

    const foundEmojis = emojis.filter(e => text.includes(e));
    const foundAbbr = abbreviations.filter(a => text.includes(a));
    const foundEng = englishWords.filter(w => text.includes(w));

    document.getElementById('result').innerHTML =
        '<p><b>Emojiler:</b> ' + (foundEmojis.join(', ') || 'Yok') + '</p>' +
        '<p><b>Kısaltmalar:</b> ' + (foundAbbr.join(', ') || 'Yok') + '</p>' +
        '<p><b>İngilizce Kelimeler:</b> ' + (foundEng.join(', ') || 'Yok') + '</p>';
}

function temporaryClear() {
    document.getElementById('textInput').value = '';
    document.getElementById('result').innerHTML = '';

}
