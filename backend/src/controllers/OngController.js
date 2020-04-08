const crypto = require('crypto');

const connection = require('../database/connections');

const create = async (req, res) => {
  const { name, email, tel, city, uf } = req.body;
  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    tel,
    city,
    uf,
  });

  return res.json({ id });
};

const index = async (req, res) => {
  return res.json(
    await connection('ongs').select('*')
  )
}

module.exports = { create, index };