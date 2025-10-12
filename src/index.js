import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/1601629258xe.ttf";
import "./fonts/Europe.ttf";
import "./fonts/europe-bold.otf";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { ThemeSync } from "./components/Theme/ThemeSync";
import Loading from "./components/Custom/Loading";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MantineProvider
        theme={{
          components: {
            Notification: {
              styles: (theme) => ({
                root: {
                  backgroundColor: theme.colorScheme === 'dark' 
                    ? theme.colors.dark[6] 
                    : theme.colors.white,
                },
              }),
            },
          },
        }}
      >
        <ThemeSync />
        <Notifications />
        <Suspense fallback={Loading}>
          <App />
        </Suspense>
      </MantineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
