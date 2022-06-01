import { ApolloProvider } from '@apollo/client';
import apolloClient from "./services/server";
import { Routes, Route, Link } from "react-router-dom";

import ViewCoin from './ViewCoin';
import CreateToken from './CreateToken';

import './App.css'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <nav>
          <Link to="/create">Create New Token</Link>
          <Link to="/view">View</Link>
        </nav>
        <Routes>
          <Route path="/create" element={<CreateToken />} />
          <Route path="/view/:id" element={<ViewCoin />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App
