const express = require('express');
const pool = require('../modules/pool');

const router = express.Router()

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "reflection" `;
    pool.query(queryText)
      .then((result) => { res.send(result.rows)
     }).catch((err) => {
        console.log('Error completing query', err);
        res.sendStatus(500);
      });
  });

  router.post('/', (req, res) => {
    console.log('entered server-side POST', req.body);
    let reflection = req.body;
    let queryText = `INSERT INTO "reflection" (topic, reflection) VALUES ($1, $2);`;
    pool.query(queryText, [topic.topic, reflection.reflection])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('Error from server-side POST:', error )
      res.sendStatus(500);
    });
  });
  

  module.exports = router;