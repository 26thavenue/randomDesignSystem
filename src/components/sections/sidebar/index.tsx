import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6 fixed">
      <h2 className="text-lg font-semibold mb-4">Docs Navigation</h2>
      <nav>
        <ul className="space-y-3">
          <li>
            <Link to="/docs" className="block hover:text-gray-300">
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/docs/buttons" className="block hover:text-gray-300">
              Buttons
            </Link>
          </li>
          <li>
            <Link to="/docs/alerts" className="block hover:text-gray-300">
              Alerts
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
