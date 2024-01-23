import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import AbilityCard from "./AbilityCard";
import PotionCard from "./PotionCard";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  AbilityCard,
  PotionCard,
};
