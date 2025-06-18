import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-purple-700 text-white py-6 shadow-md">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Mr. Thanakit Supanya</h1>
          <p className="text-sm mt-2 text-gray-200">ยินดีต้อนรับสู่เว็บไซต์ของฉัน</p>
        </div>
      </header>

      <main className="p-6">
        <p>นี่คือเนื้อหาหลักของเว็บไซต์</p>
      </main>
    </>
  );
}

