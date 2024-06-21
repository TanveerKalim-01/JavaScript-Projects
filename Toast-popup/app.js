const showToastBtn = document.querySelector('.show-toast-btn');
const toastInp = document.querySelector('.toast-inp');
const toastType = document.querySelector('.toast-type');
const duration = document.querySelector('#duration');
const tcTopLeft = document.querySelector('.tc.top-left');
const tcTopRight = document.querySelector('.tc.top-right');
const tcBottomRight = document.querySelector('.tc.bottom-right');
const tcBottomLeft = document.querySelector('.tc.bottom-left');
const horizonValue = document.querySelector('.horizontal');
const verticalValue = document.querySelector('.vertical');

toastInp.addEventListener('input', () => {
    if(toastInp.value.length) {
        showToastBtn.disabled = false 
    }else {
        showToastBtn.disabled = true
    }
})



showToastBtn.addEventListener('click', () => {
    const newToastMsg = document.createElement('span');
    newToastMsg.innerText = toastInp.value;

    const newToastCloseBtn = document.createElement('span');
    newToastCloseBtn.innerText = " ✕";
    newToastCloseBtn.classList.add('close-btn');

    const newToast = document.createElement('div');
    newToast.classList.add('toast', toastType.value);
    newToast.appendChild(newToastMsg);
    newToast.appendChild(newToastCloseBtn);

    // Determine toast position
    switch (`${verticalValue.value}-${horizonValue.value}`) {
        case "top-left":
            newToast.classList.add("out-left");
            tcTopLeft.appendChild(newToast);
            break;

        case "top-right":
            newToast.classList.add("out-right");
            tcTopRight.appendChild(newToast);
            break;

        case "bottom-left":
            newToast.classList.add("out-left");
            tcBottomLeft.appendChild(newToast);
            break;

        case "bottom-right":
            newToast.classList.add("out-right");
            tcBottomRight.appendChild(newToast);
            break;

    }

    // Automatically hide the toast after the specified duration
    setTimeout(() => {
        if (newToast.classList.contains('out-left')) {
            newToast.classList.replace('out-left', 'in-left');
        } else {
            newToast.classList.replace('out-right', 'in-right');
        }

        // Delay before removing the toast to allow animation to complete
        setTimeout(() => {
            newToast.remove();
        }, 500); // Adjust the delay if needed
    }, parseInt(duration.value) * 1000);

    // Close button functionality
    newToastCloseBtn.addEventListener('click', () => {
        if (newToast.classList.contains('out-left')) {
            newToast.classList.replace('out-left', 'in-left');
        } else {
            newToast.classList.replace('out-right', 'in-right');
        }

        // Delay before removing the toast to allow animation to complete
        setTimeout(() => {
            newToast.remove();
        }, 500); // Adjust the delay if needed
    });
});
