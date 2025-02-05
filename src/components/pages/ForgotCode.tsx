"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface ForgotCodeProps {
  setIsCodeSent: (value: boolean) => void;
  setIsCodeValid: (value: boolean) => void;
}

const ForgotCode: React.FC<ForgotCodeProps> = ({ setIsCodeValid }) => {
  const lang = useLocale();
  const [code, setCode] = useState<string[]>(Array(4).fill(""));

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
    if (value !== "") {
      e.target.classList.add("isFilled");
    } else {
      e.target.classList.remove("isFilled");
    }
  };

  const handleInputPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData
      .getData("text")
      .split("")
      .slice(0, code.length);
    setCode(pastedData);
    e.preventDefault();
  };

  const handleInputKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="form">
      <Link href={`/${lang}`}  className="logo">
        <Image
          src={"/images/logo-green.png"}
          width={180}
          height={130}
          alt="logo"
        />
      </Link>
      <h2>التحقق من الكود</h2>
      <div className="w500 inputs">
        <div className="otpInputs">
          {code.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              onPaste={handleInputPaste}
              onKeyDown={(e) => handleInputKeyDown(index, e)}
              maxLength={1}
              autoFocus={index === 0}
              inputMode="numeric"
              className="otp-input"
            />
          ))}
        </div>
        <div className="submitbtn">
          <button
            type="submit"
            onClick={() => {
              setIsCodeValid(true);
            }}
          >
            تأكيد
          </button>
        </div>
        <div className="forgotAndRem jcc">
          <div className="forgot resend">
            <button>
              لم تستلم الكود؟ <span>أعد إرساله</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotCode;
