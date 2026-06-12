// // Closures rate limiter 

// function ClickLimiter(){
//     let a = 0;
//     isBlocked = false;
//     return function count(){
//         if (isBlocked) {
//             console.warn("Please wait, you are temporarily blocked!");
//             return; 
//         }

//         if (a < 5){
//             a++;
//             console.log(`Clicked : ${a} times`);
//         }
//         else{
//             isBlocked = true;
//             console.warn("Limit Exceeded ! Try again after 1 min !");
//             setTimeout(()=>{
//                 a = 0,
//                 isBlocked = false;
//                 console.log("1 min passed ! You can Click again")
//             },(1000*60))
//         }
//     }
// }

// let click = ClickLimiter();  

const toast = (() => {
    // A cache to store wrappers for different positions so we don't recreate them needlessly
    const wrappers = {};

    // Tailwind coordinate classes for each position
    const positionClasses = {
        'top-left': 'top-4 left-4 items-start',
        'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
        'top-right': 'top-4 right-6 items-end',
        'bottom-left': 'bottom-10 left-0 items-start',
        'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2 items-center',
        'bottom-right': 'bottom-10 right-6 items-end'
    };

    const colors = {
        info: 'bg-blue-600 text-white',
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white'
    };

    // Helper function to get or create a wrapper for a specific position
    const getWrapper = (position) => {
        if (wrappers[position]) return wrappers[position];

        const wrapper = document.createElement('div');
        const coordClass = positionClasses[position] || positionClasses['top-right']; // Default to top-right
        
        // Stack upside down if it's a bottom-aligned toast container
        const stackDirection = position.startsWith('bottom') ? 'flex-col-reverse' : 'flex-col';

        wrapper.className = `toast-wrapper fixed ${coordClass} z-50 flex ${stackDirection} gap-3 pointer-events-none`;
        document.body.appendChild(wrapper);
        
        wrappers[position] = wrapper;
        return wrapper;
    };

    // Added 'position' as the 4th parameter
    return (message, type = 'info', duration = 3500, position = 'top-right') => {
        const wrapper = getWrapper(position);

        const toastEl = document.createElement('div');
        // Added 'pointer-events-auto' so buttons remain clickable inside a pass-through wrapper
        toastEl.className = `toast ${colors[type] || colors.info} rounded-lg p-4 shadow-lg transition-opacity duration-200 opacity-100 pointer-events-auto`;
        toastEl.innerHTML = `
            <div class="flex items-start justify-between gap-3">
                <div class="space-y-1">
                    <p class="font-semibold">${type.charAt(0).toUpperCase() + type.slice(1)}</p>
                    <p class="text-sm">${message}</p>
                </div>
                <button class="toast-close text-white text-xl leading-none hover:opacity-70" aria-label="Close">&times;</button>
            </div>
        `;

        wrapper.appendChild(toastEl);

        const removeToast = () => {
            toastEl.classList.add('opacity-0');
            setTimeout(() => toastEl.remove(), 200);
        };

        toastEl.querySelector('.toast-close').addEventListener('click', removeToast);
        setTimeout(removeToast, duration);
    };
})();

// document.addEventListener('DOMContentLoaded', () => {
//     toast('Hi how are you ?', 'error', 4800);
// });

// // Top Right (Default)
// toast('Success! Task completed.', 'success'); 

// Top Left
// toast('System update available.', 'info', 4000, 'top-left');

// Bottom Center
toast('Connection lost. Retrying...', 'error', 5000, 'top-center');
tm1 = setTimeout(() => {
    toast('HAlwa Sarkar. Retrying...', 'success', 5000, 'top-center');
}, 1000);
 // Clearing the timeout to prevent the first toast from showing up
tm2 = setTimeout(() => {
    toast('Bihar ka launda. Retrying...', 'info', 5000, 'top-center');
}, 2000);
tm3 = setTimeout(() => {
    toast('Amen. Retrying...', 'error', 5000, 'top-center');
}, 3000);

