function printMonth(expences) {
    for (let i = 0; i < expences.length; i++) {
      if (expences[i] <= 1000) {
        let date = new Date(`${i+1}`)
        const month = date.toLocaleString('default', { month: 'long' });
        console.log(month)
      }
    }
  }
  
  let yearlyExpences = [ 2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390, ]
