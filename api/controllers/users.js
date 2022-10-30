/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `users.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { User } from "../models/user.js";

//* Main
// GET | All
const getAll = async (_, res) => {
    const data = await User.find();
    res.json(data);
};

// GET | One
const exists = async (req, res) => {
    const { id } = req.params;
    const result = await User.exists({ _id: id }).then(doc => !!doc);
    res.send(result);
};

// GET | One
const get = async (req, res) => {
    const { id } = req.params;
    const data = await User.findOne({ code: id });
    res.json(data);
};

// DELETE | One
const del = async (req, res) => {
    const { id } = req.params;
    const data = await User.remove({ _id: id });
    res.json(data);
};

// POST | One
const post = async (req, res) => {
    const { body } = req;
    const data = await User(body).save();
    res.json(data);
};

// PATCH | One
const patch = async (req, res) => {
    const { id } = req.params;
    const [filter, update] = [{ _id: id }, { $set: req.body }];
    const data = await User.updateOne(filter, update);
    res.json(data);
};

//* Exports
export { del, exists, getAll, get, post, patch };