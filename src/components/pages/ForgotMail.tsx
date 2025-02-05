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
          src={"/images/logo-green.png"}
          width={180}
          height={130}
          alt="logo"
        />
      </Link>
      <h2> نسيت كلمة المرور</h2>
      <div className="w500 inputs">
        <div className="input">
          <span>البريد الالكتروني</span>
          <input type="email" placeholder="ادخل البريد الالكتروني الخاص بك" />
        </div>
        <div className="submitbtn">
          <button
            type="submit"
            onClick={() => {
              setIsCodeSent(true);
            }}
          >
            ارسال الكود
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotMail;
