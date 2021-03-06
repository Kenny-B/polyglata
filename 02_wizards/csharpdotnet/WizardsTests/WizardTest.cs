﻿namespace WizardsTests
{
    #region

    using Wizards;
    using NUnit.Framework;

    #endregion

    [TestFixture]
    public class WizardTest
    {
        [Test]
        public void AsDivineWizard_CastNecromancySpellsFromBook_NotEffective()
        {
            Spell animateDead = new Spell("Animate Dead", SpellSchool.Necromancy);
            var wizard = new Wizard(SpellSchool.Divination);
            wizard.Memorize(animateDead);

            Assert.AreEqual("Animate Dead", wizard.Cast(animateDead));
        }

        [Test]
        public void AsDivineWizard_CastIllusionSpellsNotMemorized_Fumble()
        {
            Spell animateDead = new Spell("Animate Dead", SpellSchool.Illusion);
            var wizard = new Wizard(SpellSchool.Divination);

            Assert.AreEqual("fumble", wizard.Cast(animateDead));
        }

        [Test]
        public void AsDivineWizard_CastDivineSpellFromBook_Effective()
        {
            Spell trueSight = new Spell("TrueSight", SpellSchool.Divination);
            var wizard = new Wizard(SpellSchool.Divination);
            wizard.Memorize(trueSight);

            Assert.AreEqual("Effective TrueSight", wizard.Cast(trueSight));
        }
    }
}