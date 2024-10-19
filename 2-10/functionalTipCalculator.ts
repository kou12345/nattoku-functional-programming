class FunctionalTipCalculator {
  // これは別に関数として作らなくて良い ただのラッパーだから
  public static addPerson(names: string[], name: string): string[] {
    return [...names, name];
  }

  public static getTipPercentage(names: string[]): number {
    if (names.length > 5) {
      return 20;
    } else if (names.length > 0) {
      return 10;
    } else {
      return 0;
    }
  }
}

const names: string[] = [];
const updatedNames: string[] = FunctionalTipCalculator.addPerson(
  names,
  "Alice"
);
const tipPercentage: number =
  FunctionalTipCalculator.getTipPercentage(updatedNames);

console.log(updatedNames); // ['Alice']
console.log(tipPercentage); // 10

const updatedNames2: string[] = FunctionalTipCalculator.addPerson(
  ["Bob", "Charlie", "Dave", "Eve", "Frank"],
  "Grace"
);
const tipPercentage2: number =
  FunctionalTipCalculator.getTipPercentage(updatedNames2);

console.log(updatedNames2); // ['Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace']
console.log(tipPercentage2); // 20
