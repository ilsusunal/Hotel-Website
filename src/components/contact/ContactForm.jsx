import React, { useState } from 'react';
import CustomButton from '../../ui/CustomButton';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <main className="grow h-auto justify-end  py-10 px-14 rounded-2xl border-2 border-oceanBlue/20 w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:flex md:gap-4">
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mb-4 md:mb-0 px-3 py-2 border border-oceanBlue/50 rounded"
            placeholder='Full Name *'
          />
          {errors.fullName && <p className="text-sunsetCoral text-xs">{errors.fullName}</p>}
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-oceanBlue/50 rounded"
            placeholder='Email *'
          />
          {errors.email && <p className="text-sunsetCoral text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <select
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-oceanBlue/50 rounded"
            placeholder="Subject *"
          >
            <option value="" disabled>Please Select</option>
            <option value="Recommendation">Recommendation</option>
            <option value="Complaint">Complaint</option>
          </select>
          {errors.subject && <p className="text-sunsetCoral text-xs">{errors.subject}</p>}
        </div>
        <div className="mb-4 flex flex-col items-center">
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-oceanBlue/50 rounded mb-8"
            rows="4"
            placeholder='Message'
          ></textarea>
          <CustomButton type="submit" label="Send" variant="filled"/>
        </div>
      </form>
    </main>
  );
}

