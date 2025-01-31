import Image from "next/image";

export default function Platform() {
  return (
    <section className="platform text-center ">
      <div className="abs-img">
        <Image src="/images/pappers/papper.png" fill alt="logo" />
      </div>
      <h2>
        أول وأكبر منصة إلكترونية تجمع جميع الحدائق العامة الخضراء في دولتك
        والعالم
      </h2>
      <p>اكثر من 16614 حديقة </p>
    </section>
  );
}
