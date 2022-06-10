import React from "react";
import { Provider } from "react-redux";
import { DarkThemeProvider } from "./src/contexts/DarkThemeContext";
import Layout from "./src/layouts/Layout";
import Main from "./src/pages/Main";
import { todoStore } from "./src/redux/todos.store";


export default function App() {
  return (
    <Provider store={todoStore}>
      <DarkThemeProvider>
        <Layout>
          <Main></Main>
        </Layout>
      </DarkThemeProvider>
    </Provider>
  );
}
