const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: 'Added a new post',
      user: `${project.authorFirstName} !`,
      projectId: project.id
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});

exports.spendingCreated = functions.firestore
  .document('spendings/{spendingId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'New Notable Report',
      user: "Ananymous",
      projectId: project.id
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});

// exports.userJoined = functions.auth.user()
//   .onCreate(user => {
//
//     return admin.firestore().collection('users')
//       .doc(user.uid).get().then(doc => {
//         const newUser = doc.data();
//         const notification = {
//           content: 'A new C-Repoter has joined',
//           user: `${newUser.firstName}!`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         };
//
//         return createNotification(notification);
//
//       });
// });
