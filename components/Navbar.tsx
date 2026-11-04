import Link from "next/link";
function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between bg-[#F2F0EF] px-6 md:px-10">
      <Link href="/" className="text-lg font-medium tracking-wide">
        NY
      </Link>
      <Link
        href="https://www.linkedin.com/in/nyah-mukassa-096059446/"
        target="_blank"
        className="text-lg font-medium tracking-wide"
      >
        LinkedIn
      </Link>
      <Link href="/contact" className="text-lg font-medium tracking-wide">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
