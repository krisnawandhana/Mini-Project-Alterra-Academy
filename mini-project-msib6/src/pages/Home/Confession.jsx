import { useState } from 'react';
import axios from 'axios';

const Confession = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [emailaddress, setEmailadress] = useState('');
    const [message, setMessage] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            alert("Please write your message");
        } else {
            let postData;
            if (isAnonymous) {
                postData = {
                    Message: message
                };
            } else {
                // Cek apakah semua kolom diisi
                if (!firstname || !lastname || !username || !emailaddress) {
                    alert("Please fill out all fields");
                    return; // Menghentikan pengiriman data jika ada kolom yang tidak diisi
                }
                postData = {
                    Firstname: firstname.replace(/\s/g, '-'),
                    Lastname: lastname.replace(/\s/g, '-'),
                    Username: username.replace(/\s/g, '-'),
                    Emailaddress: emailaddress.replace(/\s/g, '-'),
                    Message: message
                };
            }
            try {
                const response = await axios.post('https://662e4424a7dda1fa378c7e95.mockapi.io/Confession', postData);
                if (response.status === 201) {
                    alert("Your message has been sent successfully");
                } else {
                    alert("Failed to send message. Please try again later.");
                }
            } catch (error) {
                console.error('Error:', error);
                alert("An error occurred. Please try again later.");
            }
            // Reset semua nilai state
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
                                            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} id="first_name" type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" />
                                        </div>
                                        <div>
                                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-black">Last Name</label>
                                            <input value={lastname} onChange={(e) => setLastname(e.target.value)} id="last_name" type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">Username</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 text-sm text-white bg-rose-300 border border-r-0 border-gray-300 rounded-l-md">@</span>
                                            <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-r-lg block w-full p-2.5" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                                        <input value={emailaddress} onChange={(e) => setEmailadress(e.target.value)} id="email" type="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5" />
                                    </div>
                                </>
                            )}
                            <div className="mt-4">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="4" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"></textarea>
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
