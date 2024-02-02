# Spells and Traces

## Arcane Arts

You learn one arcane Art when you reach 1, 3, 5, 7, and 9 in Arcane. Some skill abilities might also give you extra Arts; these don't count against your normal limit. If you already know the Art you would gain, gain a different extra Art instead.

Each Art contains at least one spell that you automatically gain when you learn the Art. They also contain more spells, and spell enhancements (upgrades to your spells), gated behind skill prerequisites. If you have at least the specified level in every prerequisite skill for a spell or enhancement (in an Art that you know), you gain that spell or enhancement. Skill prerequisites refer to your base score in a skill (before any temporary increases or decreases).

### Using Spell Enhancements

When you cast a spell, you may choose to apply any or all spell enhancements you know that apply to it. You choose when you cast the spell, and can choose different enhancements whenever you cast it. These can dramatically change what your spells are capable of.

## Spell Mechanics

### Affecting Things

When you cast a spell, it affects certain things (e.g. creatures, objects, or an area of space). Spells can't cause negative effects to creatures that they don't affect (and unwilling creatures will always be able to roll to avoid being affected by spells).

### Range

Range describes how far away from you the spell's targets can be.

Spells with a Range of Self can target only you. They are not affected by spell enhancements that would increase their Range. They have an Origin: Self.

Spells with a range of Touch can only affect targets adjacent to you, and require physical contact (they don't require you to use your hands, but do require you to actually touch the target). Touch spells can be thought of as "0 m"; they are affected by enhancements that add range. If their range is increased above zero, they are no longer Touch range.

### Area

Some spells affect an Area, instead of individual targets. Specify an Origin for the Area (along with an orientation, if relevant), and then choose targets for the spell from those entirely within the space described (see the list below).

- If a spell doesn't specify an Area, it has Area: None. Choose targets from within the spell's range; the spell affects each target separately.
- Spells with an Area can only affect things matching their Target (e.g. creatures, objects) within the space described by that Area.
- Only targets entirely within the spell's Area can be affected by it.

Area shapes extend as follows:

- Sphere Areas comprise a sphere centred on its Origin, specifying its radius.
- Cylinder Areas comprise a cylinder centred on its Origin (perpendicular to the ground), specifying its radius. It extends down to the ground, and upwards indefinitely.
- Line Areas comprise a line starting at its Origin, specifying its length. They can affect any target that the line intersects.
- Cube Areas comprise a cube with one corner at its Origin, specifying the length of its edges.

#### Origin

Areas have an Origin: the point in space where they starts from. Area spells might originate from a Creature or Object; if they do, the Origin (and Area) move with that creature or object. If the Origin is a Point, it doesn't move.

- If a spell has Range: Self, its Origin is Creature (so it moves with you).
- If a spell doesn't specify a type of Origin (and it isn't Range: Self), it's Point (a point in space).
- The Origin you choose for a spell must be within the spell's range.
- A spell's Area starts from its Origin.

### Target

A spell's Target describes the kind of things that the spell can affect (e.g. Creatures or Objects). Objects are always successfully affected if targeted, whereas unwilling creatures will roll to resist spells. You can't affect objects being carried by unwilling creatures. Targets are chosen from within its Area, or Range if it doesn't have an Area.

- Spell descriptions that give a singular Target (e.g. Creature, or Object) affect one of whatever is specified.
- Targets with a number affect _up to_ that many of the specified thing. For example, Creatures (3) could affect zero, one, two, or three creatures.
- "Any" allows you to choose any number of the specified type of target.
- "All" affects all matching targets (even if you aren't aware of them).

Spells which don't directly affect creatures or objects won't have a Target.

### Cost (Mana)

At the start of your turn, you gain an amount of mana equal to your Energetics. Unspent mana is lost at the start of your next turn (before you gain your new mana).
Some spells specify a mana cost to cast. You must pay that much mana when you cast them; if you don't have enough, you can't cast that spell. You can choose to pay more mana than required, if you like.
Spells with a cost of "X" are variable cost; you choose an amount of mana to pay, and X in the spell's effect equals that amount.

If a spell description doesn't list a cost, its cost is zero.

#### Ongoing Spells

If you're concentrating on a spell, you must pay its mana cost on each of your turns. This happens just after you gain your mana for the turn. If the spell had a variable cost, use the same value that you paid when you cast it every turn. If you don't have enough mana to pay in full (for example, if your Energetics has been reduced since you cast the spell), you don't pay anything and the spell immediately ends.

### Concentration

Some spells or abilities require concentration; you can't start new concentration abilities if you don't have space to concentrate on them. You can only concentrate on one thing at a time (although some abilities increase this). You can stop concentrating whenever you like, and that effect immediately ends.
When you take damage, roll Composure vs. 12. If you fail, you lose concentration on everything you're concentrating on.

If a spell description doesn't say "Concentration", it doesn't require concentration.

### Attack-Speed Spells

If an attack-speed spell doesn't specify a target, it has a target of "Creature or Object". Attacks all deal 1 damage if they affect their target successfully.

:::warning Important

If a spell doesn't specify a way for an unwilling creature to avoid its effects, it can't affect unwilling creatures at all.

:::

## Magical Signatures

Magic leaves a signature on any objects or creatures affected by it. These magical signatures can be seen with the _Detect Magic_ ability. They can be used to identify:

- The Art of the magic.
- Whether the magic is still ongoing, or has ended.
- If ended, how long ago the magic ended.

Magical signatures fade completely 48 hours after the magic ends. When estimating how old signatures are, you can achieve a precision of about an hour (e.g. "within the last hour", "five to six hours ago").

Spells which do not directly affect objects or creatures (e.g. Distortion illusions) do not leave magical signatures.

## Circle Magic

Circle Magic allows you and your allies to pool your mana to cast more powerful spells. Each participant can provide any amount of mana (up to the maximum they could provide to a ritual-speed spell). Use the spell enhancements (and skill enhancements that affect spells) of whoever leads the circle.

## Trace Magic

Traces are a kind of permanent spell affecting creatures or objects without requiring concentration.
Player characters all start with one trace, called _Spellcasting_, which allows them to cast spells. If they ever lose this trace, they cannot use any of their magic. _Spellcasting_ counts towards their total, leaving most characters with two available traces.

- Creatures may hold a maximum of three traces at once.
- All player characters start with the _Spellcasting_ trace, which allows them to perform magic, and counts towards their limit.

Objects can be affected by between one and three traces, depending on their make-up:

- Objects made from non-biological materials (e.g. metal, stone) can hold one trace.
- Objects made from materials that were once alive (e.g. wood, leather) can hold two.
- Objects made from fossilised material (e.g. amber, jet) can hold three.

:::note Mixed Materials

Objects made from a mixture of materials should use the lower number, unless the inclusion of that material is purely ornamental. For example, both a metal-tipped spear with a wooden handle and a steel sword would hold one trace each. A pair of leather gloves with golden adornment would hold two traces, however, as the gold doesn't contribute to the function of the object.

:::

### Inactive Traces

When a spell traced into a creature would end, it instead becomes inactive. Inactive traces can still be detected, but otherwise do nothing, and have costs of zero (restoring lost Energetics to traced characters). Inactive traces become active again when the character rests.
Spells traced into objects do not become inactive; they simply disappear if their spell ends.

### Trace Mana Cost

Traced spells do not consume mana the same way concentration spells do: instead, they each reduce your Energetics by their cost. Traced spells with variable cost keep the same value for X that they were cast with. This reduction cannot be avoided or removed, except by removing the trace. You still use your base Energetics for accessing skill abilities or spell enhancements, just like other temporary stat reductions.

:::note Summary

- For each trace you have, reduce your Energetics by the cost of the spell.

:::

Objects have a maximum total cost for all spells traced into them equal to their total available traces (i.e. one for metal objects, two for wooden objects, etc.)
