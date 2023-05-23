import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo_black.png";

export const Nav = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src={logo} alt="logo" width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
};
// export const Nav = () => {
//   return (
//     <header>
//       <div>
//         <Image src={logo} alt="logo" width={50} height={50} />
//         <nav>
//           <ul>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/events">Events</Link>
//             </li>
//             <li className="font-semibold text-base">
//               <Link href="/about-us">About us</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {/* <p className="w-1/2 text-4xl uppercase">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p> */}
//     </header>
//   );
// };
