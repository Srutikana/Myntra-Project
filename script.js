const men_section = document.querySelector('.men');
const women_section = document.querySelector('.women');
const kids_section = document.querySelector('.kids');
const home_section = document.querySelector('.homeliving');
const beauty_section = document.querySelector('.beauty');

const men_section_items = document.querySelector('.men-section-items');
const women_section_items = document.querySelector('.women-section-items');
const kids_section_items = document.querySelector('.kids-section-items');
const home_section_items = document.querySelector('.home-section-items');
const beauty_section_items = document.querySelector('.beauty-section-items');

const container_ele = document.querySelector('.container');
var bodyele = document.getElementsByTagName("BODY");

men_section.onmouseover = () => {
    men_section_items.classList.remove('visibility');
}
men_section.onmouseout = () => {
    men_section_items.classList.add('visibility');
} /* men section ends here */

women_section.onmouseover = () => {
    women_section_items.classList.remove('visibility');
}
women_section.onmouseout = () => {
    women_section_items.classList.add('visibility');
} /* women section ends here */

kids_section.onmouseover = () => {
    kids_section_items.classList.remove('visibility');
}
kids_section.onmouseout = () => {
    kids_section_items.classList.add('visibility');
} /* kids section ends here */

home_section.onmouseover = () => {
    home_section_items.classList.remove('visibility');
}
home_section.onmouseout = () => {
    home_section_items.classList.add('visibility');
} /* home and living ends here */

beauty_section.onmouseover = () => {
    beauty_section_items.classList.remove('visibility');
}
beauty_section.onmouseout = () => {
    beauty_section_items.classList.add('visibility');
}

const subdomain = 'demo'; // Replace with your custom subdomain
const frame = document.getElementById('frame');
const buttonContainer = document.getElementById('buttonContainer');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const iframeContainer = document.getElementById('iframeContainer');

// function openFullscreen() {
//     fullscreenOverlay.style.display = 'block';
//     iframeContainer.style.display = 'block';
//     frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;
//     buttonContainer.style.display = 'none';
// }
function openFullscreen() {
    document.getElementById("fullscreenOverlay").style.display = "block";
    document.getElementById("iframeContainer").style.display = "block";
    document.getElementById("buttonContainer").style.display = "none";
    // Adjust iframe source as needed
     frame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`;
}
function closeFullscreen() {
    document.getElementById("fullscreenOverlay").style.display = "none";
    document.getElementById("iframeContainer").style.display = "none";
    document.getElementById("buttonContainer").style.display = "flex";
    document.getElementById("frame").src = ''; // Clear iframe src
}

window.addEventListener('message', (event) => {
    if (event.origin !== `https://${subdomain}.readyplayer.me`) {
        return;
    }
    const json = parse(event);

    if (json?.source !== 'readyplayerme') {
        return;
    }

    // Get avatar GLB URL
    if (json.eventName === 'v1.avatar.exported') {
        console.log(`Avatar URL: ${json.data.url}`);
        document.getElementById('avatarUrl').innerHTML = `Avatar URL: ${json.data.url}`;
    }

    // Get user id
    if (json.eventName === 'v1.user.set') {
        console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
    }
});

function parse(event) {
    try {
        return JSON.parse(event.data);
    } catch (error) {
        return null;
    }
}
function openOOTDPage() {
    window.location.href = 'ootd.html';
}
