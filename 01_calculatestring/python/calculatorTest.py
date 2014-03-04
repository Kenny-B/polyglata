import unittest
from calculator import Calculator

class TestCalculator(unittest.TestCase):

	def setUp(self):
		self.calc = Calculator().calculate;

	def test_calculateBasicNumberReturnsNumber(self):
 		self.assertEqual(3, self.calc('3'))

	def test_calculateEmptyStringShouldReturnZero(self):
		self.assertEqual(0, self.calc(''))

	def test_calculateSimpleSumReturnsResult(self):
		self.assertEqual(6, self.calc('4+2'))

	def test_calculateSimpleMultiplicationReturnsResult(self):
		self.assertEqual(10, self.calc('5*2'))

	def test_calculateInvalidStringShouldThrowException(self):
		self.assertRaises(ValueError, self.calc, ('blabl'))

if __name__ == '__main__':
	unittest.main()
