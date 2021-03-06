const express = require('express');
const router  = express.Router();

// /* GET home page */
// router.get('/', (req, res, next) => {
//   // res.render('index');
//   res.redirect('/borrar');
// });


const sourcesRoutes = require ("../routes/sources");
router.use("/sources", sourcesRoutes);

const ocioRoutes = require ("../routes/tiempoLibre");
router.use("/ocio", ocioRoutes);

const booksRoutes = require ("../routes/books");
router.use("/books", booksRoutes);

const reposRoutes = require ("../routes/repos");
router.use("/repos", reposRoutes);

const meetupsRoutes = require('../routes/meetups');
router.use('/meetups', meetupsRoutes);

const meetupsAPIRoutes = require('../routes/meetupsAPI');
router.use('/meetupAPI', meetupsAPIRoutes);
      

module.exports = router;
