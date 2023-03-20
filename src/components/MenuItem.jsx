import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-yellow-300">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-md text-semibold">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
