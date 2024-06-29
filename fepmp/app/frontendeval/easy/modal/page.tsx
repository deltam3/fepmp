import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-4">
        <p>모달 페이지</p>
        <Link href="?modal=true">
          <button type="button" className="bg-blue-500 text-white p-2">
            모달 열기
          </button>
        </Link>
      </div>
    </>
  );
}
