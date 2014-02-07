namespace WizardsTests
{
    #region

    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Wizards;

    #endregion

    [TestClass]
    public class SpellTest
    {
        [TestMethod]
        public void Equals_WithNull_False()
        {
            Assert.IsFalse(new Spell("boom", SpellSchool.Enchantment).Equals(null));
        }

        [TestMethod]
        public void Equals_WithNoSpellObject_False()
        {
            Assert.IsFalse(new Spell("boom", SpellSchool.Enchantment).Equals("my string"));
        }

        [TestMethod]
        public void Equals_SameNameAndSchool_True()
        {
            Assert.IsTrue(new Spell("hocuspocus", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Enchantment)));
        }

        [TestMethod]
        public void Equals_SameNameDifferentSchool_False()
        {
            Assert.IsFalse(new Spell("hocuspocus", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Illusion)));
        }

        [TestMethod]
        public void Equals_DifferentNameSameSchool_False()
        {
            Assert.IsFalse(new Spell("bigbang", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Enchantment)));
        }

        [TestMethod]
        public void Equals_DifferentNameDifferentSchool_False()
        {
            Assert.IsFalse(new Spell("bigbang", SpellSchool.Enchantment).Equals(new Spell("hocuspocus", SpellSchool.Illusion)));
        }
    }
}