const fetch = require('node-fetch');
const app = require('express')();
app.all('/', (req, res)=>res.send('Your bot is alive!'))
module.exports = () => {
  app.listen(3000,()=>console.log('Server Ready'));
  
  // The Keep alive
  let U=`https://${process.mainModule.path.split('/').reverse()[0]}.${process.env.REPL_OWNER}.repl.co/`;
  setInterval(async () => {
    await fetch(U);
  }, 5000)
}