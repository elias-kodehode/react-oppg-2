import { useState } from "react";
import CookieCanvas from "./CookieCanvas";

export default function CookieClicker() {
  const [cookies, setCookies] = useState(0);
  const [cookieModifier] = useState(2);

    const AddCookie = () => {
        setCookies(x => x + (1 * cookieModifier));
    };
    const OnClick = () => {
        console.log("click");
        AddCookie();
    };


  return (
    <section className="cookie-clicker">
        <CookieCanvas/>
        <img onClick={OnClick} src="cookie-1.png" width={256} height={256}/>
        <p style={{color:"white"}}>{Math.round(cookies)}</p>
    </section>
  );
}