import './Textsection.css';

function Textsection() {
  return (
    <div className="text-section-container">
      <div className="text-section">
        <h2>E-Learning</h2>
        <h1>Dream big<br />Do right.</h1>
        <p>Slite helps remote teams share ideas, save knowledge, <br /> and work together anytime, any place.</p>
        <div className="buttons">
          <button className="get-started-btn">Get Started Now</button>
          <img  style={{cursor:'pointer'}}src="Group 233.svg" alt="" />
          <button className="watch-platform-btn">Watch our platform!</button>
        </div>
      </div>
      <div>
        <img src="Dashboard.svg" alt="" className="mockup-img" />
      </div>
    </div>
  );
}

export default Textsection;
