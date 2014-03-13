
# Ruby implementation: metaprogramming baby

Required gems:

* ZenTest
* autotest-standalone (cmd `autotest` is very useful indeed)

## Eliminating duplication to the extreme

### No need to create subclasses

At first, I was like

```ruby
class Necromancer < Wizard
  def initialize
    super(Spells::Necromancy)
  end
```

But then I was like

```ruby
Necromancer = Wizard::kit(Spells::Necromancy)
```

And used `Class.new` with a block to dynamically create a new class.

### No need to duplicate key/values in constant definitions

At first, I was like

```ruby
module Spells
  module Necromancy
    SPELL = :SPELL # wait wat
  end
end
```

But then I was like

```ruby
module Necromancy
  spell :SPELL # done and done
end
```

