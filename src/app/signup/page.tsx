import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="authContainer">
      <div className="form">
        <div className="logo">
          <Image src={"/images/logo.png"} width={180} height={130} alt="logo" />
        </div>
        <h2> إنشاء حساب</h2>
        <div className="w500 inputs">
          <div className="input">
            <span>الاسم</span>
            <input type="text" placeholder="ادخل اسمك بالكامل" />
          </div>
          <div className="input">
            <span>البريد الالكتروني</span>
            <input type="email" placeholder="ادخل البريد الالكتروني" />
          </div>
          <div className="input">
            <span>كلمة المرور</span>
            <input type="password" placeholder="ادخل كلمة المرور الخاصه بك " />
          </div>
          <div className="forgotAndRem">
            <div className="rem">
              <input type="checkbox" id="rem" defaultChecked={true} />
              <label htmlFor="rem">أوافق علي جميع الشروط والأحكام </label>
            </div>
          </div>
          <div className="submitbtn">
            <button type="submit"> إنشاء حساب</button>
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
            هل لديك حساب؟ <Link href="/signin"> تسجيل الدخول</Link>
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
