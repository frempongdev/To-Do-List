export const clearBtn = document.querySelector('.clear-all');

clearBtn.addEventListener('click', () =>{
    localStorage.clear();
    window.location.reload();
})