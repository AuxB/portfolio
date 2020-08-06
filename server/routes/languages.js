const express = require('express');
const connection = require('../conf');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM language', (err, results) => {
    if (err) {
      return res.status(500).send(`Error to get work data : ${err}`);
    }
    res.set({
      'X-Total-Count': '100',
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    return res.status(200).json(results);
  });
});

module.exports = router;
