import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import PostList, { postLoader} from './components/PostList.jsx';

// Define Routes with Loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
        loader: postLoader, // Assign loader function
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action : createPostAction
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
