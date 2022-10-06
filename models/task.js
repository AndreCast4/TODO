const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
   name: {
      type: 'string',
      required: [true, 'Debe escribir un nombre'],
      trim: true,
      maxlength: [20, 'El nombre no puede tener mas de 20 caracteres'],
   },
   completed: {
      type: Boolean,
      default: false,
   },
});

module.exports = mongoose.model('Task', TaskSchema);
