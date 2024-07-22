const ordertotal = require('./order.js')

it('quantity', () =>
  expect(
    ordertotal({
      items: [{ name: 'Dragon food ', price: 2, quantity: 3 }],
    })
  ).toBe(6))
it('no quantity specified', () =>
  expect(
    ordertotal({
      items: [{ name: 'ss', price: 35 }],
    })
  ).toBe(35))
it('Happy bath example 1', () =>
  expect(
    ordertotal({
      items: [
        { name: 'ss', price: 35, quantity: 2 },
        { name: 'ss', price: 2, quantity: 5 },
      ],
    })
  ).toBe(80))
it('Happy bath example 2', () =>
  expect(
    ordertotal({
      items: [
        { name: 'ss', price: 40, quantity: 2 },
        { name: 'ss', price: 5, quantity: 5 },
      ],
    })
  ).toBe(105))
