/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, ChangeEvent } from "react";
import { userAxios } from "../../Constraints/axiosInterceptor";
import MedicalDocument from "../../Interfaces/dicomInterface";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";



const ListRecords: React.FC = React.memo(() => {
  const [records, setRecords] = useState<MedicalDocument[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    if (email) {
      userAxios
        .get(`/get/records?email=${email}`)
        .then((response) => {
          setRecords(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the records!", error);
        });
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
    }, 300),
    []
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleViewClick = useCallback((record: MedicalDocument) => {
    navigate("/report/details", { state: { data: record } });
  }, [navigate]);

  const filteredRecords: MedicalDocument[] = records.filter(
    (record) =>
      record.patientName &&
      record.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold ml-2">RECORDS</h1>
          <div className="flex ml-auto">
            <label htmlFor="search" className="sr-only">
              Records
            </label>
            <input
              type="search"
              placeholder="Search Records"
              className="border rounded-l py-2 px-4"
              name="search"
              id="search"
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Body Part</th>
              <th scope="col" className="px-6 py-3">Doctor</th>
              <th scope="col" className="px-6 py-3">Study Date</th>
              <th scope="col" className="px-6 py-3">Laboratory</th>
              <th scope="col" className="px-6 py-3">Place</th>
              <th scope="col" className="px-6 py-3">More</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr
                key={record.studyID}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>{record.patientName}</span>
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>{record.bodyPart}</span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>{record.doctorName}</span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>{record.studyDate}</span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>{record.studyInstitution}</span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>{record.institutionLocation}</span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewClick(record)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ListRecords;
