# �tape de build
FROM node:18-alpine AS build

# D�finir le r�pertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les d�pendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN npm run build

# �tape de production
FROM nginx:alpine

# Copier les fichiers build (dist dans votre cas) de l'�tape pr�c�dente
COPY --from=build /app/dist /usr/share/nginx/html

# Configuration Nginx personnalis�e
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
