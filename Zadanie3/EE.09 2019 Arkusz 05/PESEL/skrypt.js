function run() {
    let A = parseInt(document.getElementById("A").value)
    let R = parseInt(document.getElementById("R").value)
    let N = parseInt(document.getElementById("N").value)
    let resultField = document.getElementById("resultField")
    let result = "Ciąg arytmetyczny zawiera wyrazy: "

    for(let i=0;i<N;i++) {
        if(i==N-1) result += A
        else result += A + ", "
        A+=R
    }
    resultField.innerHTML = result
}