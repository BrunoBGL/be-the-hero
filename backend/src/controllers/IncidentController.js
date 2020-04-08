const connection = require('../database/connections');

const create = async (req, res) => {
  const { title, description, value } = req.body;
  const ong_id = req.headers.authorization;

  const [id] = await connection('incidents').insert({
    title,
    description,
    value,
    ong_id,
  });

  return res.json({ id });
}

const index = async (req, res) => {
  const { page = 1 } = req.query;
  const [count] = await connection('incidents').count();

  res.header('X-Total-Count', count['count(*)']);

  return res.json(
    await connection('incidents')
      .join('ongs', 'ongs.id', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.tel',
        'ongs.city',
        'ongs.uf'
      ])
  );
};

const delet = async (req, res) => {
  console.log(`${req.params} ${req.headers.authorization}`)
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  const incident = await connection('incidents')
    .where('id', id)
    .select('ong_id')
    .first();

  if (!incident) {
    return res.status(404)
      .json({ error: "Incident not found" });
  }
  if (incident.ong_id !== ong_id) {
    return res.status(401)
      .json({ error: "Operation not permitted" });
  }

  await connection('incidents').where('id', id).delete();
  return res.status(204).send();
};

module.exports = {
  create,
  index,
  delet
};