const orderTotal = (fetch, order) => {
  if (order.country) {
    return fetch(
      'https://eu.vatapi.com/v2/vat-rate-check?rate_type=TBE&country_code=' +
        order.country
    )
      .then((response) => response.json())
      .then((data) => data.rates.electronic.standard.rate)
      .then((vat) =>
        order.items.reduce(
          (prev, cur) =>
            (prev + cur.price * (cur.quantity || 1)) * (1 + vat / 100),
          0
        )
      )
  }

  return Promise.resolve(
    order.items.reduce((prev, cur) => prev + cur.price * (cur.quantity || 1), 0)
  )
}

module.exports = orderTotal
