function Convert(id){
    const softwareS = document.getElementById(id).value
     return Number(softwareS)

    
}

function classAdd(id){
    const historyTab = document.getElementById(id)
    historyTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white')


}

function classRemove(id){

    const assistanTab = document.getElementById(id)
    assistanTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white')


}

// !exceptional

function AddHidden(id){
    return document.getElementById(id).classList.add('hidden')

}function RemoveHidden(id){
    return document.getElementById(id).classList.remove('hidden')

}