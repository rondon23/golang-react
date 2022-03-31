# Go Movies
Desenvolvimento de uma aplicação de gerenciamento de filmes usando Reactjs no frond-end e Golang no back-end.

A arquitetura de back end segue a seguinte estrutura:

|   go.mod
|   go.sum
|   tree.txt
|   
+---cmd
|   \---api
|           graphql.go
|           main.go
|           middleware.go
|           movie-handlers.go
|           routes.go
|           statusHandler.go
|           tokens.go
|           utilities.go
|           
\---models
        model.go
        movies-db.go
        
A arquitetura de front end segue a seguinte estrutura:

|   App.js
|   index.css
|   index.js
|   tree.txt
|   
+---components
|   |   Admin.js
|   |   EditMovie.css
|   |   EditMovie.js
|   |   Genres.js
|   |   GraphQL.js
|   |   Home.css
|   |   Home.js
|   |   Login.js
|   |   Movies.js
|   |   OneGenre.js
|   |   OneMovie.js
|   |   
|   \---form-components
|       |   Input.js
|       |   Select.js
|       |   TextArea.js
|       |   
|       \---ui-components
|               Alert.js
|               
\---images
        movie_tickets.jpg
        
