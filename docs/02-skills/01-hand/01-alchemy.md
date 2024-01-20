# Alchemy

The art of potion making, and taking.

Create and utilise powerful potions. Understand drugs and their effects. Use magic that alters the human body.

Those skilled in Alchemy:

- Create more powerful potions.
- Get more use out of potions they take.
- Understand medicinal plants and drugs.
- Know about magic which alters the body.

You can drink potions you're holding as an action on your turn, gaining their effects. You can have the effect of only one potion active on yourself at once; if you drink another potion, you lose the first. You also lose any active potions when you rest.
Potion effects ONLY affect you while active, and always disappear when they end. For example, a potion which said "Your Endurance is increased by 1" would raise your Endurance by 1 (effectively healing you), but would reduce your Endurance by 1 again when it wore off. If you only had 1 Endurance left, this would leave you helpless.
See the [Potions](/potions) section of the guide to see a list of potions you can create.

## Skill Abilities

### 1: Administer

<AbilityCard
speed="action"
title="Administer"
subtitle="Mundane ability"
parameters={["Speed: Action.", "Range: Touch.", "Target: Creature."]}>
Affect an unwilling creature with Alchemy vs. Endurance. Choose a potion in your possession to administer; the potion is consumed, even if it fails to affect the creature. The creature gains the potion's effect. If the creature already has its maximum number of active potions, it loses one of its choice before gaining the new effect (if the creature was unwilling, it instead loses the oldest).
</AbilityCard>

### 3: Potion Engineering

<AbilityCard
speed="ritual"
title="Potion Engineering"
subtitle="Mundane ability"
parameters={["Speed: Ritual."]}>
Create a potion from your known potion formulae.
</AbilityCard>

### 5: Field Alchemist

<AbilityCard
speed="enhancement"
title="Field Alchemist"
subtitle="Enhancement">
Your maximum number of active potions increases to two. While you have at least two active potion effects, add 1 to all of your Hand skill rolls.
</AbilityCard>

### 7: Nigredo

<AbilityCard
speed="action"
title="Nigredo"
subtitle="Mundane ability"
parameters={["Speed: Action.", "Concentration"]}>
You cannot cast spells. Any numerals listed in your potion effects are doubled. When this ends, lose one random active potion.
</AbilityCard>

### 9: Golden Blood

<AbilityCard
speed="enhancement"
title="Field Alchemist"
subtitle="Enhancement">
Your maximum number of active potions increases to four. When you rest, you may choose one active potion to keep.
</AbilityCard>
