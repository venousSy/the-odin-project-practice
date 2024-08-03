const myHeaders = new Headers()
myHeaders.append('x-api-key', 'RlSaHoZHhlaAPiyZ5MfzZ214yQB9o4d71PdTFzMv')

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
}

const result = fetch(
  'https://eu.vatapi.com/v2/vat-rate-check?rate_type=TBE&country_code=DE',
  requestOptions
)
  .then((response) => response.json())
  .then((data) => data.rates.electronic.standard.rate)

result
