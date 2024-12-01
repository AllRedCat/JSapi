const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not Found' });
        }
        const isPassValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPassValid) {
            return res.status(401).json({ error: 'Invalid Password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET, {expiresIn: '1h'} );

        // const userInfo = {
        //     id: user.id,
        //     name: user.name,
        //     email: user.email,
        //     role: user.role,
        // }

        return res.status(200).json({ token, user })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}