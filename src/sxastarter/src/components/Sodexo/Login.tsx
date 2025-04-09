'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextField, ImageField, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

const loginStyles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
  },
  imageContainer: {
    display: 'none',
    position: 'relative',
    width: '66.666%',
    '@media (min-width: 768px)': {
      display: 'block',
    },
  },
  backgroundImage: {
    objectFit: 'cover',
  },
  formContainer: {
    width: '100%',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 768px)': {
      width: '33.333%',
    },
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '48px',
  },
  formContent: {
    flexGrow: 1,
  },
  heading: {
    fontSize: '24px',
    fontWeight: 500,
    color: '#333',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  inputGroup: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '8px 0',
    border: 'none',
    borderBottom: '2px solid #2e3192',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: 'transparent',
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px',
    marginTop: '8px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '16px',
  },
  button: {
    backgroundColor: '#2e3192',
    color: 'white',
    border: 'none',
    padding: '8px 32px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#232578',
    },
  },
  legalSection: {
    marginTop: '64px',
  },
  legalHeading: {
    color: '#2e3192',
    fontWeight: 500,
    marginBottom: '8px',
    fontSize: '16px',
  },
  link: {
    color: '#2e3192',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  footer: {
    marginTop: 'auto',
    paddingTop: '32px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '16px',
  },
  footerLink: {
    color: '#666',
    fontSize: '14px',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  successContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  successCard: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
};

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
}

type BrandDetailProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export default function SodexoLogin(props: BrandDetailProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email === 'myname@sodexo.com' && password === 'b') {
        setIsLoggedIn(true);
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  if (isLoggedIn) {
    return (
      <div style={loginStyles.successContainer as React.CSSProperties}>
        <div style={loginStyles.successCard as React.CSSProperties}>
          <h1 style={{ color: '#2e3192', marginBottom: '20px' }}>Login Successful</h1>
          <p>Welcome to Sodexo!</p>
          <button
            style={loginStyles.button as React.CSSProperties}
            onClick={() => {
              setIsLoggedIn(false);
              setEmail('');
              setPassword('');
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={loginStyles.container as React.CSSProperties}>
      {/* Left side - Background image */}
      <div style={loginStyles.imageContainer as React.CSSProperties}>
        <JssImage
          field={props.fields.Image}
          style={loginStyles.backgroundImage as React.CSSProperties}
        />
      </div>

      {/* Right side - Login form */}
      <div style={loginStyles.formContainer as React.CSSProperties}>
        <div style={loginStyles.logoContainer as React.CSSProperties}>
          <Image src="/sodexo-logo.svg" alt="Sodexo Logo" width={120} height={40} priority />
        </div>

        <div style={loginStyles.formContent as React.CSSProperties}>
          <h1 style={loginStyles.heading as React.CSSProperties}>Sign in</h1>

          <form onSubmit={handleSubmit} style={loginStyles.form as React.CSSProperties}>
            <div style={loginStyles.inputGroup as React.CSSProperties}>
              <input
                type="email"
                placeholder="username@sodexo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={loginStyles.input as React.CSSProperties}
                required
              />
            </div>
            <div style={loginStyles.inputGroup as React.CSSProperties}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  borderBottomColor: '#ccc',
                }}
                required
              />
            </div>
            {error && <div style={loginStyles.errorMessage as React.CSSProperties}>{error}</div>}
            <div style={loginStyles.buttonContainer as React.CSSProperties}>
              <button
                type="submit"
                style={loginStyles.button as React.CSSProperties}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Next'}
              </button>
            </div>
          </form>

          <div style={loginStyles.legalSection as React.CSSProperties}>
            <h2 style={loginStyles.legalHeading as React.CSSProperties}>
              Legal Warning & Support Information
            </h2>
            <Link href="#" style={loginStyles.link as React.CSSProperties}>
              Link to document
            </Link>
          </div>
        </div>

        <div style={loginStyles.footer as React.CSSProperties}>
          <Link href="#" style={loginStyles.footerLink as React.CSSProperties}>
            Terms of use
          </Link>
          <Link href="#" style={loginStyles.footerLink as React.CSSProperties}>
            Privacy & cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
