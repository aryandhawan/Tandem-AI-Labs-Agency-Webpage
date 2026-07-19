"use client";

import dynamic from "next/dynamic";

export const FeaturesSectionNoSSR = dynamic(
  () => import("./features-section").then((mod) => mod.FeaturesSection),
  { ssr: false }
);
