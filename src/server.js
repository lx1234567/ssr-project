import App from './component/App'
const path = require('path')
const express = require('express')
const app = express()
const React = require('react')
const {renderToString} = require('react-dom/server')
const port = 3000

const content = renderToString(<App/>)
app.use(express.static('dist'))

app.get('/',(req,res)=>{
  res.send(`
    <!doctype html>
    <html>
       <title>ssr</title>
       <body>
         <div id="root">${content}</div>
         <script src='/client/index.js'></script>
       </body>
    </html>
  `)
})

app.listen(port,()=>{
  console.log('server listen on ' + port)
})