import app from "./app";
const port:number = 4448 || process.env.PORT
const host:string = '127.0.0.1'


app.listen(port, host, ()=>{
    console.log(`Ctf server is working, http://${host}:${port}`)
})