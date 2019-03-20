const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3001 || process.env.port;

const dbApi = require("./db/db");
const ADDRESSES_URI = "/addresses";
app.get(ADDRESSES_URI, async (req, res) => {
    try {
        const result = await dbApi.getAllAddresses();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post(ADDRESSES_URI, async (req, res) => {
    try {
        console.log(req, req.body);
        const result = await dbApi.addAddress(req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch(`${ADDRESSES_URI}/:id`, async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dbApi.updateAddress(id, req.body);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete(`${ADDRESSES_URI}/:id`, async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dbApi.deleteAddress(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => console.log(`Address book API  listening on port ${port}!`))