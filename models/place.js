const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    number: {
      type: Number,
    },
    free: {
      type: Boolean,
    },
    from: {
      type: String
    },
    to: {
      type: String
    }
  }
);

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('place', schema);
