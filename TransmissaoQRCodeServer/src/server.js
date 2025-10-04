import { app } from './app.js'
import 'dotenv/config'

app.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.error('Error starting the server:', err)
    process.exit(1)
  }
  console.log('Server is running on port ' + process.env.PORT)
})
