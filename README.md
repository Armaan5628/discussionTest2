Frontend (React)

Located in the root frontend folder.

Main Components

App.js – Core of the app. Handles:

User authentication with AuthContext

Fetching discussions from backend

Adding/deleting discussions

Adding/deleting posts

Like/Dislike functionality

Layout with Navbar, Hero, ThreeColumn, and Footer


index.js – Entry point for React. Renders the App component inside root.

AuthContext.js – Provides login, signup, and logout logic. Stores users in localStorage.

Signup enforces email, mobile, and password validation (password requires 8+ chars, 1 uppercase, 1 special char).


Login.js – Login/Signup form with email and mobile support. Switches between login and signup modes.

Popup.js – Displays small notification messages (success, error, info).


Discussion Features

DiscussionList.js – Shows discussions with:

Creator’s name

Like/Dislike buttons

Delete button (visible only to creator)

Highlight when selected


AddDiscussion.js – Input form for creating a new discussion.

PostList.js – Displays posts within a discussion:

Shows post text & author

Allows adding new posts

Allows deleting own posts


Layout & UI

Navbar.js – Top navigation with links, logout button, and a copyright modal.

Hero.js – Landing page hero banner with welcome text.

ThreeColumn.js – Section with three cards: Share Ideas, Engage, Collaborate.

Footer.js – Footer with copyright text.

Backend (Spring Boot)

Located in the spring-backend folder.
Main responsibilities: expose REST API endpoints for discussions and posts.

SpringBackendApplication.java – Main Spring Boot application runner.

WebConfig.java – Configurations (e.g., CORS).

DiscussionController.java – REST controller with endpoints for discussions, posts, likes/dislikes.

DiscussionService.java – Handles business logic for discussions and posts.

DiscussionRepository.java – MongoDB (or JPA) repository for data persistence.

Discussion.java – Entity/model representing a discussion with posts, likes, and dislikes.

Post.java – Entity/model representing an individual post.

---

✅ Features

User Authentication (Login/Signup with validation)

Start new discussions

Add posts (comments) to discussions

Like/Dislike discussions (1 per user)

Delete your own discussions/posts

Responsive UI (Bootstrap + custom CSS)

Hero section, three-column info section, and styled footer

I took limited assistance from ChatGPT in a few areas, such as:

Debugging minor issues in React and Spring Boot

Improving code readability and structure in some files

Writing small helper functions or UI refinements
