const Spot = require('../src/spot')
const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })




client.WithDraw({ coin: "XXX", address: "XXX", amount: 10000, network: "BEP20(BSC)" })
  .then(response => client.logger.log(response.data))
