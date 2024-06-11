import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import App from "./App.jsx";

const graphLink = createHttpLink({
  uri: import.meta.env.VITE_EXPA_GRAPHQL_URI,
  headers: {
    authorization: import.meta.env.VITE_EXPA_TOKEN,
  },
});

const client = new ApolloClient({
  link: graphLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  </ApolloProvider>
);
