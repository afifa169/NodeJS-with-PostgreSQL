const User = require("../models/userSchema");

export async function fetchUser(userId) {
  try {
    let fetchedUser = await User.findById(userId);
    return fetchedUser;
  } catch (err) {
    throw err;
  }
}

export async function createUser(incomingUser) {
  try {
    let user = new User(incomingUser);
    let savedUser = await user.save();
    console.log("User added successfully");
    return savedUser;
  } catch (err) {
    throw err;
  }
}

// module.exports = { fetchUser, createUser };
