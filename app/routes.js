const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/look-at-a-grant/switch-organisation', function (req, res) {
  res.redirect('/look-at-a-grant/grants-' + req.body.organisation)
})

module.exports = router
