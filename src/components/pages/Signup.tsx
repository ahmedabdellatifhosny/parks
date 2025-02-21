"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

function Signup() {
  const lang = useLocale();

  return (
    <div className="authContainer">
      <div className="form">
        <Link href={`/${lang}`} className="logo">
          <Image
            src={
              lang === "ar"
                ? "/images/logo-green.png"
                : "/images/logo-green-en.png"
            }
            width={180}
            height={130}
            alt="logo"
          />
        </Link>
        <h2>{lang === "ar" ? "إنشاء حساب" : "Sign Up"}</h2>
        <div className="w500 inputs">
          <div className="input">
            <span>{lang === "ar" ? "الاسم" : "Name"}</span>
            <input
              type="text"
              placeholder={
                lang === "ar" ? "ادخل اسمك بالكامل" : "Enter your full name"
              }
            />
          </div>
          <div className="input">
            <span>{lang === "ar" ? "البريد الالكتروني" : "Email"}</span>
            <input
              type="email"
              placeholder={
                lang === "ar" ? "ادخل البريد الالكتروني" : "Enter your email"
              }
            />
          </div>
          <div className="input">
            <span>{lang === "ar" ? "كلمة المرور" : "Password"}</span>
            <input
              type="password"
              placeholder={
                lang === "ar"
                  ? "ادخل كلمة المرور الخاصه بك"
                  : "Enter your password"
              }
            />
          </div>
          <div className="forgotAndRem">
            <div className="rem">
              <input type="checkbox" id="rem" defaultChecked={true} />
              <label htmlFor="rem">
                {lang === "ar"
                  ? "أوافق علي جميع الشروط والأحكام"
                  : "I agree to all terms and conditions"}
              </label>
            </div>
          </div>
          <div className="submitbtn">
            <button type="submit">
              {lang === "ar" ? "إنشاء حساب" : "Sign Up"}
            </button>
          </div>
          <div className="or">
            <span>{lang === "ar" ? "أو" : "Or"}</span>
          </div>
          <div className="logWith">
            <button className="icon">
              <Image
                src="/images/icons/ic_twotone-apple.svg"
                alt="Apple"
                width={26}
                height={26}
              />
            </button>
            <button className="icon">
              <Image
                src="/images/icons/ic_sharp-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </button>
            <button className="icon">
              <Image
                src="/images/icons/ic_google.svg"
                alt="Google"
                width={30}
                height={30}
              />
            </button>
          </div>
          <div className="do">
            {lang === "ar" ? "هل لديك حساب؟" : "Already have an account?"}{" "}
            <Link href={`/${lang}/signin`}>
              {lang === "ar" ? "تسجيل الدخول" : "Login"}
            </Link>
          </div>
        </div>
      </div>
      <div className="image">
        <Image
          src={"/images/auth/signup.png"}
          width={800}
          height={1000}
          alt="auth"
        />
      </div>
    </div>
  );
}

export default Signup;
