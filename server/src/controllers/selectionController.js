// server/src/controllers/selectionController.js
async function createSelection(req, res) {
  // TODO: DB에 저장
  return res.status(201).json({ success: true });
}
async function getSelectionsByUser(req, res) {
  // TODO: 사용자 선택 내역 조회
  return res.json([]);
}
module.exports = { createSelection, getSelectionsByUser };
