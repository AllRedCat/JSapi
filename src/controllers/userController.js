const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not Found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, email, password, rule } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, passwordHash, rule });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.putUser = async (req, res) => {
    try {
        const { name, email, password, rule } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not Found' });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        user.name = name;
        user.email = email;
        user.passwordHash = passwordHash;
        user.rule = rule;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'User not Found' });
        }
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

