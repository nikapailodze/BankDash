function activeTransaction(){
    let notInvisible=document.getElementById('transaction_active')
    notInvisible.classList.remove("invisible")
    // console.log(notInvisible)

    let deactivate=document.getElementById("dashboard_active")
    deactivate.classList.add("invisible")

    let makeBlue=document.getElementById("transaction_image")
    
    makeBlue.src="./images/blue-transfer.png"
    



    let makeGray=document.getElementById('dashboard_image')
    makeGray.src="./images/gray_home.png"
    
}


function activeDashboard(){
    let notInvisible=document.getElementById('dashboard_active')
    notInvisible.classList.remove("invisible")
    // console.log(notInvisible)

    let deactivate=document.getElementById("transaction_active")
    deactivate.classList.add("invisible")

    let makeBlue=document.getElementById("transaction_image")
    console.log(makeBlue)
    makeBlue.src="./images/transfer 1.png"
    console.log(makeBlue)


    let makeGray=document.getElementById('dashboard_image')
    makeGray.src="./images/home 2.png"
}