const ordertotal = require('./order.js')
const emptyFn = () => {}
it('calss vatapi.com if country is spaceified', () => {
  let isFakeFetchCalled = false
  fakeFetch = (url) => {
    expect(url).toBe(
      'https://eu.vatapi.com/v2/vat-rate-check?rate_type=TBE&country_code=DE'
    )
    isFakeFetchCalled = true
    // data.rates.electronic.standard.rate
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          rates: {
            electronic: {
              standard: {
                rate: 19,
              },
            },
          },
        }),
    })
  }
  return ordertotal(fakeFetch, {
    country: 'DE',
    items: [{ name: 'Dragon food ', price: 20, quantity: 2 }],
  }).then((result) => {
    expect(result).toBe(20 * 2 * 1.19)
  })
})

it('quantity', () => {
  expect(
    ordertotal(emptyFn, {
      items: [{ name: 'Dragon food ', price: 2, quantity: 3 }],
    }).then((result) => expect(result).toBe(6))
  )
})

it('no quantity specified', () => {
  expect(
    ordertotal(emptyFn, {
      items: [{ name: 'ss', price: 35 }],
    }).then((result) => expect(result).toBe(35))
  )
})
it('Happy bath example 1', () => {
  expect(
    ordertotal(emptyFn, {
      items: [
        { name: 'ss', price: 35, quantity: 2 },
        { name: 'ss', price: 2, quantity: 5 },
      ],
    }).then((result) => expect(result).toBe(80))
  )
})
it('Happy bath example 2', () => {
  expect(
    ordertotal(emptyFn, {
      items: [
        { name: 'ss', price: 40, quantity: 2 },
        { name: 'ss', price: 5, quantity: 5 },
      ],
    }).then((result) => expect(result).toBe(105))
  )
})
