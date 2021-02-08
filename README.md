# Skin Goals

A website for information and advice on skin care. Open to all viewers but aiming especially at the young female population. The website provides general information on matters related to skin care and accepts queries from the public via an online contact form. A few inexpensive skin care products are recommended and displayed on the website but there is no marketing affiliation of any kind.

Website goal:
* To share the website owner's knowledge on skin care topics, to provide advice on skin blemishes treatment and recommend effective, inexpensive skin care products.

Users' goal:
* Obtain information and useful tips on skin care and treatments, as well on recommendation on skin care products.

---

## UX
* The website consists of one page, subdivided into three sections, enclosed in stacked, bordered frames, each with its own colour background:
* * an introductory text on the matter of skin problems;
* * a How-To section with tips for specific issues and treatments;
* * a display of recommended products
* Predominantly fair-pink colour scheme.
* Navbar on top of the page with links to the page sub-sections.
* Hero image immediately under the navbar; it contains at its centre a text that briefly states the website mission.
* Transparent bubble background animations rising from the bottom of the page travel to the top of the page swinging side to side.
* Easy to fill forms to contact the website owner.
* The introductory section (called Beginner's Guide) displays a woman's face picture in its right half from large screens onwards. 
* How-To section with clickable list items that open, on click, and with a transition effect, little boxes with scrollable text inside of them. 
* Recommended products section with product image thumbnails that open, on click, full-page modals with product images and descriptions. These thumbnails are aligned in a screen-responsive bootstrap row and column table.

---

## User stories

As a .. | I want to .. | So I can ..
 --- | --- | --- 
website owner|share my knowledge and tips|help viewers learn how to overcome / mitigate their skin problems
website visitor|obtain useful information on skin treatment matters|learn how to cure my own or somebody else's skin blemishes
website visitor|contact the website owner on issues not openly addressed on the website|get more detailed advice on my specific issues
website owner|review and respond to advice requests through the contact form|be able to provide better, tailored advice to single viewers
website visitor|obtain information on recommended, cheap skin care products|know how to shop products of good value

---

## Wireframes

* [Desktop page](https://github.com/PaoloAlbanese/MP1Test/blob/master/images/MP1%20WF/Desktop%20page.png?raw=true)
* [Tablet Page](https://github.com/PaoloAlbanese/MP1Test/blob/master/images/MP1%20WF/tablet%20page.png?raw=true)
* [Mobile page](https://github.com/PaoloAlbanese/MP1Test/blob/master/images/MP1%20WF/mobile%20page.png?raw=true)

---

## Features
* A navbar at the top of the page, with links to the page's sub-sections.
* * On small to medium screens all links will collapse to a button on the top-right corner, with the exception of the website's title, Skin Goals, which serves as Home link (redirecting to the same page).
* * The links have a colour transition effect on mouse hover.
* * The How-To link is in reality split in:
* * * a link to the How-To section itself, reachable by clicking on the "How To.." wording, and
* * * a dropdown menu, opened by clicking on the inverted triangle symbol ("&#9660;"), containing links to specific parts of the "How-To" section. 
* * * * each of these links will lead to and open a box in the How-To section, which in turn contains a scrollable text.
* Under the navbar an hero image stretches the full width of the page;
* * In its centre a frame with a replica of the hero image (to give the impression of a transparent background) contains a text with a brief description of the website's mission. The background of the inside frame needed to be filled with a picture to prevent the bubble animations from being visible behind the text and impair readability.
* The transparent bubble animations rise slowly from the bottom of the page and slide under each section's semi opaque background, still being vaguely detectable.
* The page's sub-sections stack up, each centred horizontally and stretching along with the browser window width up to 1400px. 
* The first section from the top, "Beginners' Guide", contains a textual introduction to the main source of most skin problems, that is, oily skin. * * On large screen and onwards, a picture of a woman's appears to the right of the text
* The middle section, "How To...", contains a list of clickable lines of text and a contact form.
* * The list and the form stack up, up to medium screens, and stand side by side from large screens onwards.
* * Each item on the list opens, underneath itself, a box with scrollable text.
* * On the top right corner, an "X" can be clicked to close the box;
* * The box can also be closed by clicking again on the same line of text that opened it.
* * On the bottom right corner of the box a downward arrow indicates that the text can be scrolled down further.
* * * On click, same downward arrow scrolls the text down to the end.
* * The downward arrow is replaced by an upward arrow once the text is fully scrolled down.
* * * On click, the upward arrow will scroll the text back up to the start.
* The "Recommended Products" section contains thumbnails of recommended consumer products.
* * These thumbnails are organized in a screen responsive bootstrap row-and column grid system.
* * On hover, the thumbnail pictures have semi-opaque transition effect.
* * On click, each thumbnail opens a page-wide modal with the products image and brief description.
* * The modal is closed by clicking on the "X" in the top right corner.
* At the bottom of the page, a page wide footer contains:
* * a link back to the top of page and
* * some social links' icons

---

## Technologies used
* Gitpod development environment
* HTML5
* CSS3, Bootstrap 4 & 5
* Fontawesome icon library
* Javascript, Jquery

---

## Cloning this project from Github to your Gitpod account.
This project's repository can be found [here](https://github.com/PaoloAlbanese/MP1Test).
Please access the repository on a Chrome browsers complete with [gitpod extension](https://www.gitpod.io/docs/browser-extension/).
By clicking the green "Gitpod" button in the top right corner of the repository, you will create a new workspace from the repository's code in your environment.
The live deployed website can be found [here](https://paoloalbanese.github.io/MP1Test/).

---

## Testing
* Testing consisted in repeatedly running loading the web page in the Web Preview, toggling screen size in inspect mode, and to let any glitches come to surface.
* Stand-out background colours were temporarily assigned to divs and other HTML elements to visually identify them in Preview.
* Print and console.log statement where placed in the code to locate where any error was/wasn't occurring. 
* My own girlfriend viewed the web page and tested its functionalities.

---


## Acknowledgments
* My unnamed girlfriend for:
* * providing the inspiration for the website;
* * sourcing some appropriate content;
* * taking pictures of some her skin products;
* * giving advice on colour scheme;
* * testing the website for me;
* Inside Hero image text [Natalie Lukaitis](https://muckrack.com/natalie-lukaitis/articles), possibly misquoted by Muckrack.com;
* Beginner's guide text [foreo.com](https://www.foreo.com/mysa/need-know-oily-skin/);
* 'How to exfoliate' text, [womenshealthmag.com](https://www.womenshealthmag.com/beauty/a19775624/how-to-exfoliate-face/);
* 'How to moisturize' text, [birchbox.com](https://www.birchbox.com/guide/article/how-to-apply-face-moisturizer-properly-gif-guide);
* 'How to prevent oily skin' text, [prevention.com](https://www.prevention.com/beauty/skin-care/a28209367/how-to-get-rid-of-oily-skin/);
* Floating bubbles animations, [codes4education.com](https://codes4education.com/animated-bubbles-using-html-pure-css/);
* Hero Image, [silvarita](https://pixabay.com/photos/herbs-thyme-sage-rose-flowers-3141838/) on Pixabay;
* Woman's portrait image, [heblo](https://pixabay.com/illustrations/portrait-woman-knot-hair-face-2000925/) on Pixabay;
* Modal code taken and adapted from [W3schools](https://www.w3schools.com/howto/howto_css_modal_images.asp);
* Adaptive inside-hero-text background-image dimensions, mixing and adapting code from [W3Schools](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp),  [JavaScript Tutorial](https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=The%20method%20element.,and%20right%20of%20the%20viewport.);
* Jquery code to scroll up text automatically, from [Mahmoud Ibrahim](https://stackoverflow.com/questions/10744299/scroll-back-to-the-top-of-scrollable-div);  
* JS code to jump to href location, from [Dean Harding](https://stackoverflow.com/questions/3163615/how-to-scroll-html-page-to-given-anchor);
* Jquery code to scroll down text automatically, from [andsien](https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div);
* Jquery code to collapse navbar after click, from [Michael Coker](https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click);
---

## Notes to the Assessors:
* The Contact form is not functional, it's just there for show.
* I am sorry for the unhappy name of the repository, initially I planned to work on a test website first, but then I realized that would take away too much time unnecessarily. 


### Thank you for reading.