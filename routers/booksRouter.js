const router = require('express').Router();
const {createBook,bulkBook,getAll,getOne,update,deleteBook, getByGenre} = require('../controllers/bookController');

router.post('/createBook',createBook);

router.post('/createBulk',bulkBook);

router.get('/getallbook',getAll);


router.get('/getOnebook/:id', getOne);

router.get('/getOnebooks/', getByGenre);

router.put('/updateBook/:id',update);

router.delete('/deleteBook/:id', deleteBook);

module.exports = router;









// const {createBook} = require("../controllers/bookController")

// const router = require("express").Router()

// router.post("/book",createBook)



// module.exports=router