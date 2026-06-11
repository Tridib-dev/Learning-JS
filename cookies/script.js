const media_query = window.matchMedia("(prefers-color-scheme: dark)");

const isLight = document.cookie.includes("theme=light");
const isDark = document.cookie.includes("theme=dark");

function applyTheme(theme){
    document.body.setAttribute("data-theme", theme);
}

if (isLight ||isDark) {

    if (isLight){
        applyTheme("light");
    }
    else{
        applyTheme("dark");
    }

}
else{

    // Apply current system theme immediately
    if (media_query.matches){
        applyTheme("dark");
    }
    else{
        applyTheme("light");
    }

    // Listen for future system theme changes
    media_query.addEventListener("change", (e) => {

        if (e.matches){
            applyTheme("dark");
        }
        else{
            applyTheme("light");
        }

    });
}

const btn = document.querySelector("#toggle-btn")
btn.addEventListener("click",()=>{
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme == "light"){
        applyTheme("dark");
        document.cookie = "theme=dark";
    }
    else{
        applyTheme("light");
        document.cookie = "theme=light";
    }
})