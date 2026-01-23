'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const router = useRouter();

  // ฟังก์ชันเช็ค authentication
  const checkAuth = () => {
    try {
      if (typeof window === 'undefined') return false;

      const token = sessionStorage.getItem('token');
      if (!token) {
        console.log('No token found, redirecting to login');
        router.push('/Login');
        return false;
      }

      setIsAuthenticated(true);
      return true;
    } catch (err) {
      console.error('Error checking auth:', err);
      router.push('/Login');
      return false;
    }
  };

  // ฟังก์ชันดึงข้อมูล users
  const fetchUsers = async (showLoading = false) => {
    try {
      if (showLoading) setLoading(true);
      setError(null);

      // เช็ค window object
      if (typeof window === 'undefined') {
        console.log('Window is undefined');
        return;
      }

      // เช็ค internet connection
      if (!navigator.onLine) {
        throw new Error('No internet connection');
      }

      const token = sessionStorage.getItem('token');
      if (!token) {
        console.log('No token found during fetch');
        router.push('/Login');
        return;
      }

      console.log('Fetching users from API...');

      // ✅ แก้ไข: เพิ่ม Authorization header
      const response = await fetch('https://backend-theta-henna.vercel.app/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });


      console.log('API Response status:', response.status);

      // ✅ ตรวจสอบ authentication errors
      if (response.status === 401 || response.status === 403) {
        console.log('Authentication failed, clearing session');
        sessionStorage.clear();
        router.push('/Login');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Users data received:', data?.length || 0, 'items');

      if (Array.isArray(data)) {
        setItems(data);
        setLastUpdate(new Date());
      } else if (data && typeof data === 'object' && data.users) {
        setItems(data.users);
        setLastUpdate(new Date());
      } else {
        console.warn('Unexpected data format:', data);
        setItems([]);
        setLastUpdate(new Date());
      }

    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err.message);

      // จัดการ error types
      if (err.name === 'AbortError') {
        setError('Request timeout - server response too slow');
      } else if (err.message.includes('Failed to fetch')) {
        setError('Network error - cannot connect to server');
      } else if (err.message.includes('No internet connection')) {
        setError('No internet connection');
      }

      // ✅ ถ้า error เกี่ยวกับ auth
      if (err.message.includes('401') || err.message.includes('403')) {
        sessionStorage.clear();
        router.push('/Login');
        return;
      }

    } finally {
      if (showLoading) setLoading(false);
    }
  };

  // Effect แรก - ตรวจสอบ auth และโหลดข้อมูลครั้งแรก
  useEffect(() => {
    console.log('Component mounted, checking authentication...');

    if (checkAuth()) {
      console.log('Authentication passed, fetching initial data...');
      fetchUsers(true);
    }
  }, []);

  // Effect ที่สอง - Auto refresh (แยกออกมา)
  useEffect(() => {
    if (!isAuthenticated) return;

    console.log('Setting up auto-refresh...');

    const interval = setInterval(() => {
      console.log('Auto-refresh triggered');

      // เช็คสถานะก่อนรีเฟรช
      if (typeof window !== 'undefined' && navigator.onLine) {
        const token = sessionStorage.getItem('token');
        if (token) {
          fetchUsers(false); // ไม่แสดง loading
        } else {
          console.log('No token in auto-refresh, redirecting');
          clearInterval(interval);
          router.push('/Login');
        }
      } else {
        console.log('Offline or window undefined, skipping refresh');
      }
    }, 5000); // 5 วินาที

    return () => {
      console.log('Clearing auto-refresh interval');
      clearInterval(interval);
    };
  }, [isAuthenticated]);

  // ฟังก์ชันลบ user
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        router.push('/Login');
        return;
      }

      console.log('Deleting user ID:', id);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      // ✅ แก้ไข: เพิ่ม Authorization header
      const response = await fetch(`https://backend-theta-henna.vercel.app/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // ✅ เพิ่มบรรทัดนี้
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // ✅ ตรวจสอบ authentication errors
      if (response.status === 401 || response.status === 403) {
        console.log('Token expired or invalid during delete');
        sessionStorage.clear();
        router.push('/Login');
        return;
      }

      if (!response.ok) {
        throw new Error(`Failed to delete: HTTP ${response.status}`);
      }

      console.log('User deleted successfully');
      alert('User deleted successfully!');

      // รีเฟรชข้อมูลหลังลบ
      setTimeout(() => fetchUsers(false), 1000);

    } catch (err) {
      console.error('Error deleting user:', err);

      if (err.name === 'AbortError') {
        alert('Delete request timeout. Please try again.');
      } else {
        alert(`Failed to delete user: ${err.message}`);
      }
    }
  };

  // แสดง loading screen
  if (loading || !isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffe4f0 0%, #ffd4e8 50%, #ffb8d9 100%)',
        color: '#8b4566'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(255, 105, 180, 0.3)',
          border: '3px solid #ffb3d9',
          borderTop: '6px solid #ff69b4'
        }}>
          <div style={{
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '4px solid #ff69b4',
            borderTop: '4px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '20px'
          }}></div>
          <h2 style={{ color: '#d14d8c', fontWeight: '500', letterSpacing: '1px', fontFamily: 'Georgia, serif' }}>🌸 Loading Users Management...</h2>
          <p style={{ color: '#b85c8a' }}>Please wait while we authenticate and load data</p>
          {error && (
            <div style={{
              color: '#d14d8c',
              marginTop: '15px',
              padding: '10px',
              background: '#fff0f7',
              borderRadius: '12px',
              border: '2px solid #ffb3d9'
            }}>
              Error: {error}
              <br />
              <button
                onClick={() => fetchUsers(true)}
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #ff69b4 0%, #000000ff 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 15px rgba(255, 105, 180, 0.4)'
                }}
              >
                🌸 Retry
              </button>
            </div>
          )}
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        body {
          background: linear-gradient(135deg, #ffe4f0 0%, #ffd4e8 50%, #ffb8d9 100%);
          min-height: 100vh;
          color: #8b4566;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        
        .container {
          background: transparent;
          border-radius: 20px;
          padding: 25px;
          margin: 0 auto;
          max-width: 100%;
          overflow-x: auto;
        }
        
        .card {
          background: rgba(255, 255, 255, 0.95);
          border: 3px solid #ffb3d9;
          border-top: 6px solid #ff69b4;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(255, 105, 180, 0.3);
          overflow: hidden;
        }
        
        .card-header {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%) !important;
          color: #fff;
          font-size: 2rem;
          font-weight: 500;
          text-align: center;
          padding: 25px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          border-bottom: 3px solid #ff1493;
          letter-spacing: 2px;
        }
        
        .card-header::before {
          content: '🌸 ';
        }
        
        .card-header::after {
          content: ' 🌸';
        }
        
        .card-body {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
        }
        
        .top-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 15px;
          background: linear-gradient(135deg, #fff0f7 0%, #ffe4f0 100%);
          border-radius: 15px;
          border: 2px solid #ffb3d9;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .user-info {
          color: #d14d8c;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .btn-logout, .btn-refresh {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 5px;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
          letter-spacing: 0.5px;
        }
        
        .btn-logout:hover, .btn-refresh:hover {
          background: linear-gradient(135deg, #ff1493 0%, #c71585 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 105, 180, 0.5);
        }
        
        .table-container {
          overflow-x: auto;
          border-radius: 15px;
          border: 2px solid #ffb3d9;
        }
        
        .table {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
          min-width: 1200px;
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        
        .table thead th {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          color: #fff;
          border: none;
          padding: 18px 12px;
          font-weight: 600;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-size: 1rem;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 0.5px;
        }
        
        .table tbody tr {
          background: rgba(255, 255, 255, 0.95);
          transition: all 0.3s ease;
          border-bottom: 1px solid #ffb3d9;
        }
        
        .table tbody tr:hover {
          background: linear-gradient(135deg, #fff0f7 0%, #ffe4f0 100%);
          transform: scale(1.002);
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.2);
        }
        
        .table tbody td {
          color: #8b4566;
          border: none;
          padding: 15px 12px;
          vertical-align: middle;
          font-weight: 500;
          font-size: 0.9rem;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .table-striped tbody tr:nth-child(odd) {
          background: #fff0f7;
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
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          margin: 2px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 0.3px;
        }
        
        .btn-warning {
          background: linear-gradient(135deg, #ffb3d9 0%, #ff69b4 100%);
          color: #fff;
          box-shadow: 0 3px 10px rgba(255, 105, 180, 0.3);
        }
        
        .btn-warning:hover {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          box-shadow: 0 5px 15px rgba(255, 105, 180, 0.5);
          transform: translateY(-2px);
          color: #fff;
          text-decoration: none;
        }
        
        .btn-danger {
          background: linear-gradient(135deg, #f70f83ff 0%, #cf1313ff 100%);
          color: #fff;
          box-shadow: 0 3px 10px rgba(255, 105, 180, 0.3);
        }
        
        .btn-danger:hover {
          background: linear-gradient(135deg, #ca076fff 0%, #eb0e9aff 50%, #00f7ffff 100%);
          box-shadow: 0 5px 15px rgba(255, 105, 180, 0.5);
          transform: translateY(-2px);
        }
        
        .text-center {
          text-align: center;
          font-weight: 700;
        }
        
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #b85c8a;
        }
        
        .empty-state h3 {
          color: #d14d8c;
          margin-bottom: 10px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          padding: 15px;
          background: linear-gradient(135deg, #fff0f7 0%, #ffe4f0 100%);
          borderRadius: 15px;
          fontSize: 0.85rem;
          color: #b85c8a;
          flex-wrap: wrap;
          gap: 10px;
          border: 2px solid #ffb3d9;
        }
        
        .error-message {
          background: #fff0f7;
          border: 2px solid #ffb3d9;
          color: #d14d8c;
          padding: 15px;
          border-radius: 15px;
          margin: 15px 0;
          text-align: center;
        }
        
        /* ปรับแต่ง Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #fff0f7;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          border-radius: 10px;
          border: 2px solid #fff0f7;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #ff1493 0%, #c71585 100%);
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
          
          .top-actions {
            flex-direction: column;
            text-align: center;
          }
          
          .status-bar {
            flex-direction: column;
            text-align: center;
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
            <div className="top-actions">
              <div className="user-info">
                Welcome! ({items.length} users found)
              </div>
              <div>
                <button
                  className="btn-refresh"
                  onClick={() => fetchUsers(true)}
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {error && (
              <div className="error-message">
                ⚠️ {error}
                <br />
                <button
                  className="btn btn-warning"
                  onClick={() => fetchUsers(true)}
                  style={{ marginTop: '10px' }}
                >
                  🔄 Try Again
                </button>
              </div>
            )}

            {items.length === 0 && !error ? (
              <div className="empty-state">
                <h3>No Users Found</h3>
                <p>There are no users in the system yet, or data is still loading.</p>
                <button
                  className="btn btn-warning"
                  onClick={() => fetchUsers(true)}
                  style={{ marginTop: '10px' }}
                >
                  🔄 Load Data
                </button>
              </div>
            ) : (
              <div className="table-container">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="col-id text-center">Number</th>
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
                    {items.map((item, index) => (
                      <tr key={item.id || index}>
                        <td className="text-center">{item.id || index + 1}</td>
                        <td title={item.firstname || '-'}>{item.firstname || '-'}</td>
                        <td title={item.fullname || '-'}>{item.fullname || '-'}</td>
                        <td title={item.lastname || '-'}>{item.lastname || '-'}</td>
                        <td title={item.username || '-'}>{item.username || '-'}</td>
                        <td title={item.password || '-'}>
                          {item.password ? '••••••••••••' : '-'}
                        </td>
                        <td title={item.address || '-'}>{item.address || '-'}</td>
                        <td className="text-center">{item.sex || '-'}</td>
                        <td>{item.birthday || '-'}</td>
                        <td>
                          <Link href={`/admin/users/edit/${item.id || index}`} className="btn btn-warning">
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => handleDelete(item.id || index)}
                          >
                            <i className="fa fa-trash"></i> Del
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Status Bar */}
            <div className="status-bar">
              <span>
                Connection: {typeof navigator !== 'undefined' && navigator.onLine ? '🟢 Online' : '🔴 Offline'}
              </span>
              <span>
                Last updated: {lastUpdate ? lastUpdate.toLocaleTimeString() : 'Never'}
              </span>
              <span>
                Auto-refresh: ⚡ Every 5 seconds
              </span>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}