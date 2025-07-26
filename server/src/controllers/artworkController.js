// server/src/controllers/artworkController.js
async function getArtworks(req, res) {
  // TODO: 실제 DB 연동 전 더미 응답
  return res.json([{ id: 1, title: 'Sample Artwork' }]);
}
module.exports = { getArtworks };
