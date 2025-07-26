# server/Dockerfile
FROM node:18-alpine

WORKDIR /app

# 프로덕션 모드 의존성만 설치
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 4000
CMD ["npm", "start"]
