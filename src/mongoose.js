const mongoose = require('mongoose')

const { MONGOOSE_URI, MONGOOSE_URI_TEST, NODE_ENV } = process.env

const conectionString =
  NODE_ENV === 'production' ? MONGOOSE_URI : MONGOOSE_URI_TEST

// CONEXION MONGOOSE

mongoose
  .connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('data base conected'))
  .catch((err) => console.log(err))
