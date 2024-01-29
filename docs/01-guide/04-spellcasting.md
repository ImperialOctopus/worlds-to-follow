# Spells and Traces

## Arcane Arts

You learn one arcane Art when you reach 1, 3, 5, 7, and 9 in Arcane. Some skill abilities might also give you extra Arts; these don't count against your normal limit. If you already know the Art you would gain, gain a different extra Art instead.

Each Art contains at least one spell that you automatically gain when you learn the Art. They also contain more spells, and spell enhancements (upgrades to your spells), gated behind skill prerequisites. If you have at least the specified level in every prerequisite skill for a spell or enhancement (in an Art that you know), you gain that spell or enhancement. Skill prerequisites refer to your base score in a skill (before any temporary increases or decreases).

### Using Spell Enhancements

When you cast a spell, you may choose to apply any or all spell enhancements you know that apply to it. You choose when you cast the spell, and can choose different enhancements whenever you cast it. These can dramatically change what your spells are capable of.

## Spell Mechanics

### Affecting Things

When you cast a spell, it affects certain things (e.g. creatures, objects, or a area of space). Spells can't cause negative effects to creatures that they don't affect (and unwilling creatures will always be able to roll to avoid being affected by spells).

### Origin

The origin (or origins) of a spell are the points where its effects come from. For example, if a spell directly targets a creature, the origin of that spell is that creature. Spells might also originate from a point in space, or from an object. If a spell originates from a creature or object, then the origin (and therefore spell effect) moves with that creature or object.

- The Origin you choose for a spell must be within the spell's Range.
- If a spell doesn't specify an Origin, it's the same as the spell's Target.
- Spells can have multiple Origins; they must all be different, and within Range.
- A spell's Area starts from its Origin.

### Range

Range describes how far away from you the spell's origin (or origins) can be.

Spells with a range of Self can target only you. They are not affected by spell enhancements that would increase their range.

Spells with a range of Touch can only affect targets adjacent to you, and require physical contact (they thus cannot be used if you can't, for any reason, reach out and touch the target). Touch spells can be thought of as "0 m"; they are affected by enhancements that add range. If their range is increased above zero, they are no longer Touch range.

### Area

Area describes how far from its Origin a spell's effect reaches, and the shape of its reach. A spell's Area moves with its Origin (if the Origin moves).

- If a spell doesn't specify an Area, its Area is Individual. Individual Area spells affect only the creature or object that they originate from.
- Spells with an Area affect everything matching their Target (e.g. all creatures, all objects) within the space described by that Area.

Spells with an Area of Individual require you to specify which targets to affect within their range. You must be aware of those targets to affect them — you don't need to be aware of targets affected by a non-Individual Area.

Area shapes extend as follows:

- Sphere Areas are centred on their Origin, and specify their radius.

### Target

Spells can target creatures, objects, or locations. Objects and locations are always affected if targeted, whereas unwilling creatures will resist spells. You can't target objects being carried by unwilling creatures.

Spell descriptions that give a singular target (e.g. Creature, or Object) target one of whatever is specified. Plural targets provide a number (or Any, for unlimited).

### Cost (Mana)

At the start of your turn, you gain an amount of mana equal to your Energetics. Unspent mana is lost at the start of your next turn.
Some spells specify a mana cost to cast. You must pay that much mana when you cast them; if you don't have enough, you can't cast that spell. You can choose to pay more mana than required, if you like.
Spells with a cost of "X" are variable cost; you choose an amount of mana to pay, and X in the spell's effect equals that amount.

If a spell description doesn't list a cost, its cost is zero.

### Concentration

Some spells or abilities require concentration; you can't start new concentration abilities if you don't have space to concentrate on them. You can only concentrate on one thing at a time (although some abilities increase this). You can stop concentrating whenever you like, and that effect immediately ends.
When you take damage, roll Composure vs. 12. If you fail, you lose concentration on everything you're concentrating on.

If a spell description doesn't say "Concentration", it doesn't require concentration.

### Attack Speed Spells

If an attack-speed spell doesn't specify a target, it has a target of "Creature or Object". Attacks all deal 1 damage if they affect their target successfully.

:::warning Important

If a spell doesn't specify a way for an unwilling creature to avoid its effects, it can't affect unwilling creatures at all.

:::

## Detect Magic

Magic leaves a trace on any objects or creatures affected by it that can be seen with the Detect Magic ability. The traces can be used to identify:

- The Art of the magic
- Whether the magic is still ongoing, or has ended
- If ended, how long ago the magic ended (to a precision of about an hour; the traces fade completely after 48 hours)

## Circle Magic

Circle Magic allows you and your allies to pool your mana to cast more powerful spells. Each participant can provide any amount of mana (up to the maximum they could provide to a ritual-speed spell). Use the spell enhancements (and skill enhancements that affect spells) of whoever leads the circle.

## Trace Magic

Traces are a kind of permanent spell affecting creatures or objects without requiring concentration.
Player characters all start with one trace, called Spellcasting, which allows them to cast spells. If they ever lose this trace, they cannot use any of their magic. Spellcasting counts towards their total, leaving most characters with two available traces.

- Creatures may hold a maximum of three traces at once.
- All player characters start with the Spellcasting _trace_, which allows them to perform magic, and counts towards their limit.

Objects can be affected by between one and three traces, depending on their make-up:

- Objects made from non-biological materials (e.g. metal, stone) can hold one trace.
- Objects made from materials that were once alive (e.g. wood, leather) can hold two.
- Objects made from fossilised material (e.g. amber, jet) can hold three.
  Objects made from a mixture of materials should use the lower number, unless the inclusion of that material is purely ornamental. For example, both a metal-tipped spear with a wooden handle and a steel sword would hold one trace each. A pair of leather gloves with golden adornment would hold two traces, however, as the gold doesn't contribute to the function of the object.

### Inactive Traces

When a spell traced into a creature would end, it instead becomes inactive. Inactive traces can still be detected, but otherwise do nothing, and have costs of zero (restoring lost Energetics to traced characters). Inactive traces become active again when the character rests.
Spells traced into objects do not become inactive; they simply disappear if their spell ends.

### Trace Mana Cost

Traced spells do not consume mana the same way concentration spells do: instead, they each reduce your Energetics by their cost. Traced spells with variable cost keep the same value for X that they were cast with. This reduction cannot be avoided or removed, except by removing the trace. You still use your base Energetics for accessing skill abilities or spell enhancements, just like other temporary stat reductions.

:::note Summary

- For each trace you have, reduce your Energetics by the cost of the spell.

:::

Objects have a maximum total cost for all spells traced into them equal to their total available traces (i.e. one for metal objects, two for wooden objects, etc.)
