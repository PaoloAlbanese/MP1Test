function openModal(imgID, titleText) {
        // Get the modal
        var titleText = titleText
        var imgID = imgID;
        var modal = document.getElementById("myModal");
        var captionText = "";

        if (imgID == 'exfo') {
            captionText = "Clean & Clear Exfoliating Daily Wash<br>Available in all pharmacies and supermarkets<br>€3.99<br>A gentle cleanser which removes dirt, make up and dead skin cells without stripping your natural barrier. Mix with lukewarm water and apply all over face. Leaves skin feeling soft and smooth. Use twice daily, morning and night for best results."
        } else if (imgID == 'dualAct') {
            captionText = "Clean & Clear Oil-free Moisturiser<br>Available in all pharmacies<br>€4.49<br>A hydrating, smoothing moisturiser which helps balance the oil production and reduce the appearance of pores. Moisturiser is the most important product for tackling oily skin. This moisturiser has been proven to not overload the skin with oil. Use twice daily."
        } else if (imgID == 'blackH') {
            captionText = "Clean & Clear Black-head Clearing Daily Mask<br>Available in all pharmacies<br>€4.49<br>A smooth purifying mask which removes excess oil and clears pores. Apply to a clean dry face. Use twice weekly for best results."
        } else if (imgID == 'dunnPad') {
            captionText = "Dunnes Stores Cotton pads<br>Available in Dunnes Stores supermarkets<br>€0.70c<br>Cotton pads are a go-to for removing make up on any part of the face as they are gentle and easy to use. We recommend these for applying facial cleansers instead of face-cloths, facial brushes or towels as they retain bacteria which can spread around your face, causing breakouts."
        } else if (imgID == 'wipes') {
            captionText = "Clean & Clear Deep action Facial Wipes<br>Available in all pharmacies<br>€3.50<br>They are ideal for removing make up. Good to clean your face if you are in a rush."
        }

        // Get the image and insert it inside the modal - use its "alt" text as a caption


        var img = document.getElementById(imgID);
        var modalImg = document.getElementById("img01");
        var titlID = document.getElementById("modalTitle");
        var modalCaption = document.getElementById("caption");
 
        modal.style.display = "block";
        modalImg.src = img.src;
        titlID.innerHTML = titleText;

        modalCaption.innerHTML = captionText;
        // }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

    }



    // ----------------------Floating bubbles code, mixing and adapting code from W3Schools,  JavaScript Tutorial https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=The%20method%20element.,and%20right%20of%20the%20viewport.---------- 


// make the text at the centre of the hero image seem to have a transparanet background, avoiding the bubbles affecting readability
window.addEventListener("resize", heroBackMatch);
window.addEventListener("load", heroBackMatch);

function heroBackMatch(){
const heroX = document.getElementById('heroX');    
const rect = heroX.getBoundingClientRect();
const heroBack = document.getElementById('heroBack');
var heroXH = rect.height.toString();
var heroXW =rect.width.toString();

var sizeString = heroXW +"px "+ heroXH + "px";

heroBack.style.backgroundSize= sizeString;
 };
 

 // ----------------------Open How To nested list------------------------------------------------------------

function openList(howToList){
    var howLists = document.getElementsByClassName("colBackHow");
    for (i=0; i < howLists.length; i++){
        howLists[i].style.display="none"
    }
 var howToList = document.getElementById(howToList); 
 howToList.style.display="block";
 }

 function closeList(howToList){
     var howToList = document.getElementById(howToList); 
    howToList.style.display="none";
 }