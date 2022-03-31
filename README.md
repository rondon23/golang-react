# Go Movies
Desenvolvimento de uma aplicação de gerenciamento de filmes usando Reactjs no frond-end e Golang no back-end.

A arquitetura de back end segue a seguinte estrutura:

📦backend-app \
 ┣ 📂cmd \
 ┃ ┗ 📂api \
 ┃ ┃ ┣ 📜graphql.go \
 ┃ ┃ ┣ 📜main.go \
 ┃ ┃ ┣ 📜middleware.go \
 ┃ ┃ ┣ 📜movie-handlers.go \
 ┃ ┃ ┣ 📜routes.go \
 ┃ ┃ ┣ 📜statusHandler.go \
 ┃ ┃ ┣ 📜tokens.go \
 ┃ ┃ ┗ 📜utilities.go \
 ┣ 📂models \
 ┃ ┣ 📜model.go \
 ┃ ┗ 📜movies-db.go \
 ┣ 📜go.mod \
 ┗ 📜go.sum 
        
A arquitetura de front end segue a seguinte estrutura:

  📦src \
 ┣ 📂components \
 ┃ ┣ 📂form-components \
 ┃ ┃ ┣ 📂ui-components \
 ┃ ┃ ┃ ┗ 📜Alert.js \
 ┃ ┃ ┣ 📜Input.js \
 ┃ ┃ ┣ 📜Select.js \
 ┃ ┃ ┗ 📜TextArea.js \
 ┃ ┣ 📜Admin.js \
 ┃ ┣ 📜EditMovie.css \
 ┃ ┣ 📜EditMovie.js \
 ┃ ┣ 📜Genres.js \
 ┃ ┣ 📜GraphQL.js \
 ┃ ┣ 📜Home.css \
 ┃ ┣ 📜Home.js \
 ┃ ┣ 📜Login.js \
 ┃ ┣ 📜Movies.js \
 ┃ ┣ 📜OneGenre.js \
 ┃ ┗ 📜OneMovie.js \
 ┣ 📂images \
 ┃ ┗ 📜movie_tickets.jpg \
 ┣ 📜App.js \
 ┣ 📜directoryList.md \
 ┣ 📜index.css \
 ┗ 📜index.js
  
        
