function goToSem() {
    console.log("Created by mf");
    const selectedSem = document.getElementById("semsel").value;
    switch (selectedSem) {
        case "sem1":
            window.location.href = "sem1.html";
            break;
        
        case "sem2":
            window.location.href = "sem2.html";
            break;
        
        case "sem3":
            window.location.href = "sem3.html";
            break;
        
        case "sem4":
            window.location.href = "sem4.html";
            break;
        
        case "sem5":
            window.location.href = "sem5.html";
            break;
        
        case "sem6":
            window.location.href = "sem6.html";
            break;
        
        case "sem7":
            window.location.href = "sem7.html";
            break;
        
        case "sem8":
            window.location.href = "sem8.html";
            break;
        
        default:
            alert("Please select a semester to continue!");
    }
}