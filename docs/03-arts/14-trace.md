# Trace

The foundation of modern magic. Burn magic into wood, stone, and flesh.

## Trace

<AbilityCard
speed="ritual"
title="Trace"
subtitle="Trace spell"
parameters={["Speed: Ritual.", "Range: Touch.", "Target: Creature or Object.", "Cost: 2."]}>
Choose one Concentration spell currently affecting the affected creature or object. The spell's cost must be equal to or less than your Expression. That spell becomes a _trace_, persisting without concentration. It keeps all the spell modifiers and skill ability effects that it had when first cast. Traced spells do not cost mana the same way concentration spells do; see the Guide for trace cost rules.

Anything about the spell that could be changed by the caster while concentrating must be pre-programmed when you cast this (e.g. the appearance of an illusion, or the size of a fire). The decision-making of the trace can be as complex as you can define, and may use any audio or visual information available to the traced object. If you trace a creature, any information about the creature (including its thoughts) may be used. You may also specify conditions under which the spell ends.

You cannot add a new trace to something which already has its maximum; one must be removed first. See the Guide for advice on how many _traces_ different objects can hold.

After this spell adds a trace to a creature, that creature is rendered helpless until it next rests. While helpless in this way, it cannot gain more traces from this spell.
</AbilityCard>

### Superconductor Conversion

_Prerequisite: Arcane 4_

<AbilityCard
speed="enhancement"
title="Superconductor Conversion"
subtitle="Spell enhancement">
When you cast Trace, the traced spell's cost is reduced by two. If it affects a creature, the creature's Endurance is reduced by one while it has that trace.
</AbilityCard>

### Area Warding

_Prerequisite: Visualisation 4_

<AbilityCard
speed="enhancement"
title="Area Warding"
subtitle="Spell enhancement">
When you cast a spell of any Art with a target of Object, you can target a 1 m square region of wall, floor, or ceiling. Each such section counts separately for _tracing_, and each can hold one trace, regardless of its material.
</AbilityCard>

### Inorganic Optimisations

_Prerequisite: Visualisation 4, Arcane 6_

<AbilityCard
speed="enhancement"
title="Inorganic Optimisations"
subtitle="Spell enhancement">
When you cast Trace and affect an object, the traced spell's cost is reduced by an additional two.
</AbilityCard>

## Low Runes

<AbilityCard
speed="action"
title="Low Runes"
subtitle="Trace spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object.", "Concentration."]}>
You enhance an object with some simple effects. Affected object gains any of the following:

- Heat or cool itself (from -30 to +100 degrees K relative to its surroundings).
- Shine coloured light for up to 10 m.
- Produce a single sound of your choice, up to a short phrase of words.

</AbilityCard>

### Psi-Blade

_Prerequisite: Expression 4_

<AbilityCard
speed="action"
title="Psi-Blade"
subtitle="Trace spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object.", "Cost: 4.", "Concentration."]}>
Choose a skill: Composure, Reason, Presence, or Performance. Attacks made using the affected object as a weapon can use the chosen skill for offence.
</AbilityCard>

### Imbue

_Prerequisite: Expression 6_

<AbilityCard
speed="action"
title="Imbue"
subtitle="Trace spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object or Creature.", "Cost: X.", "Concentration."]}>
As part of casting this spell, choose a non-concentration spell you can cast with a speed of Action (specifying any targets and effects of the spell), that costs X or less. When this spell ends, the imbued spell is immediately cast, originating from the affected object or creature. It affects any specified targets that are still valid (i.e. within range).
</AbilityCard>

### Limited Spellcasting

_Prerequisite: Expression 6_

<AbilityCard
speed="action"
title="Limited Spellcasting"
subtitle="Trace spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: X.", "Concentration."]}>
As part of casting this spell, choose another non-concentration spell you can cast with a speed of Action or Attack that costs X or less. The affected creature gains the ability to cast that spell, using either an action or attack action (depending on the speed of the spell), and using your skills and spell modifiers, without paying mana (if that spell has a variable cost, it equals this spell's X).
</AbilityCard>

### Unlimited Spellcasting

_Prerequisite: Expression 6, Arcane 8_

<AbilityCard
speed="action"
title="Unlimited Spellcasting"
subtitle="Trace spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 5.", "Concentration."]}>
Affected creature gains the ability to cast spells. It must gain magical Arts separately (i.e. from its level in Arcane).
If this spell is _traced_, it produces the _Spellcasting_ trace that all player characters start with. It costs zero, and cannot be removed or suppressed by most means.
</AbilityCard>

## Trace-Out

_Prerequisite: Personal Reality 6_

<AbilityCard
speed="action"
title="Trace-Out"
subtitle="Trace spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature or Object.", "Cost: 4."]}>
You remove a single _trace_ of your choice from the affected creature or object. Affect an unwilling creature with Personal Reality. You must be aware of a _trace_ to attempt to remove it; you can sense it with Information magic, or simply see it used. This spell cannot remove the _Spellcasting_ trace from an unwilling creature.
</AbilityCard>
