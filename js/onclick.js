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