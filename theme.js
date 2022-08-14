/** 
 * Title: theme.js
 * Author: Jamal Eddine Damir
 * Date: august 14 2022
 * Description: Source code that stores user selected theme to local storage 
                and sets default theme for when the user revisits the page.
 * Source: Copied code from class web-330 GitHub Repository.
*/





/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
 */
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}