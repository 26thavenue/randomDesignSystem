import { Link } from "react-router-dom";
import { Divider } from "../..";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-orange-600 text-white p-6 fixed">
      <h2 className="text-xl font-semibold mb-4">Docs Navigation</h2>
      <nav>
        <ul className="space-y-3">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">UI</p>
            <div className="pl-6 flex">
                <Divider orientation="vertical"/>
                <div className="flex flex-col items-start gap-1 ">
                  <li className="hover:underline transition">
                    <Link to="/docs/alerts"> Alerts</Link>
                  </li>
                  <li>
                    <Link to="/docs/avatars"> Avatars</Link>
                  </li>
                  <li>
                    <Link to="/docs/badges"> Badges</Link>
                  </li>
                  <li>
                    <Link to="/docs/buttons"> Buttons</Link>
                  </li>
                  <li>
                    <Link to="/docs/cards"> Cards</Link>
                  </li>
                  <li>
                    <Link to="/docs/chips"> Chips</Link>
                  </li>
                  <li>
                    <Link to="/docs/dividers"> Dividers</Link>
                  </li>
                  <li>
                    <Link to="/docs/indicators"> Indicators</Link>
                  </li>
                  <li>
                    <Link to="/docs/inputs"> Inputs</Link>
                  </li>
                  <li>
                    <Link to="/docs/progress"> Progress</Link>
                  </li>
                  <li>
                    <Link to="/docs/ratings">Ratings</Link>
                  </li>
                  <li>
                    <Link to="/docs/skeletons"> Skeletons</Link>
                  </li>
                  <li>
                    <Link to="/docs/spinners"> Spinners</Link>
                  </li>
                  <li>
                    <Link to="/docs/tabs"> Tabs</Link>
                  </li>
                  <li>
                    <Link to="/docs/tooltips"> Tooltips</Link>
                  </li>
                </div>
                
            </div>
           
          </div>
          
          <p>Section</p>
          <p>Base Components</p>
          <p>Animations</p>   
        </ul>
      </nav>
    </aside>  
  );
};

export default Sidebar;
