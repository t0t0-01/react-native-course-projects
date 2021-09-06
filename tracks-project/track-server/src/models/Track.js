const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: {
    type: String,
    default: "",
  },

  locations: [pointSchema],
});

mongoose.model("Track", trackSchema);

/* 
How will we organize our tracks in MongoDB? We will have a tracks table that includes userId,
the name of the track, and a list of the locations. These locations will be objects of their own:
Points. These points would have a timeStamp, as well as coordinates (long, lat...). Note that
the Point object is exactly the object we get from our phone when we want to get its location.

So what we'll be doing here is that we will be defining the necessary Schemas so that we can create
our tables in MongoDB. We add the trackSchema, inside of which we use the pointSchema. At the end,
we only model the trackSchema, because points are only used in the track, but not in the database
as a table itself.
*/
