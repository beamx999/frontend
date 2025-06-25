import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 shadow-md " >
      <div className="flex justify-between items-center w-full">
  {/* โลโก้ชิดซ้ายแบบมี padding ซ้าย */}
  <div className="text-xl font-bold pl-4">MyWebsite</div>

  {/* เมนูฝั่งขวาเว้นขอบขวา */}
  <div className="space-x-4 mr-30">
    <Link href="/" className="hover:text-gray-200">หน้าแรก</Link>
    <Link href="/about" className="hover:text-gray-200">เกี่ยวกับ</Link>
    <Link href="/contact" className="hover:text-gray-200">ติดต่อ</Link>
  </div>
</div>
    </nav>
  )
}
