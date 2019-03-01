const app = require('express')();
//const needle = require('needle');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).json('welcome to root');
});

app.get('/foo', (req, res) => {
  res.status(200).json('welcome to foo. Test deploy 04:38 PM 01.03.2019');
});

app.get('/bar', (req, res) => {
  res.status(200).json('welcome to bar');
});

// app.get('/my_ig', (req, res) => {
//   needle
//     .get('https://api.instagram.com/v1/users/self/?access_token=' + process.env.IG_ACCESS_TOKEN,
//     (err, response, data) => {
//       res.status(200).json(data);
//     })
// });

app.listen(port, () => console.log('Magic happens on port', port));

module.exports.app = app;