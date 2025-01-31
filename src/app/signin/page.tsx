import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="authContainer">
      <div className="image">
        <Image
          src={"/images/auth/login.png"}
          width={800}
          height={1000}
          alt="auth"
        />
      </div>
      <div className="form">
        <div className="logo">
          <Image
            src={"/images/logo-green.png"}
            width={180}
            height={130}
            alt="logo"
          />
        </div>
        <h2>تسجيل دخول</h2>
        <div className="w500 inputs">
          <div className="input">
            <span>الاسم</span>
            <input type="text" placeholder="ادخل اسمك بالكامل" />
          </div>
          <div className="input">
            <span>كلمة المرور</span>
            <input type="password" placeholder="ادخل كلمة المرور الخاصه بك " />
          </div>
          <div className="forgotAndRem">
            <div className="rem">
              <input type="checkbox" id="rem" />
              <label htmlFor="rem">تذكر كلمة المرور</label>
            </div>
            <div className="forgot">
              <Link href={"/forgot-password"}>هل نسيت كلمة المرور؟</Link>
            </div>
          </div>
          <div className="submitbtn">
            <button type="submit">تسجيل دخول</button>
          </div>
          <div className="or">
            <span> أو</span>
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
            ليس لديك حساب؟ <Link href="/signup"> أنشئ حساب</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
