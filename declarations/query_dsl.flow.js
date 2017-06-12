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

  /**
   * Continue a where query with a column,
   * value and optional operator that must
   * be truthy along with the previous .where()
   *
   * Default operator is directly equals (=).
   * @param {<T.columns>} column to do query on.
   * @param {mixed} value to do comparison on.
   * @return {Query} query to continue the query on.
   */
  and_where<T: Model_Interface>(column: $Keys<T.columns>, value: mixed, operator?: Where_Operator): Query<T>;

  /**
   * Continue a where query with a column,
   * value and optional operator that is
   * optionally truthy along with the previous .where()
   *
   * Default operator is directly equals (=).
   * @param {<T.columns>} column to do query on.
   * @param {mixed} value to do comparison on.
   * @return {Query} query to continue the query on.
   */
  or_where<T: Model_Interface>(column: $Keys<T.columns>, value: mixed, operator?: Where_Operator): Query<T>;

  /**
   * Run a query where the comparison value
   * is between the left and right values.
   *
   * Is the same as
   * ```
   * model
   *   .where("column", 1, ">=")
   *   .and_where("column", 3, "<=")
   * ```
   * @param {$Keys<T.columns>} column to query.
   * @param {any} comparison_value to use as the value between left and right values.
   * @param {any} left_value value to use on L side of comparison where V BETWEEN L AND R
   * @param {any} right_value value to use on R side of comparison where V BETWEEN L AND R
   * @return {Query} query to continue the query on.
   */
  between<T: Model_Interface>(column: $Keys<T.columns>, comparison_value: any, left_value: any, right_value: any): Query<T>;


  then<T>(callback: (results: T) => void): Query;
}
