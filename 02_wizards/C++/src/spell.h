
#ifndef SPELL_H_
#define SPELL_H_

#include <string>

using std::string;

// Please use C++11, otherwise these end up in the global namespace! Urgh.
enum SpellSchool {
	ABJURATION,
	DIVINATION,
	ILLUSION,
	EVOCATION,
	NECROMANCY,
	ALTERATION,
	ENCHANTMENT
};

class Spell {
public:
	Spell(string name, SpellSchool school) : name(name), school(school) {};

	inline string GetName() { return name; };
	inline SpellSchool GetSchool() { return school; };

	// needed for std::find()
	inline bool operator==(const Spell& other) {
		return other.name == name;
	};

private:
	string name;
	SpellSchool school;
};

#endif
