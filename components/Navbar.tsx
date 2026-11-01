import Link from "next/link";
function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between bg-[#F2F0EF] px-6 md:px-10">
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
