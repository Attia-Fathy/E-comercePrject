const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// const pwShowHide = document.querySelectorAll(".showHidePw"),
//     pwFields = document.querySelectorAll(".password");
// pwShowHide.forEach(eyeIcon => {
//     eyeIcon.addEventListener("click", () => {
//         pwFields.forEach(pwField => {
//             if (pwField.type === "password") {
//                 pwField.type = "text";

//                 pwShowHide.forEach(icon => {
//                     icon.classList.replace("fa-solid fa-eye-slash", "fa-solid fa-eye");
//                 })
//             } else {
//                 pwField.type = "password";

//                 pwShowHide.forEach(icon => {
//                     icon.classList.replace("fa-solid fa-eye", "fa-solid fa-eye-slash");
//                 })
//             }
//         })
//     })
// })