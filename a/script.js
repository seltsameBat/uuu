//helper funcx
function helper(id, x) {
    if (x == true) {
        document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
} //1-blok 0-none

function menuPoof() {
    var x = document.getElementById("myMenu");
    x.style.height = "0%";
    x.style.width = "0%"
}

function disableBodyScroll() {
    document.body.style.overflow = "hidden";
}

// Enable body scrolling when popups close
function enableBodyScroll() {
    document.body.style.overflow = "auto";
} 

function openMessages() {
    helper("appRow", 0);
    helper("subScreen", 0);
    helper("mySidebar", 1);
    menuPoof();


}

function closeMessages() {
    helper("mySidebar", 0);
    helper("appRow", 1);
    helper("subScreen", 0);


}
function closeSecretPage(){
    helper("mySidebar", 0);
    helper("appRow", 1);
    helper("subScreen", 0);
    helper("secretPage", 0);
    helper("secretPage2", 0);


}

function closePopUp(id) {
    helper(id, 0);

}






function openMusic() {
    helper("appRow", 0);
    helper("subScreen", 0);
    helper("musicPage1", 1); // Opens the first music page
    menuPoof();
}

function closeMusic() {
    helper("musicPage1", 0);
    helper("musicPage2", 0);
    helper("appRow", 1);
    helper("subScreen", 0);
}


function switchToMusicPage2() {
    helper("musicPage1", 0);
    helper("musicPage2", 1);
    helper("musicPage3", 0);
    
}

function switchToMusicPage1() {
    helper("musicPage2", 0);
    helper("musicPage1", 1);
    helper("musicPage3", 0);
}

function switchToMusicPage3() {
    helper("musicPage1", 0);
    helper("musicPage2", 0);
    helper("musicPage3", 1);
    
}

function switchToSecretPage() {
    helper("secretPage", 1);
    helper("secretPage2", 0);
    helper("secretPage3", 0);
    helper("secretPage4", 0);
    helper("secretPage5", 0);
    
}

function switchToSecretPage2() {
    helper("secretPage", 0);
    helper("secretPage2", 1);
    helper("secretPage3", 0);
    helper("secretPage4", 0);
    helper("secretPage5", 0);
    
}


function switchToSecretPage3() {
    helper("secretPage", 0);
    helper("secretPage2", 0);
    helper("secretPage3", 1);
    helper("secretPage4", 0);
    helper("secretPage5", 0);
    
}
function switchToSecretPage4() {
    helper("secretPage",0);
    helper("secretPage2", 0);
    helper("secretPage3", 0);
    helper("secretPage4", 1);
    helper("secretPage5", 0);
    
}
function switchToSecretPage5() {
    helper("secretPage",0);
    helper("secretPage2", 0);
    helper("secretPage3", 0);
    helper("secretPage4", 0);
    helper("secretPage5", 1);
    
}


function surprise() {
    location.href = "https://youtu.be/dQw4w9WgXcQ";
}


function openSite(link) {
    location.href = link;
}

function openSecretPage() {
 
    document.getElementById("appRow").style.display = "none";
    document.getElementById("subScreen").style.display = "block";
    document.getElementById("secretPage").style.display = "block"; // Show the secret folder
}

// Unlock the secret page
function unlockSecretPage() {


    correctAnswers = 0; // Reset for future attempts

    // Show the secret icon
    document.getElementById("secretIcon").style.display = "block";
}

// Show fail pop-up
function failQuiz() {

    document.getElementById("failPopup").style.display = "block";
}
function successPopup() {

    document.getElementById("successPopup").style.display = "block";
    helper("mySidebar", 0);
    helper("appRow", 1);
    helper("subScreen", 1);
}
// Reset the quiz so user can try again
function resetQuiz() {
    correctAnswers = 0;
    document.querySelectorAll(".popupMessage").forEach(msg => msg.style.display = "block");
    document.getElementById("failPopup").style.display = "none";
}

// Define correct answers for each question
const correctAnswersList = {
    "popupMessage1": "Change",    // Question 1 correct answer: 4
    "popupMessage2": "Music" , // Question 2 correct answer: blue
    "popupMessage3": "Memory",    // Question 1 correct answer: 4
    "popupMessage4": "Time", 
    "popupMessage5": "Haya hamadneh" // Question 2 correct answer: blue
};

let correctAnswers = 0;
let totalQuestions = Object.keys(correctAnswersList).length; // Total number of questions

// Function to check the user's answer
function checkAnswer(questionId, selectedAnswer) {
    
    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswersList[questionId]) {
        correctAnswers++; // Increase correct answer count
    }

    // Hide the answered question
    document.getElementById(questionId).style.display = "none";

    // Check if all questions have been answered
    let remainingQuestions = document.querySelectorAll(".popupMessage:not([style*='display: none'])").length;
    
 
    if (remainingQuestions === 0) {
        if (correctAnswers >= 5) { // Adjust the passing score if needed
            unlockSecretPage();
            successPopup()

            document.getElementById("completionMessage").style.display = "block";

        } else {
            failQuiz();
        }
    }
}



document.querySelectorAll(".popup, .popupWindow, .sidebar").forEach(el => {
    el.addEventListener("touchstart", function () {
        document.body.style.overflow = "hidden";
    });

    el.addEventListener("touchend", function () {
        document.body.style.overflow = "auto";
    });
});
