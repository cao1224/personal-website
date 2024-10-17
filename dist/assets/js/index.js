function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// document.addEventListener('DOMContentLoaded', (event) => {
//     const bubbles = document.querySelectorAll('.bubble');

//     setInterval(() => {
//         bubbles.forEach(bubble => {
//             bubble.style.top = Math.floor(Math.random() * 100) + '%';
//             bubble.style.left = Math.floor(Math.random() * 100) + '%';
//         });
//     }, getRandomNumber(1000, 2000)); /* Update positions every 2 seconds */
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     const bubbles = document.querySelectorAll('.bubble');
//     let attempts = 0;

//     const setPosition = (bubble) => {
//         if (bubble.matches(':hover')) {
//             return;
//         }
        
//         let bubbleRect = bubble.getBoundingClientRect();

//         let randomTop = Math.random() * (window.innerHeight - bubbleRect.height);
//         let randomLeft = Math.random() * (window.innerWidth - bubbleRect.width);

//         bubble.style.top = `${randomTop}px`;
//         bubble.style.left = `${randomLeft}px`;

//         // Check for collisions with other bubbles
//         for (let otherBubble of bubbles) {
//             if (otherBubble !== bubble) {
//                 let otherBubbleRect = otherBubble.getBoundingClientRect();
//                 let dx = otherBubbleRect.left - bubbleRect.left;
//                 let dy = otherBubbleRect.top - bubbleRect.top;
//                 let distance = Math.sqrt(dx * dx + dy * dy);
//                 let minDistance = (bubbleRect.width + otherBubbleRect.width) / 2;

//                 if (distance < minDistance) {
//                     // The bubbles are colliding
//                     if (attempts < 100) {
//                         // Try to find another position
//                         attempts++;
//                         setPosition(bubble);
//                     }
//                     break;
//                 }
//             }
//         }
//     };

//     // Set initial position
//     bubbles.forEach(setPosition);

//     setInterval(() => {
//         bubbles.forEach(setPosition);
//         attempts = 0;
//     }, 2000); // Update positions every 2 seconds
// });



document.getElementById('about-me-btn').addEventListener('click', function() {document.getElementById('about').scrollIntoView({ behavior: 'smooth' });})