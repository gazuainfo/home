import React from "react";
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';

const CHART_DATA1 = {
  columns: [
    ['data1', 30, 20, 50, 40, 60, 50],
    ['data2', 200, 130, 90, 240, 130, 220]
  ],
  type: 'line'
};
const CHART_DATA2 = {
  columns: [
    ['data1', 30, 20, 50, 40, 60, 50],
    ['data2', 200, 130, 90, 240, 130, 220]
  ],
  type: 'area'
};
const CHART_DATA3 = {
  columns: [
    ['data1', 30, 20, 50, 40, 60, 50],
    ['data2', 200, 130, 90, 240, 130, 220]
  ],
  type: 'spline'
};
export default () => (
  <div>
    <h1>Chart</h1>
    <div>
        <BillboardChart data={CHART_DATA1}/>
    </div>
    <div>
        <BillboardChart data={CHART_DATA2}/>
    </div>
    <div>
        <BillboardChart data={CHART_DATA3}/>
    </div>
  </div>
);