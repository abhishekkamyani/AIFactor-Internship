import BoxPlot from "./components/charts/BoxPlot";
import { getBoxPlotData, data, data2, data3 } from '/public/utils';

export default function App() {

  const boxPlotData = getBoxPlotData(data2);

  return (
    <div className="py-5 px-20 h-screen">
      <BoxPlot data={boxPlotData} />
    </div>
  );
}
