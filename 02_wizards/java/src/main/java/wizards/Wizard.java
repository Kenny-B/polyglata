package wizards;

import java.util.ArrayList;
import java.util.List;

public abstract class Wizard {
	private SpellSchool spellSchool;

	protected Wizard(SpellSchool spellSchool) {
		this.spellSchool = spellSchool;
	}

	private List<Spell> spellBook = new ArrayList<Spell>();

	public void memorize(Spell spell) {
		this.spellBook.add(spell);
	}

	public String cast(Spell spell) {
		if (this.spellBook.contains(spell)) {
			return (spell.getSpellSchool() == this.spellSchool ? "Effective " : "") + spell.getName();
		}
		
		return "Fumble";
	}
}
