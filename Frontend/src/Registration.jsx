import React from "react";
import s from './Registration.module.css';

function RegistrationForm() {
        return (
            <div className={s.registrationFormContainer}>
                <div className={s.form}>
                    <div className={s.imgContent}>
                        <img className={s.registerImg} src={"./Register.png"} alt="Register"/>
                        <div className={s.socialLinks}>
                            <span className={s.connectText}>Присоеденяйтесь к нам:</span>
                            <ul className={s.socialMedia}>
                                <li>
                                    <a href ="#"><i className='bx bxl-instagram-alt'></i></a>
                                    <a href ="#"><i className='bx bxl-telegram'></i></a>
                                    <a href ="#"><i className='bx bxl-vk'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.registerForm}>
                        <h4 className={s.submitText}>Регистрация</h4>
                        <form action="">
                            <div className={s.inputBox}>
                                <input type="text" className={s.inputText} id="firstNameInput" required/>
                                <label htmlFor="firstNameInput">Имя</label>
                            </div>
                            <div className={s.inputBox}>
                                <input type="text" className={s.inputText} id="lastNameInput" required/>
                                <label htmlFor="lastNameInput">Фамилия</label>
                            </div>
                            <div className={s.inputBox}>
                                <input type="email" className={s.inputText} id="emailInput" required/>
                                <label htmlFor="emailInput">Почта</label>
                            </div>
                            <div className={s.inputBox}>
                                <input type="tel" className={s.inputText} id="phoneInput" required/>
                                <label htmlFor="phoneInput">Телефон</label>
                            </div>
                            <input type="submit" className={s.submitBtn} value="Зарегестрироваться"/>
                        </form>
                    </div>
                </div>
            </div>
        );
}

export default RegistrationForm;