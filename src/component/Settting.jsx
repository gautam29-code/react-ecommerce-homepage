import { useState } from "react";

function Setting() {
  const [user, setUser] = useState({
    name: "Gautam Panda",
    email: "gautampanda291@gmail.com",
    password: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(true);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Settings Saved ✅");
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">⚙️ Settings</h2>

      <div className="row">
        {/* 🔹 PROFILE SETTINGS */}
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h5>Profile Settings</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Enter Name"
              />

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Enter Email"
              />

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="New Password"
              />

              <button className="btn btn-primary w-100">
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* 🔹 APP SETTINGS */}
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h5>App Settings</h5>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="form-check-label">
                Dark Mode
              </label>
            </div>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={notification}
                onChange={() => setNotification(!notification)}
              />
              <label className="form-check-label">
                Enable Notifications
              </label>
            </div>

            <button
              className="btn btn-success w-100"
              onClick={() => alert("Preferences Updated ✅")}
            >
              Update Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;