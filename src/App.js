import "./assets/style/main.scss";
import LayoutComp from "./components/LayoutComponents/LayoutComp";
import DataDashboard from "./components/DataDashboard";

function App() {
  return (
    <div>
      <LayoutComp>
        <div className="main-section">
          <DataDashboard />
        </div>
      </LayoutComp>
    </div>
  );
}

export default App;
