import { ApolloProvider } from "@apollo/client";
import apolloClient from "./services/server";
import { Routes, Route } from "react-router-dom";

import ViewCoin from "./ViewCoin";
import ViewCoins from "./ViewCoins";
import CreateToken from "./CreateToken";
import Header from "./Header";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-full container mx-auto max-w-screen-lg m-4">
        <Header />
        <main className="border border-1 p-4 rounded-b-md">
          <Routes>
            <Route path="/create" element={<CreateToken />} />
            <Route path="/" element={<ViewCoins />} />
            <Route path="/view/:id" element={<ViewCoin />} />
          </Routes>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
