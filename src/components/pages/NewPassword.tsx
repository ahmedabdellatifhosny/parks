import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
interface NewPasswordProps {
  setIsCodeValid: (value: boolean) => void;
}

const NewPassword: React.FC<NewPasswordProps> = () => {
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
      <h2>{lang === "ar" ? "كلمة مرور جديدة" : "New Password"}</h2>
      <div className="w500 inputs">
        <p>
          {lang === "ar"
            ? "يجب أن يكون كلمة المرور الجديدة مختلفة عن الكلمات السابقة المستخدمة"
            : "The new password must be different from previously used passwords."}
        </p>
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
        <div className="input">
          <span>
            {lang === "ar" ? "تأكيد كلمة المرور" : "Confirm Password"}
          </span>
          <input
            type="password"
            placeholder={
              lang === "ar"
                ? "ادخل كلمة المرور الخاصه بك"
                : "Confirm your password"
            }
          />
        </div>
        <div className="submitbtn">
          <button type="submit">
            {lang === "ar" ? "تغيير كلمة المرور" : "Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
