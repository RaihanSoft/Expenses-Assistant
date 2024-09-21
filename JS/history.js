document.getElementById('history-tab').addEventListener('click', function () {
  classAdd('history-tab')
  classRemove('assistant-tab')
  
document.getElementById('assistant-tab').addEventListener('click', function () {
        classAdd('assistant-tab')
        classRemove('history-tab')

 })

})
