
module Spells

	# getting rid of duplication "CONST = :CONST"
	def spell(*names)
		names.each { |name| const_set(name.to_s, name) }
	end

	# still duplication with "extend", can also use Module.new
	module Conjuration
		extend Spells
		spell :ANIMAL_SUMMONING
	end
	module Divination
		extend Spells
		spell :TRUE_SIGHT
	end
	module Necromancy
		extend Spells
		spell :RAISE_DEAD, :DEATH_FINGER
	end
end


class Wizard

	# getting rid of duplication subclassing for each wizard kit
	def self.kit(school)
		return Class.new(Wizard) do
			# need scope flattening, so no def initialize
			# http://stackoverflow.com/questions/9671259/ruby-local-variable-is-undefined
			define_method :initialize do
				super(school)
			end
		end
	end

	def initialize(school)
		@school = school
		@book = []
	end

	def cast(spell)
		return "fumble" unless @book.include? spell

		effect = Spells::Conjuration.const_defined?(spell) ? "effective " : ""
		effect + spell.to_s.downcase.sub("_", " ")
	end

	def memorize(spell)
		@book << spell
	end

end

Necromancer = Wizard::kit(Spells::Necromancy)
Conjurer = Wizard::kit(Spells::Conjuration)
