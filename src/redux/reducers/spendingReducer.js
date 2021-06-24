const initialState = {
  projects: [
    {id:1, title:'write blog', content:'this is the redux app with auth and react'},
    {id:2, title:'read blog', content:'this is the redux app with auth and react'},
    {id:3, title:'make blog', content:'this is the redux app with auth and react'}
  ]
}
const spendingReducer = (state = initialState, action) => {
  switch (action.type){
    case 'CREATE_SPENDING':
      console.log("created this:", action.spending);
      return state;
    case 'CREATE_SPENDING_ERROR':
      console.log("error created!", action.err);
      return state;
    default:
      return state;
  }
}

export default spendingReducer
