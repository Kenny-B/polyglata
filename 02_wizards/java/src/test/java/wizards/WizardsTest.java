package wizards;

import org.junit.Assert;
import org.junit.Test;

public class WizardsTest {

	@Test
	public void WizardCastsSpellFromBookSuccessfully() {
		Wizard wizard = new DivineWizard();
		Spell spell = Spell.createHealSpell();
		wizard.memorize(spell);

		String s = wizard.cast(spell);
		Assert.assertEquals("Heal", s);
	}

	@Test
	public void WizardCastSpellNotInBookReturnsFumble() {
		Wizard wizard = new DivineWizard();
		Spell spell = Spell.createHealSpell();

		String s = wizard.cast(spell);
		Assert.assertEquals("Fumble", s);
	}
	
	@Test
	public void WizardCastSpellFromSchoolBookAddsPrefix() {
		Wizard wizard = new DivineWizard();
		Spell spell = Spell.createInvisibilitySpell();
		wizard.memorize(spell);

		String s = wizard.cast(spell);
		Assert.assertEquals("Effective Invisibility", s);
	}
}
