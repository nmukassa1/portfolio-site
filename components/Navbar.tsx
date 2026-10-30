import Link from "next/link";
function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      <Link href="/">
        <p>NY</p>
      </Link>

      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
