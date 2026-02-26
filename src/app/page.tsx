import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Image
    className="dark:invert"
    src="/dummy.svg"
    alt=""
    width={100}
    height={20}
    priority
    />
  </div>;
  );
}
