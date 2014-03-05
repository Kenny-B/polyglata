import unittest
from calculator import calculate

class TestCalculator(unittest.TestCase):

	def test_calculateBasicNumberReturnsNumber(self):
 		self.assertEqual(3, calculate('3'))

	def test_calculateEmptyStringShouldReturnZero(self):
		self.assertEqual(0, calculate(''))

	def test_calculateSimpleSumReturnsResult(self):
		self.assertEqual(6, calculate('4+2'))

	def test_calculateSimpleMultiplicationReturnsResult(self):
		self.assertEqual(10, calculate('5*2'))

	def test_calculateInvalidStringShouldThrowException(self):
		self.assertRaises(ValueError, calculate, ('blabl'))

if __name__ == '__main__':
	unittest.main()
