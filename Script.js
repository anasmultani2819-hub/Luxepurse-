// LuxePurse JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("LuxePurse Loaded Successfully");

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Buy Button
    document.querySelectorAll(".buy").forEach(button=>{
        button.addEventListener("click",()=>{
            alert("Product will be available soon!");
        });
    });

});
