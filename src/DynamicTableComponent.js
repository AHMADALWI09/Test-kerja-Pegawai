// DynamicTableComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicTableComponent = () => {
  const [columns, setColumns] = useState([]);
  const [pegawaiData, setPegawaiData] = useState([]);

  useEffect(() => {
    // Fetch column definitions from the API
    axios.get('https://corenet.usadi.co.id/BaseAPI/Pegawai')
      .then(response => setColumns(response.data.columns))
      .catch(error => console.error('Error fetching columns:', error));

    // Fetch data from the API
    axios.get('https://corenet.usadi.co.id/BaseAPI/Pegawai')
      .then(response => setPegawaiData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Pegawai Table (Dynamic Columns)</h2>
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pegawaiData.map(pegawai => (
            <tr key={pegawai.NIP}>
              {columns.map(column => (
                <td key={column}>{pegawai[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTableComponent;
