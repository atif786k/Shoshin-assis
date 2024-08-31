import "./App.css";
import DashCards from "./components/DashCards";
import TotalCards from "./components/TotalCards";
import empGraph from "./assets/empgraph.svg";
import reqGraph from "./assets/reqgraph.svg";

function App() {
  return (
    <>
      <h1 className="text-4xl text-red-600">Working perfectly fine</h1>
      <DashCards
        bgc="#FFEFE7"
        hTwoTitle="Available Position"
        hOneNum="24"
        hFourTitle="4 Urgently needed"
        hFourColor="#FF5151"
      />
      <DashCards
        bgc="#E8F0FB"
        hTwoTitle="Job Open"
        hOneNum="10"
        hFourTitle="4 Active hiring"
        hFourColor="#3786F1"
      />
      <DashCards
        bgc="#FDEBF9"
        hTwoTitle="New Employees"
        hOneNum="24"
        hFourTitle="4 Department"
        hFourColor="#EE61CF"
      />
      <TotalCards
        hTwoTitle="Total Employees"
        hOneNum="216"
        menNum="120"
        womenNum="96"
        growthRate="2"
        svgFile={empGraph}
      />
      <TotalCards
        hTwoTitle="Talent Request"
        hOneNum="16"
        menNum="6"
        womenNum="10"
        growthRate="5"
        svgFile={reqGraph}
      />
    </>
  );
}

export default App;
