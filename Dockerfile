###############################
# Imagem para base
###############################
FROM registry.procempa.com.br/node:8.16.0 as base

# Dependências do projeto necessitam de pacotes adicionais
RUN apt-get update && apt-get install -y \
	build-essential \
	g++ \
	git \
	python \
	libfontconfig \
	gconf-service \
	libasound2 \
	libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 \
	libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
	libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 \
	libnss3 lsb-release xdg-utils wget

# Configura proxy do registry NPM
RUN npm config set registry http://registry-npm.procempa.com.br

# Fix para problemas de permissão na instalação de pacotes globais
RUN npm config set user root

# Instala pacotes globalmente (eles falham no 'npm i' sem gerar erro)
RUN npm i -g node-sass@4.12.0

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

###############################
# Imagem para build
###############################
FROM registry-base.procempa.com.br/urbanismo/eleicoes-cmdua-api-base:latest as build

# Copia tudo do base para o container novo
WORKDIR /app
COPY . .
RUN yarn build

###############################
# Imagem para execução
###############################
FROM registry-base.procempa.com.br/urbanismo/eleicoes-cmdua-api-base:latest as runtime

# Copia output do build # TODO: copiar apenas o que precisa (.next e package.json - talvez node-modules)
WORKDIR /app
COPY . .

# Roda sistema
CMD yarn start
