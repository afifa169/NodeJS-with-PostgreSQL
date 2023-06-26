"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});
exports.User = mongoose.model("User", userSchema);
//# sourceMappingURL=userSchema.js.map