import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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
        <h2>Login</h2>
        <p>Please login to continue</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Login
            </button>
            <p className='btn-subtitle'>
              New user?
              <Link to='/register'> Register</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
