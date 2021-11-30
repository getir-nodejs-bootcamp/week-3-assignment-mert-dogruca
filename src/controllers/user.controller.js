const logger = require("../config/logger");
const db = require("../db/fake_db");

const getUser = (req, res) => {
    const body = req.body;
    const users = db.users;
    const found = users.find((user) => body.id == user.id);
    if (found) return res.status(200).json(found);
    else return res.status(404).send("User not found!");
};
const getUsers = (req, res) => {
    const users = db.users;
    if (users) return res.status(200).json(users);
    else return res.status(404).send("User not found!");
};

const addUser = (req, res) => {
    const body = req.body;
    console.log(body);
    const users = db.users;
    const newUser = {
        id: users.length + 1,
        balance: body.balance || "",
        picture: body.picture || "",
        age: body.age || "",
        name: body.name || "",
        gender: body.gender || "",
        company: body.company || "",
        email: body.email || "",
    };
    users.push(newUser);
    console.log(users);
    return res.status(200).json(newUser);
};

const deleteUser = (req, res) => {
    const body = req.body;
    const users = db.users;
    const index = users.findIndex((user) => user.id == body.id);
    if (index === -1) return res.status(404).send("User not found!") || logger.error("eror");
    users.splice(index, 1);
    logger.info(`id: ${body.id} >> User deleted.`);
    return res.status(200).send(`id: ${body.id} >> User deleted.`);
};

const updateUser = (req, res) => {
    const body = req.body;
    const users = db.users;
    const index = users.findIndex((user) => user.id == body.id);
    if (index === -1) return res.status(404).send("User not found!");
    users[index] = {
        ...users[index],
        ...body,
    };
    logger.info(`id: ${body.id} >> User updated.`);
    return res.status(200).json(users[index]);
};
const changeUser = (req, res) => {
    const body = req.body;
    const users = db.users;
    const index = users.findIndex((user) => user.id == body.id);
    if (index === -1) return res.status(404).send("User not found!");
    users[index] = {
        id: body.id,
        balance: body.balance || "",
        picture: body.picture || "",
        age: body.age || "",
        name: body.name || "",
        gender: body.gender || "",
        company: body.company || "",
        email: body.email || "",
    };
    logger.info(`id: ${body.id} >> User changed.`);
    return res.status(200).json(users[index]);
};

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    changeUser,
};
