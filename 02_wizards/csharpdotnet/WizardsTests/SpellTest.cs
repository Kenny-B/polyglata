namespace WizardsTests
{
    #region

    using NUnit.Framework;
    using Wizards;

    #endregion

    [TestFixture]
    public class SpellTest
    {
        [Test]
        public void Equals_WithNull_False()
        {
            Assert.IsFalse(new Spell("boom", SpellSchool.Enchantment).Equals(null));
        }

        [Test]
        public void Equals_WithNoSpellObject_False()
        {
            Assert.IsFalse(new Spell("boom", SpellSchool.Enchantment).Equals("my string"));
        }

        [Test]
        public void Equals_SameNameAndSchool_True()
        {
            Assert.IsTrue(new Spell("hocuspocus", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Enchantment)));
        }

        [Test]
        public void Equals_SameNameDifferentSchool_False()
        {
            Assert.IsFalse(new Spell("hocuspocus", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Illusion)));
        }

        [Test]
        public void Equals_DifferentNameSameSchool_False()
        {
            Assert.IsFalse(new Spell("bigbang", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Enchantment)));
        }

        [Test]
        public void Equals_DifferentNameDifferentSchool_False()
        {
            Assert.IsFalse(new Spell("bigbang", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Illusion)));
        }
    }
}