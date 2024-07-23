const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const reverse = (text) => {
  const textAraay = text.split('')
  const reversedArray = textAraay.reverse()
  const reversedText = reversedArray.join('')
  return reversedText
}

const calculator = {
  add(n1, n2) {
    return n1 + n2
  },
  divide(n1, n2) {
    return n1 / n2
  },
  multiply(n1, n2) {
    return n1 * n2
  },
}
const shift = (char) => {
  const charcode = char.charCodeAt(0) + shifter
  const newChar = String.fromCharCode(charcode)
  return newChar
}
// takes a string and a shift factor and returns it with each character “shifted”.
const caesarCipher = (text, shifter) => {
  // shift char by shifter value
  const shift = (char) => {
    let charcode = char.charCodeAt(0) + shifter
    if (
      char.charCodeAt(0) < 65 ||
      char.charCodeAt(0) > 122 ||
      (char.charCodeAt(0) < 97 && char.charCodeAt(0) > 90)
    ) {
      return char
    } else if (char.charCodeAt(0) <= 90 && charcode > 90) {
      const counter = charcode - 91
      charcode = 65 + counter
      const newChar = String.fromCharCode(charcode)
      return newChar
    } else if (charcode <= 122 && charcode >= 97) {
      const newChar = String.fromCharCode(charcode)
      return newChar
    } else if (charcode > 122) {
      const counter = charcode - 123
      charcode = 97 + counter
      const newChar = String.fromCharCode(charcode)
      return newChar
    } else if (charcode <= 90 && charcode >= 65) {
      const newChar = String.fromCharCode(charcode)
      return newChar
    }
  }
  const textAraay = text.split('')
  let newTextArray = textAraay.map((x) => shift(x))
  const newText = newTextArray.join('')
  return newText
}

export { capitalize, reverse, calculator, caesarCipher, shift }
