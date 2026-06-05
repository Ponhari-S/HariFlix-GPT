import { RouterProvider } from "react-router-dom";
import appRouter from "./components/Main";
import { Provider } from "react-redux";
import Store from "./utils/Store";

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
