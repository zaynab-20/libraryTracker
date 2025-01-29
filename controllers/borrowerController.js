const { BorrowersTable } = require('../models');
const { v4: uuidv4 } = require("uuid");
const borrowerstable = require('../models/borrowerstable');


exports.createBorrower = async (req, res) => {
  try {
    const { BookID, BorrowerName, BorrowDate, ReturnDate, PhoneNumber } = req.body

    const createBorrow = {
      id: uuidv4(),
      BookID,
      BorrowerName,
      BorrowDate,
      ReturnDate,
      PhoneNumber
    }
    const borrower = await BorrowersTable.create(createBorrow)

    res.status(201).json({
      message: 'Borrow record created successfully',
      data: borrower
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating borrow record', error: error.message });
  }
}


exports.bulkBorrow = async (req, res) => {
  try {
      const myBulkBorrow = req.body
      myBulkBorrow.map((e) => { return e.id = uuidv4() })

      const bulk = await BorrowersTable.bulkCreate(myBulkBorrow, { validate: true })

      res.status(201).json({ message: `multiple borrower successfully created`, data: bulk })

  } catch (error) {
      res.status(500).json({ message: `error creating borrower`, error: error.meassage })

  }
}



exports.getAllBorrowers = async (req, res) => {
  try {
    const myBorrowers = await BorrowersTable.findAll();


    res.status(200).json({ message: `kindly find all the borrowers name`, data: myBorrowers }
    );


  } catch (error) {
    res.status(500).json({ message: 'Error fetching borrow records', error: error.message });
  }
};



exports.getBorrowerById = async (req, res) => {
  try {
    const oneBorower = await BorrowersTable.findByPk(req.params.id)

    if (!oneBorower) {
      return res.status(404).json('borrower not found')
    }
    res.status(200).json({ message: `kindly find below user with the above id`, data: oneBorower })
  } catch (error) {

    res.status(500).json({ error: error.message })
  }
}





exports.updateBorrower = async (req, res) => {
  try {
    const updateBorrower = await BorrowersTable.findByPk(req.params.id)

    if (!updateBorrower) {

      return res.status(404).json('borrower not found')
    }

    const newBorrower = {
      BookID: req.body.BookID,
      BorrowerName: req.body.BorrowerName,
      BorrowDate: req.body.BorrowDate,
      ReturnDate: req.body.ReturnDate,
      phoneNumber: req.body.phoneNumber
    }


    const newUpdateBorrower = await updateBorrower.update(newBorrower)
    res.status(200).json({ message: 'borrower updated', data: newUpdateBorrower })

  } catch (error) {

    res.status(500).json({ error: error.message })
  }

}



exports.deleteBorrower = async (req, res) => {
  try {
    const booksBorrower = await BorrowersTable.findByPk(req.params.id)

    if (!booksBorrower) {
      return res.status(404).json('borrower not found')
    }
    booksBorrower.destroy()
    res.status(200).json({ message: `borrower deleted successfully`, data: booksBorrower })


  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


