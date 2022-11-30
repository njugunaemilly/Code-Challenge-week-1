//net salary calculator
//calculation of net salary
//use the deductions and subtract from gross salary to get an output of the nat salary

function salary(basicSalary, benefits){

    let grossSalary = basicSalary + benefits;

    let paye = grossSalary * 0.03;

    let nhif = grossSalary * 0.0025;

    let nssf = grossSalary * 0.06;

    let deductions = paye + nhif + nssf;

    let netSalary = grossSalary - deductions;

    return "Gross Salary: " + grossSalary + "PAYE: " + paye + ",NSSF: "+ nssf + ",NHIF: " + nhif + ",Deductiond: " + deductions +",Net Salary: " + netSalary;
}

console.log(salary(54000, 17000));