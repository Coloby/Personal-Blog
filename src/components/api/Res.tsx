"use client";

import React, { useState } from 'react'

const Res = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const url = `${process.env.CMS_API_ROOT_URL}users`; // Replace with your actual API endpoint
      const jwtToken = process.env.JWT_TOKEN; // Replace with your actual JWT token
      console.log(`url:`, url)
      console.log(`jwtToken:`, jwtToken)

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      console.log(`result:`, result)
      // setData(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // fetchData();
  return (
    <div>
      {/* {data && JSON.stringify(data.docs[0], null, 2)} */}
    </div>
  )
}

export default Res