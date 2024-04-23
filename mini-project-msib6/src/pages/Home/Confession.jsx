// import {useState} from 'react'

// const Conffession = () => {
//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [username, setUsername] = useState('');
//     const [emailaddress, setEmailadress] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!firstname || !lastname || !username || !emailaddress || !message) {
//             alert("Please fill out all fields");
//         } else {
//             alert(
//                 `
//                 First Name: ${firstname}
//                 Last Name: ${lastname}
//                 Username : ${username}
//                 Email : ${emailaddress}
//                 Message: ${message}
//                 `
//             )
//         }
//         setFirstname('');
//         setLastname('');
//         setUsername('');
//         setEmailadress('');
//         setMessage('');
//     }

//   return (
//     <section id="contact" className="py-20">
//         <div className="container">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                     <h3 className="uppercase text-black">Contact</h3>
//                     <h2 className="text-black">You Can Contact Us.</h2>
//                     <p className="max-w-none md:max-w-md mt-2 md:mt-4 text-[#34364A] text-sm md:text-base leading-6 md:leading-7 text-justify opacity-50">Need to get in touch with us? Ether fill out the form with your inquiry of find the department email you'd like to contact below.</p>
//                 </div>
//                 <div>
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-2 items-center gap-2 ">
//                             {/* First Name */}
//                             <div className="">
//                                 <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black">First Name</label>
//                                 <input value={firstname} onChange={(e) => setFirstname(e.target.value)} id="first_name" type="text" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5" />
//                             </div>
//                             {/* Last Name */}
//                             <div className="">
//                                 <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black">Last Name</label>
//                                 <input value={lastname} onChange={(e) => setLastname(e.target.value)} id="last_name" type="text" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5" />
//                             </div>
//                         </div>

//                         {/* Username */}
//                         <div className="mt-4">
//                             <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">Username</label>
//                             <div className="flex">
//                                 <span className="inline-flex items-center px-3 text-sm text-white bg-rose-300 border border-r-0 border-gray-300 rounded-l-md">
//                                     @
//                                 </span>
//                                 <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-r-lg block w-full p-2.5  " />
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div className="mt-4">
//                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email</label>
//                             <input value={emailaddress} onChange={(e) => setEmailadress(e.target.value)} id="email" type="email" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5  " />
//                         </div>

//                         {/* Message */}
//                         <div className="mt-4">
//                             <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message</label>
//                             <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="4" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5"></textarea>
//                         </div>

//                         <div className="mt-4">
//                             <button type="submit" className="bg-rose-300 text-white rounded-md p-2">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Conffession

import { useState } from 'react';

const Confession = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [emailaddress, setEmailadress] = useState('');
    const [message, setMessage] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message) {
            alert("Please write your message");
        } else {
            const submitMessage = isAnonymous
                ? "Your anonymous message has been sent. Thank you for reaching out!"
                : `Your message has been sent successfully:\n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nUsername: ${username}\nEmail: ${emailaddress}\nMessage: ${message}`;
            alert(submitMessage);
            setFirstname('');
            setLastname('');
            setUsername('');
            setEmailadress('');
            setMessage('');
        }
    }

    return (
        <section id="contact" className="py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="uppercase text-black">Contact</h3>
                        <h2 className="text-black">You Can Contact Us.</h2>
                        <p className="max-w-none md:max-w-md mt-2 md:mt-4 text-[#34364A] text-sm md:text-base leading-6 md:leading-7 text-justify opacity-50">Need to get in touch with us? Fill out the form below to send us a message, either anonymously or with your contact information.</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            {!isAnonymous && (
                                <>
                                    <div className="grid grid-cols-2 items-center gap-2 mt-4">
                                        <div>
                                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-black">First Name</label>
                                            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} id="first_name" type="text" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5" />
                                        </div>
                                        <div>
                                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black">Last Name</label>
                                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} id="last_name" type="text" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">Username</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 text-sm text-white bg-rose-300 border border-r-0 border-gray-300 rounded-l-md">@</span>
                                            <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-r-lg block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                                        <input value={emailaddress} onChange={(e) => setEmailadress(e.target.value)} id="email" type="email" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5" />
                                    </div>
                                </>
                            )}
                            <div className="mt-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="4" className="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg block w-full p-2.5"></textarea>
                            </div>
                            <div className="mt-4">
                                <input
                                    id="anonymous"
                                    type="checkbox"
                                    checked={isAnonymous}
                                    onChange={() => setIsAnonymous(!isAnonymous)}
                                    className="mr-2"
                                />
                                <label htmlFor="anonymous" className="text-sm text-black">Send anonymously</label>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="bg-rose-300 text-white rounded-md p-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Confession;
