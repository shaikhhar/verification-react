const express = require('express'); 
const app = express(); 
const path = require('path');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
}

app.post('/verify', (req, res) => {
    const code = req.query.code;
    if (+code.length === 6 && +code.slice(-1) !== 7) {
        res.send({msg: 'verified'});
    } else {
        res.status(401).send({msg: 'unverified'});
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`)); 

