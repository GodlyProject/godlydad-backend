const express = require('express')
const Bible = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Bible.getAll()
        .then(bibleVerses => res.status(200).json(bibleVerses))
        .catch(err => {
            next(err)
        })
})
router.get('/:book', (req, res, next) => {
    const {book} = req.params
    Bible.findByBook({book})
        .then(bbook => res.status(200).json(bbook))
        .catch(err=>{
            next(err)
        })
})
router.get('/:book/:chapter', (req, res, next) => {
    const {book, chapter} = req.params
    Bible.findByBookChapter({book, chapter})
        .then(info => res.status(200). json(info))
        .catch(err=>{
            next(err)
        })
})

router.get('/:book/:chapter/:verse', (req, res, next) => {
    const {book, chapter, verse} = req.params
    Bible.findByChapterVerse({book, chapter, verse})
        .then(passage => res.status(200). json(passage))
        .catch(err=>{
            next(err)
        })
})

router.post('/', (req, res, next) => {
    Bible.add(req.body)
        .then(newVerse => res.status(201).json(newVerse))
        .catch(err=>{
            next(err)
        })
});

module.exports = router;
