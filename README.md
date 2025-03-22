# **Go Movies 🎬**  

Go Movies is a movie management application built with **React.js** for the frontend and **Golang** for the backend.  

This project provides a full-stack solution for handling movies, genres, authentication, and GraphQL queries. The backend serves as an API layer, while the frontend offers an interactive UI for managing movies.

---

## **🛠️ Technologies Used**  

- **Frontend**: React.js (JavaScript)  
- **Backend**: Golang (Gin framework)  
- **Database**: PostgreSQL  
- **Authentication**: JWT (JSON Web Token)  
- **GraphQL**: For efficient API querying  
- **Docker**: To containerize and deploy the application  

---

## **📚 Project Structure**  

### **Backend Architecture (Golang)**  

```
📦 backend-app
┣ 📂 cmd
┃ ┗ 📂 api
┃ ┃ ┣ 📜 graphql.go → Handles GraphQL queries
┃ ┃ ┣ 📜 main.go → Application entry point
┃ ┃ ┣ 📜 middleware.go → Handles authentication & logging
┃ ┃ ┣ 📜 movie-handlers.go → REST & GraphQL movie handlers
┃ ┃ ┣ 📜 routes.go → Defines API routes
┃ ┃ ┣ 📜 statusHandler.go → Health check endpoint
┃ ┃ ┣ 📜 tokens.go → JWT token utilities
┃ ┃ ┗ 📜 utilities.go → Helper functions
┣ 📂 models
┃ ┣ 📜 model.go → Defines movie models
┃ ┗ 📜 movies-db.go → Database connection & queries
┣ 📜 go.mod → Go dependencies
┗ 📜 go.sum → Go package versions
```

### **Frontend Architecture (React.js)**  

```
📦 frontend-app/src
┣ 📂 components
┃ ┣ 📂 form-components
┃ ┃ ┣ 📂 ui-components
┃ ┃ ┃ ┗ 📜 Alert.js → UI alert component
┃ ┃ ┣ 📜 Input.js → Custom input field
┃ ┃ ┣ 📜 Select.js → Dropdown selector
┃ ┃ ┗ 📜 TextArea.js → Text area component
┃ ┣ 📜 Admin.js → Admin panel
┃ ┣ 📜 EditMovie.css → Styles for editing movies
┃ ┣ 📜 EditMovie.js → Edit movie details
┃ ┣ 📜 Genres.js → List of movie genres
┃ ┣ 📜 GraphQL.js → GraphQL request handler
┃ ┣ 📜 Home.css → Homepage styles
┃ ┣ 📜 Home.js → Homepage
┃ ┣ 📜 Login.js → User authentication page
┃ ┣ 📜 Movies.js → Movie list page
┃ ┣ 📜 OneGenre.js → Single genre view
┃ ┗ 📜 OneMovie.js → Single movie view
┣ 📂 images
┃ ┗ 📜 movie_tickets.jpg → Background image
┣ 📜 App.js → Main React component
┣ 📜 index.js → React entry point
┣ 📜 index.css → Global styles
┗ 📜 directoryList.md → Documentation
```

---

## **🚀 Running the Application**  

### **Prerequisites**  
- Install **Docker & Docker Compose**  
- Install **Go** (1.19+)  
- Install **Node.js** (16+ with npm/yarn)  
- Install **PostgreSQL**  

### **🛠️ Backend Setup (Golang)**  

1. **Clone the repository**  
```sh
git clone https://github.com/yourusername/go-movies.git
cd go-movies/backend-app
```

2. **Run the application with Docker**  
```sh
docker-compose up --build
```

3. **Without Docker**  
```sh
export DB_HOST=localhost
export DB_PORT=5432
export DB_USER=youruser
export DB_PASS=yourpassword
export DB_NAME=moviesdb

# Start the backend
 go run cmd/api/main.go
```

4. **API Endpoints:**  
- `GET /movies` → Fetch all movies  
- `POST /movies` → Add a new movie  
- `GET /genres` → Fetch genres  
- `POST /auth/login` → Login and receive JWT  

### **🎨 Frontend Setup (React.js)**  

1. **Navigate to frontend directory**  
```sh
cd ../frontend-app
```

2. **Install dependencies**  
```sh
npm install
# or
yarn install
```

3. **Start the React app**  
```sh
npm start
# or
yarn start
```

4. **Access the application**  
- Open your browser and go to `http://localhost:3000`  

---

## **🐬 Docker Configuration**  

### **`docker-compose.yml`**  
```yaml
version: '3.8'
services:
  backend:
    build: ./backend-app
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USER=youruser
      - DB_PASS=yourpassword
      - DB_NAME=moviesdb
    depends_on:
      - postgres

  frontend:
    build: ./frontend-app
    ports:
      - "3000:3000"
    depends_on:
      - backend

  postgres:
    image: postgres:13
    restart: always
    environment:
      POSTGRES_USER: youruser
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: moviesdb
    ports:
      - "5432:5432"
```

---

## **📌 Features**  

✅ **Movie Management** - Add, edit, and delete movies  
✅ **Genre Filtering** - View movies by genres  
✅ **Authentication** - Secure login system with JWT  
✅ **GraphQL API** - Efficient API requests  
✅ **Docker Support** - Run easily with containers  
✅ **PostgreSQL Database** - Store movies and user data  

---

## **🐟 License**  
This project is licensed under the **MIT License**.  

