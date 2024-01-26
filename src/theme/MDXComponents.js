// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import AbilityCard from "./AbilityCard";
import MetamagicCard from "./MetamagicCard";
import PotionCard from "./PotionCard";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  AbilityCard,
  MetamagicCard,
  PotionCard,
};
