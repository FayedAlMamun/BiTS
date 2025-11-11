// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../../../../../public/images/logo/logo.svg";
// interface HeaderProps {}
// const Logo: React.FC<HeaderProps> = () => {
//   return (
//     <Link href="/">
//       <Image
//         src={logo}
//         alt="logo"
//         style={{ width: "auto", height: "auto" }}
//         quality={100}
//         priority={true}
//         className="dark:hidden"
//       />
//       <Image
//         src="/images/logo/DarkModeLogo.svg"
//         alt="logo"
//         width={160}
//         height={50}
//         style={{ width: "auto", height: "auto" }}
//         quality={100}
//         className="dark:block hidden"
//       />
//     </Link>
//   );
// };

// export default Logo;
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../../public/images/logo/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        style={{ width: "auto", height: "auto" }}
        quality={100}
        priority={true}
        className="dark:hidden"
      />
      <Image
        src="/images/logo/DarkModeLogo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="dark:block hidden"
      />
    </Link>
  );
};

export default Logo;
