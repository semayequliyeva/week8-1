
import DeferredAnalytics from "./components/DeferredAnalytics";

const stats = [
  {
    title: "Total Visitors",
    value: "24,680",
    change: "+12.8%",
    icon: "↗",
  },
  {
    title: "Page Views",
    value: "86,420",
    change: "+8.2%",
    icon: "◉",
  },
  {
    title: "Bounce Rate",
    value: "32.4%",
    change: "-4.6%",
    icon: "↘",
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "+6.3%",
    icon: "◷",
  },
];

export default function Home() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">P</span>
          <span>
            Pulse<span className="brand-light">Analytics</span>
          </span>
        </div>

        <p className="nav-label">WORKSPACE</p>

        <nav className="navigation">
          <a className="nav-item active" href="/">
            ▦ <span>Overview</span>
          </a>
          <a className="nav-item" href="/reports">
            ▤ <span>Reports</span>
          </a>
          <a className="nav-item" href="/analytics">
            ◫ <span>Analytics</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">JD</div>
          <div>
            <strong>Jordan Davis</strong>
            <p>Administrator</p>
          </div>
        </div>
      </aside>

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">WORKSPACE / OVERVIEW</p>
            <h1>Dashboard</h1>
          </div>

          <div className="topbar-actions">
            <span className="status-dot" />
            <span className="live-label">Live data</span>
            <div className="top-avatar">JD</div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <p className="eyebrow">WEDNESDAY, OCTOBER 28</p>
            <h2>Welcome back, Jordan 👋</h2>
            <p>
              Here&apos;s what&apos;s happening with your website today.
            </p>
          </div>

          <button className="date-button" type="button">
            ◷ Last 7 days⌄
          </button>
        </section>

        <section className="stats-grid" aria-label="Website statistics">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.title}>
              <div className="stat-card-top">
                <span>{stat.title}</span>
                <span className="stat-icon">{stat.icon}</span>
              </div>

              <strong className="stat-value">{stat.value}</strong>

              <p className="stat-change">
                <span>{stat.change}</span>{" "}
                <span className="muted">vs. last week</span>
              </p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel">
            <div className="panel-heading">
              <div>
                <h3>Traffic overview</h3>
                <p>Visitor activity over the last 7 days</p>
              </div>

              <span className="panel-tag">THIS WEEK</span>
            </div>

            <div className="chart-placeholder">
              <div className="chart-y-labels">
                <span>10k</span>
                <span>7.5k</span>
                <span>5k</span>
                <span>2.5k</span>
                <span>0</span>
              </div>

              <div className="chart-area">
                <div className="chart-grid-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 600 180"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Illustrative weekly visitor trend"
                >
                  <defs>
                    <linearGradient
                      id="trafficFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#7167f8"
                        stopOpacity=".25"
                      />
                      <stop
                        offset="100%"
                        stopColor="#7167f8"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 145 C35 130 45 100 85 115 S140 145 175 90 S230 110 265 75 S325 100 355 55 S410 90 445 48 S500 65 535 25 S570 45 600 12 L600 180 L0 180 Z"
                    fill="url(#trafficFill)"
                  />

                  <path
                    d="M0 145 C35 130 45 100 85 115 S140 145 175 90 S230 110 265 75 S325 100 355 55 S410 90 445 48 S500 65 535 25 S570 45 600 12"
                    fill="none"
                    stroke="#7167f8"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div className="chart-x-labels">
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                </div>
              </div>
            </div>
          </article>

          <article className="panel source-panel">
            <div className="panel-heading">
              <div>
                <h3>Traffic sources</h3>
                <p>Where visitors come from</p>
              </div>
            </div>

            <div className="source-list">
              <div className="source-row">
                <span className="source-dot purple" />
                <span>Organic Search</span>
                <strong>48%</strong>
              </div>
              <div className="source-bar">
                <span className="purple-bar" />
              </div>

              <div className="source-row">
                <span className="source-dot blue" />
                <span>Direct</span>
                <strong>26%</strong>
              </div>
              <div className="source-bar">
                <span className="blue-bar" />
              </div>

              <div className="source-row">
                <span className="source-dot green" />
                <span>Social Media</span>
                <strong>17%</strong>
              </div>
              <div className="source-bar">
                <span className="green-bar" />
              </div>

              <div className="source-row">
                <span className="source-dot orange" />
                <span>Referral</span>
                <strong>9%</strong>
              </div>
              <div className="source-bar">
                <span className="orange-bar" />
              </div>
            </div>
          </article>
        </section>

        <section className="bottom-panel panel">
          <div>
            <h3>Explore your data</h3>
            <p>Get a deeper look at your website performance.</p>
          </div>

          <div className="quick-links">
            <a href="/reports">
              View reports <span>→</span>
            </a>
            <a href="/analytics">
              Open analytics <span>→</span>
            </a>
          </div>
        </section>

        <DeferredAnalytics />

        <footer className="footer">
          <span>Pulse Analytics © 2026</span>
          <span>Performance dashboard · Demo data</span>
        </footer>
      </section>
    </main>
  );
}
