const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/look-at-a-grant/switch-organisation', function (req, res) {
  res.redirect('/look-at-a-grant/grants-' + req.body.organisation)
})

router.post('/ajax-upload', function (req, res) {
  if (!req.files || req.files.documents.name.substr(-4) !== '.pdf') {
    res.status(200).json({
      error: { message: 'Invalid file type uploaded' },
      file: { name: req.files.documents.name, filename: req.files.documents.name, originalname: req.files.documents.name }
    })
  }

  res.status(200).json({
    success: { messageHtml: 'File uploaded', messageText: 'File uploaded' },
    file: { name: req.files.documents.name, filename: req.files.documents.name, originalname: req.files.documents.name }
  })
})

router.post('/ajax-delete', function (req, res) {
  res.status(200).json({})
})

router.post('/provide-some-documents/provide-some-documents', function (req, res) {
  if (req.files) {
    if (req.files.documents.name.substr(-4) !== '.pdf') {
      res.redirect('/provide-some-documents/provide-some-documents-error')
    }
  }

  res.redirect('/provide-some-documents/success')
})

module.exports = router
