import express from "express";

const app = express();

app.get("*", (req,res) => {
    const {ip, path} = req;

    return res.send(`Hello ${ip} and Welcome to ${path.toString()}`)
});

app.listen(8080);