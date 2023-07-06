import { englishToMorseCode, morseCodeToEnglish } from "./script.js";
/*------------------------------------*\
# Translation Event Listeners & Display
\*------------------------------------*/

const englishInput = document.getElementById("englishInput");
const morseInput = document.getElementById("morseInput");

englishInput.addEventListener("input", () => {
    try {
        morseInput.value = englishToMorseCode(englishInput.value);
        morseInput.style.color = "";
        morseInput.style.borderColor = "";
    } catch (e) {
        console.error(e);
        morseInput.value = "Error: " + e.message;
        morseInput.style.color = "red";
        morseInput.style.borderColor = "red";
    }
});

morseInput.addEventListener("input", () => {
    try {
        englishInput.value = morseCodeToEnglish(morseInput.value);
        englishInput.style.color = "";
        englishInput.style.borderColor = "";
    } catch (e) {
        console.error(e);
        englishInput.value = "Error: " + e.message;
        englishInput.style.color = "red";
        englishInput.style.borderColor = "red";
    }
});

/*------------------------------------*\
# Reset input button
\*------------------------------------*/

const clearValues = () => {
    document.getElementById("englishInput").value = "";
    document.getElementById("morseInput").value = "";
    morseInput.style.color = "";
    morseInput.style.borderColor = "";
    englishInput.style.color = "";
    englishInput.style.borderColor = "";
};

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
    clearValues();
});
