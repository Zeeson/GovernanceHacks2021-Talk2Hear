// action creator
export const createProject = (project) => {
  return(dispatch, getState, {getFirestore, getFirebase}) => {
    // make async call to db
    const firestore = getFirestore()
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'zee',
      authorLastName: 'baba',
      authorId: 44444,
      createdAt: new Date()
    }).then(() => {
        dispatch({type: 'CREATE_PROJECT', project})
    }).catch(err => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })

  }
};
