const logger = require("../config/logger");
const db = require("../db/fake_db");

const getPost = (req, res) => {
    const body = req.body;
    const posts = db.posts;
    const found = posts.find((user) => body.id == user.id);
    if (found) return res.status(200).json(found);
    else return res.status(404).send("Post not found!");
};
const getPosts = (req, res) => {
    const posts = db.posts;
    if (posts) return res.status(200).json(posts);
    else return res.status(404).send("Post not found!");
};

const addPost = (req, res) => {
    const body = req.body;
    const posts = db.posts;
    const newPost = {
        id: posts.length + 1,
        topic: body.topic || "",
        content: body.content || "",
        owner_id: body.owner_id,
    };
    posts.push(newPost);
    logger.info(`id: ${posts.length + 1} >> Post added.`);
    return res.status(200).json(newPost);
};

const deletePost = (req, res) => {
    const body = req.body;
    const posts = db.posts;
    const index = posts.findIndex((user) => user.id == body.id);
    if (index === -1) return res.status(404).send("Post not found!") || logger.error("eror");
    posts.splice(index, 1);
    logger.info(`id: ${body.id} >> Post deleted.`);
    return res.status(200).send(`id: ${body.id} >> Post deleted.`);
};

const updatePost = (req, res) => {
    const body = req.body;
    const posts = db.posts;
    const index = posts.findIndex((user) => user.id == body.id);
    if (index === -1) return res.status(404).send("Post not found!");
    posts[index] = {
        ...posts[index],
        ...body,
    };
    logger.info(`id: ${body.id} >> Post updated.`);
    return res.status(200).json(posts[index]);
};
const changePost = (req, res) => {
    const body = req.body;
    const posts = db.posts;
    const index = posts.findIndex((user) => user.id == body.id);
    if (index === -1) return res.status(404).send("Post not found!");
    posts[index] = {
        id: body.id,
        topic: body.topic || "",
        content: body.content || "",
        owner_id: body.owner_id,
    };
    logger.info(`id: ${body.id} >> Post changed.`);
    return res.status(200).json(posts[index]);
};

module.exports = {
    getPost,
    getPosts,
    addPost,
    deletePost,
    updatePost,
    changePost,
};
