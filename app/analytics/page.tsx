
import Link from "next/link";

const metrics = [
  {
    title: "Active Users",
    value: "8,642",
    change: "+12.5%",
  },
  {
    title: "Engagement Rate",
    value: "68.4%",
    change: "+5.8%",
  },
  {
    title: "Conversion Rate",
    value: "4.82%",
    change: "+2.4%",
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "+8.1%",
  },
];

export default function AnalyticsPage() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <Link href="/" className="brand">
          <span className="brand-icon">P</span>
          <span>
            Pulse<span className="brand-light">Analytics</span>
          </span>
        </Link>

        <p className="nav-label">WORKSPACE</p>

        <nav className="navigation">
          <Link className="nav-item" href="/">
            ▦ <span>Overview</span>
          </Link>

          <Link className="nav-item" href="/reports">
            ▤ <span>Reports</span>
          </Link>

          <Link className="nav-item active" href="/analytics">
            ◫ <span>Analytics</span>
          </Link>
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
            <p className="eyebrow">WORKSPACE / ANALYTICS</p>
            <h1>Analytics</h1>
          </div>

          <Link href="/" className="date-button">
            ← Back to dashboard
          </Link>
        </header>

        <section className="welcome">
          <div>
            <h2>Website analytics</h2>
            <p>
              Understand visitor behavior and track your website performance.
            </p>
          </div>
        </section>

        <section className="stats-grid" aria-label="Analytics metrics">
          {metrics.map((metric) => (
            <article className="stat-card" key={metric.title}>
              <div className="stat-card-top">
                <span>{metric.title}</span>
              </div>

              <strong className="stat-value">{metric.value}</strong>

              <p className="stat-change">
                <span>{metric.change}</span>{" "}
                <span className="muted">vs. last week</span>
              </p>
            </article>
          ))}
        </section>

        <section className="panel" style={{ marginTop: 24 }}>
          <div className="panel-heading">
            <div>
              <h3>Performance insights</h3>
              <p>Key observations from your website activity</p>
            </div>

            <span className="panel-tag">OVERVIEW</span>
          </div>

          <div className="source-list">
            <div className="source-row">
              <span>Visitor growth</span>
              <strong>+12.5%</strong>
            </div>
            <div className="source-bar">
              <span className="purple-bar" />
            </div>

            <div className="source-row">
              <span>User engagement</span>
              <strong>68.4%</strong>
            </div>
            <div className="source-bar">
              <span className="blue-bar" />
            </div>

            <div className="source-row">
              <span>Returning visitors</span>
              <strong>42.6%</strong>
            </div>
            <div className="source-bar">
              <span className="green-bar" />
            </div>
          </div>

          <p style={{ marginTop: 24, color: "#8b8da5", lineHeight: 1.7 }}>
            These values are sample data for the Pulse Analytics demonstration
            project.
          </p>
        </section>

        <footer className="footer">
          <span>Pulse Analytics © 2026</span>
          <span>Analytics · Demo data</span>
        </footer>
      </section>
    </main>
  );
}
