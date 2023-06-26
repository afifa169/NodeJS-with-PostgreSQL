"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.fetchUser = void 0;
const User = require("../models/userSchema");
async function fetchUser(userId) {
    try {
        let fetchedUser = await User.findById(userId);
        return fetchedUser;
    }
    catch (err) {
        throw err;
    }
}
exports.fetchUser = fetchUser;
async function createUser(incomingUser) {
    try {
        let user = new User(incomingUser);
        let savedUser = await user.save();
        console.log("User added successfully");
        return savedUser;
    }
    catch (err) {
        throw err;
    }
}
exports.createUser = createUser;
//# sourceMappingURL=userService.js.map