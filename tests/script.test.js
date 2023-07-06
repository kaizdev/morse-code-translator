import {
    englishToMorseCode,
    morseCodeToEnglish,
    notValidMorseCodeError,
    notAStringError,
    notAlphabetCharacterError,
} from "../scripts/script";

describe("Testing English string to Morse Code String translation", () => {
    test("Should throw an error if a string was not passed as the parameter", () => {
        expect(() => {
            englishToMorseCode(3).toThrow(notAStringError);
        });
        expect(() => {
            englishToMorseCode(true).toThrow(notAStringError);
        });
        expect(() => {
            englishToMorseCode([1, 2, 3]).toThrow(notAStringError);
        });
    });

    test("Should throw an error if anything other than a string of alphabet characters is passed", () => {
        expect(() => {
            englishToMorseCode("abb2").toThrow(notAlphabetCharacterError);
        });
        expect(() => {
            englishToMorseCode("321").toThrow(notAlphabetCharacterError);
        });
        expect(() => {
            englishToMorseCode("!fsv").toThrow(notAlphabetCharacterError);
        });
    });

    test("Should correctly translate english to morse code", () => {
        expect(englishToMorseCode("hello world")).toBe(
            ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
        );
        expect(englishToMorseCode("A")).toBe(".-");
        expect(englishToMorseCode("ABC")).toBe(".- -... -.-.");
    });
});

describe("Testing Morse Code string to English string translation", () => {
    test("Should throw an error if a string was not passed as the parameter", () => {
        expect(() => {
            morseCodeToEnglish(123).toThrow(notAStringError);
        });
        expect(() => {
            morseCodeToEnglish(false).toThrow(notAStringError);
        });
    });

    test("Should throw an error if anything other than a morse code character is passed (valid characters are period, dash, space, and forward slash)", () => {
        expect(() => {
            morseCodeToEnglish("...---234").toThrow(notValidMorseCodeError);
        });
        expect(() => {
            morseCodeToEnglish("hello").toThrow(notValidMorseCodeError);
        });
        expect(() => {
            morseCodeToEnglish("!@)").toThrow(notValidMorseCodeError);
        });
    });

    test("Should correctly translate morse code to english", () => {
        expect(
            morseCodeToEnglish(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
        ).toBe("HELLO WORLD");
        expect(morseCodeToEnglish("... --- ...")).toBe("SOS");
        expect(morseCodeToEnglish(".... .- .--. .--. -.--")).toBe("HAPPY");
    });
});
