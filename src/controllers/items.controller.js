const connection = require('../db-config');
const {
  ALL_ITEMS,
  SINGLE_ITEM,
  INSERT_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} = require('../queries/items.queries');
const query = require('../utils/query');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */
// http://localhost:3000/tasks
exports.getAllItems = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all tasks
  const items = await query(con, ALL_ITEMS).catch((err) => {
    res.send(err);
  });

  if (items.length) {
    res.json(items);
  }
};

// http://localhost:3000/tasks/1
exports.getItem = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all task
  const item = await query(con, SINGLE_ITEM, [req.params.itemId]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (item.length) {
    res.json(item);
  }
};

// http://localhost:3000/tasks
/**
 * POST request -
 * {
 *  name: 'A task name'
 * }
 */
exports.createItem = async (req, res) => {
  // verify valid token
  const decoded = req.user; // {id: 1, iat: wlenfwekl, expiredIn: 9174323 }

  // take result of middleware check
  if (decoded.id) {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });

    // query add task
    const result = await query(con, INSERT_ITEM, [req.body.name]).catch(
      (err) => {
        res.send(err);
      }
    );
    console.log(result);

    if (result.affectedRows === 1) {
      res.json({ message: 'Added Item successfully!' });
    }
  }
};

// http://localhost:3000/tasks/1
/**
 * PUT request -
 * {
 *  name: 'A task name',
 *  state: 'completed'
 * }
 */
exports.updateItem = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query update task
  const result = await query(con, UPDATE_ITEM, [
    req.body.name,
   // req.body.status, Need to update this line
    req.params.itemId,
  ]).catch((err) => {
    res.send(err);
  });

  if (result.affectedRows === 1) {
    res.json(result);
  }
};

// http://localhost:3000/tasks/1
exports.deleteItem = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query delete task
  const result = await query(con, DELETE_ITEM, [req.params.itemId]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (result.affectedRows === 1) {
    res.json({ message: 'Deleted successfully.' });
  }
};

