package calculatestring;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

public class CalculateStringTest {

	private CalculateString calc;
	
	@Before
	public void setUp() {
		this.calc = new CalculateString();
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void calculate_noValidValue_throwsException() {
		calc.calculate("blabl");
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void calculate_incompleteSum_throwsException() {
		calc.calculate("3+"); // Hah, +3 parses to a valid number! 
	}

	@Test
	public void calculate_emptyValue_returnsZero() {
		assertEquals(0, calc.calculate(""));
	}
	
	@Test
	public void calculate_basicMultiplicationWithTwoDigits_returnsResult() {
		assertEquals(60, calc.calculate("20*3"));
	}
	
	@Test
	public void calculate_basicMultiplication_returnsResult() {
		assertEquals(6, calc.calculate("2*3"));
	}
	
	@Test
	public void calculate_basicSum_returnsResult() {
		assertEquals(4, calc.calculate("1+3"));
	}
	
	@Test
	public void calculate_basicNumber_returnsNumber() {
		assertEquals(3, calc.calculate("3"));
	}
}
