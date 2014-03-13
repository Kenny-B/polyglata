
require 'test/unit'
require 'app/wizard'

class TestWizard < Test::Unit::TestCase

	def test_conjurer_castsconjurationspell_memorized_effective
		conjurer = Conjurer.new
		conjurer.memorize Spells::Conjuration::ANIMAL_SUMMONING
		assert_equal "effective animal summoning", conjurer.cast(Spells::Conjuration::ANIMAL_SUMMONING)
	end

	def test_conjurer_castsdivinationspell_memorized_standard
		conjurer = Conjurer.new
		conjurer.memorize Spells::Divination::TRUE_SIGHT
		assert_equal "true sight", conjurer.cast(Spells::Divination::TRUE_SIGHT)
	end

	def test_necromancer_memorizes_other_spells_fumble
		necromancer = Necromancer.new
		necromancer.memorize Spells::Divination::TRUE_SIGHT
		necromancer.memorize Spells::Conjuration::ANIMAL_SUMMONING
		assert_equal "fumble", necromancer.cast(Spells::Necromancy::RAISE_DEAD)
	end



	def test_conjurer_castunmemorizedspell_fumble
		conjurer = Conjurer.new
		assert_equal "fumble", conjurer.cast(Spells::Conjuration::ANIMAL_SUMMONING)
	end


end
