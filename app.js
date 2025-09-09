const express = require('express');
const nunjucks = require('nunjucks');
const mailer = require('./libs/mailer');
// const methodOverride = require('method-override') ;

const port = process.env.PORT || 3033;
const routes = require('./src/routes');

const app = express();

app.use(express.static(__dirname));
app.use(express.static('assets'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.urlencoded({ extended: true }));
// server.use(methodOverride('_method'));
app.use(routes);

app.set("view engine", "html", require('ejs').renderFile);

// app.get('/index', function(req, res) {
//   return res.render('index');
// });

app.post('/index', async function(req, res) {
  const name = req.body.name;
  const email = req.body.email;

  await mailer.sendMail({
    to: 'rodrigo@jsgconstrucoes.com.br',
    from: 'rodrigo@jsgconstrucoes.com.br',
    subject: 'Cadastro de novo visitante',
    html: `
      <h2>Dados para cadastro de novo Usuário</h2>
      <h3>NOME: ${name}.</h3>
      <br>
      <p>E-mail: ${email}</p>
      <p>Clique no link abaixo acessar a Nuvem da empresa.</p>
      <p>
        <a href="https://1drv.ms/u/s!AiyihaDlkq55hZFj20rHmgxuwcSM7Q?e=cRqxk0" target="_blank">
      </a>
      </p>
    `
  });

  return res.render('index' 
  // {
  //   success: 'Verifique seu E-mail para concluir o cadastro.'
  // }
  );
});

nunjucks.configure("src/app/pages", {
  express: app,
  autoescape: false,
  noCache: true
});

app.listen(port, function() {
  console.log("Servidor ligado.");    
});