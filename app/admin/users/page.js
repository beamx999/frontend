'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // <-- เพิ่ม state loading
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
      return;
    }

    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setLoading(false); // <-- โหลดเสร็จแล้ว
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
 
    getUsers()
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
   // ถ้า loading ให้ return null หรือข้อความ loading
 if (loading) {
  return <div className='text-center'><h1>Loading...</h1></div>; // หรือ return null เพื่อไม่ให้ render อะไร
}

  return (
    <>
      <style jsx>{`
        body {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1b2d 50%, #1a1a1a 100%);
          min-height: 100vh;
          color: #ffffff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .container {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.2);
          padding: 25px;
          margin: 0 auto;
          max-width: 100%;
          overflow-x: auto;
        }
        
        .card {
          background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
          border: 2px solid rgba(220, 38, 38, 0.4);
          border-radius: 15px;
          box-shadow: 
            0 4px 25px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(220, 38, 38, 0.2);
          overflow: hidden;
        }
        
        .card-header {
          background: linear-gradient(90deg, #dc2626, #991b1b, #7f1d1d);
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: bold;
          text-align: center;
          padding: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          border-bottom: 3px solid rgba(220, 38, 38, 0.6);
          position: relative;
        }
        
        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .card-body {
          background: rgba(20, 20, 20, 0.95);
          padding: 25px;
        }
        
        .table-container {
          overflow-x: auto;
          border-radius: 10px;
          box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.4);
        }
        
        .table {
          background: rgba(35, 35, 35, 0.9);
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
          min-width: 1200px;
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        
        .table thead th {
          background: linear-gradient(135deg, #7f1d1d, #991b1b, #dc2626);
          color: #ffffff;
          border: none;
          padding: 18px 12px;
          font-weight: 700;
          text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
          position: relative;
          font-size: 1rem;
          white-space: nowrap;
          text-align: center;
        }
        
        .table thead th::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #dc2626, #fca5a5, #dc2626);
          opacity: 0.8;
        }
        
        .table tbody tr {
          background: linear-gradient(180deg, rgba(45, 45, 45, 0.9), rgba(35, 35, 35, 0.95));
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(220, 38, 38, 0.2);
        }
        
        .table tbody tr:hover {
          background: linear-gradient(180deg, rgba(127, 29, 29, 0.4), rgba(153, 27, 27, 0.3));
          transform: scale(1.005);
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.3);
        }
        
        .table tbody td {
          color:rgb(0, 0, 0);
          border: none;
          padding: 15px 12px;
          vertical-align: middle;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
          font-weight: 500;
          font-size: 0.9rem;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .table-striped tbody tr:nth-child(odd) {
          background: linear-gradient(180deg, rgba(50, 50, 50, 0.7), rgba(40, 40, 40, 0.8));
        }
        
        /* กำหนดความกว้างของแต่ละคอลัมน์ */
        .col-id { width: 60px; min-width: 60px; }
        .col-name { width: 120px; min-width: 120px; }
        .col-username { width: 110px; min-width: 110px; }
        .col-password { width: 200px; min-width: 200px; }
        .col-address { width: 150px; min-width: 150px; }
        .col-sex { width: 70px; min-width: 70px; }
        .col-birthday { width: 120px; min-width: 120px; }
        .col-action { width: 90px; min-width: 90px; }
        
        .btn {
          border: none;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
          font-size: 0.85rem;
          margin: 2px;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .btn:hover::before {
          left: 100%;
        }
        
        .btn-warning {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }
        
        .btn-warning:hover {
          background: linear-gradient(135deg, #d97706, #b45309);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
          transform: translateY(-2px);
        }
        
        .btn-danger {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: white;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
        }
        
        .btn-danger:hover {
          background: linear-gradient(135deg, #991b1b, #7f1d1d);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.6);
          transform: translateY(-2px);
        }
        
        .text-center {
          text-align: center;
          font-weight: 700;
        }
        
        /* ปรับแต่ง Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 30, 30, 0.8);
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #dc2626, #991b1b);
          border-radius: 6px;
          border: 2px solid rgba(30, 30, 30, 0.8);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #991b1b, #7f1d1d);
        }
        
        /* เพิ่ม glow effects */
        .card {
          position: relative;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(45deg, #dc2626, transparent, #dc2626, transparent, #dc2626);
          border-radius: 18px;
          z-index: -1;
          opacity: 0.6;
          filter: blur(2px);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }
          
          .table {
            font-size: 0.8rem;
          }
          
          .btn {
            padding: 8px 12px;
            font-size: 0.75rem;
          }
        }
      `}</style>
      
      <br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            Users Management System
          </div>
          <div className="card-body">
            <div className="table-container">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className="col-id text-center">#</th>
                    <th className="col-name">Firstname</th>
                    <th className="col-name">Fullname</th>
                    <th className="col-name">Lastname</th>
                    <th className="col-username">Username</th>
                    <th className="col-password">Password</th>
                    <th className="col-address">Address</th>
                    <th className="col-sex">Sex</th>
                    <th className="col-birthday">Birthday</th>
                    <th className="col-action">Edit</th>
                    <th className="col-action">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td title={item.firstname}>{item.firstname}</td>
                      <td title={item.fullname}>{item.fullname}</td>
                      <td title={item.lastname}>{item.lastname}</td>
                      <td title={item.username}>{item.username}</td>
                      <td title={item.password}>
                        {item.password ? '••••••••••••' : '-'}
                      </td>
                      <td title={item.address}>{item.address}</td>
                      <td className="text-center">{item.sex}</td>
                      <td>{item.birthday}</td>
                      <td>
                        <Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button 
                          className="btn btn-danger" 
                          type="button" 
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash"></i> Del
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}