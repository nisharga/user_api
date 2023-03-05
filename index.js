const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./Routes/userall.route.js");
const randomuserRoute = require("./Routes/user.random.js");
const userSaveRoute = require("./Routes/userSave.route.js");
const userUpdateRoute = require("./Routes/userUpdateRoute.route.js");
const userBulkUpdateRoute = require("./Routes/userBulkUpdate.route.js");
const userDeleteRoute = require("./Routes/user.delete.route.js");

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("I Love Express sdsd");
});

// Get a random user from the .json file
app.use("/user/random", randomuserRoute);

// Get all the users from the .json file
app.use("/user/all", userRoute);

//  Save a random user
app.use("/user/save", userSaveRoute);

//  Update a user Example: /user/update/3 and patch json data
// {"name": "Kabirs"}
app.use("/user/update", userUpdateRoute);

//  Update multiple user together
app.use("/user/bulk-update", userBulkUpdateRoute);

//  DELETE a user using id Example: /user/delete/1
app.use("/user/delete", userDeleteRoute);

app.listen(port, () => {
  console.log("port listen");
});
