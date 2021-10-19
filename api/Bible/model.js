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

const getById = (bible_id) =>{
    return db('bible')
        .where('bible_id', bible_id)
        .first();
}

const add = async (newVerse) =>{
    const [bible_id] = await db('bible')
        .insert(newVerse, 'bible_id')
    return getById(bible_id)
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