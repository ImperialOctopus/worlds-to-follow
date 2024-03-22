# Information

Gain information about your surroundings. Magically enhanced senses. Synthetic senses.

[![Canvas of the magical art Information](@site/static/canvas/Arts/Information.png)](@site/static/canvas/Arts/Information.png)

## Read Record

<AbilityCard
speed="action"
title="Read Record"
subtitle="Information spell"
parameters={["Speed: Action.", "Range: 20 m.", "Target: Creature.", "Cost: 2."]}>
You learn some information about the affected creature. Affect an unwilling creature with Awareness vs. Depths.
You may learn the following information about the affected creature:

- Current Endurance.
- Score in one other skill of your choice.

</AbilityCard>

### Toxicology

_Prerequisite: Medicine 4_

<AbilityCard
speed="enhancement"
title="Toxicology"
subtitle="Spell enhancement">
When you cast Read Record or Identify, you may learn any poisons, diseases, or active potion effects affecting the target.
</AbilityCard>

### Opportunist

_Prerequisite: Medicine 4, Discretion 6_

<AbilityCard
speed="enhancement"
title="Opportunist"
subtitle="Spell enhancement">
When you cast Read Record, you gain an edge on your next roll against the affected creature this turn.
</AbilityCard>

### Witch Sight

_Prerequisite: Presence 8_

<AbilityCard
speed="enhancement"
title="Witch Sight"
subtitle="Spell enhancement">
When you cast Read Record, you may learn the affected creature's:

- Plane of origin.
- True name.

If you know a creature's true name, you can affect it with Read Record without rolling, and can target it with Information spells regardless of range.
</AbilityCard>

## Identify

_Prerequisite: Arcane 2_

<AbilityCard
speed="ritual"
title="Identify"
subtitle="Information spell"
parameters={["Speed: Ritual.", "Range: Touch.", "Target: Object."]}>
You may learn the following information about the affected object:

- Its age and location of creation.
- Its creator (if any).
- Its name (if any).

</AbilityCard>

### Circuit Mapping

_Prerequisite: Arcane 4_

<AbilityCard
speed="enhancement"
title="Circuit Mapping"
subtitle="Spell enhancement">
When you cast Read Record or Identify, you may learn any active traces affecting the target.
</AbilityCard>

### Sensor

_Prerequisite: Arcane 6_

<AbilityCard
speed="action"
title="Sensor"
subtitle="Information spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object.", "Cost: 2.", "Concentration."]}>
The affected object becomes linked to you. You receive visual and auditory information as though you were standing where the object is.
</AbilityCard>

## Active Sonar

_Prerequisite: Visualisation 4_

<AbilityCard
speed="action"
title="Active Sonar"
subtitle="Information spell"
parameters={["Speed: Action.", "Range: Self.", "Area: Sphere (10 m).", "Cost: 1."]}>
You become aware of all objects and creatures within the target area. All creatures within the area also become aware of you.
</AbilityCard>

### Cartographer

_Prerequisite: Visualisation 6_

<AbilityCard
speed="enhancement"
title="Cartographer"
subtitle="Spell enhancement">
When you cast an Information spell, you may change the spell's casting time to Ritual to share the information you gather with your allies (e.g. by magically drawing a map).
</AbilityCard>

### Interference Pattern

_Prerequisite: Visualisation 4, Spirituality 4_

<AbilityCard
speed="enhancement"
title="Interference Pattern"
subtitle="Spell enhancement">
When you cast Active Sonar, you learn whether or not the area contains at least one Outsider.
</AbilityCard>

## Angel Eyes

_Prerequisite: Awareness 4_

<AbilityCard
speed="action"
title="Angel Eyes"
subtitle="Information spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 3.", "Concentration."]}>
Affected creature gains the following:

- You can see in the dark.
- You can see magical traces (as in the Detect Magic ability) to a range of 5 m.
- You can see invisible creatures and objects.

</AbilityCard>

### Foresight

_Prerequisite: Awareness 4, Alchemy 4_

<AbilityCard
speed="action"
title="Foresight"
subtitle="Information spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 2.", "Concentration."]}>
When the affected creature rolls Awareness or Reflexes, their total cannot be less than twice your Awareness.
</AbilityCard>

### Sparrow Soul

_Prerequisite: Awareness 6_

<AbilityCard
speed="ritual"
title="Sparrow Soul"
subtitle="Information spell"
parameters={["Speed: Ritual.", "Range: Self.", "Area: Sphere (X × 2 km).", "Cost: 2 + X."]}>
You gain an aerial view of the affected area, and become aware of the following within the area:

- Geographic features.
- Major settlements.
- Large (>100) groups of creatures.

</AbilityCard>

### Locate Object

_Prerequisite: Awareness 6, Visualisation 6_

<AbilityCard
speed="enhancement"
title="Locate Object"
subtitle="Spell enhancement">
When you cast Sparrow Soul, you can picture an object that you have held before. If it's within the area, you learn its precise location.
</AbilityCard>

### Winged Pursuit

_Prerequisite: Awareness 8_

<AbilityCard
speed="enhancement"
title="Winged Pursuit"
subtitle="Spell enhancement">
When you cast Sparrow Soul, you become aware of all creatures within the area that have a view of the sky. If you have a piece of a creature (e.g. hair), or know its true name, you know its precise location as long as it has a view of the sky (requires concentration).
</AbilityCard>
