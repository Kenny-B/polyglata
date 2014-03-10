# http://docs.python.org/2/library/datetime.html
from datetime import datetime, timedelta;

class watch():

	# what's a clean pythonic way to have multiple constructors in python?
	# http://stackoverflow.com/questions/682504/what-is-a-clean-pythonic-way-to-have-multiple-constructors-in-python
	def __init__(self, time = None):
		self.mytime = time if time is not None else watch.now()

	# is this "pythonic"? could use a module method... (not tied to cls then)
	@staticmethod
	def now():
		return datetime.now()

	def whatTimeIsIt(self):
		return self.mytime

	def __add__(self, other):
		if not isinstance(other, watch):
			return watch(self.mytime)
		return watch(self.mytime + timedelta(
			hours = other.mytime.hour,
			minutes = other.mytime.minute,
			seconds = other.mytime.second))

	def __repr__(self):
		def secondLbl():
			return "second" if self.mytime.second == 1 else "seconds"
		return self.mytime.strftime("It's %H:%M and %S " + secondLbl() + ", at %d/%m/%Y")
