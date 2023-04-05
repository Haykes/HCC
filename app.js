const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const newsRoutes = require("./routes/news");
const matchRoutes = require("./routes/match");
const userRoutes = require("./routes/user");

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/news", newsRoutes);
app.use("/match", matchRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
