import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> The wild Oasis.Welocme to paradise</h1>
      <Link href="/cabins">
        <strong>Explore luxury cabins</strong>
      </Link>
    </div>
  );
}
