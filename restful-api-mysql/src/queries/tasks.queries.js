/**
 * Tables follow syntax:
 * - CREATE TABLE <table_name>(<column_name> <data_type> <options>, ...)
 *
 * Create a table called `tasks` (case-insensitive), with
 * - id as an integer/number that can't have null values, auto-increment it
 * - name with a max of 255 characters, cannot have null values
 * - created_date set to date and time created
 * - status with a max of 10 characters, has a default of 'pending'
 *
 * NOTE: order is important.
 * - columns can have multiple options attached (take `id` column for example)
 * - id is always first (helps with inserting)
 * - defaults always specifed last (helps with inserting)
 */
exports.CREATE_ITEMS_TABLE = `CREATE TABLE IF NOT EXISTS items(
  id int NOT NULL AUTO_INCREMENT,
  itemName varchar(255) NOT NULL,
  created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
)`;

// Get every task
exports.ALL_ITEMS = `SELECT * FROM items`;

// Get a single task by id
exports.SINGLE_ITEM = `SELECT * FROM items WHERE id = ?`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new task in `tasks` table where
 * - column names match the order the are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_ITEM = `INSERT INTO items (name) VALUES (?)`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_ITEM = `UPDATE items SET name = ?, status = ? WHERE id = ?`;

// Delete a task by id
exports.DELETE_ITEM = `DELETE FROM items WHERE id = ?`;
