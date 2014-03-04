package calculatestring.operators;

public class SumOperator extends AbstractOperator implements Operatorable {

	@Override
	public int calculate(String s) {
		Integer[] nrs = convert(s);
		return nrs[0] + nrs[1];
	}

	@Override
	public String operator() {
		return "+";
	}

}
