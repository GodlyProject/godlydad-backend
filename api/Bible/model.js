const db = require('../../data/db-config')

const getAll=()=>{
    return db('bible')
}
const findBy = (filter)=>{
    return 'findBy'
}
const getById = (bible_id) =>{
    return 'getById'
}

const add = () =>{
    return 'add'
}

const edit = () =>{
    return 'edit'
}

module.exports={
    getAll,
    getById,
    add,
    edit
}