const { response } = require('express')
const express = require('express')
const app = express()
const request = require('request')
const PORT = 5400

const api_url = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees'

app.get('/', (req, res) => {
   res.send("API is working!")
})

app.get('/employee', (reqq, res) => {
   request(api_url, (err, response, body) => {
      if(err){
         console.log(err)
      } else{
         const output = JSON.parse(body)
         const emp = output.map(({avatar, ...rest}) => rest)
         res.send(emp)
      }
   })
})

app.listen(PORT, (err) => {
   if(err) { console.log('error in api call')}
   else{ console.log(`API is running on port:${PORT}`)}
})