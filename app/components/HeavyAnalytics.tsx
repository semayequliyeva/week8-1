
"use client";

const monthlyData = [
  { month: "Jan", visitors: 42, conversions: 18 },
  { month: "Feb", visitors: 58, conversions: 25 },
  { month: "Mar", visitors: 49, conversions: 21 },
  { month: "Apr", visitors: 72, conversions: 34 },
  { month: "May", visitors: 64, conversions: 29 },
  { month: "Jun", visitors: 88, conversions: 42 },
  { month: "Jul", visitors: 76, conversions: 37 },
  { month: "Aug", visitors: 95, conversions: 48 },
];

export default function HeavyAnalytics() {
  return (
    <section className="panel" style={{ marginTop: 22 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 24,
        }}
      >
        <div>
          <p className="eyebrow">DETAILED ANALYTICS</p>
          <h3>Traffic performance</h3>
          <p style={{ color: "#8b8da5", marginTop: 8 }}>
            Monthly visitors and conversion activity
          </p>
        </div>

        <span className="date-button">Last 8 months</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <div className="stat-card">
          <div className="stat-card-top">Total visitors</div>
          <strong className="stat-value">544K</strong>
          <p className="stat-change"><span>+18.4%</span></p>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">Total conversions</div>
          <strong className="stat-value">254K</strong>
          <p className="stat-change"><span>+11.2%</span></p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 20 }}>
        {monthlyData.map((item) => (
          <div key={item.month}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                fontSize: 13,
              }}
            >
              <span>{item.month}</span>
              <span style={{ color: "#8b8da5" }}>
                {item.visitors}K visitors
              </span>
            </div>

            <div
              style={{
                height: 10,
                background: "#eeeef5",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${item.visitors}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #7667f5, #a49aff)",
                  borderRadius: 10,
                }}
              />
            </div>

            <p
              style={{
                fontSize: 12,
                color: "#8b8da5",
                marginTop: 6,
              }}
            >
              {item.conversions}K conversions
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
