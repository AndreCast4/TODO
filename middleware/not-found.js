const notFound = (req, res, next) => res.status(404).send('La ruta no existe');

module.exports = notFound;