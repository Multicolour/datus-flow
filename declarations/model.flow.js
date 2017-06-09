// @flow

declare interface Model_Interface {
  /**
   * The adapter this model is
   * going to connect to and run on.
   * @type {Adapter_Interface}
   */
  adapter: Adapter_Interface;

  /**
   * The columns of this table/collection
   * and their definition.
   * @type {Object}
   */
  columns: Object;

  /**
   * Create a new Query that will
   * run on the database.
   * @return {Query} query that hasn't run yet.
   */
  find(): Query;

  /**
   * Create a new Query that has
   * an explicit limit(1) on it.
   * @return {Query} query that hasn't run yet.
   */
  findOne(): Query;
}
