import Image from "next/image";
interface NewPasswordProps {
  setIsCodeValid: (value: boolean) => void;
}

const NewPassword: React.FC<NewPasswordProps> = () => {
  return (
    <div className="form">
      <div className="logo">
        <Image
          src={"/images/logo-green.png"}
          width={180}
          height={130}
          alt="logo"
        />
      </div>
      <h2> كلمة مرور جديدة </h2>
      <div className="w500 inputs">
        <p>
          يجب أن يكون كلمة المرور الجديدة مختلفة عن الكلمات السابقة المستخدمة
        </p>
        <div className="input">
          <span> كلمة المرور </span>
          <input type="password" placeholder="ادخل كلمة المرور الخاصه بك" />
        </div>
        <div className="input">
          <span> تأكيد كلمة المرور </span>
          <input type="password" placeholder="ادخل كلمة المرور الخاصه بك" />
        </div>
        <div className="submitbtn">
          <button type="submit">تغيير كلمة المرور</button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
