import { NavLink, useNavigate } from "react-router-dom";
import Button from "./components/button";

function HeaderLink({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium"
          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium rounded-md"
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between h-16 bg-gray-800 rounded-t-md">
      <div className="flex items-center p-4 rounded-t-md grow">
        <h1 className="text-3xl font-bold text-white flex-shrink-0">
          PokeCoin
        </h1>
        <nav className="ml-10 flex items-baseline space-x-4">
          <HeaderLink to="/">Browse tokens</HeaderLink>
          <Button onClick={() => navigate("/create")}>+ New</Button>
        </nav>
      </div>
    </header>
  );
}
