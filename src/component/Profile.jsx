import { useState } from "react";

function Profile() {
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    name: "Gautam Panda",
    email: "gautampanda291@gmail.com",
    role: "Full Stack Developer",
    phone: "+91 7606935231"
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSave(e) {
    e.preventDefault();
    setEdit(false);
    alert("Profile Updated ✅");
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">👤 My Profile</h2>

      <div className="card shadow-sm p-4 text-center">
        {/* 🖼️ Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          style={{ width: "120px", borderRadius: "50%" }}
          className="mx-auto mb-3"
        />

        {/* 🔹 VIEW MODE */}
        {!edit ? (
          <>
            <h4>{user.name}</h4>
            <p className="text-muted">{user.role}</p>
            <p>📧 {user.email}</p>
            <p>📱 {user.phone}</p>

            <button
              className="btn btn-primary mt-2"
              onClick={() => setEdit(true)}
            >
              Edit Profile
            </button>
          </>
        ) : (
          /* 🔹 EDIT MODE */
          <form onSubmit={handleSave}>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control mb-2"
            />

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control mb-2"
            />

            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleChange}
              className="form-control mb-2"
            />

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="form-control mb-2"
            />

            <button className="btn btn-success w-100">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;

