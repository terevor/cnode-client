/**
 * @param  {initState}
 * @param  {Object} handlers
 * @return {Reducer}
 */
export default (initState, handlers) =>
  function reducer(state = initState, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  }