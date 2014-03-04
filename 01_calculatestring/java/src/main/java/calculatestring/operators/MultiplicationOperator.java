package calculatestring.operators;

public class MultiplicationOperator extends AbstractOperator implements Operatorable {

	@Override
	public String operator() {
		return "*";
	}

	@Override
	public int calculate(String s) {
		Integer[] nrs = convert(s);
		return nrs[0] * nrs[1];
	}

}
