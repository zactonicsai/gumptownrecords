export default function handler(req, res) {
  res.json({ apiUrl: process.env.API_KEY });
}