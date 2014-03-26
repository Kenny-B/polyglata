package wizards;

public class Spell {

	private final String name;
	private final SpellSchool spellSchool;

	public SpellSchool getSpellSchool() {
		return spellSchool;
	}

	public String getName() {		
		return name;
	}

	private Spell(String name, SpellSchool spellSchool) {
		this.name = name;
		this.spellSchool = spellSchool;
	}
	
	public static Spell createInvisibilitySpell() {
		return new Spell("Invisibility", SpellSchool.Divination);
	}
	
	public static Spell createHealSpell() {
		return new Spell("Heal", SpellSchool.Necromancy);
	}
}
