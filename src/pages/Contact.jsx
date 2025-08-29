import { useState } from "react";

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
    <div className="min-h-screen bg-purple-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Contact Me</h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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

        {status && <p className="text-center text-sm text-gray-700 mb-6">{status}</p>}

        <div className="text-center space-y-2">
          <p>Email: <a href="mailto:your-email@example.com" className="text-purple-700 underline">your-email@example.com</a></p>
          <p>Facebook: <a href="https://facebook.com/yourprofile" target="_blank" className="text-purple-700 underline">facebook.com/yourprofile</a></p>
          <p>Snapchat: <a href="https://snapchat.com/add/yourprofile" target="_blank" className="text-purple-700 underline">snapchat.com/add/yourprofile</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-purple-700 underline">linkedin.com/in/yourprofile</a></p>
        </div>
      </div>
    </div>
  );
}
