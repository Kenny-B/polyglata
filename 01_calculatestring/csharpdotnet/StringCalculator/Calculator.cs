using System;

namespace StringCalculator
{
    using System.Collections.Generic;

    static class Calculator
    {
        private static readonly Dictionary<string, Func<int, int, int>> operations = new Dictionary<string, Func<int, int, int>>
                                                                      {
                                                                          { "+", (a, b) => a + b },
                                                                          { "-", (a, b) => a - b },
                                                                          { "plus", (a, b) => a + b },
                                                                          { "*", (a, b) => a * b },
                                                                          { "/", (a, b) => a / b },
                                                                          { "%", (a, b) => a % b }
                                                                      };

        public static int Calculate(string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return 0;
            }

            foreach (var operation in operations)
            {
                if (input.Contains(operation.Key))
                {
                    return Calc(input, operation.Key, operation.Value);
                }
            }

            return GetNumericValue(input.Substring(0, 1));
        }

        private static int Calc(string input, string operation, Func<int, int, int> action)
        {
            string[] inputFields = input.Split(operation.ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

            if (inputFields.Length != 2)
            {
                throw new ArgumentException();
            }

            int value1;
            int value2;

            try
            {
                value1 = GetNumericValue(inputFields[0]);
            }
            catch (Exception)
            {
                value1 = Calculate(inputFields[0]);
            }

            try
            {
                value2 = GetNumericValue(inputFields[1]);
            }
            catch (Exception)
            {
                value2 = Calculate(inputFields[1]);
            }

            return action(value1, value2);
        }

        private static int GetNumericValue(string inputField)
        {
            int value;
            if (!int.TryParse(inputField, out value))
            {
                throw new ArgumentException();
            }

            return value;
        }
    }
}
