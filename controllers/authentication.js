
const User = require('../models/user');

exports.signup = function (req, res, next)  {
  const email = req.body.email;
  const password = req.body.password;

//   // See if a user with given email exists
//   User.findOne({ email: email }, function(err, existingUser) {
//     if ( err ) { return next(err); }

//     // Return error does exists
//     if ( existingUser ) {
//       return res.status(422).send( { error: "Email is in use" });
//     }

//     // If user eamil does not exist, create and save user record
//     const user = new User({
//       email: email,
//       password: password
//     });

//     user.save( function(err) {
//       if (err) { return next(err); }

//       // Respond to request indication the user was created.
//       res.json(user);
//     });

//   });
}