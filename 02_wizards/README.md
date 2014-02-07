
# Wizards

This kata should focus on inheritance and polymorphism. Of course it's perfectly solvable by using primitives and a flat script. 

## Assignment

Create a model which describes the following:

you're a wizard and you can cast different spells form your spellbook. When you finished your training, you chose a specialization and are more effective at spells within in your specialization. 
These are the possible spell schools, with some example spells (ripped from D&D2 of course)

* Abjuration (Protection From Evil, Resist Fear)
* Divination (True Sight, Oracle)
* Illusions (Invisibility, Project Image)
* Evocations (Magic Missile, Cloudkill)
* Necromancy (Animate Dead, Control Undead)
* Alteration (Haste, Shapechange)
* Enchantment (Sleep, Hold Person)

## Acceptance criteria

Create a method `string cast(spell)` on your wizard which returns:

* Casting a spell from your school results in the added prefix "effective" in front of the spell description.
* Casting a spell which is not in your spell book results in a "fumble" (as `string` output)

For example:

* as a divine wizard, `cast(TrueSight)` results in the string "effective TrueSight", given TrueSight is in my spell book.
* as a divine wizard, `cast(Sleep)` results in the string "Sleep", given Sleep is in my spell book. 
* as a divine wizard, `cast(Sleep)` results in the string "fumble", given Sleep is not in my spell book.

## Possible addons

* Create a `conjurer`, a special mage which does not need a spell book but cannot specialize.

