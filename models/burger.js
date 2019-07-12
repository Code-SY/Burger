var orm = require('../config/orm.js');


var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(result) {
      cb(result);
    });
  },

  insertOne: function(burgerName, cb) {
    orm.insertOne(burgerName, function(result) {
      cb(result);
    });
  },

  updateOne: function(burgerId, cb) {
    orm.updateOne(burgerId, function(result) {
      cb(result);
    });
  },

  deleteOne: function(burgerId, cb) {
    orm.deleteOne(burgerId, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
