import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
interface ForgotMailProps {
  setIsCodeSent: (value: boolean) => void;
}

const ForgotMail: React.FC<ForgotMailProps> = ({ setIsCodeSent }) => {
  const lang = useLocale();
  return (
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
      <h2>{lang === "ar" ? "نسيت كلمة المرور" : "Forgot Password"}</h2>
      <div className="w500 inputs">
        <div className="input">
          <span>{lang === "ar" ? "البريد الالكتروني" : "Email"}</span>
          <input
            type="email"
            placeholder={
              lang === "ar"
                ? "ادخل البريد الالكتروني الخاص بك"
                : "Enter your email"
            }
          />
        </div>
        <div className="submitbtn">
          <button
            type="submit"
            onClick={() => {
              setIsCodeSent(true);
            }}
          >
            {lang === "ar" ? "ارسال الكود" : "Send Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotMail;
