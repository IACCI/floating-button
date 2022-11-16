import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [toggleClass, setToggleClass] = useState(false);

  const handleForm = (e) => {
    setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };

  const hareketlibutton = () => {
    if (form.password.length < 6) {
      setToggleClass((prevState) => !prevState);
    }
  };

  return (
    <section className="form-section">
      <h1 className="heading">Hareketli Buton 🔴</h1>
      <form
        autoComplete="false"
        action="https://formspree.io/f/meqvlgqr"
        method="POST"
      >
        <div className="input-block">
          <label className="label">
            E-mail <span className="requiredLabel">*</span>
          </label>
          <input
            className={`input ${
              form.email.length < 14 ? "wrong-input" : "correct-input"
            }`}
            type="email"
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="example@example.com"
            tabIndex={-1}
            required
          />
        </div>
        <div>
          {form.email.length < 14 ? (
            <p className="warning-message">Mail adresinizi giriniz !</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-block">
          <label className="label">
            Parola <span className="requiredLabel">*</span>
          </label>
          <input
            className={`input ${
              form.password.length < 6 ? "wrong-input" : "correct-input"
            }`}
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
            minLength="6"
            placeholder="******"
            tabIndex={-1}
            required
          />
        </div>
        <div>
          {form.password.length < 6 ? (
            <p className="warning-message">
              Şifre 5 karakterden uzun olmalıdır !
            </p>
          ) : (
            " "
          )}
        </div>
        <div className={`submit-button-wrapper ${toggleClass ? "float" : " "}`}>
          <button
            tabIndex={-1}
            className={`submit-button ${
              form.password.length > 5 ? "button-success" : ""
            }`}
            onMouseEnter={hareketlibutton}
          >
            KAYIT OL
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
