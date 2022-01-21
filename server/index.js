const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json());

// Routes//

//create study subjects

app.post("/studies", async(req, res) => {
    try {
        const { subject } = req.body;
        const newSub = await pool.query("INSERT INTO studylist (subject) VALUES($1) RETURNING *",
            [subject]
        );

        res.json(newSub.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

//get all subjects


app.get("/studies", async (req, res) => {
   try {
       const allSubjects = await pool.query("SELECT * FROM studylist");
       res.json(allSubjects.rows); 

   } catch (error) {
       console.error(err.message)
   }
});
//get a subject

app.get("/studies/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const sub = await pool.query("SELECT * FROM studylist WHERE studylist_id = $1",
            [id]);
 
        res.json(sub.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
    
});

//update a subject

app.put("/studies/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { subject } = req.body;
        const updateStudy = await pool.query("UPDATE studylist SET subject = $1 WHERE studylist_id = $2",
            [subject, id]
        );

        res.json("Subject Updated");
    } catch (err) {
        console.error(err.message);
    }
});

// delete a subject

app.delete("/studies/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSub = await pool.query("DELETE FROM studylist WHERE studylist_id = $1", [id]
        );

        res.json("Subject was Deleted");
    } catch (err) {
         console.error(err.message);
        
    }
})


app.listen(6000, () => {
    console.log("Server has started on the port 6000");
});
