# Blog App

A simple and responsive blog application built with **React.js** and **Tailwind CSS**.

This project was created mainly to learn and practice **React Context API**, **Context Provider**, and the **useContext hook** while working with API data and pagination.

## Features

- Fetch blog posts from an API
- Display blog title, author, category, date, content, and tags
- Pagination with Previous and Next buttons
- Loading spinner while fetching posts
- Display "Post Not Found" when no posts are available
- Responsive layout using Tailwind CSS
- Fixed header with shadow
- Centralized state management using React Context API

## Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- React Context API
- Fetch API
- Vite

## What I Learned

### 1. Context API

I learned how to use React Context API to share data between components without passing props manually through every component.

```jsx
export const AppContext = createContext();
```

### 2. Context Provider

I created an `AppContextProvider` component to manage the application's state.

```jsx
export function AppContextProvider({ children }) {
  // State and functions

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
```

The provider stores and shares:

- Loading state
- Current page
- Total pages
- Blog posts
- Fetch posts function
- Pagination handler

### 3. useContext Hook

I learned how to access the context data inside components using `useContext`.

```jsx
const { loading, posts } = useContext(AppContext);
```

This allows components such as `Content` and `Pagination` to access shared state without prop drilling.

### 4. API Data Fetching

I learned how to fetch data using the JavaScript `fetch()` API.

```jsx
const response = await fetch(url);
const data = await response.json();
```

### 5. Pagination

The application supports pagination using the current page and total pages.

```jsx
handlePageChange(page + 1);
```

and

```jsx
handlePageChange(page - 1);
```

### 6. Conditional Rendering

I practiced rendering different UI based on application state.

```jsx
loading ? (
  <Spinner />
) : posts.length === 0 ? (
  <p>Post Not Found</p>
) : (
  // Display posts
)
```

## Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── Content.jsx
│   ├── Pagination.jsx
│   └── Spiner.jsx
│
├── context/
│   ├── AppContext.js
│   └── Context.jsx
│
├── baseUrl.js
├── App.jsx
├── main.jsx
└── index.css
```

## How Context Works in This Project

The data flow is:

```text
API
 ↓
AppContextProvider
 ↓
AppContext
 ↓
useContext()
 ↓
Components
```

Instead of passing `posts`, `loading`, `page`, and other values through props, the Context Provider makes them available to the components that need them.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd blog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Environment Variables

If the project uses environment variables, create a `.env` file in the root directory.

```env
VITE_API_URL=your_api_url
```

Do not commit your `.env` file to GitHub.

Add this to `.gitignore`:

```text
.env
.env.local
.env.*.local
```

## Purpose of the Project

This project was built as a learning project to understand how **React Context API** can be used for state management.

The main concepts practiced in this project were:

- `createContext()`
- Context Provider
- `useContext()`
- `useState()`
- API fetching
- Async/Await
- Conditional rendering
- Pagination
- Loading states
- Component-based architecture
- Tailwind CSS

## Future Improvements

- Add search functionality
- Add individual blog post pages
- Add category filtering
- Add dark mode
- Add error message UI
- Add React Router
- Add authentication
- Add create/edit/delete post functionality

## Author

**Sarthak Arya**

