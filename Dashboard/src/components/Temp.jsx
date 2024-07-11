import axios from 'axios'
import React, { useEffect } from 'react'


const userId = "012334";
export default function Temp() {
  useEffect(() => {
    const fetchMe = async () => {
        try {
            const res = await axios.get('api/v1/time');
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    fetchMe();
  }, []);

  const uploadData = async () => {
    try {
        const res = await axios.post(`api/v1/dashboard/${userId}/dashboard_2`, {layouts: "hello world"});
        console.log(res);
    } catch (error) {
        console.log(error);
    }
  }
  
    return (
    <div>
        <button className='p-6 bg-blue-400 m-6' onClick={uploadData}>Upload</button>
    </div>
  )
}
