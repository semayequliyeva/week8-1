
import Link from "next/link";

const reports = [
  {
    title: "Monthly Visitors",
    value: "98,420",
    change: "+14.2%",
  },
  {
    title: "Conversions",
    value: "3,284",
    change: "+8.7%",
  },
  {
    title: "Returning Users",
    value: "42.6%",
    change: "+5.1%",
  },
  {
    title: "Report Status",
    value: "Ready",
    change: "Updated today",
  },
];

export default function ReportsPage() {
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

          <Link className="nav-item active" href="/reports">
            ▤ <span>Reports</span>
          </Link>

          <Link className="nav-item" href="/analytics">
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
            <p className="eyebrow">WORKSPACE / REPORTS</p>
            <h1>Reports</h1>
          </div>

          <Link href="/" className="date-button">
            ← Back to dashboard
          </Link>
        </header>

        <section className="welcome">
          <div>
            <h2>Performance reports</h2>
            <p>
              Review your website performance and discover useful insights.
            </p>
          </div>

          <span className="panel-tag">MONTHLY SUMMARY</span>
        </section>

        <section className="stats-grid" aria-label="Report statistics">
          {reports.map((report) => (
            <article className="stat-card" key={report.title}>
              <div className="stat-card-top">
                <span>{report.title}</span>
              </div>

              <strong className="stat-value">{report.value}</strong>

              <p className="stat-change">
                <span>{report.change}</span>
              </p>
            </article>
          ))}
        </section>

        <section className="panel" style={{ marginTop: 24 }}>
          <div className="panel-heading">
            <div>
              <h3>Monthly summary</h3>
              <p>Website activity and performance overview</p>
            </div>

            <span className="panel-tag">THIS MONTH</span>
          </div>

          <div className="source-list">
            <div className="source-row">
              <span>Visitor growth</span>
              <strong>78%</strong>
            </div>
            <div className="source-bar">
              <span className="purple-bar" />
            </div>

            <div className="source-row">
              <span>Conversion performance</span>
              <strong>64%</strong>
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
            The report contains sample data for this demonstration project.
            These metrics are not connected to a live analytics service.
          </p>
        </section>

        <footer className="footer">
          <span>Pulse Analytics © 2026</span>
          <span>Reports · Demo data</span>
        </footer>
      </section>
    </main>
  );
}
