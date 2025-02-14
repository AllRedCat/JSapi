const { List } = require('../models');

exports.getList = async (req, res) => {
    try {
        const lists = await List.findAll();
        res.status(200).json(lists);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}