const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.response({
        status: 'success',
        message: 'Selamat datang di API Notes!',
      });
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return h.response({
        status: 'fail',
        message: 'Halaman tidak ditemukan',
      }).code(404);
    },
  },
];

module.exports = routes;
