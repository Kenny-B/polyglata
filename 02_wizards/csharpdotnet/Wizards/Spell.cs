namespace Wizards
{
    public class Spell
    {
        private readonly SpellSchool school;
        private readonly string name;

        public SpellSchool School
        {
            get { return school; }
        }

        public string Name
        {
            get { return name; }
        }

        public Spell(string name, SpellSchool school)
        {
            this.name = name;
            this.school = school;
        }

        public override bool Equals(object obj)
        {
            if (obj == null || obj.GetType() != typeof(Spell)) return false;
            var other = (Spell) obj;
            return this.Name.Equals(other.name) && this.school.Equals(other.school);
        }
    }
}