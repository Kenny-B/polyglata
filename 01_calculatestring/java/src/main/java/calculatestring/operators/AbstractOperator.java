package calculatestring.operators;

import java.util.ArrayList;
import java.util.List;

public abstract class AbstractOperator implements Operatorable {

	protected Integer[] convert(String s) {
		List<Integer> result = new ArrayList<>();
		for (String str : s.split("\\" + operator())) {
			result.add(Integer.parseInt(str));
		}
		return result.toArray(new Integer[]{});
	}
}
