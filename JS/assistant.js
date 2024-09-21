const totalExpenses = document.getElementById('total-expenses')
const balance = document.getElementById('balance')
const savingsAmount = document.getElementById('savings-amount')


 document.getElementById('calculate').addEventListener('click', function () {

    const software = Convert('software')
    const courses = Convert('courses')
    const internet = Convert('internet')
    const income = Convert('income')
  


    let TotalSum = software + courses + internet
    totalExpenses.innerText = TotalSum.toFixed(2)

    const RemainingBalance = income - TotalSum
    balance.innerText = RemainingBalance.toFixed(2);


    const results = document.getElementById('results')

    results.classList.remove('hidden')


        
      // !validdation 


      if(TotalSum >  income || income <= 0){
        document.getElementById('income-error').classList.remove('hidden')
        return
       
    }        if(software <= 0){
        document.getElementById('software-error').classList.remove('hidden')
        return
       
    }    

       if(internet <= 0){
        document.getElementById('internet-error').classList.remove('hidden')
        return
       
    }       
       if(courses <= 0){
        return document.getElementById('courses-error').classList.remove('hidden')
       
       
    }    

   

    // ! end validdation 
    






    // ! history start 


    const historyList = document.getElementById('history-list')
    const p = document.createElement('p')
    p.classList.add('border-l-4')
    p.classList.add('border-red-500')
    p.classList.add('pl-3')
    p.innerHTML =

        ` 
        <p> income : ${income}</p>
        <p> Expenses : ${TotalSum}</p>
        <p> Balance : ${RemainingBalance}</p>
       `

    historyList.appendChild(p)


    // ! history end





    document.getElementById('calculate-savings').addEventListener("click", function () {


        const savings = Convert('savings')


        const TotalSavings = RemainingBalance * savings / 100

        savingsAmount.innerText = TotalSavings.toFixed(2)

        const Remaining = RemainingBalance - TotalSavings

        document.getElementById('remaining-balance').innerText = Remaining.toFixed(2)


    })

})







