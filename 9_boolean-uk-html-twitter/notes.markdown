CSS Custom Properties
CSS Reset

Global Styles
rh-sb
search icon bug fix - stay in search bar - use position relative
lh-sb

mobile start
wrapper grid
main section grid - user + tweet feed
header - main top a
user input - main top b
icons + buttons - main tip c
tweet feed - main bottom
mobile end

tablet start
wrapper grid layout for tablet
svg are inline - set to block or inline-block
position nav-grid in lh-sb first - extra div barrier
position nav icons in nav grid
style nav links for tablet mode
tablet end

desktop start
wrapper grid
rh-sb grid for desktop
lh-sb grid for desktop
nav icons and links for desktop
desktop end

aesthetic improvements
link stylings
All fonts arial except font awesome icons
user input box - positioning
news - what's happening heading

bug fixes resolve via media queries

bug fixes general

/_ Hide scrollbar for Chrome, Safari and Opera _/
.main\_\_bottom::-webkit-scrollbar {
display: none;
}

/_ Hide scrollbar for IE, Edge and Firefox _/
.main\_\_bottom {
-ms-overflow-style: none; /_ IE and Edge _/
scrollbar-width: none; /_ Firefox _/
}
