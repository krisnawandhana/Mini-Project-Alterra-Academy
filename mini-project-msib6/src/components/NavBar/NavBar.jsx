import React from "react";

const navbarLists = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "News",
    url: "/MoreNews",
  },
  {
    id: 3,
    name: "Merch",
    url: "/MoreMerch",
  },
  {
    id: 4,
    name: "Gallery",
    url: "/MoreGallery",
  },
  {
    id: 5,
    name: "Letter",
    url: "/confession",
  },
  {
    id: 6,
    name: "Profile",
    url: "/profile",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8">
          {navbarLists.map((navbarList) => {
            return (
              <div className="flex col-span-2 text-rose-300 items-center" key={navbarList.id}>
                <a href={navbarList.url}>
                  <div className="flex items-center hover:text-rose-400 p-2">
                    <p className="font-semibold tracking-[4px]">
                      0{navbarList.id}.
                    </p>
                    <p className="flex flex-col uppercase font-semibold tracking-[3px]">
                        {navbarList.name}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;