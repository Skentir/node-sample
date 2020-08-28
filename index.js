const express = require('express');
const app = express();

const hbs = require('express-handlebars');
const Handlebars = require('handlebars');

const path = require('path');
app.use(express.static(__dirname+'/'))
app.set('view engine', 'hbs');

app.engine('hbs', hbs( {
    extname: 'hbs',  
    defaultView: 'default',  
    layoutsDir: path.join(__dirname, '/views/layouts'), 
    partialsDir: path.join(__dirname, '/views/partials'),
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}))


//listen to port
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    var params = {
        layout: 'main'
      }
    res.render('login', params)
})
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})