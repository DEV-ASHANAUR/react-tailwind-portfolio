import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}>
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            A<span className="text-cyan-600">le</span>x
          </h4>
        </div>
        {/* menu start */}
        <div className={`${sticky ? "md:bg-white/0 bg-white" : "bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className="flex items-center gap-1 text-lg py-2">
            {
              menuLinks.map((menu, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        {/* menu end */}
        {/* toggle bar start */}
        <div onClick={() => { setOpen(!open) }} className={`${open ? 'text-gray-900' : 'text-gray-100'} text-3xl md:hidden z-[999] m-5`}>
          <ion-icon name="menu"></ion-icon>
        </div>
        {/* toggle bar end */}
        {/* mobile menu start */}
        <div className={`md:hidden h-screen w-2/3 text-gray-900 font-medium duration-300 absolute top-0 ${open?"right-0":"right-[-100%]"} bg-white`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {
              menuLinks.map((menu, i) => (
                <li key={i} onClick={()=>{setOpen(!open)}} className="px-6 hover:text-cyan-600">
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        {/* mobile menu end */}
      </div>
    </nav>
  );
};

export default Navbar;
