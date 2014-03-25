
#include <string>
#include "gtest/gtest.h"

#include "wizard.h"
#include "spell.h"


TEST(Wizard, Casts_Learned_Spell_From_His_Book) {
  Spell protectionFromEvil = Spell("protection from evil", ABJURATION);
  Wizard wizzy = Wizard();
  wizzy.Memorize(protectionFromEvil);

  EXPECT_EQ("protection from evil", wizzy.Cast(protectionFromEvil));
}

TEST(Wizard, Casts_Unknown_Spell_Fumbles) {
  Spell protectionFromEvil = Spell("protection from evil", ABJURATION);
  Wizard wizzy = Wizard();

  EXPECT_EQ("fumble", wizzy.Cast(protectionFromEvil));  
}

TEST(SpecializedWizard, Casts_Unknown_Spell_Fumbles) {
  Spell protectionFromEvil = Spell("protection from evil", ABJURATION);
  Abjurist abjurer = Abjurist();

  EXPECT_EQ("fumble", abjurer.Cast(protectionFromEvil));  
}

TEST(SpecializedWizard, Casts_Spell_From_Own_School_Is_Effective) {
  Spell protectionFromEvil = Spell("protection from evil", ABJURATION);
  Abjurist abjurer = Abjurist();
  abjurer.Memorize(protectionFromEvil);

  EXPECT_EQ("effective protection from evil", abjurer.Cast(protectionFromEvil));  
}
