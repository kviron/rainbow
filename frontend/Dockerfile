# Используем актуальную версию Node.js
FROM node:23-alpine AS development

# Устанавливаем рабочий каталог
WORKDIR /usr/src/app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости (с флагом для совместимости)
RUN npm install

# Копируем остальные файлы проекта
COPY . .


CMD ["npm", "run", "dev"]

################
## PRODUCTION ##
################
FROM node:23-alpine AS production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "preview"]

