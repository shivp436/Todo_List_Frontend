import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type FormData = {
  userName: string;
  displayName: string;
  email: string;
  password: string;
  password2: string;
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    displayName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { userName, displayName, email, password, password2 } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <>
      <section className='heading'>
        <h2>Register</h2>
        <p>Please create an account to continue</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='userName'
              name='userName'
              placeholder='User Name'
              value={userName}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='displayName'
              name='displayName'
              placeholder='Display Name'
              value={displayName}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              placeholder='Confirm Password'
              value={password2}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Register
            </button>
            <p className='btn-subtitle'>
              Exising user?
              <Link to='/login'> Login</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
