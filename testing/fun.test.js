import { capitalize, reverse, calculator, caesarCipher, shift } from './main'

it('capitalize the first letter', () => {
  expect(capitalize('test')).toBe('Test')
})

it('reverse a string with one word', () => {
  expect(reverse('asd')).toBe('dsa')
})
it('reverse a string with more tahn one word', () => {
  expect(reverse('asd ab')).toBe('ba dsa')
})
it('calculat adding tow numbers', () => {
  expect(calculator.add(5, 8)).toBe(13)
})
it('calculat divide tow numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5)
})
it('calculat multiply tow numbers', () => {
  expect(calculator.multiply(10, 8)).toBe(80)
})
it('shift text', () => {
  expect(caesarCipher('abc', 3)).toBe('def')
})
it('shift text  wrapping from z to a', () => {
  expect(caesarCipher('abz', 3)).toBe('dec')
})
it('shift text  contain apper case', () => {
  expect(caesarCipher('Abz', 3)).toBe('Dec')
})
it('shift text  contain apper case with big shifter', () => {
  expect(caesarCipher('Zbz', 10)).toBe('Jlj')
})
it('shift text  contain spaces', () => {
  expect(caesarCipher('Zbz b c', 10)).toBe('Jlj l m')
})
it('shift random text', () => {
  expect(caesarCipher('*Hello, World!', 3)).toBe('*Khoor, Zruog!')
})
