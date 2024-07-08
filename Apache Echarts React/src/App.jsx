import BoxPlot from "./components/charts/BoxPlot";
import { getBoxPlotData, data } from '/public/utils';

export default function App() {

  const boxPlotData = getBoxPlotData(data);

  return (
    <div className="py-5 px-20 h-screen">
      <BoxPlot data={boxPlotData} />
    </div>
  );
}
