import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-100">
      <Link href="/" className="hover:underline">Dashboard</Link>
      <Link href="/supply" className="hover:underline">Supply</Link>
      <Link href="/total-supply" className="hover:underline">Total Supply</Link>
      <Link href="/burn" className="hover:underline">Burn</Link>
    </nav>
  );
}