import clr
import unittest

clr.AddReference('System')
clr.AddReferenceByName('Wizards')

from Wizards import *
from Sorcerer import *
from System import Console

class Test_Sorcerer(unittest.TestCase):
    def test_SorcererCastsNotMemorizedSpell(self):
        sorc = Sorcerer()
        self.assertEqual("Fireball", sorc.Cast(Spell("Fireball", SpellSchool.Evocation)))

if __name__ == '__main__':
    unittest.main()
