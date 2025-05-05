import { useState } from "react"
import Input from "./Input"
import { useForm } from "react-hook-form"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { Send } from "lucide-react"

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
                form.current,
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
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Get in touch</h2>
        <p className="text-white/70 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}

        {success && <p className="text-green-600 mb-2 text-center">{success}</p>}

        <form onSubmit={handleSubmit(contact)} ref={form} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name " type="text" placeholder="Your name" {...register("name", {
                    required: true,
                })}/>

                <Input label="Email " type="email" placeholder="Your email" {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"}
                })}/>

                <Input label="Phone Number " type="number" placeholder="Your phone number" {...register("phoneNumber", {
                    required: true,
                })}/>

            </div>
                <Input label="Subject " className="w-full" type="text" placeholder="How can we help?" {...register("subject", {
                    required: true,
                })}/>

                <div className="flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                    <textarea id="message" name="message" placeholder="Your message" className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-cyan-400/50 focus:ring-cyan-400/20 px-3 py-2 rounded-xl" rows={5} {...register("message", {
                        required: true
                        })}/>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-full py-3 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 flex items-center justify-center text-lg cursor-pointer" type="submit" id="sendMessageButton">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                </button>
        </form>
    </div>
)}
export default ContactForm