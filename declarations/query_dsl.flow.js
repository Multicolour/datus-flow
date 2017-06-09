// @flow

declare type Where_Operator =
  // Directly equals.
  "=" |
  // Directly not equal.
  "!=" |
  // Greater than.
  ">" |
  // Greater than or equal to.
  ">=" |
  // Less than.
  "<" |
  // Less than or equal to.
  "<=" |
  // Contains value.
  "contains" |
  // Starts with value.
  "^" |
  // Ends with value.
  "$"

declare class Query {
  /**
   * Start a where query with a column,
   * value and optional operator.
   *
   * Default operator is directly equals (=).
   * @param {<T.columns>} column to do query on.
   * @param {mixed} value to do comparison on.
   * @return {Query} query to continue the query on.
   */
  where<T: Model_Interface>(column: $Keys<T.columns>, value: mixed, operator?: Where_Operator): Query<T>;
}
