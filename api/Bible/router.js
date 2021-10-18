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
// router.get('/:book/:chapter', (req, res, next) => {
//
// })

router.get('/:book/:chapter/:verse', (req, res, next) => {
    Bible.findByChapterVerse()
})

// router.get('/:id', (req, res, next) => {
//     try {
//         res.json('GET id is Working');
//     } catch (err) {
//         next(err);
//     }
// });

// router.post('/', (req, res, next) => {
//     try {
//         res.json('POST is Working');
//     } catch (err) {
//         next(err);
//     }
// });

module.exports = router;
