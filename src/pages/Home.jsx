export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "24px" }}>
      <h2>Account Settings</h2>

      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
}