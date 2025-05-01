export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Parameter "q" diperlukan' });
  }

  try {
    const apiRes = await fetch(`https://api.ownblox.biz.id/api/ttsearch?q=${encodeURIComponent(q)}`);
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data dari API TikTok' });
  }
}
