
import React, { useEffect, useState } from 'react';
import './statewise.css';

const Statewise = () => {
  // State to hold the fetched data
  const [covidData, setCovidData] = useState([]);

  const getCovidData = async () => {
    try {
      // Fetch data from the specified URL
      const res = await fetch('https://data.covid19india.org/data.json');
      // Convert the fetched data into a usable format
      const actualData = await res.json();
      
      // Update the state with the fetched data
      setCovidData(actualData.statewise);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);//default on refresh

  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='main-heading'>
          <h1 className='mb-5 text-center'><span className='font-weight-bold'> INDIA Covid-19 Info</span></h1>
        </div>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {
                covidData.map((data, index) => {
                  return(
                <tr key={index}>
                  <td>{data.state}</td>
                  <td>{data.confirmed}</td>
                  <td>{data.recovered}</td>
                  <td>{data.deaths}</td>
                  <td>{data.active}</td>
                  <td>{data.lastupdatedtime}</td>
                </tr>
              )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
