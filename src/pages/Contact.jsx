import { useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaSnapchatGhost, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-purple-700">Contact Me</h1>
          <ul className="space-y-4 text-purple-800">
            <li className="flex items-center gap-3">
              <MailIcon className="w-6 h-6 text-purple-600" />
              <a href="mailto:yourname@example.com" className="underline">yourname@example.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaFacebookF className="w-6 h-6 text-blue-600" />
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="underline">
                facebook.com/yourprofile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaSnapchatGhost className="w-6 h-6 text-yellow-400" />
              <span>your_snapchat_username</span>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedinIn className="w-6 h-6 text-blue-700" />
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline">
                linkedin.com/in/yourprofile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
        </div>
      </div>
    </div>
  );
}
