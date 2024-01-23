# Prowess

Fight, and win.

Run fast. Climb fast. Jump high. Best powerful adversaries in single combat.

Those skilled in Prowess:

- Hit things effectively.
- Run faster.
- Win arm wrestling contests.

## 1: Swordskill

<AbilityCard
speed="attack"
title="Swordskill"
subtitle="Mundane ability"
parameters={["Speed: Attack.", "Range: Touch.", "Target: Creature or Object."]}
image={
<img
src={require("@site/static/img/skill-abilities/prowess-swordskill.jpg").default}
alt="Image alt text"
title="Logo Title Text 1"
/>}>
Attack with Prowess.
</AbilityCard>

## 3: Supremacy

<AbilityCard
speed="enhancement"
title="Supremacy"
subtitle="Enhancement">
When you hit with a melee attack, you may forego damage to either:

<ul>
<li>Reduce their speed by 5 m until the end of their next turn</li>
<li>Cause them to lose one action on their next turn</li>
<li>Push them up to your Prowess × 1 m away from you</li>
</ul>
</AbilityCard>

## 5: Martial Path

:::danger Choose a Path

When you reach 5 Prowess, choose a path:

- Duelist
- Arcaknight

You gain different skill abilities depending on your path.

:::

## Duelist

### 5: Surrender Initiative

<AbilityCard
speed="action"
title="Surrender Initiative"
subtitle="Mundane ability"
parameters={["Speed: Action."]}>
Lose 2 Prowess. Restore 1 lost Endurance.
</AbilityCard>

### 7: Crimson Will

<AbilityCard
speed="reaction"
title="Crimson Will"
subtitle="Mundane ability">
Reaction when you fail a Prowess roll. Gain 1 Prowess.
</AbilityCard>

## Arcaknight

### 5: Spellkiller

<AbilityCard
speed="enhancement"
title="Spellkiller"
subtitle="Enhancement">
When someone rolls Composure to maintain concentration because of damage you caused, they roll vs. your Prowess.
</AbilityCard>

### 7: Trace Scars

<AbilityCard
speed="enhancement"
title="Trace Scars"
subtitle="Enhancement">
You can have one more active Trace. You can defend against attempts to remove your Traces with Prowess.
</AbilityCard>

## 9: Wind-Borne Blade

<AbilityCard
speed="enhancement"
title="Wind-Borne Blade"
subtitle="Enhancement">
You may make up to two attacks per turn. At most one of them can be a spell.
</AbilityCard>
