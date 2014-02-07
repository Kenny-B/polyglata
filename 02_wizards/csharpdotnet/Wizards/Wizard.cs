namespace Wizards
{
    #region

    using System.Collections.Generic;

    #endregion

    public class Wizard
    {
        private readonly SpellSchool specialization;
        private readonly IList<Spell> spellBook;

        public Wizard(SpellSchool school)
        {
            this.specialization = school;
            this.spellBook = new List<Spell>();
        }

        public string Cast(Spell spell)
        {
            if (!spellBook.Contains(spell))
            {
                return "fumble";
            }

            return AmISpecializedIn(spell) ? "Effective " + spell.Name : spell.Name;
        }

        private bool AmISpecializedIn(Spell spell)
        {
            return specialization.Equals(spell.School);
        }

        public void Memorize(Spell spell)
        {
            spellBook.Add(spell);
        }
    }
}