// server/src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const artworkRoutes = require('./routes/artworks');
const selectionRoutes = require('./routes/selections');
const statsRoutes = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 4000;

// 미들웨어
app.use(helmet());
app.use(cors());
app.use(express.json());

// 헬스체크
app.get('/', (req, res) => {
  res.send('Diposium API is running');
});

// 라우트 등록
app.use('/api/artworks', artworkRoutes);
app.use('/api/selections', selectionRoutes);
app.use('/api/stats', statsRoutes);

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
