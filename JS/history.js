document.getElementById('history-tab').addEventListener('click', function () {
  classAdd('history-tab')
  classRemove('assistant-tab')
  AddHidden('expense-form')
  RemoveHidden('history-section')



document.getElementById('assistant-tab').addEventListener('click', function () {
        classAdd('assistant-tab')
        classRemove('history-tab')
        RemoveHidden('expense-form')
        AddHidden('history-section')

 })

})
