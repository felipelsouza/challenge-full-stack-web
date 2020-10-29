const { where } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async indexById(req, res) {
        const { id } = req.params;
        
        const user = await User.findByPk(id);

        return res.json(user);
    },

    async store(req, res) {
        const { name, email, cpf } = req.body;

        const user = await User.create({ name, email, cpf });

        return res.json(user);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;

        const user = await User.findByPk(id)
            .then(user => user.update({ name, email }));

        return res.json(user);
    },

    async delete(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id)
            .then(user => user.destroy());

        return res.json(user);
    }
}