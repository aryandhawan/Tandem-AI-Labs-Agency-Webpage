"use client";

import dynamic from "next/dynamic";

export const MetricsSectionNoSSR = dynamic(
  () => import("./metrics-section").then((mod) => mod.MetricsSection),
  { ssr: false }
);
