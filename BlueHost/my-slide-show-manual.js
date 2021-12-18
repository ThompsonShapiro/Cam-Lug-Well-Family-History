    var slideIndex = 1;
    showDivs(slideIndex);
    function plusDivs(n) { showDivs(slideIndex += n);
    }
    function showDivs(n) { var i; var x =
    document.getElementsByClassName("mySlides"); if (n &gt; x.length)
    {slideIndex = 1} if (n &lt; 1) {slideIndex = x.length} ; for (i = 0; i &lt;
    x.length; i++) { x[i].style.display = "none"; }
    x[slideIndex-1].style.display = "block";
    }