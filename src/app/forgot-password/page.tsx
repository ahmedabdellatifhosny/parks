"use client";
import ForgotCode from "@/components/pages/ForgotCode";
import ForgotMail from "@/components/pages/ForgotMail";
import NewPassword from "@/components/pages/NewPassword";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isCodeValid, setIsCodeValid] = useState<boolean>(false);
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
      {isCodeSent ? (
        isCodeValid ? (
          <NewPassword setIsCodeValid={setIsCodeValid} />
        ) : (
          <ForgotCode
            setIsCodeSent={setIsCodeSent}
            setIsCodeValid={setIsCodeValid}
          />
        )
      ) : (
        <ForgotMail setIsCodeSent={setIsCodeSent} />
      )}
    </div>
  );
}
