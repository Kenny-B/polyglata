import clr
clr.AddReferenceByName('Wizards')
from Wizards import *

class Sorcerer(Wizard):
    """A specialized wizard, not able to cast anything effectively, but not needing to memorize"""

    def __new__(cls):
        return Wizard.__new__(cls, SpellSchool.Abjuration)

    def Cast(self, spell):
        return spell.Name;
