const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')

app.all('/json-server2',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    let newp = path.join(__dirname, 'src/assets/2.json')
    fs.readFile(newp, 'utf8', function(err, dataStr)
    {
        if(err)
        {
            response.end("<h1> 404 not FOUND </h1>")
        }
        else{
            response.end(dataStr);
        }
    })
})

app.all('/json-server3',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    let newp = path.join(__dirname, 'src/assets/3.json')
    fs.readFile(newp, 'utf8', function(err, dataStr)
    {
        if(err)
        {
            response.end("<h1> 404 not FOUND </h1>")
        }
        else{
            response.end(dataStr);
        }
    })
})

app.all('/kline',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    let newp = path.join(__dirname, 'src/assets/kline.json')
    fs.readFile(newp, 'utf8', function(err, dataStr)
    {
        if(err)
        {
            response.end("<h1> 404 not FOUND </h1>")
        }
        else{
            response.end(dataStr);
        }
    })
})

app.listen(8001, ()=>
{
    console.log('正在监听8001端口')
})