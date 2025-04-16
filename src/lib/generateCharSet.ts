import { lowerCaseChars, numberChars, symbolChars, upperCaseChars } from "../util/characters"

export const generateCharSet = (options: Options) => {
    let charSet: string[] = []

    if (options.upperCase) {
        charSet = charSet.concat(upperCaseChars)
    }

    if (options.lowerCase) {
        charSet = charSet.concat(lowerCaseChars)
    }

    if (options.numbers) {
        charSet = charSet.concat(numberChars)
    }

    if (options.symbols) {
        charSet = charSet.concat(symbolChars)
    }

    return charSet
}