const borrowRouter = require("express").Router()

const {createBorrower,bulkBorrow,getAllBorrowers,getBorrowerById,updateBorrower,deleteBorrower} = 
require('../controllers/borrowerController');

borrowRouter.post('/createBorrower/:params',createBorrower);

borrowRouter.post('/createBulkBorrow',bulkBorrow);

borrowRouter.get('/getallborrowers',getAllBorrowers);

borrowRouter.get('/getOne/:id',getBorrowerById);

borrowRouter.put('/update/:id', updateBorrower);

borrowRouter.delete('/delete/:id',deleteBorrower);

module.exports = borrowRouter;
