const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

// Server NO
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//DB CONEECTION
const url = `mongodb+srv://admin:admin@music-app.ailab8w.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true,
});
mongoose.connection
  .once("open", () => console.log("Connceted"))
  .on("error", (error) => {
    console.log(`Error: ${error}`);
  });

//api route
app.get("/", (req, res) => {
  return res.json("hi there...");
});
// user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// artist routers
const artistRoutes = require("./routes/artists");
app.use("/api/artists/", artistRoutes);
//album routes
const albumRoutes = require("./routes/album");
app.use("/api/albums/", albumRoutes);
//song routes
const songRoutes = require("./routes/songs");
app.use("/api/songs/", songRoutes);

//listing server / server start
app.listen(PORT, () => console.log(`server is start port no ${PORT}`));
