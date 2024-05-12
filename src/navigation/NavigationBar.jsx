import "./navigation-bar.css";

import logoSrc from "../assets/logo.png";
import profilePicSrc from "../assets/profile-picture.jpg";
import notificationSrc from "../assets/notification.png";

const NavigationBar = function () {
  return (
    <nav className="navigation-bar">
      <div id="logo">
        <img src={logoSrc} draggable={false} />
        <h2>Shelf Space</h2>
      </div>
      <div id="profile">
        <button>
          <img src={notificationSrc} />
        </button>
        <img src={profilePicSrc} />
        <p>Welcome Back, John!</p>
      </div>
    </nav>
  );
};

export default NavigationBar;
