const place = require('../models/place');

test('Data was taken from database.', () => {
   place.find({from: "Kyiv", to: "Lviv"})
    .then(places => {
      res.render('index', { places: places })
      expect(places[0].to).toBe("Lviv");
      expect(places[0].from).toBe("Kyiv");
    })
    .catch(err => {
      res.status(200).json({ err: err });
    });
});
