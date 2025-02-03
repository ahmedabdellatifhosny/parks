import Image from "next/image";
import Link from "next/link";
export default function Apps() {
  return (
    <section className="apps">
      <div className="apps-header">
        <h3 className="text-center">
          تطبيق ترفيهي بارك، استمتع بتجربة فريدة من نوعها كل حدائق العالم بجوالك
        </h3>
        <div className="apps-frame">
      
           <div className="app-image">
            <Image
              src="/images/app/apps.png"
             fill
              alt="app"
            />
           </div>
          <div className="apps-img">
            <ul className=" list-unstyled d-flex justify-content-center align-items-center gap-3">
              <li>
                <p>حمل التطبيق الان </p>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/app/appstore.png"
                    width={150}
                    height={50}
                    alt="appstore"
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/images/app/googleplay.png"
                    width={150}
                    height={50}
                    alt="googleplay"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
