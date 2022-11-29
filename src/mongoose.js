const mongoose = require('mongoose')

const { MONGOOSE_URI } = process.env

const conectionString = MONGOOSE_URI

// CONEXION MONGOOSE

mongoose
  .connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('data base conected'))
  .catch((err) => console.log(err))
