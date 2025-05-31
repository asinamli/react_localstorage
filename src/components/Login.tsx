//localStorage’daki kayıtla karşılaştırır.

import React, {useState, useEffect} from 'react';
import '../App.css';


// inputlardan gelen değeri tutmak için useState kullanıyoruz
//Form submit işlemini yakala (onSubmit)
// localStorage’a yaz ve oku

// Giriş yapma işlemi için bir fonksiyon tanımlıyoruz
function Login({ onLoginSuccess }: { onLoginSuccess: (username: string) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
 // Formun varsayılan submit davranışını engelle
    // Burada giriş işlemini gerçekleştirebilirsiniz
    // Örneğin, kullanıcı adı ve şifreyi kontrol edebilir veya API çağrısı yapabilirsiniz
    
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      alert('Hiç kayıtlı kullanıcı yok. Önce kayıt olun.');
      return;
    }

    const { username: savedUsername, password: savedPassword } = JSON.parse(savedUser);

    if (username === savedUsername && password === savedPassword) {
      alert('Giriş başarılı!');
      onLoginSuccess(username);
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  };

 
  return (
    <div className="container">
      <h1 className="form-title">Giriş Yap</h1>
      <form className="form-box" onSubmit={handleLogin}>
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
        <button type="submit" className="form-button login-button">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;