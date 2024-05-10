import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Message = () => {
  const api_msg = import.meta.env.VITE_API_URL_CONFESSION;
  const [messages, setMessages] = useState([]);
  const [messageClassifications, setMessageClassifications] = useState([]);
  const [classificationDone, setClassificationDone] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Mendapatkan status login dari localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api_msg);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (messages.length > 0 && !classificationDone) {
      classifyMessages();
    }
  }, [messages, classificationDone]);

  const classifyMessages = async () => {
    const API_URL = import.meta.env.VITE_OPENAI_API_URL;
    const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    const messageClassifications = [];

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      
      const prompt = `klasifikasi data berikut hanya kedalam pujian, kritik atau netral dengan bentuk kata = klasifikasi :  \n${message.Username} | ${message.Message}\n`;
  
      const APIBody = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      };
  
      try {
        const response = await axios.post(API_URL, APIBody, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + API_KEY,
          },
        });
  
        if (response.status !== 200) {
          throw new Error('Failed to fetch');
        }
  
        const data = response.data;
        console.log('Respon dari OpenAI:', data.choices[0].message.content);
        
        // Ambil klasifikasi dari respons OpenAI
        const classification = data.choices[0].message.content;
        
        // Menyimpan klasifikasi
        messageClassifications.push(classification);
      } catch (error) {
        console.error('Error:', error);
        messageClassifications.push('Klasifikasi Gagal');
      }
    }
  
    // Set klasifikasi ke state untuk ditampilkan dalam tabel
    setMessageClassifications(messageClassifications);
    setClassificationDone(true);
  };

  // Kondisi untuk menentukan apakah pengguna login atau tidak
  if (!isLoggedIn) {
    return (
      <div className="container">
        <h1 className="text-xl text-rose-300 font-semibold mb-4">Please Login</h1>
        <p>You need to login to view messages. Click <Link to="/login"  className="text-blue-500 underline focus:outline-none">here</Link> to login.</p>
      </div>
    );
  }
  // Jika pengguna telah login, tampilkan pesan
  return (
    <div className="container">
      <h1 className="text-xl text-rose-300 font-semibold mb-4">Classification of Messages</h1>
      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-rose-300 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Message</th>
              <th className="py-3 px-6 text-left">Classification</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {messages.map((message, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{message.Username}</td>
                <td className="py-3 px-6 text-left">{message.Message}</td>
                <td className="py-3 px-6 text-left">{messageClassifications[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Message;
