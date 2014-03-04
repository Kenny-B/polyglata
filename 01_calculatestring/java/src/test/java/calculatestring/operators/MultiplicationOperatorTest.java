package calculatestring.operators;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class MultiplicationOperatorTest {

	@Test
	public void calculatesResult() {
		assertEquals(6, new MultiplicationOperator().calculate("3*2"));
	}
}
