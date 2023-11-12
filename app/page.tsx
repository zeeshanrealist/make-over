import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-2 p-24">
      <h1>Make over app</h1>
      <Link href="/make-up-artists" className="text-cyan-700 hover:underline">
        Make Up Artists
      </Link>
    </main>
  );
}
