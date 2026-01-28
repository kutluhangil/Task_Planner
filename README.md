<h1>🧩 Mini Project — React Task Planner</h1>

<p>
This mini project is a <strong>Task Planner application</strong> built with React.
Its purpose is to reinforce modern frontend concepts such as
<strong>routing</strong>, <strong>global state management</strong>,
<strong>asynchronous operations</strong>, and
<strong>authentication with JWT</strong>.
</p>

<hr />

<h2>🎯 Project Goals</h2>

<p>With this project, you practice:</p>

<ul>
  <li>Building a component-based architecture with React</li>
  <li>Page navigation using React Router</li>
  <li>Global state management with Redux Toolkit</li>
  <li>Fetching data from a backend using <code>createAsyncThunk</code></li>
  <li>User authentication with JSON Web Token (JWT)</li>
  <li>Access control using protected routes</li>
</ul>

<hr />

<h2>🧱 Project Structure</h2>

<pre>
src/
├── components/
│   ├── AppBar/
│   ├── Layout/
│   ├── Task/
│   ├── TaskForm/
│   ├── TaskList/
│   └── TaskCounter/
│
├── pages/
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── TasksPage.jsx
│   └── HomePage.jsx
│
├── redux/
│   ├── store.js
│   ├── tasksSlice.js
│   ├── operations.js
│   ├── selectors.js
│   └── auth/
│       ├── authSlice.js
│       └── authOperations.js
│
├── App.jsx
└── index.js
</pre>

<hr />

<h2>⚙️ Getting Started</h2>

<pre>
npx create-react-app task-planner
cd task-planner
npm install react-router-dom axios @reduxjs/toolkit react-redux
</pre>

<hr />

<h2>🧭 Routing Structure</h2>

<p>
Routing is handled with <strong>React Router</strong>.
Protected routes ensure that only authenticated users
can access the tasks page.
</p>

<ul>
  <li><code>/</code> — Home page</li>
  <li><code>/register</code> — User registration</li>
  <li><code>/login</code> — User login</li>
  <li><code>/tasks</code> — Protected tasks page</li>
</ul>

<hr />

<h2>🗂 Redux Store</h2>

<p>
The Redux store is configured using <strong>Redux Toolkit</strong>.
It combines two main slices:
</p>

<ul>
  <li><strong>tasks</strong> — manages task data</li>
  <li><strong>auth</strong> — manages authentication state</li>
</ul>

<p>
Redux Toolkit simplifies reducer logic and improves code readability.
</p>

<hr />

<h2>🔐 Authentication (Auth Slice)</h2>

<p>
Authentication is handled via a dedicated <strong>auth slice</strong>.
The application supports:
</p>

<ul>
  <li>User registration</li>
  <li>User login</li>
  <li>User logout</li>
  <li>Session refresh using JWT</li>
</ul>

<p>
The JWT token is stored in the Redux state and attached to all
authorized API requests.
</p>

<hr />

<h2>📋 Tasks Management</h2>

<p>
The tasks slice is responsible for:
</p>

<ul>
  <li>Fetching tasks from the backend</li>
  <li>Adding new tasks</li>
  <li>Deleting tasks</li>
  <li>Toggling task completion</li>
</ul>

<p>
All asynchronous operations are implemented using
<code>createAsyncThunk</code>.
</p>

<hr />

<h2>🔒 Protected Routes</h2>

<p>
Protected routes prevent unauthorized access.
If a user is not logged in and tries to access a protected page,
they are automatically redirected to the login page.
</p>

<p>
This logic ensures proper access control across the application.
</p>

<hr />

<h2>📄 Example Pages</h2>

<ul>
  <li><strong>Login Page</strong> — Allows users to sign in</li>
  <li><strong>Register Page</strong> — Allows new users to create an account</li>
  <li><strong>Tasks Page</strong> — Displays user-specific tasks</li>
</ul>

<hr />

<h2>🚀 Advanced Improvements (Optional)</h2>

<ul>
  <li>Persist authentication and tasks using <code>redux-persist</code></li>
  <li>Form validation with <code>Formik</code> and <code>Yup</code></li>
  <li>Task filtering and search functionality</li>
  <li>UI styling with Tailwind CSS or styled-components</li>
</ul>

<hr />

<h2>✅ Final Outcome</h2>

<p>
After completing this project, you will have hands-on experience with:
</p>

<ul>
  <li>React components and hooks</li>
  <li>Redux Toolkit for global state management</li>
  <li>Asynchronous API communication</li>
  <li>JWT-based authentication</li>
  <li>Protected routing patterns</li>
</ul>

<p><strong>Happy coding! 🚀</strong></p>
