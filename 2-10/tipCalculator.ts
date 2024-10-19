class TipCalculator {
  private names: string[] = [];
  private tipPercentage: number = 0;

  public addPerson(name: string): void {
    this.names.push(name);

    // 人数が6人以上の場合はチップ率を20%に設定
    // 人数が1~5人の場合はチップ率を10%に設定
    if (name.length > 5) {
      this.tipPercentage = 20;
    } else if (name.length > 0) {
      this.tipPercentage = 10;
    }
  }

  public getNames(): string[] {
    return this.names;
  }

  public getTipPercentage(): number {
    return this.tipPercentage;
  }
}
