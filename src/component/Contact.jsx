import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields ❌");
      return;
    }

    alert("Message Sent ✅");
    console.log(form);

    // reset form
    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📞 Contact Us</h2>

      <div className="row">
        {/* 🔹 CONTACT INFO */}
        <div className="col-md-5">
          <div className="card p-3 shadow-sm">
            <h5>Get in Touch</h5>
            <p>📧 Email: gautampanda291@gmail.com</p>
            <p>📱 Phone: +91 7606935231</p>
            <p>📍 Location: Bangalore, India</p>
          </div>
        </div>

        {/* 🔹 CONTACT FORM */}
        <div className="col-md-7">
          <div className="card p-3 shadow-sm">
            <h5>Send Message</h5>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="form-control mb-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="form-control mb-3"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="form-control mb-3"
                rows="4"
              />

              <button className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;