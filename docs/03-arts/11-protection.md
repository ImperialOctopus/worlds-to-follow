# Protection

Dissipate the force of incoming attacks. The only way to avoid harm if you value staying human.

[![Canvas of the magical art Protection](@site/static/canvas/Arts/Protection.png)](@site/static/canvas/Arts/Protection.png)

## Witch Ward

<AbilityCard
speed="action"
title="Witch Ward"
subtitle="Protection spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 4.", "Concentration."]}>
Affected creature adds 2 to rolls it makes on defence.
</AbilityCard>

### Reactive Armour

_Prerequisite: Arcane 4_

<AbilityCard
speed="alternate"
title="Reactive Armour"
subtitle="Alternate spell">
You gain an alternate way of casting Witch Ward, with the following changes:

- Cost: 0.
- Affected creature must pay 1 mana any time it rolls defence; if it can't, this spell ends (it still gains the bonus to that roll).

</AbilityCard>

## Shield

_Prerequisite: Reflexes 4_

<AbilityCard
speed="reaction"
title="Shield"
subtitle="Protection spell"
parameters={["Speed: Reaction.", "Range: Self.", "Target: Creature.", "Cost: X."]}>
Cast as a reaction when you would be hit by an attack. Add X to your result on the roll, potentially causing a hit to miss.
</AbilityCard>

### Active Interception

_Prerequisite: Reflexes 6_

<AbilityCard
speed="reaction"
title="Active Interception"
subtitle="Protection spell"
parameters={["Speed: Reaction.", "Range: 10 m.", "Target: Creature.", "Cost: 4."]}>
Cast as a reaction when an ally within range (not yourself) would be hit by an attack. The attack misses, and you lose concentration on anything you are concentrating on.
</AbilityCard>

### Nine Lives

_Prerequisite: Reflexes 4, Alchemy 6_

<AbilityCard
speed="action"
title="Nine Lives"
subtitle="Protection spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 4.", "Concentration."]}>
When the affected creature would be rendered helpless, it isn't, and this spell ends.
</AbilityCard>

## Starshield

_Prerequisite: Energetics 4_

<AbilityCard
speed="action"
title="Starshield"
subtitle="Protection spell"
parameters={["Speed: Action.", "Range: Self.", "Area: Sphere (2 m).", "Cost: X.", "Concentration."]}>
Create an insubstantial spherical barrier around yourself that moves with you. The barrier is the same shape as this spell's Area's surface. Ranged attacks that would cross the barrier hit it, reducing its durability by the damage they deal. The barrier has X durability (maximum 3). If its durability is reduced to zero, the spell ends.
</AbilityCard>

### Wall of Light

_Prerequisite: Energetics 6_

<AbilityCard
speed="enhancement"
title="Wall of Light"
subtitle="Spell enhancement">
When you cast Starshield, its maximum durability is 5.
</AbilityCard>

### Tactical Cover

_Prerequisite: Energetics 4, Visualisation 4_

<AbilityCard
speed="enhancement"
title="Tactical Cover"
subtitle="Spell enhancement">
When you cast Starshield, you may change its Range to 5 m. If you do, the barrier remains in place and doesn't move with you.
</AbilityCard>

### Supernova

_Prerequisite: Energetics 4, Reflexes 6_

<AbilityCard
speed="enhancement"
title="Supernova"
subtitle="Spell enhancement">
When a creature reduces your Starshield's durability to zero with an attack on their turn, that creature's turn immediately ends.
</AbilityCard>
