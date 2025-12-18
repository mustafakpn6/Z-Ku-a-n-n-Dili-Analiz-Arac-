function analyzeText() {
    const text = document.getElementById("textInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (text === "") {
        resultDiv.innerHTML = "Lütfen bir metin giriniz.";
        return;
    }

    const words = text.split(/\s+/);
    const wordCount = words.length;

    resultDiv.innerHTML = `
        <strong>Analiz Sonucu:</strong><br>
        Kelime Sayısı: ${wordCount}
    `;
}

function temporaryClear() {
    document.getElementById("textInput").value = "";
    document.getElementById("result").innerHTML = "";
}
