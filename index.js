const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// const authRoutes = require('./routes/authRoutes');
// const adherentRoutes = require('./routes/adherentRoutes');
// const actualiteRoutes = require('./routes/actualiteRoutes');
// const matchRoutes = require('./routes/matchRoutes');

// app.use('/api/auth', authRoutes);
// app.use('/api/adherents', adherentRoutes);
// app.use('/api/actualites', actualiteRoutes);
// app.use('/api/matchs', matchRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
