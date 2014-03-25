
#ifndef WIZARD_H_
#define WIZARD_H_

#include <algorithm>
#include <string>
#include <vector>
#include "spell.h"

using std::string;
using std::vector;

class Wizard {
public:
	Wizard() {};
	string Cast(Spell spell);
	void Memorize(Spell spell);

protected:
	Wizard(SpellSchool school) : school(school) {};

private:
	bool IsSpecializedIn(Spell spell);
	inline bool IsMemorized(Spell spell) {
		return std::find(spellbook.begin(), spellbook.end(), spell) != spellbook.end();
	};

	SpellSchool school;
	vector<Spell> spellbook;
};

class Abjurist : public Wizard {
public:
	 Abjurist() : Wizard(ABJURATION) {};
};

#endif
