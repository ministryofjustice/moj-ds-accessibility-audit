const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/look-at-a-grant/switch-organisation', function (req, res) {
  res.redirect('/look-at-a-grant/grants-' + req.body.organisation)
})

router.post('/provide-some-documents/provide-some-documents', function (req, res) {
  res.redirect('/provide-some-documents/success')
})

module.exports = router
