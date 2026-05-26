"use client"; // This directive marks the component as a Client Component

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

const ContactForm = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    // Get the email value from the form
    const email = formData.get('email') as string;

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // Show error toast if email is invalid
      toast.error('Invalid email address. Please enter a valid email.', {
        position: "top-center",
        autoClose: 2000,
      });
      return; // Exit the function if email is invalid
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: "bottom-center",
          autoClose: 2000,
          onClose: () => {
            router.push('/');
          },
        });
      } else {
        toast.error('Failed to send message. Please try again.', {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="title">Contact Us</h2>
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="access_key" value="a8f92459-6c6f-4139-856f-a63b451fe731" />

          <div className="inputGroup">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
            />
          </div>

          <div className="inputGroup">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
          </div>

          <div className="inputGroup">
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message..."
              required
              className="textarea"
            ></textarea>
          </div>

          <button type="submit" className="button">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactForm;
