import { morseCodeObject, morseCodeObjectReversed } from "./utils.js";

/*------------------------------------*\
# Translation Logic and Error Handling
\*------------------------------------*/

export const notAStringError = new Error(
    "string was not passed as a parameter"
);

export const notAlphabetCharacterError = new Error(
    "string cannot have numbers or symbols. It can only contain alphabet letters from a - z"
);

export const notValidMorseCodeError = new Error(
    "morse code string may only contain period, dash, forward slash or spaces"
);

export const englishToMorseCode = (englishString) => {
    const morseCodeArray = [];

    if (typeof englishString !== "string") {
        throw notAStringError;
    }

    if (!/^[a-z A-Z]*$/g.test(englishString)) {
        throw notAlphabetCharacterError;
    }

    for (let i in englishString) {
        const letter = englishString[i].toUpperCase();
        const morseCodeTranslation = morseCodeObject[letter];
        morseCodeTranslation
            ? morseCodeArray.push(morseCodeTranslation)
            : morseCodeArray.push("/");
    }
    return morseCodeArray.join(" ");
};

export const morseCodeToEnglish = (morseCodeString) => {
    const englishArray = [];

    if (typeof morseCodeString !== "string") {
        throw notAStringError;
    }

    if (!/^[. -/]*$/g.test(morseCodeString)) {
        throw notValidMorseCodeError;
    }

    const morseCodeArray = morseCodeString.split(" ");
    for (let value of morseCodeArray) {
        const englishTranslation = morseCodeObjectReversed[value];
        englishTranslation
            ? englishArray.push(englishTranslation)
            : englishArray.push(" ");
    }

    return englishArray.join("");
};
