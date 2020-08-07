const express = require('express');
const connection = require('../conf');

const router = express.Router();
const wichLangNum = require('../services/wichLangNum');

router.get('/', (req, res) => {
  const sql = `
  SELECT work.id, name, description, url, urlGit, thumb, language_name FROM work
  JOIN work_language wl ON work.id=wl.work_id
  JOIN language l ON wl.language_id=l.id
  GROUP BY work.id, l.id
  `;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(`Error to get works data : ${err}`);
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
      'Access-Control-Expose-Headers': 'X-Total-Count',
    });
    return res.status(200).json(works);
  });
});

router.get('/:id', (req, res) => {
  connection.query('SELECT * FROM work WHERE work.id = ?', [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).send(`Error to get work data : ${err}`);
    }
    return res.status(200).json(results);
  });
});

router.put('/:id', (req, res) => {
  connection.query('UPDATE work SET ? WHERE work.id = ?', [req.body, req.params.id], (err, results) => {
    if (err) {
      return res.status(500).send(`Error to update work data : ${err}`);
    }
    return res.status(200).json({ data: results.body });
  });
});

router.post('/', (req, res) => {
  const langNumbers = [];
  const languages = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const property in req.body) {
    if (property.startsWith('language')) {
      languages.push(req.body[property]);
      delete req.body[property];
    }
  }
  languages.map((lang) => langNumbers.push(wichLangNum(lang)));
  const workData = req.body;
  connection.query('INSERT INTO work SET ?', [workData], (err, results) => {
    if (err) {
      return res.status(500).send(`Error to post work data : ${err}`);
    }

    const sqlValues = [];
    langNumbers.map((languageId) => sqlValues.push([results.insertId, languageId]));
    connection.query('INSERT INTO work_language VALUES ?', [sqlValues], (err2, results2) => {
      if (err2) {
        return res.status(500).send(`Error to post work data : ${err2}`);
      }
      return res.json({ data: results.body, id: results.insertId });
    });
  });
});

router.delete('/:id', (req, res) => {
  connection.query('DELETE FROM work WHERE work.id = ?', [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).send(`Error to update work data : ${err}`);
    }
    return res.status(200).json({ data: results.body });
  });
});

module.exports = router;
