const { BooksTable } = require("../models");

const { v4: uuidv4 } = require("uuid");
const bookstable = require("../models/bookModel");
const { validate } = require("uuid");

exports.createBook = async (req, res) => {
  try {
    const newBook = {
      id: uuidv4(),
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      ISBN: req.body.ISBN,
      publicationYear: req.body.publicationYear,
      isAvailable: req.body.isAvailable,
    };
    const data = await BooksTable.create(newBook);
    console.log(data);

    res
      .status(201)
      .json({ meassage: `new boook created successfully`, data: data });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.bulkBook = async (req, res) => {
  try {
    const myBulkBook = req.body;
    myBulkBook.map((e) => {
      return (e.id = uuidv4());
    });

    const bulk = await BooksTable.bulkCreate(myBulkBook, { validate: true });

    res
      .status(201)
      .json({ message: `multiple books successfully created`, data: bulk });
  } catch (error) {
    res
      .status(500)
      .json({ message: `error creating books`, error: error.meassage });
  }
};

exports.getAll = async (req, res) => {
  try {
    const allBook = await BooksTable.findAll();

    res
      .status(200)
      .json({
        message: `kindly find below all books`,
        "total number of books": allBook.length,
        data: allBook,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const oneBook = await BooksTable.findByPk(req.params.id);

    if (!BooksTable) {
      return res.status(404).json("book not found");
    }
    res
      .status(200)
      .json({
        message: `kindly find below user with the above id`,
        data: oneBook,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByGenre = async (req, res) => {
  try {
    const { genre } = req.body;
    const getAllbooksByGenre = await BooksTable.findAll({
      where: { genre: genre },
    });
    res.status(200).json({
      message: "All books below",
      data: getAllbooksByGenre,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updateBooks = await BooksTable.findByPk(req.params.id);

    if (!BooksTable) {
      return res.status(404).json("book not found");
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      ISBN: req.body.ISBN,
      publicationYear: req.body.publicationYear,
      isAvailable: req.body.isAvailable,
    };

    const updateTable = await updateBooks.update(newBook);
    res.status(200).json({ message: "book updated", data: updateTable });
  } catch (error) {
    res.status(500).json({ error: "book is already in library" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleteBook = await BooksTable.findByPk(req.params.id);

    if (!BooksTable) {
      return res.status(404).json("book not found");
    }
    await deleteBook.destroy();
    res.status(200).json({ message: "book deleted", data: deleteBook });
  } catch (error) {
    res.status(500).json({ error: "table already deleted" });
  }
};
