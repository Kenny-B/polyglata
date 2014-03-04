package calculatestring.operators;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SumOperatorTest {

	@Test
	public void calculateReturnsResults() {
		assertEquals(1236, new SumOperator().calculate("1234+2"));
	}
}
