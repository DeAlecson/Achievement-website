document.addEventListener('DOMContentLoaded', function() {
    const passwordContainer = document.getElementById('password-container');
    const mainContent = document.getElementById('main-content');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const accessMessage = document.getElementById('access-message');
    const backgroundMusic = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const muteImg = document.getElementById('mute-img');
    const loaderWrapper = document.getElementById('loader-wrapper');
    const loader = document.getElementById('loader');
    const loadText = document.getElementById('load-text');
    const correctPassword1 = "yoursemistranger";
    const correctPassword2 = "mywholeworld";

    let resourceLoaded = false; // Flag to check resource loading
    
    function updateLoader(progress) {
        loader.style.width = `${progress}%`;
        loadText.textContent = `Loading... ${progress}%`;
        if (progress >= 100) {
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
                resourceLoaded = true;
                // Removed the incorrect check for password here
            }, 500);
        }
    }

    setTimeout(() => {
        updateLoader(100);
    }, 2000);

    passwordSubmit.addEventListener('click', function() {
        const enteredPassword = passwordInput.value;
    
        if ((enteredPassword === correctPassword1 || enteredPassword === correctPassword2) && resourceLoaded) {
            passwordContainer.style.display = 'none';
            mainContent.style.display = 'block';
            playAudio();
        } else {
            accessMessage.textContent = "Access Denied. Please try again.";
            accessMessage.style.color = 'red';
        }
    });
    
    function playAudio() {
        backgroundMusic.play().catch(error => {
            console.error('Error playing audio:', error);
            alert('Please interact with the page to start audio playback.');
        });
    }

    muteButton.addEventListener('click', function() {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            muteImg.src = "Images/unmute.png";
        } else {
            backgroundMusic.muted = true;
            muteImg.src = "Images/mute.png";
        }
    });

    const doodles = document.querySelectorAll('.doodle');
    const modal = document.getElementById('memory-modal');
    const modalTitle = document.getElementById('memory-title');
    const modalImage = document.getElementById('memory-image');
    const modalDescription = document.getElementById('memory-description');
    const closeBtn = document.querySelector('.close');

    doodles.forEach(function(doodle) {
        const img = doodle.querySelector('img');
        const titleSpan = doodle.querySelector('.doodle-title') || document.createElement('span');
        
        if (!doodle.querySelector('.doodle-title')) {
            titleSpan.textContent = "???";
            titleSpan.className = "doodle-title";
            doodle.appendChild(titleSpan);
        }

        img.addEventListener('click', function() {
            const memoryData = doodle.dataset.memory;
            const memory = memories[memoryData];

            if (memory) {
                if (img.src.includes('hidden.png')) {
                    img.src = memory.image;
                    titleSpan.textContent = memory.title;
                }
                modalTitle.textContent = memory.title;
                modalImage.src = memory.image;
                modalDescription.textContent = memory.description;
            } else {
                const requirement = doodle.dataset.requirement;
                modalTitle.textContent = "Locked Achievement";
                modalImage.src = "Doodles/locked.png";
                modalDescription.textContent = `Unlock Requirement: ${requirement}`;
            }

            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const memories = {
        memory1: {
            title: "First Date",
            image: "Memories/memory1.png",
            description: "The beginning, the start, the day we got to know each other. Our first kiss and the first time we shared a drink together."
        },
        memory2: {
            title: "Foodie Hunters",
            image: "Memories/memory2.png",
            description: "We sought for the best cuisine our countries has to offer, your hokkien mee and my banh mi!"
        },
        memory3: {
            title: "Party All Night",
            image: "Memories/memory3.png",
            description: "Our first clubbing experience together with drinking and dancing!"
        },
        memory4: {
            title: "With our phones",
            image: "Memories/memory4.png",
            description: "The hours we shared together in our daily calls, we have spent a total of five hundred hours on video calls, cherishing every moment of it."
        },
        memory5: {
            title: "It's Jul!",
            image: "Memories/memory5.png",
            description: "Hello I am Jul! I am Tiffy's beloved pineapple pal! She takes care of me as much as she could, i'm always clean and i smell like mom!"
        },
        memory6: {
            title: "Metaverse Dating",
            image: "Memories/memory6.png",
            description: "We went on adventures in Minecraft and dated virtually. Don't Starve? You're always full! Somebody who plays competitive in Strategy games like Catan and Letter League!"
        },
        memory7: {
            title: "Our Worlds",
            image: "Memories/memory7.png",
            description: "We got to see each other's worlds, understand our culture and learn about each other through the food we eat."
        },
        memory8: {
            title: "Hanabi no Hana",
            image: "Memories/memory8.png",
            description: "It means Fireworks and Flowers, We got to watch the fireworks together."
        },
        memory9: {
            title: "Beaches",
            image: "Memories/memory9.png",
            description: "We got to go to a beach together, holding hands, looking towards the sunset, walking along the coast."
        },
        memory10: {
            title: "Bars",
            image: "Memories/memory10.png",
            description: "We've been to amazing bars together, my top being Jigger and Pony and notably Rappu."
        }
    };
});
