(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "ARE YOU SURE BISH?",
    "AWWWW",
    "WAS IT A MISTAKE",
    "PWEASE PWEASE",
    "*CRIES*",
    "ILL KIDNAP YOU",
    "ISTG  ILL KIDNAP YOU",
    "OKAY FINE I DONT NEED A YES",
    "JUST KIDDING PLEASE SAY YES",
    "HMPPHHHHHHHHH ❤️"
];

let messageIndex = 0;

function NoClick() {
    const noButton = document.querySelector('.no_button');
    const yesButton = document.querySelector('.yes_button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function YesClick() {
    window.location.href = "yes.html";
}
function showVideo() {
    const videoContainer = document.getElementById("videoContainer");
    const video = document.getElementById("apologyVideo");
    
    videoContainer.style.display = "block";
    video.play();  // autoplay when shown
}
function openFile() {
    // Opens internal HTML file in the same tab
    window.location.href = "index2.html"; // replace with your file name
    // OR to open in a new tab:
    // window.open("otherpage.html", "_blank");
}
