import React, { useState, useEffect } from "react";
import '../App.css';

function Signup({ onSignupComplete }: { onSignupComplete: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
 


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();  //form submit edildiğinde çağrılır

   if(!username || !password) {
      alert("Kullanıcı adı ve şifre boş bırakılamaz.");
      return;
    }

      //localstorage e kaydet
    localStorage.setItem("user", JSON.stringify({ username, password }));

    alert("Kayıt başarılı!");
    // Kayıt işlemi tamamlandığında onSignupComplete fonksiyonunu çağır
    onSignupComplete();  // App'e haber ver: signup bitti → login ekranına geç
  };

   
  return (
    <div className="container">
      <h1 className="form-title">Kayıt Ol</h1>
      <form className="form-box" onSubmit={handleSignup}>
        <div className="form-group">
          <label className="form-label">Kullanıcı Adı</label>
          <input
            type="text"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Kullanıcı adınızı girin"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Şifre</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi girin"
          />
        </div>
        <button type="submit" className="form-button signup-button">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default Signup;