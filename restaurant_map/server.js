const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    // origin: function(origin, callback) {
    //   // allow requests with no origin
    //   // (like mobile apps or curl requests)
    //   if (!origin) return callback(null, true);
    //   if (allowedOrigins.indexOf(origin) === -1) {
    //     var msg =
    //       "The CORS policy for this site does not " +
    //       "allow access from the specified Origin.";
    //     return callback(new Error(msg), false);
    //   }
    //   return callback(null, true);
    // }
    origin: "*"
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.get("/getPlaces", async (req, resp) => {
  const query = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Starbucks&location=${req.query.location}&radius=${req.query.radius}&key=${process.env.GOOGLE_MAP_API}&maxResults=200`;
  const results = await axios.get(query);

  resp.json(results.data.results);
});

app.listen(PORT, () => console.table({ SERVER: "RUNNING", PORT }));
