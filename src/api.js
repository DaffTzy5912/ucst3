const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api/search', async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter 'q' dibutuhkan." });
  }

  try {
    const response = await axios.get(`https://api.ownblox.biz.id/api/ttsearch?q=${encodeURIComponent(q)}`);
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching from TikTok API:", err.message);
    res.status(500).json({ error: "Gagal mengambil data dari API TikTok." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
