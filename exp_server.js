
import express from 'express';

const app = express();


app.use(express.urlencoded({ extended: true }));


app.get('/user_reg', (req, res) => {
    res.sendFile('user_reg.html', {
        root: './public'
    });
});


app.post('/user_reg_submit', (req, res) => {

    const data = req.body;

    res.send(`
        <h1>User Registration Details</h1>

        <p>First Name: ${data.fname}</p>
        <p>Middle Name: ${data.mname}</p>
        <p>Last Name: ${data.lname}</p>
        <p>Gender: ${data.gender}</p>
        <p>Date of Birth: ${data.dob}</p>
        <p>Email: ${data.email}</p>
        <p>Password: Hidden</p>
        <p>Security Question: ${data.question}</p>
        <p>Security Answer: Hidden</p>
        <p>Hobbies: ${data.hobbies}</p>

        <a href="/user_reg">Back to Registration</a>
    `);
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
