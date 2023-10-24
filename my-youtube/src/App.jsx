import Body from './components/Body';
import WatchPage from './components/WatchPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainContainer from './components/MainContainer';
import Error from './components/Error';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    errorElement:<Error/>,
    children: [{
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage/>
    }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={appRouter}>
        <div >
          <Body/>
        </div>
      </RouterProvider>
    </>
  )
}

export default App
