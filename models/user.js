import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "EMail already exists!"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "username invalid, it should contain 8-20 alphanumeric characters and be unique",
    ],
  },
  image: {
    type: String,
  },
});
//store the user if they exist OR create a new one

const User = models.User || model("User", UserSchema);

export default User;
