const express = require('express');
const connection = require('../conf');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = `
  SELECT work.id, name, description, url, urlGit, thumb, language_name FROM work
  JOIN work_language wl ON work.id=wl.work_id
  JOIN language l ON wl.language_id=l.id
  GROUP BY work.id, l.id
  `;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(`Error to get work data : ${err}`);
    }
    let prevName = '';
    let prevLang = [];
    const idToDelete = [];
    const works = results.map((result, key) => {
      const elt = result;
      const language = elt.language_name;
      delete elt.language_name;
      if (prevName === elt.name) {
        elt.languages = prevLang;
        idToDelete.push(key - 1);
      } else {
        prevLang = [];
        elt.languages = [language];
      }
      prevLang.push(language);
      prevName = elt.name;
      return elt;
    })
      .filter((work, key) => !idToDelete.includes(key));
    res.set({
      'X-Total-Count': '100',
      'Access-Control-Expose-Headers': 'X-Total-Count'
    })
    return res.status(200).json(works);
  });
});

module.exports = router;
