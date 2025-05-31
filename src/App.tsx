//import { useState } from 'react'
import './App.css';


import React , {useEffect, useState} from 'react';

//import './App.css'
// Bu şekilde import ediyorsunuz
//import Header from './components/Header'

// Eğer Tailwind CSS'i kullanmak istiyorsanız, Tailwind CSS'i projenize eklemeniz gerekiyor.
// Tailwind CSS'i eklemek için terminalde şu komutu çalıştırabilirsiniz:
// npm install -D tailwindcss postcss autoprefixer
// Ardından Tailwind CSS'i yapılandırmak için şu komutu çalıştırın:
// npx tailwindcss init -p
// Bu, projenizde tailwind.config.js ve postcss.config.js dosyalarını oluşturacaktır.
// Son olarak, Tailwind CSS'i projenize dahil etmek için src/index.css dosyasına şu satırları ekleyin:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// Bu adımları tamamladıktan sonra Tailwind CSS'i kullanmaya başlayabilirsiniz.
//import './index.css' // Tailwind CSS'i dahil etmek için gerekli

import Login from './components/Login'; // Login bileşenini import ettik
import Signup from './components/Signup'; // Signup bileşenini import ettik





function App() {
  const [isSignedUp, setIsSignedUp] = useState(!!localStorage.getItem('user'));
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  return (
    <div>
      {!isSignedUp ? (
        <Signup onSignupComplete={() => setIsSignedUp(true)} />
      ) : !loggedInUser ? (
        <Login onLoginSuccess={(username) => setLoggedInUser(username)} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
          <h1 className="success">Hoş geldin, {loggedInUser}!</h1>
          <button
            className="logout-btn"
            onClick={() => {
              setLoggedInUser(null);
            }}
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
}

export default App;