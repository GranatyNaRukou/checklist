app.get('/register',(req, res) =>{
  res.render("register.ejs")
});

app.post('/register',(req, res) =>{
  const { prezdivka, heslo, hesloznovu } = req.body;


  connection.query('INSERT INTO register (uzivatelskeJmeno, heslo)VALUES (?, ?)',
  [prezdivka, hesloznovu],
  (err, result, fields) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
    
  });
  res.render("login.ejs");

});
