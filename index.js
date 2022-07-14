let input = document.querySelectorAll('input');


function changeFunction(){
    let suffix = this.dataset.sizing || "";
   document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
input.forEach(input =>input.addEventListener('change',changeFunction) )
input.forEach(input =>input.addEventListener('mousemove',changeFunction) )