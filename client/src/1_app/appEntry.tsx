import { appRouter } from "@/1_app/appRouter";
import { Provider } from "react-redux";
import { makeStore } from "@/1_app/appStore";
import { RouterProvider } from "react-router";

function App() {
  return (
    <Provider store={makeStore()}>
      <RouterProvider router={appRouter()} />
    </Provider>
  );
}

export default App;
