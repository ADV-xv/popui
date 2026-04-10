export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page">
      <div className="title">Account Settings</div>

      <div className="account-box">
        <div style={{ fontWeight: 600 }}>{user?.name}</div>
        <div style={{ color: "#6c757d", fontSize: 14 }}>
          {user?.email}
        </div>
      </div>

      <p style={{ marginTop: 20, fontSize: 14, color: "#6c757d" }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr...
      </p>
    </div>
  );
}