import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// const data = {
//   "entry_id": 2,
//   "title": "WCE Map",
//   "team_leader": "Divya Kekade",
//   "role": "student",
//   "mobile_no": "9021438925",
//   "email": "divya.kekade@walchandsangli.ac.in",
//   "department": "CSE",
//   "year": "Btech-TY",
//   "report": "report_1681750817959.pdf",
//   "relevance": "rriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvva",
//   "innovation": "rriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvva",
//   "potential": "rriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvva",
//   "viability": "rriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvva",
//   "applicability": "rriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvvapprriippvva",
//   "date_time": "2023-04-16T18:30:00.000Z",
//   "team_members": "Divya Kekakde,  Divya Kekade"
// }
const Id = () => {
  const d = useRouter().query.id;
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  // console.log(d)
  useEffect(() => {
    FecthData();
  }, [])
  const FecthData = async () => {
    try {
      await fetch(`https://103.30.64.62/api/idea/${d}`, {
        method: "GET",
      })
        .then(async (res) => {
          const data = await res.json();

          console.log(data);
          setLoading(false);
          if (data.Success) {
            setData(data.data);
            //   alert("Idea submitted successfully !");
            // window.location.href = "/";

          } else {
            alert("Something went wrong !");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // // console.log(json);
    } catch (error) {
      alert("Something went wrong!");
      // console.log(error);
    }

  }
  const handleReportDownload = async (filename) => {
    await fetch('http://103.30.64.62:5000/report/' + filename, {
      method: "GET",
    }).then(async (res) => {
      console.log("File fetched successfully! :", res)
    }).catch(err => {
      console.log(err)
    })

  }
  const {
    title,
    team_leader,
    role,
    mobile_no,
    email,
    department,
    year,
    report,
    relevance,
    innovation,
    potential,
    viability,
    applicability,
    date_time,
    team_members,
  } = data;

  return (<div className='p-6'>

    <div className="p-4 bg-white rounded-lg shadow-lg border-2 border-red-600">
      <h2 className="text-2xl font-bold mb-4 text-red-600">{title}</h2>
      <p className="text-sm font-bold text-gray-700">
        Submitted on {new Date(date_time).toLocaleDateString()}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-2">Team Leader:</h3>
          <p className="text-lg font-medium">{team_leader}</p>
          <h3 className="text-sm font-bold text-gray-700 mt-4 mb-2">Role:</h3>
          <p className="text-lg font-medium">{role}</p>
          <h3 className="text-sm font-bold text-gray-700 mt-4 mb-2">Mobile No:</h3>
          <p className="text-lg font-medium">{mobile_no}</p>
          <h3 className="text-sm font-bold text-gray-700 mt-4 mb-2">Email:</h3>
          <p className="text-lg font-medium">{email}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-2">Department:</h3>
          <p className="text-lg font-medium">{department}</p>
          <h3 className="text-sm font-bold text-gray-700 mt-4 mb-2">Year:</h3>
          <p className="text-lg font-medium">{year}</p>
          <h3 className="text-sm font-bold text-gray-700 mt-4 mb-2">Report:</h3>
          <p className="text-lg font-medium cursor-pointer hover:text-red-600" onClick={() => handleReportDownload(report)}>{report}</p>
          <h3 className="text-sm font-bold text-gray-700 mt-4 mb-2">Team Members:</h3>
          <p className="text-lg font-medium">{team_members}</p>
        </div>
      </div>
      <div className="grid grid-cols-5  gap-4 mt-8">
        <div className="max-w-xs col-span-12">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Relevance:</h3>
          <p className="text-lg font-medium text-red-600">{relevance}</p>
        </div>
        <div className="max-w-xs col-span-12">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Innovation:</h3>
          <p className="text-lg font-medium text-red-600">{innovation}</p>
        </div>
        <div className="max-w-xs col-span-12">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Potential:</h3>
          <p className="text-lg font-medium text-red-600">{potential}</p>
        </div>
        <div className="max-w-xs col-span-12">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Viability:</h3>
          <p className="text-lg font-medium text-red-600">{viability}</p>
        </div>
        <div className="max-w-xs col-span-12">
          <h3 className="text-sm font-bold text-gray-700 mb-2">Applicability:</h3>
          <p className="text-lg font-medium text-red-600">{applicability}</p>
        </div>
      </div>
    </div>
  </div>
  );
};



export default Id;
