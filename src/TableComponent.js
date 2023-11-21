// TableComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [pegawaiData, setPegawaiData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://corenet.usadi.co.id/BaseAPI/Pegawai')
      .then(response => setPegawaiData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Pegawai Table</h2>
      <table>
        <thead>
          <tr>
            <th>NIP</th>
            <th>Nama</th>
            <th>Jabatan</th>
          </tr>
        </thead>
        <tbody>
          {pegawaiData.map(pegawai => (
            <tr key={pegawai.NIP}>
              <td>{pegawai.NIP}</td>
              <td>{pegawai.Nama}</td>
              <td>{pegawai.Jabatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
