import { englishToMorseCode, morseCodeToEnglish } from "./script.js";
/*------------------------------------*\
# Translation Event Listeners & Display
\*------------------------------------*/

const englishInput = document.getElementById("englishInput");
const morseInput = document.getElementById("morseInput");

englishInput.addEventListener("input", () => {
    try {
        morseInput.value = englishToMorseCode(englishInput.value);
    } catch (e) {
        console.error(e);
        morseInput.value = "Error: " + e.message;
    }
});

morseInput.addEventListener("input", () => {
    try {
        englishInput.value = morseCodeToEnglish(morseInput.value);
    } catch (e) {
        console.error(e);
        englishInput.value = "Error: " + e.message;
    }
});

/*------------------------------------*\
# Reset input button
\*------------------------------------*/

const clearValues = () => {
    document.getElementById("englishInput").value = "";
    document.getElementById("morseInput").value = "";
};

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
    clearValues();
});
