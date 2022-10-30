import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";
import {
  CartIcon,
  ChatIcon,
  MoneyIcon,
  PeopleIcon,
} from "../../../assets/dashboard/icons";
import InfoCard from "../../../components/dashboard/Cards/InfoCard";
import RoundIcon from "../../../components/dashboard/RoundIcon";
import PageTitle from "../../../components/dashboard/Typography/PageTitle";
import response from "../../../utils/demo/tableData";
const chatData = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
  series: [
    {
      name: "Users",
      data: [30, 40, 45, 49, 60, 70, 91, 50, 49, 60, 70, 91],
    },
    {
      name: "Readers",
      data: [50, 49, 60, 70, 91, 30, 40, 45, 70, 91, 30, 40],
    },
  ],

  pieOptions: {
    series: [44, 55, 13, 33],
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    responsive: [
      {
        breakpoint: "M",
        options: {},
      },
    ],
  },
};

function Admin() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // chart data
  const [chart, setChart] = useState({ ...chatData });
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 ">
        <InfoCard title="Total clients" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorclassName="text-orange-500 dark:text-orange-100"
            bgColorclassName="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Account balance" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorclassName="text-green-500 dark:text-green-100"
            bgColorclassName="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New sales" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorclassName="text-blue-500 dark:text-blue-100"
            bgColorclassName="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Pending contacts" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorclassName="text-teal-500 dark:text-teal-100"
            bgColorclassName="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <div className="xl:flex justify-between items-center">
        <Chart
          options={chatData.options}
          series={chatData.series}
          type="bar"
          width="700"
        />

        <Chart
          re
          options={chatData.pieOptions}
          series={chatData.pieOptions.series}
          type="donut"
          width="480"
        />
      </div>
    </>
  );
}

export default Admin;
