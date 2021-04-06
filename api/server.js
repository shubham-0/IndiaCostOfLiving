const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { PORT = 5000 } = process.env;

//models
const Note = require('./Note');


// mongoose.connect(
//   'mongodb://localhost:27017/notes', 
//   { useNewUrlParser: true, useCreateIndex: true, }
// );
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.get('/api/note/list', (req, res) => {
//   Note.find({}).sort({updatedAt: 'descending'}).exec((err, notes) => {
//     if (err) 
//       return res.status(404).send('Error while getting notes!');
//     return res.send({notes});
//   });
// });

// app.post('/api/note/create', (req, res) => {
//   const note = new Note({body: req.body.body, title: req.body.title});
//   note.save( (err) => {
//     if (err) return res.status(404).send({message: err.message});
      
//     return res.send({ note });
//   });
// });


// app.post('/api/note/update/:id', (req, res) => {
//   Note.findByIdAndUpdate(req.params.id, req.body.data , { new: true }, (err, note) => {
//     if (err) return res.status(404).send({message: err.message});
//     return res.send({ message: 'note updated!', note });
//   });
// });

// app.post('/api/note/delete/:id', (req,res) => {
//   Note.findByIdAndRemove(req.params.id, (err) => {
//     if (err) return res.status(404).send({message: err.message});
//     return res.send({ message: 'note deleted!' });
//   });
// });

/** //////////////////////////////////////////////////////////////////////////////////*/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:city', async (req, res) => {
  const city = req.params.city[0].toUpperCase() + req.params.city.slice(1).toLowerCase();
  const { currency = 'INR' } = req.query;

  const response = await fetch(`https://www.numbeo.com/cost-of-living/in/${city}?displayCurrency=${currency}`);
  if (!response.ok) {
      return res.status(response.status).send(response.statusText);
      
  }
  const html = await response.text();

  const $ = cheerio.load(html);

  const rows = $('body > div.innerWidth > table > tbody > tr')
      .filter((i, el) => $(el).children('td').length === 3)
      .map(
          (i, el) => $(el).children().map(
              (i, el) => $(el).text().trim()
          ).toArray()
      ).toArray();

  const costs = chunkArray(rows, 3)
      .map(([item, costWithSymbol, range]) => {
          const cost = costWithSymbol.replace(/^.*?([\d,.]+).*?$/, '$1');
          const [rangeLow, rangeHigh] = range.split('-');
          return {
              item,
              cost,
              range: {
                  low: rangeLow,
                  high: rangeHigh
              }
          }
      });
     //send(res.json({ciyt,costs,currency}));
  return res.json({ city, costs, currency });
});

app.get('*', (req, res) => res.status(400).json({
  error: 'No city supplied. Please navigate to `/:city` to obtain results.'
}));

function chunkArray(arr, chunkSize) {
  let temp = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      temp.push(arr.slice(i, i + chunkSize));
  }
  return temp;
}
/**/////////////////////////////////////////////////////////////////////////////////// */


/**///////////////////////////////////////////////////////////////////////////////////// */


// const PORT = 5000;

// app.listen(PORT);
// console.log('api runnging on port ' + PORT + ': ');
app.listen(PORT, () => console.log(`Cost of Living API running on port ${PORT}`));