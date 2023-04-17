import { useState, useEffect } from "react";
import { columns } from "../../data/DashboardColumns";
import MUIDataTable from "mui-datatables";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    selectableRows: false,
  };
  const FetchData = async () => {
    try {
      setLoading(true);
      await fetch("http://103.30.64.62:5000/api/idea/responses", {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();

          setLoading(false);
          if (data.success) {
            console.log(data.data)
          
            setData(data.data);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } catch (error) {}
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="mt-[2rem]">
      {!loading && (
        <div className="md:m-[4rem]">
          <MUIDataTable
            title={"Idea List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
