import { useState } from "react"
import Input from "./Input"
import { useForm } from "react-hook-form"
import Button from "./Button"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

function ContactForm() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [disabled, setDisabled] = useState(false)
    const form = useRef();

    const contact = (e) => {
        setError("");
        setSuccess("");
        setDisabled(true);
    
        const button = document.getElementById("sendMessageButton");
        button.innerHTML = "Sending...";
    
        if (!form.current) {
            setError("Form not found.");
            setDisabled(false);
            button.innerHTML = "Send Message";
            return;
        }
    
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current, // Ensure form.current exists
                { publicKey: import.meta.env.VITE_PUBLIC_KEY }
            )
            .then(() => {
                setSuccess("Message Sent Successfully");
                form.current.reset();
                setDisabled(false);
                button.innerHTML = "Send Message";
            })
            .catch((error) => {
                setError("Failed to send message. Please try again.");
                setDisabled(false);
                button.innerHTML = "Send Message";
            });
    };    
    
return (
    // <div className="flex items-center justify-center w-full">
    //     <div className={`mx-auto w-1/3 max-w-lg rounded-xl px-10 py-8 border border-black/10 bg-white`}>
    //         {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
    //         {success && <p className="text-green-600 mb-2 text-center">{success}</p>}
    //         <form onSubmit={handleSubmit(contact)} ref={form}>
    //             <div className="space-y-5"> 
    //                 <Input label="Name: " type="text" placeholder="Enter Your Name" {...register("name", {
    //                     required: true,
    //                 })}/>
    //                 <Input label="Email: " placeholder="Enter Your Email" type="email" {...register("email", {
    //                     required: true,
    //                     validate: {
    //                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    //                         "Email address must be a valid address",
    //                     }
    //                 })}/>
    //                 <div className="flex flex-col">
    //                     <label htmlFor="message" className="mb-2">Message:</label>
    //                     <textarea name="message" placeholder="Enter Your Message" className="border border-black rounded-md px-3 py-2" rows={6} {...register("message", {
    //                     required: true,
    //                 })}></textarea>
    //                 </div>
    //                 <Button children="Send Message" className="w-full bg-black text-white py-3 rounded-md hover:bg-white hover:text-black transform duration-300" type="submit" id="sendMessageButton" disabled={disabled} />
    //             </div>
    //         </form>
    //     </div>
    // </div>
    <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
        {success && <p className="text-green-600 mb-2 text-center">{success}</p>}
        <form onSubmit={handleSubmit(contact)} ref={form}>
        <div className="space-y-6">
            {/* <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            </div> */}
            <Input label="Your Name " type="text" {...register("name", {
                required: true,
            })}/>

            <Input label="Your Email " type="email" {...register("email", {
                required: true,
                validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"}
            })}/>

            <Input label="Phone Number " type="number" {...register("phoneNumber", {
                required: true,
            })}/>

            <Input label="Subject " type="text" {...register("subject", {
                required: true,
            })}/>

            <div className="flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5} {...register("message", {
                    required: true
                    })}/>
            </div>

            <Button children="Send Message" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center" type="submit" id="sendMessageButton" disabled={disabled} />
    

            {/* <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email *
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            </div> */}

            {/* <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
            </label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div> */}

            {/* <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
            </label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div> */}

            {/* <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message *
            </label>
            <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            ></textarea>
            </div> */}

            {/* <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
            >
            Send Message <Send size={16} className="ml-2" />
            </button> */}
        </div>
        </form>
    </div>
)}
export default ContactForm