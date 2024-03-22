# Spellbreak

Read and understand magic. Undo it. Interrupt, redirect and disperse. Stay on your guard.

[![Canvas of the magical art Spellbreak](@site/static/canvas/Arts/Spellbreak.png)](@site/static/canvas/Arts/Spellbreak.png)

## Unwind

<AbilityCard
speed="action"
title="Unwind"
subtitle="Spellbreak spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature or Object.", "Cost: 3."]}>
Target a creature or object that is affected by a spell that you are aware of. The spell ends.
Affect an unwilling creature by rolling Personal Reality. The creature is aware of which spell you are trying to dispel before it chooses whether to resist or not.
</AbilityCard>

## Antispell

_Prerequisite: Reflexes 4_

<AbilityCard
speed="reaction"
title="Antispell"
subtitle="Spellbreak spell"
parameters={["Speed: Reaction.", "Range: 20 m.", "Target: Creature.", "Cost: 3."]}>
Cast as a reaction when a creature casts a spell (that you are aware of). Roll Personal Reality against the target. If you win, the spell they were casting fails. They still pay its mana cost.
</AbilityCard>

## Counterintelligence

_Prerequisite: Intrigue 4_

<AbilityCard
speed="action"
title="Counterintelligence"
subtitle="Spellbreak spell"
parameters={["Speed: Action.", "Range: 5 m.", "Target: Creatures (Any).", "Cost: 2.", "Concentration."]}>
Affected creatures become aware when they are affected by Information magic. They learn the nature of the spell, the identity of the caster, and the location of the caster.
</AbilityCard>

## Suppression Field

_Prerequisite: Depths 4_

<AbilityCard
speed="action"
title="Suppression Field"
subtitle="Spellbreak spell"
parameters={["Speed: Action.", "Range: Self.", "Area: Sphere (5 m).", "Cost: 5.", "Concentration."]}>
Creatures within the affected area cannot cast spells, or concentrate on spells (except Suppression Field). Spells cast from outside cannot target anything within the area, and their effects cannot extend into or pass through the area. This spell does not affect trace magic at all.
</AbilityCard>

### Permissive Suppression

_Prerequisite: Depths 4, Personal Reality 6_

<AbilityCard
speed="enhancement"
title="Permissive Suppression"
subtitle="Spell enhancement">
When you cast Suppression Field, you may choose one magical Art. Spells of that Art are unaffected by your Suppression Field.
</AbilityCard>

## Start Sequence Interference

_Prerequisite: Depths 6_

<AbilityCard
speed="attack"
title="Start Sequence Interference"
subtitle="Spellbreak spell"
parameters={["Speed: Attack.", "Range: 10 m.", "Target: Creature.", "Cost: 3.", "Concentration."]}>
Any traces the affected creature has (except _Spellcasting_) become inactive until this spell ends. Affect an unwilling creature by rolling Personal Reality.
</AbilityCard>
