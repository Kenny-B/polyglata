#include "wizard.h"

string Wizard::Cast(Spell spell) {
  if(!IsMemorized(spell)) {
    return "fumble";
  }

  return IsSpecializedIn(spell) ? "effective " + spell.GetName() : spell.GetName();
}

void Wizard::Memorize(Spell spell) {
  this->spellbook.push_back(spell);
}

bool Wizard::IsSpecializedIn(Spell spell) {
  return this->school == spell.GetSchool();
}
