import BarChart from "./charts/BarChart";
import DoughnutChart from "./charts/DoughnutChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";

function App() {
  return (
    <div className="App">
      <h2>Live Crypto Coin Chart</h2>
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <PieChart />
    </div>
  );
}

export default App;
