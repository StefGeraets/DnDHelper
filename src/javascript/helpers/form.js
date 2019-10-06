function formFocus () {
  const inputs = document.querySelectorAll('.addForm input');
  
  inputs.forEach(function(input){
    input.addEventListener('focus', function(){
      this.parentElement.classList.add("focused");
    })

    input.addEventListener('blur', function () {
      var inputValue = this.value;
      if (inputValue == '') {
        this.parentElement.classList.remove('focused')
      }
    })
  })
}

function formSelector () {
  const buttons = document.querySelectorAll('.actions .addBtn');
  const form = document.getElementById('addForm');
  const icon = document.getElementById('characterIcon');
  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      form.parentElement.classList.remove('hidden');
      icon.firstChild.className = '';
    })
  });
  addPC.addEventListener('click', function () {
    addForm.setAttribute("data-type", "pc")
    icon.firstChild.classList.add('fal', 'fa-user')
  })
  addNPC.addEventListener('click', function () {
    addForm.setAttribute("data-type", "npc")
    icon.firstChild.classList.add('fal', 'fa-user-crown')
  })
  addMonster.addEventListener('click', function () {
    addForm.setAttribute("data-type", "monster")
    icon.firstChild.classList.add('fal', 'fa-paw-claws')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  formSelector();
  formFocus();
});