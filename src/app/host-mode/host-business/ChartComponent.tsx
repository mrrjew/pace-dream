import dynamic from "next/dynamic";
import React, { useState } from "react";

const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type ApexChartState = {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      height: number;
      type: string;
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: string;
    };
    xaxis: {
      type: string;
      categories: string[];
    };
    tooltip: {
      x: {
        format: string;
      };
    };
  };
};

const ChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<ApexChartState>({
    series: [
      {
        name: "Booking earnings",
        data: [0, 100, 2000, 3000, 4000],
      },
      {
        name: "Reimbursements",
        data: [11, 1382, 845, 632, 1134],
      },
      {
        name: "Missed earnings",
        data: [590, 892, 490, 2669, 1551],
      },
      {
        name: "Upcoming earnings",
        data: [1951, 2248, 1900, 430, 603],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "stepline",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (

       <>
         <div>
           <p className="font-semibold text-xl text-[#168027] ">
             $100 earned in 2023
           </p>
           <p className=" text-[#616462]">All earnings adjustments included</p>
         </div>
         <div className="w-full h-96">
         <div>
           <DynamicApexChart
             options={chartData.options as any}
             series={chartData.series}
             type="area"
             height={350}
           />
         </div>
           </div>
       </>
  );
};

export default ChartComponent;
