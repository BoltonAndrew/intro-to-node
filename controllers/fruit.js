const filteredSearch = (req, res) => {
  let results = []; // Results of filtered search
  let query = req.query; // {name: "Apple"} localhost:5001/fruits/?name=Apple
  let key = Object.keys(query); // Moves through an object and stores the key names as strings
  for (let i = 0; i < fruitDB.length; i++) {
    if (fruitDB[i][key[0]] == query[key[0]]) {
      results.push(fruitDB[i]);
    }
  }
  res.status(200).send(results);
};

module.exports = filteredSearch;
