import unittest
from watches import watch
from datetime import datetime

class TestWatch(unittest.TestCase):

	def tearDown(self):
		watch.now = lambda: datetime.now()

	def test_WhatTimeIsIt_ReturnsNow(self):
		now = datetime(2003, 10, 10, 22, 45, 2)
		watch.now = lambda: now
		self.assertEqual(now, watch().whatTimeIsIt())

	def test_Add_CombinesHoursAndMinutesAndSeconds_IntoNewWatch(self):
		watch.now = lambda: datetime(2003, 10, 10, 22, 45, 2)
		newwatch = watch()
		watch.now = lambda: datetime(2003, 10, 10, 1, 5, 8)
		self.assertEqual(datetime(2003, 10, 10, 23, 50, 10), (newwatch + watch()).mytime)

	def test_Add_MoreThanSixtyMinutes_AddsExtraHour(self):
		watch.now = lambda: datetime(2003, 10, 10, 19, 45, 0)
		newwatch = watch()
		watch.now = lambda: datetime(2003, 10, 10, 1, 16, 0)
		self.assertEqual(datetime(2003, 10, 10, 21, 1, 0), (newwatch + watch()).mytime)

	def test_Add_MoreThanSixySeconds_AddsExtraMinute(self):
		watch.now = lambda: datetime(2003, 10, 10, 19, 45, 30)
		newwatch = watch()
		watch.now = lambda: datetime(2003, 10, 10, 0, 1, 40)
		self.assertEqual(datetime(2003, 10, 10, 19, 47, 10), (newwatch + watch()).mytime)

	def test_Add_WithIncompatibleType_DoesNotAlterTime(self):
		watch.now = lambda: datetime(2003, 10, 10, 19, 45, 30)
		self.assertEqual(datetime(2003, 10, 10, 19, 45, 30), (watch() + "amazing").mytime)

	# __str__ returns __repr__ value if not implemented. 
	def test_str_StatesTheCurrentTime_UpToSeconds_Plural(self):
		watch.now = lambda: datetime(2003, 10, 10, 19, 45, 30)
		self.assertEqual("It's 19:45 and 30 seconds, at 10/10/2003", str(watch()))

	def test_str_OnlyOneSecond_NoPlural(self):
		watch.now = lambda: datetime(2003, 10, 10, 19, 45, 1)
		self.assertEqual("It's 19:45 and 01 second, at 10/10/2003", str(watch()))

if __name__ == '__main__':
	unittest.main()
