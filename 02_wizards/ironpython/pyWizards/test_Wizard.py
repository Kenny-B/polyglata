import clr
import unittest

clr.AddReference('System')
clr.AddReferenceByName('Wizards')

from Wizards import *
from System import Console

class Test_Wizard(unittest.TestCase):

    def test_asDivineWizardCastNecromancySpellsFromBookNotEffective(self):
        animateDead = Spell("Animate Dead", SpellSchool.Necromancy)
        wizard = Wizard(SpellSchool.Divination)
        wizard.Memorize(animateDead)

        self.assertEqual("Animate Dead", wizard.Cast(animateDead))

    def test_asDivineWizardCastIllusionSpellNotMemorizedFumbles(self):
        invisibility = Spell("Invisiblity", SpellSchool.Illusion)
        wizard = Wizard(SpellSchool.Divination)

        self.assertEqual("fumble", wizard.Cast(invisibility))
    
    def test_asDivineWizardCastDivineSpellFromBookIsEffective(self):
        trueSight = Spell("True Sight", SpellSchool.Divination)
        wizard = Wizard(SpellSchool.Divination)
        wizard.Memorize(trueSight)

        self.assertEqual("Effective True Sight", wizard.Cast(trueSight))

unittest.main(exit = False)
Console.ReadKey()
