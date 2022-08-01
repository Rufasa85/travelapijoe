const Trip = require("./Trip");
const Traveller = require("./Traveller");
const Location = require("./Location");

Location.hasMany(Trip);
Trip.belongsTo(Location);

Traveller.hasMany(Trip);
Trip.belongsTo(Traveller);

module.exports={
    Location,
    Traveller,
    Trip
}
