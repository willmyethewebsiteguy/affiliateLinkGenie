/* =========
  Adding Rel
  Add the rel attribute for Bloggers
  This Code is Licensed by Will-Myers.com
========== */

(function(){

  function initGenie(container = document) {
    const links = container.querySelectorAll('a[href*="#rel="]'); 
    
    for (let el of links) {
      let href = el.getAttribute('href');
      let newRel = [];
  
      // Check and handle sponsored
      if (href.includes('#rel=sponsored')) {
        href = href.replace('#rel=sponsored', '');
        newRel.push('sponsored');
      }
  
      // Check and handle nofollow
      if (href.includes('#rel=nofollow')) {
        href = href.replace('#rel=nofollow', '');
        newRel.push('nofollow');
      }
  
      // Set the cleaned href back to the element
      el.href = href;
  
      // Set the new rel if there were any changes
      if (newRel.length > 0) {
        el.setAttribute('rel', newRel.join(' '));
      }
    }
  }
  
  initGenie();

  window.wmAffiliateGenie = initGenie;

  /*For Gallery Lightboxes*/
  let lightboxes = document.querySelectorAll('.js-gallery-lightbox-opener');
  function manipulateString(str) {
    const container = document.createElement('div');
    container.innerHTML = str;

    initGenie(container);

    const modifiedString = container.innerHTML;
    return modifiedString;
  }

  for (let box of lightboxes) {
    let description = box.getAttribute('data-description');
    if (!description) continue;
    box.setAttribute('data-description', manipulateString(description))
  }

  //for other plugins
  document.addEventListener('lazy-summaries:refresh', function(e){
    initGenie();
  });
  document.addEventListener('custom-filter:afterFilter', function(e){
    initGenie();
  });
  document.addEventListener('wmSectionLoader:loaded', function(e){
    initGenie();
  });
  
}());
