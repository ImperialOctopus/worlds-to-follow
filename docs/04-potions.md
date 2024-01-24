# Potions

## Using Potions

Characters can drink potions they are holding as an action on their turn. The potion is added to their active potion effects. If a character already has its maximum number of active potion effects and would gain another, it first loses the oldest of its currently active effects. Characters normally only have one slot for potion effects; gaining points in Alchemy can increase that limit.
Characters also lose all active potion effects when they rest.

Potion effects only work while they remain active; their effects disappear when the potion effect ends.

For example, a character with 3 Endurance (and only one potion slot) drinks a potion with the effect "Gain +1 Endurance", temporarily increasing his Endurance to 4. He then takes 3 damage, reducing his Endurance to 1. If he then drinks a different potion, it replaces the effect active on him. His Endurance reduces by 1, and he is left helpless.

:::note Summary

- You have one potion slot, which drinking a potion fills.
- Potion effects are all continuous; they go away when replaced.
- Drinking a new potion replaces your current one.
  :::

## Creating Potions

To create potions, you must know the formula for the potion you're creating, and must use the Potion Engineering action gained from the Alchemy skill. Each formula has a level, specified below the name. You can only make potions from formulae with levels that are equal to or less than your Alchemy. You can make as many of each potion as you like, you and your allies can all hold as many brewed potions as you like, and brewed potions remain usable forever.

:::info Advice

In the [Arbiter's Guide](/arbiters-guide#potion-brewing-and-money-making), I suggest some ways of limiting the number of potions you and you allies can have and use. If you find yourself abusing the permissiveness of the rules written here in a way that isn't fun for you, I recommend using one of those limits.

:::

## Potion Formulae

You learn two sets of potion formulae of your choice when you reach 3 Alchemy, and one extra when you reach 5, 7, and 9 Alchemy. You learn all the formulae from the sets you choose, but you can only create potions from formulae up to your Alchemy in level.

### Support

These potions provide basic medical support for your team, keeping them on their feet a little longer and temporarily improving your first-aid skills.

<PotionCard
strength = {1}
title = "Anodyne Tea"
effect = "+1 Endurance." />

<PotionCard
strength = {3}
title = "Cure-All"
effect = "You suffer no ill effects from diseases. Any diseases you have do not get worse." />

<PotionCard
strength = {5}
title = "Nurse's Aid"
effect = "+2 Medicine, -2 Depths." />

<PotionCard
strength = {9}
title = "Anaesthesia"
effect = "+3 Endurance, -1 Energetics." />

### Transformation

These potions allow for miraculous (if only situationally useful) transformations of yourself or your allies.

<PotionCard
strength = {3}
title = "Buoyancy Oil"
effect = "You can walk on liquids." />

<PotionCard
strength = {5}
title = "Giant Juice"
effect = "Multiply your size by 2. You can lift and carry larger objects." />

<PotionCard
strength = {7}
title = "Liliputian Extract"
effect = "Divide your size by 2." />

### Light

These potions concern the creation and detection of light.

<PotionCard
strength = {1}
title = "Glow Tonic"
effect = "You emit light to a distance of 10 m." />

<PotionCard
strength = {5}
title = "Shine Splicer"
effect = "When you touch solid surfaces with your bare skin you leave a glowing residue. The residue lasts for ten minutes and emits light to a distance of 5 m." />

<PotionCard
strength = {5}
title = "Bottled Beacon"
effect = "While your eyes are open, radiant light from them illuminates anything within your field of vision to a distance of 30 m." />

<PotionCard
strength = {9}
title = "Luminous"
effect = "You emit light to a distance of 50 m. Other creatures within 5 m of you cannot see." />

### Dark

A set of potions relating to shadow and deception.

<PotionCard
strength = {3}
title = "Eyes Subterranean"
effect = "You can see in total darkness, but not in any other level of light." />

<PotionCard
strength = {7}
title = "Cthonic Concoction"
effect = "You can hide in dim light as if it were darkness, and creatures cannot see you in dim light if they aren't aware of you." />

<PotionCard
strength = {9}
title = "Unlight"
effect = "You are invisible." />

### Power

A set of potions based around increasing your magical or mental strength at the cost of physical endurance.

<PotionCard
  strength = {3}
  title = "Angel-Feather Tincture"
  effect = "+2 Spirituality, -2 Endurance." />

<PotionCard
  strength = {5}
  title = "Mind Oil"
  effect = "+2 Depths, -2 Endurance." />

<PotionCard
  strength = {7}
  title = "Lightning Syrup"
  effect = "+2 Energetics, -2 Endurance." />

### Suppression

These advanced potions provide powerful effects to disable your opponents.

<PotionCard
  strength = {5}
  title = "Neutralising Spirit"
  effect = "Your other potion effects do not apply." />

<PotionCard
  strength = {7}
  title = "Paralysing Toxin"
  effect = "Your speed is zero." />

<PotionCard
strength = {9}
title = "Suppressant"
effect = "You cannot cast spells." />

### Vampire

This set of potions give you some of the powers (and weaknesses) of the mythical vampire.

<PotionCard
  strength = {3}
  title = "Lightless Life"
  effect = "You do not need to sleep. Direct sunlight causes your skin to burn painfully." />

<PotionCard
  strength = {5}
  title = "Deathless Death"
  effect = "Poisons have no effect on you (this does not include negative potion effects). You do not need to breathe." />

<PotionCard
  strength = {7}
  title = "Cocktail of Roses"
  effect = "When you are rendered helpless, you immediately die and turn to dust. Attacks made using mundane weapons (except those made of or coated in silver) do not harm you." />

<PotionCard
  strength = {7}
  title = "Carmillan Cordial"
  effect = "You transform into mist. You can't take actions, can't be hurt, can fly, and can squeeze through any gap that smoke could. You can choose to end this potion effect at any time." />

<PotionCard
  strength = {9}
  title = "Eternity"
  effect = "You do not age." />
