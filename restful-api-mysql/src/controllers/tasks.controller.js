const con = require('../db-config');
const queries = require('../queries/tasks.queries');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

exports.getAllItems = function(req, res) {
  con.query(queries.ALL_ITEMS, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/tasks/1
exports.getItem = function(req, res) {
  con.query(queries.SINGLE_ITEM, [req.params.itemId], function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/tasks/1
/**
 * POST request -
 * {
 *  name: 'A task name'
 * }
 */
exports.createItem = function(req, res) {
  con.query(queries.INSERT_ITEM, [req.body.name], function(err, result) {
    if (err) {
      res.send(err);
    }
    console.log(result);
    res.json({ message: 'Number of records inserted: ' + result.affectedRows });
  });
};

// http://localhost:3000/tasks/1
/**
 * PUT request -
 * {
 *  name: 'A task name',
 *  state: 'completed'
 * }
 */
exports.updateItem = function(req, res) {
  con.query(
    queries.UPDATE_ITEM,
    [req.body.name, req.body.status, req.params.itemId],
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

// http://localhost:3000/tasks/1
exports.deleteItem = function(req, res) {
  con.query(queries.DELETE_ITEM, [req.params.itemId], function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted successfully.' });
  });
};
