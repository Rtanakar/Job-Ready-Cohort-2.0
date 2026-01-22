import express from "express";

const app = express();

app.use(express.json());

// get, post, put, patch, delete
// app.get("/:id", (req, res) => {
//   console.log({
//     params: req.params,
//     query: req.query,
//   });

//   // res.json({
//   //   message: "hello world🥶",
//   // });

//   res.send('<h1 style="color: red">Hello World</h1>');
// });

// app.post("/post", (req, res) => {
//   const { username, age } = req.body;
//   console.log(req.headers);
//   res.json({
//     message: "This is new post",
//     data: username,
//     age: age,
//   });
// });

// Actual DATA
let aiTools = [
  {
    id: "tool_001",
    name: "ChatGPT",
    category: "AI Assistant",
    company: "OpenAI",
    pricing: "Freemium",
    rating: 4.8,
    tags: ["chat", "nlp"],
    isActive: true,
  },
];

// CREATE (POST)
app.post("/tools", (req, res) => {
  const { name, category, company } = req.body;

  if (!name || !category || !company) {
    return res.status(400).json({
      message: "Require Feiled Missing",
    });
  }

  const newTool = {
    id: `tool_${Date.now()}`,
    name,
    category,
    company,
    pricing: "Freemium",
    rating: 0,
    tags: [],
    isActive: true,
  };

  aiTools.push(newTool);
  res.status(201).json(newTool);
});

// READ ALL (GET)
app.get("/tools", (req, res) => {
  res.json(aiTools);
});

// READ ONE (GET by ID)
app.get("/tools/:id", (req, res) => {
  const tool = aiTools.find((t) => t.id === req.params.id);
  if (!tool) {
    return res.status(404).json({
      message: "Tool not found",
    });
  }

  res.json(tool);
});

// UPDATE (PUT)
app.put("/tools/:id", (req, res) => {
  const index = aiTools.findIndex((t) => t.id === req.params.id); // ye index nikal ke deta hai
  if (index === -1) {
    return res.status(404).json({
      message: "Tools not found",
    });
  }

  // tool ka array aur usme ham index ko lagakar tool ka position pata karenge
  aiTools[index] = {
    ...aiTools[index], // old data
    ...req.body, // new data
  };

  res.json(aiTools[index]); // fir isme update kar denge position ke adhar par
});

// DELETE (DELETE)
app.delete("/tools/:id", (req, res) => {
  // yanha par ham !== isliye likhi hai kyonki filter hame new array deta hai to agar id user ke id ke barabar nahi hai to use filter me dalo agar hai to use mat dalo // to isse wah filter me nahi jayegi kyonki condition false ho jayegi aur filter keval wahi value leta hai jo true hai // isliye ye logic delete ke kam a jata hai
  aiTools = aiTools.filter((t) => t.id !== req.params.id);

  res.json({ message: "Tool Deleted Successfully" });
});

// LISTEN
app.listen(3000, (req, res) => {
  console.log(`server is ready http://localhost:${3000} ❄️`);
});
