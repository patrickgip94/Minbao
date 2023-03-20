import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div
      className="flex items-center justify-center dark:bg-gray-600 bg-[#d8c4aa] 
      lg:text-lg p-4"
    >
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
