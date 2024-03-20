# Macrokinetics

Manipulate motion on an object scale. Pick things up. Put things down. Move things around. Fly.

## Telekinetic Grasp

<AbilityCard
speed="action"
title="Telekinetic Grasp"
subtitle="Macrokinetics spell"
parameters={["Speed: Action.", "Range: 20 m.", "Target: Creature or Object.", "Cost: X.", "Concentration."]}>
You magically lift and move the affected creature or object. The target can have a maximum mass of 10^X kg. Affect an unwilling creature by rolling Reason vs. its Prowess. If you affect an unwilling creature, this spell ends on it at the end of its turn.

The affected creature or object does not fall because of gravity, and affected creatures' speeds cannot exceed zero. You can impart some movement to the affected creature or object in a direction of your choice. In initiative, you can move it up to 10 m per round (on your turn). Outside of initiative, it can move up to X × 1 m per second.
</AbilityCard>

### Launch

_Prerequisite: Energetics 2_

<AbilityCard
speed="attack"
title="Launch"
subtitle="Macrokinetics spell"
parameters={["Speed: Attack.", "Range: 15 m.", "Cost: 1."]}>
You accelerate a nearby loose object towards the target as a weapon. Attack with Reason vs. Reflexes.
</AbilityCard>

## Force Augment

_Prerequisite: Alchemy 4_

<AbilityCard
speed="action"
title="Force Augment"
subtitle="Macrokinetics spell"
parameters={["Speed: Action.", "Range: 5 m.", "Target: Creature.", "Cost: 3.", "Concentration."]}>
Affected creature's speed is doubled.
</AbilityCard>

### Suspension

_Prerequisite: Alchemy 4, Visualisation 4_

<AbilityCard
speed="enhancement"
title="Suspension"
subtitle="Spell enhancement">
When you cast Force Augment, affected creature can climb. When the creature falls, it can choose to slow its fall to as slow at 5 m/round, and does not take fall damage.
</AbilityCard>

### Gravity Magic

_Prerequisite: Alchemy 4, Visualisation 6_

<AbilityCard
speed="enhancement"
title="Gravity Magic"
subtitle="Spell enhancement">
When you cast Force Augment, affected creature can fly.
</AbilityCard>

### Slow Fall

_Prerequisite: Alchemy 4, Reflexes 4_

<AbilityCard
speed="reaction"
title="Slow Fall"
subtitle="Macrokinetics spell"
parameters={["Speed: Reaction.", "Range: 10 m.", "Target: Creatures (Any).", "Cost: 2.", "Concentration."]}>
Cast as a reaction when a creature within range falls. Affected creatures safely slow to 5 m/round and remain at that speed. If they would hit the ground, they land gently and suffer no negative effects.
</AbilityCard>

## Telekinetics

_Prerequisite: Arcane 4_

<AbilityCard
speed="action"
title="Telekinetics"
subtitle="Macrokinetics spell"
parameters={["Speed: Action.", "Range: 3 m.", "Target: Creature.", "Cost: 4.", "Concentration."]}>
Affected creature gains the ability to cast Telekinetic Grasp, with the following changes:

- It has speed: Attack.
- It uses your Reason.
- X is always 2.
- It doesn't pay mana for the spell.
- It can concentrate on Telekinetic Grasp in addition to its normal concentration; if this spell ends, its Telekinetic Grasp also immediately ends.

</AbilityCard>

### Share Enhancement

_Prerequisite: Arcane 6_

<AbilityCard
speed="enhancement"
title="Share Enhancement"
subtitle="Spell enhancement">
When you cast a Macrokinetics spell that grants affected creatures the ability to cast a spell, your enhancements that would apply to your casting of that spell apply to the affected creature too.
</AbilityCard>

### Divert Rivers

_Prerequisite: Arcane 4, Reason 4_

<AbilityCard
speed="enhancement"
title="Divert Rivers"
subtitle="Spell enhancement">
When you cast Telekinetic Grasp, you may pick up and move volumes of liquid. You control the shape and movement of the liquid as it moves, and can suspend it in midair. The mass of the volume moved must not exceed the spell's limit.
</AbilityCard>

### Move Mountains

_Prerequisite: Arcane 4, Reason 6_

<AbilityCard
speed="enhancement"
title="Move Mountains"
subtitle="Spell enhancement">
When you cast Telekinetic Grasp, you may control a smaller section of a large object. The section you control is limited by the spell's mass limit, rather than the entire object. If the section can be removed easily (e.g. a volume of earth) you pick it up as normal. Objects with more integrity (e.g. a stone brick wall) may require a Reason roll.

Suggested roll difficulties:

- Destroying a glass window: 9.
- Pulling a door off its hinges: 12.
- Smashing a hole through a brick wall: 15.

</AbilityCard>
