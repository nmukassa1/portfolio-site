import Link from "next/link";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-10">
      <Link href="/" className="text-sm font-medium tracking-wide">
        NY
      </Link>
      <Link
        href="/contact"
        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
