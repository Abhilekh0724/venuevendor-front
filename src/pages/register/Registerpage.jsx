import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { registerUserApi } from '../../api/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Registerpage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    // Implement your validation rules here

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    registerUserApi(data)
      .then((res) => {
        console.log('Registration Response:', res);
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success('Registration successful! Redirecting to login...');
          setTimeout(() => {
            navigate('/login');
          }, 2000); // Redirect after 2 seconds
        }
      })
      .catch((error) => {
        console.error('Registration Error:', error);
        toast.error('An error occurred while registering. Please try again later.');
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://th.bing.com/th/id/R.2ea41474040e49066c4ed04dc22d7c50?rik=4VbvnabIVU2Sbg&pid=ImgRaw&r=0")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust opacity as needed
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)',
        }}
      >
        <img src="assets/images/vend.png" alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: '100%', marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: '100%', marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
          />
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
          >
            Register
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', marginBottom: '20px' }}>
            <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '20px', marginRight: '10px' }} />
            Register with Google
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="/login" style={{ fontSize: '14px', color: '#007bff', textDecoration: 'none' }}>Already have an account? Login</a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registerpage;
