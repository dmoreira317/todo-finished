let data = [
  { item: "Feed the dog" },
  { item: "Learn NodeJS" },
  { item: "Go shopping" },
];

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get("/todo", (req, res) => {
    res.render("todo", { todos: data });
  });
  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(
      (todo) =>
        //if the item on data doesn't match the param item on the query, it return true, so the item stays in the array. else it deletes it.
        todo.item.replace(/ /g, "-") !== req.params.item
    );
    res.json(data);
  });
};
