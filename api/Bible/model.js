const db = require('../../data/db-config')

const getAll=()=>{
    return db('bible')
}
const findByBook = (book)=>{
    return db('bible')
        .select('*')
        .where(book)
        .orderBy('chapter')
}
const findByBookChapter =(book, chapter)=>{
    return db('bible')
        .where(book, chapter)
        .orderBy('verse')
}
const findByChapterVerse=(book, chapter, verse)=>{
    return db('bible')
        .where(book, chapter, verse)
        .orderBy('verse')
}
// select *
// from bible
// where book='Genesis' and chapter=2 and verse=1

// const getById = (bible_id) =>{
//     return 'getById'
// }

const add = () =>{
    return 'add'
}

const edit = () =>{
    return 'edit'
}

module.exports={
    getAll,
    findByBook,
    findByBookChapter,
    findByChapterVerse,
    add,
    edit
}