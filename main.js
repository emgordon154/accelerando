'use strict'


const app = require('./server')
const PORT = process.env.PORT || 1337


app.listen(PORT, () => console.log(`server's up on port ${PORT} 😎`))
