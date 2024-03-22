# Life

Pull things back from other places. Build, rebuild. Grow, regrow. Transgress the natural order.

[![Canvas of the magical art Life](@site/static/canvas/Arts/Life.png)](@site/static/canvas/Arts/Life.png)

## Repair

<AbilityCard
speed="action"
title="Repair"
subtitle="Life spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object.", "Cost: 2."]}>
You repair superficial damage to the affected object. This could include sharpening blades, fixing wear and tear to objects, and cleaning clothes. It cannot fix significant structural damage.
</AbilityCard>

### Breakthrough

_Prerequisite: Alchemy 4_

<AbilityCard
speed="alternate"
title="Breakthrough"
subtitle="Alternate spell">
You gain an alternate way of casting Repair, with the following changes:

- Speed: Ritual.
- Target: Creature.

If you affect a creature, you may:

- Repair all of the creature's worn or carried items.
- Remove any poisons from the creature's system.

</AbilityCard>

## Heal

_Prerequisite: Alchemy 4, Medicine 4_

<AbilityCard
speed="action"
title="Heal"
subtitle="Life spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 3."]}>
You give the affected creature a portion of your life energy, healing it. You lose one Endurance, and the affected creature gains the same amount. If this reduction would reduce your Endurance to zero, you die.
</AbilityCard>

### Open Heart

_Prerequisite: Alchemy 4, Medicine 4, Personal Reality 6_

<AbilityCard
speed="enhancement"
title="Open Heart"
subtitle="Spell enhancement">
When you cast a Life spell, its range is increased by 10 m.
</AbilityCard>

### Life Transfer

_Prerequisite: Alchemy 4, Medicine 4, Empathy 4_

<AbilityCard
speed="enhancement"
title="Life Transfer"
subtitle="Spell enhancement">
When you cast Heal, you may choose to reverse the transfer, taking Endurance from the affected creature to increase your own.
</AbilityCard>

### Regenerative Burst

_Prerequisite: Alchemy 4, Medicine 6, Empathy 4_

<AbilityCard
speed="alternate"
title="Regenerative Burst"
subtitle="Alternate spell">
You gain an alternate way of casting Heal: you may choose to lose three Endurance in order to restore one Skill of the target (except Endurance) to its base value. This version of the spell cannot be reversed with Life Transferrence.
</AbilityCard>

### Vital Scream

_Prerequisite: Alchemy 4, Medicine 4, Empathy 6_

<AbilityCard
speed="action"
title="Vital Scream"
subtitle="Life spell"
parameters={["Speed: Action.", "Range: 10 m.", "Target: Creatures (Any)."]}>
All affected creatures regain 1 lost Endurance, and each regain up to a total of 3 points lost from any other Skills. You die.
</AbilityCard>

## Burial Rites

_Prerequisite: Endurance 4_

<AbilityCard
speed="enhancement"
title="Burial Rites"
subtitle="Spell enhancement">
When you cast Repair and target the remains of a creature, you halt decomposition for 24 hours. This can be detected or removed as a trace on the remains, but doesn't count towards trace limits or cost any mana.
</AbilityCard>

### Kintsugi

_Prerequisite: Endurance 4, Medicine 6_

<AbilityCard
speed="enhancement"
title="Kintsugi"
subtitle="Spell enhancement">
When you cast Repair and target the remains of a creature, you can completely heal any damage done to it, including the effects of decomposition. This can return a dead creature to life, but cannot return a missing soul; it will remain unconscious until its soul is returned.
</AbilityCard>

### Clone

_Prerequisite: Endurance 4, Medicine 8_

<AbilityCard
speed="ritual"
title="Clone"
subtitle="Life spell"
parameters={["Speed: Ritual.", "Range: Touch.", "Target: Creature.", "Cost: 12."]}>
You create a duplicate of the affected creature. The duplicate has no equipment, and is created without any scars or missing limbs. The duplicate is soulless; it has no memories or personality, and remains unconscious unless it gains a soul. You can choose for the duplicate to be any age.
</AbilityCard>

### Vessel

_Prerequisite: Endurance 4, Medicine 8, Arcane 8_

<AbilityCard
speed="ritual"
title="Vessel"
subtitle="Life spell"
parameters={["Speed: Ritual.", "Range: Self.", "Cost: 5.", "Concentration."]}>
Your soul leaves your body and moves into an object of your choice that you are holding.
You gain the following benefits:

- You can see and hear from the container, and gain the senses of anyone holding it.
- You can mentally communicate with anyone holding the container (this is affected by your Contact spell modifiers).
- If your body falls unconscious or dies, your soul remains in the container, and you remain conscious. In this state, you cannot use any traces in your body, including _Spellcasting_. You retain your skills and abilities, but cannot use any actions granted by your abilities. If your body is ever sufficiently repaired, you can return to it.
- You do not feel pain or fatigue.

You also gain the following negative effects:

- If the container holding your soul is ever 100 m or more from your body, your body falls unconscious.
- If this spell ends and your body is within range of the container, your soul returns to it. Otherwise, you die.
- If the object is destroyed, you die.

You can adopt any soulless body within 100 m of the container as your own, leaving your original body soulless.
If you trace this spell, it must be traced into the object instead of your body. Spells active on you may be traced into the object instead of your body, and any traces active on the object affect you.
</AbilityCard>

## Puppet

_Prerequisite: Arcane 2_

<AbilityCard
speed="action"
title="Puppet"
subtitle="Life spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object.", "Cost: 3."]}>
Affected object gains some semblance of life during your turn. You may cause it to move up to your Spirituality × 1 m, and operate in any way that a person could operate it (e.g. cause a book to open to any page, cause a drawer to open or close).
You may cast this spell at Attack speed, in which case the object may attack a creature within Touch range of it using your Spirituality vs. Prowess.
</AbilityCard>

### Create Undead

_Prerequisite: Arcane 4_

<AbilityCard
speed="ritual"
title="Create Undead"
subtitle="Life spell"
parameters={["Speed: Ritual.", "Range: Touch.", "Target: Object.", "Cost: 3.", "Concentration."]}>
Target object must be the remains of a dead creature. This spell turns the affected object into an undead creature which remains affected by this spell; when the spell ends, the creature immediately dies.
The created undead can see and hear, but cannot speak. It has half your Medicine (rounded up) in every skill, and retains nothing from when it was alive (e.g. memories, trace).
The created undead obeys your commands. If this spell is trace you lose control of the undead.
</AbilityCard>

### Gift of Servitude

_Prerequisite: Arcane 4, Presence 6_

<AbilityCard
speed="enhancement"
title="Gift of Servitude"
subtitle="Spell enhancement">
When you trace Create Undead into a creature you created with the spell, you can choose for it to remain under your control. You can have a number of creatures under your control in this way equal to half your Presence (rounded up).
</AbilityCard>

### Thrall Rush

_Prerequisite: Arcane 4, Reflexes 6_

<AbilityCard
speed="alternate"
title="Thrall Rush"
subtitle="Alternate spell">
You can choose to cast Create Undead at Action speed. If you do, the creature instead has one-third your Medicine in every skill, rounded up, and an Endurance of one. When it dies, its remains turn to ash which cannot be animated again.
</AbilityCard>

### Recrudescence

_Prerequisite: Arcane 4, Alchemy 4_

<AbilityCard
speed="action"
title="Recrudescence"
subtitle="Life spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Object."]}>
Target the remains of a dead creature. Affected remains are reduced to dust, appearing either on the ground or in a container you are holding. The dust has the consistency of sand, weighs 1/100th the weight of the remains, and is coloured a deep blue.
You may also cast this spell on dust previously created by this spell, causing it to transform back into the original remains.
</AbilityCard>

### Dust to Dust

_Prerequisite: Arcane 4, Alchemy 6_

<AbilityCard
speed="enhancement"
title="Dust to Dust"
subtitle="Spell enhancement">
When you cast Recrudescence, you may target a creature created by Create Undead. If you transform it back, it remains alive (so long as Create Undead is still active).
</AbilityCard>

## Curse

_Prerequisite: Empathy 2_

<AbilityCard
speed="action"
title="Curse"
subtitle="Life spell"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature.", "Cost: 4.", "Concentration."]}>
Affected creature is cursed. Affect an unwilling creature with Empathy vs. Depths. Choose one from the following curses:

- Eyefrost: affected creature cannot see.
- Banshee Air: affected creature cannot hear.
- Chains of Nowhere: affected creature has one less action on each of its turns.

Creatures can only be affected by one curse at a time, regardless of source (oldest takes precedence).
</AbilityCard>

### Arcane Countermeasures

_Prerequisite: Empathy 6_

<AbilityCard
speed="enhancement"
title="Arcane Countermeasures"
subtitle="Spell enhancement">
When you cast Curse, you gain the following extra curse options:

- Vacuum Hold: affected creature cannot speak or cast spells.
- Willow Heart: affected creature cannot concentrate on anything.

</AbilityCard>

### Wither

_Prerequisite: Empathy 2, Medicine 4_

<AbilityCard
speed="attack"
title="Wither"
subtitle="Life spell"
parameters={["Speed: Attack.", "Range: 5 m.", "Cost: 2."]}>
Attack with Medicine vs. Endurance.
</AbilityCard>

### Live and Serve

_Prerequisite: Empathy 2, Medicine 4, Arcane 6_

<AbilityCard
speed="enhancement"
title="Live and Serve"
subtitle="Spell enhancement">
When you hit and kill a helpless creature with a Life attack, you may immediately cast Create Undead on the creature's remains without using an action, regardless of range.
</AbilityCard>

### Proof Against Retribution

_Prerequisite: Empathy 2, Depths 4_

<AbilityCard
speed="enhancement"
title="Proof Against Retribution"
subtitle="Spell enhancement">
Creatures affected by your Life spells cannot attack you.
</AbilityCard>

### Life Mantra

_Prerequisite: Empathy 2, Composure 6_

<AbilityCard
speed="enhancement"
title="Life Mantra"
subtitle="Spell enhancement">
When you cast a Life spell, you may choose to reduce its ongoing cost by 2. If you do, you must make a constant sound (e.g. whispering, chanting) while concentrating that can be heard from 20 m away.
</AbilityCard>
