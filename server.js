const PORT = 6060


const router = require("./routers/booksRouter");

const borrowRouter =require("./routers/borrowRouter")

const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())


app.use(borrowRouter)

app.use(router)
// app.use(borrowRouter)



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})










// const port = 2030
// const express = require("express")

// const router = require("./routers/schoolRouter")

// const departmentRouter =require("./routers/departmentRouter")

// const app = express()

// app.use(express.json())


// app.use(router)

// app.use(departmentRouter)

// app.listen(port, () => {
//     console.log(`my server is running on port ${port}`)
// })

