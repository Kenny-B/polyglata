package calculatestring;

import java.util.HashMap;
import java.util.Map;

import calculatestring.operators.MultiplicationOperator;
import calculatestring.operators.Operatorable;
import calculatestring.operators.SumOperator;

public class CalculateString {

	// No Guava or Java 8 - no literal initialization.
	// This creates a new subclass of HashMap!
	@SuppressWarnings("serial")
	private Map<String, Operatorable> operators() {
		// I want to loop over all implementations of Operatorable.
		// No can do without Spring or JVM scanning.
		return new HashMap<String, Operatorable>() {
			{
				put(new SumOperator().operator(), new SumOperator());
				put(new MultiplicationOperator().operator(), new MultiplicationOperator());
			}
		};
	}
	
	private int calculateByLoopingThroughAvailableOperators(String s) {
		for(String op : operators().keySet()) {				
			if (s.contains(op)) {
				return operators().get(op).calculate(s);
			}
		}
		return Integer.parseInt(s);		
	}
	
	public int calculate(String s) {
		if (s.equals("")) {
			return 0;
		}

		try {
			return calculateByLoopingThroughAvailableOperators(s);
		} catch (Exception ex) {
			throw new IllegalArgumentException("unable to parse string", ex);
		}
	}
}
