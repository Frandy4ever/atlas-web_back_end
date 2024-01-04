function getCurrentYear () {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income_${getCurrentYear()}`]: income,
    [`gdp_${getCurrentYear()}`]: gdp,
    [`capita_${getCurrentYear()}`]: capita
  };
  return budget;
}
