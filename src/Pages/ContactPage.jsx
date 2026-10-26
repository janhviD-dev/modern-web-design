
import { useState } from "react";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Message Sent!");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  const isFormValid =
    email.trim() && message.trim() && validateEmail(email);

  return (
    <div className="w-full bg-gray-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="mb-3 inline-block rounded-full border border-emerald-700/20 bg-emerald-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-black">
            Get in touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Contact Us
            <span className="text-emerald-700">.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black sm:text-base">
            Have a question or an idea? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.18)] sm:p-9"
        >
          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }
              }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition-all duration-200 placeholder:text-gray-500 focus:bg-white focus:ring-4 ${
                errors.email
                  ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                  : "border-gray-200 focus:border-emerald-700 focus:ring-emerald-700/10"
              }`}
            />

            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-2 text-xs text-black"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-7">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Your Message
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) {
                  setErrors((prev) => ({
                    ...prev,
                    message: "",
                  }));
                }
              }}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "message-error" : undefined
              }
              className={`w-full resize-y rounded-xl border bg-gray-50 px-4 py-3.5 text-sm leading-6 text-black outline-none transition-all duration-200 placeholder:text-gray-500 focus:bg-white focus:ring-4 ${
                errors.message
                  ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                  : "border-gray-200 focus:border-emerald-700 focus:ring-emerald-700/10"
              }`}
            />

            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-2 text-xs text-black"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-800 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45"
          >
            Send Message
          </button>

          <p className="mt-4 text-center text-xs text-black">
            We'll get back to you as soon as possible.
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
