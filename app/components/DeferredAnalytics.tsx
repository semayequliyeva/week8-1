
"use client";

import React, { lazy, Suspense, useState } from "react";

const loadHeavyAnalytics = () => import("./HeavyAnalytics");

const HeavyAnalytics = lazy(loadHeavyAnalytics);

class AnalyticsErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="panel" style={{ marginTop: 22 }}>
          <h3>Analytics could not be loaded</h3>
          <p style={{ color: "#8b8da5", margin: "12px 0 18px" }}>
            A loading error occurred. Please try again.
          </p>
          <button
            type="button"
            className="date-button"
            onClick={this.handleRetry}
          >
            Retry loading
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default function DeferredAnalytics() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {!isVisible && (
        <section className="panel" style={{ marginTop: 22 }}>
          <h3>Detailed analytics</h3>
          <p style={{ color: "#8b8da5", margin: "10px 0 18px" }}>
            Load the detailed report when you need it.
          </p>

          <button
            type="button"
            className="date-button"
            onMouseEnter={() => {
              void loadHeavyAnalytics().catch(() => {});
            }}
            onFocus={() => {
              void loadHeavyAnalytics().catch(() => {});
            }}
            onClick={() => setIsVisible(true)}
          >
            Load analytics
          </button>
        </section>
      )}

      {isVisible && (
        <AnalyticsErrorBoundary>
          <Suspense
            fallback={
              <section
                className="panel"
                style={{ marginTop: 22 }}
                aria-live="polite"
              >
                <h3>Loading analytics...</h3>
                <p style={{ color: "#8b8da5", marginTop: 10 }}>
                  Please wait while the report loads.
                </p>
              </section>
            }
          >
            <HeavyAnalytics />
          </Suspense>
        </AnalyticsErrorBoundary>
      )}
    </div>
  );
}
