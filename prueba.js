function modaling(){
    let formContainer = document.querySelectorAll(".formD");
    let placasBtn = document.querySelector(".placasB");
    let rigBtn = document.querySelector(".rigB");
    let housingBtn = document.querySelector(".housingB");
    let btns = [placasBtn, rigBtn, housingBtn]
    for(let btn of btns){
        i = 0
        btn[i].addEventListener("click", ()=>{
            formContainer.forEach(contenedor =>{
                contenedor.classList.add("show")
            })
        });
        ++1
    }
    let presupuestoBtn = document.querySelector(".dropdownBtn")
    let contenedorPresupuesto = document.querySelector(".drop-content");
    presupuestoBtn.addEventListener("click", ()=>{
        contenedorPresupuesto.classList.toggle("show");
    } )
    
}
modaling();

