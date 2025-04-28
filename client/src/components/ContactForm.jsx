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
    <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
        {success && <p className="text-green-600 mb-2 text-center">{success}</p>}
        <form onSubmit={handleSubmit(contact)} ref={form}>
            <div className="space-y-6">
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
                    <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" rows={5} {...register("message", {
                        required: true
                        })}/>
                </div>

                <Button children="Send Message" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center" type="submit" id="sendMessageButton" disabled={disabled} />
            </div>
        </form>
    </div>
)}
export default ContactForm