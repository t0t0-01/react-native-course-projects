const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

/*
Now, we have to create a set of routes for the user to manipulate the tracks. First, we require express, mongoose, 
and the requireAuth middleware since we don’t want the user to access the tracks unless he/she is signed in.
*/

const Track = mongoose.model("Track");

const router = express.Router();

/*
We get the track model, but not by importing it (as discussed earlier) since it is already required in index.js.
We create a router object, and we attach to the router the requireAuth middleware using router.use so that the
middleware authenticates the user. Remember that the "use" functions executes the function that is passed to it
whenever we have a request.
*/

router.use(requireAuth);

//In our handler, we need to get the user who is making the request in order to know which tracks to get. So what we do is that we find the track that has userId attribute equal to the user._id present in the req object. Remember that when we got the jwt, we assigned the jwt to the req object previously.
router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

/*
In this handler, we are creating a new user. We are assuming that the request
object has an object that contains the name of the track, as well as a lsit
of the positions.
{
    name: ...
    locations: [
        {
            ...
        },
        {
            ...
        }
    ]
}
So what we will do is destructure these from the request, check if they present,
then create a new track based on these and the user._id present also in the request obj.
After creating, we save it to the DB and send the track in the response. We encapsulate
this block in a try catch in case the save fails.
*/

router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;
  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "You must provide a name and a location" });
  }
  try {
    const track = new Track({
      name: name,
      locations: locations,
      userId: req.user._id,
    });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;

/*
In our index.js file, we associate the trackRoutes file with app using app.use:
*/
