import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  image: {
    type: String,
    default: "",
  },
  // for google and github auth
  authProviderId: {
    type: String,
    default: "",
  },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;