AOS.init();

const text = ["C++ Developer", "DSA Specialist", "Problem Solver"];
let i = 0, j = 0;
let current = "", isDeleting = false;

function type() {
    current = text[i];
    
    if (!isDeleting) {
        j++;
        if (j === current.length) isDeleting = true;
    } else {
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    document.getElementById("typing").innerText = current.substring(0, j);
    setTimeout(type, isDeleting ? 50 : 100);
}

type();
