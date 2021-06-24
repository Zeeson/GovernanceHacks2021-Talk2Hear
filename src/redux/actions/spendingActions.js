// action creator
export const createSpending = (spending) => {
  return(dispatch, getState, {getFirestore, getFirebase}) => {
    // make async call to db
    const firestore = getFirestore()
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('spending').add({
      ...spending,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      ananymous: "ananymous",
      createdAt: new Date()
    }).then(() => {
        dispatch({type: 'CREATE_SPENDING', spending})
    }).catch(err => {
      dispatch({type: 'CREATE_SPENDING_ERROR', err})
    })

  }
};
