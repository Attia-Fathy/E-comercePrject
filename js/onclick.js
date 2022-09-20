function SearchBar() {
    var search = document.getElementById("search-main-menu");
    if (search.style.display === "block") {
        search.style.display = "none";
    } else {
        search.style.display = "block";
    }
}

const pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password");
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                })
            }
        })
    })
})

const category = [...document.querySelectorAll('.cate-link')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

category.forEach((item, i) => {
    let containerDimensions2 = item.getBoundingClientRect();
    let containerWidth2 = containerDimensions2.width;

    nxtBtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth2;
    })

    preBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth2;
    })
})
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