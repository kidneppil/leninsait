function slideSmena(sliderID, slideDirection){
    var currentSlider=document.getElementById(sliderID);
    var slides = currentSlider.getElementsByClassName('sliderSlide');
    for(var i=0; i<slides.length; i++){
        if(slides[i].classList.contains('sliderSlideActive')){
            slides[i].classList.remove('sliderSlideActive');
            slides[i].classList.add('sliderSlideInactive');
            if(slideDirection == 'left'){
                if(i==0){
                    i = slides.length-1;
                }
                else{
                    i--;
                }
            }
            else if(slideDirection == 'right') {
                if(i == slides.length-1){
                    i = 0;
                }
                else{
                    i++;
                }
            }
            slides[i].classList.remove('sliderSlideInactive');
            slides[i].classList.add('sliderSlideActive');
            break;
        }
    }   
}