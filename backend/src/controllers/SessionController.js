const connection = require('../database/connections');

const create = async (req, res) => {
  const { id } = req.body;

  const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

  if (!ong) {
    return res.status(400)
      .json({ error: 'No ONG found!' });
  }

  return res.json(ong);
}

module.exports = { create };