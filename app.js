onst express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('GET PATH => /');
  res.send('Hello World! 2023-06-28 0000')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
