/* =========
  Adding Rel
  Add the rel attribute for Bloggers
  This Code is Licensed by Will-Myers.com
========== */

(function(){

  function initGenie() {
    let sponsoredLinks = document.querySelectorAll('[href*="#rel=sponsored"]'),
        noFollowLinks = document.querySelectorAll('[href*="#rel=nofollow"]');
        
    for (let el of sponsoredLinks) {
      let href = el.getAttribute('href');
      
      el.href = href.replace('#rel=sponsored', '');
      el.setAttribute('rel', 'sponsored');
    }
    
    for (let el of noFollowLinks) {
      let href = el.getAttribute('href');
      
      el.href = href.replace('#rel=nofollow', '');
      el.setAttribute('rel', 'nofollow');
    } 
  }

  initGenie();

  /*For Gallery Lightboxes*/
  let lightboxes = document.querySelectorAll('.js-gallery-lightbox-opener');
  function manipulateString(str) {
    const container = document.createElement('div');
    container.innerHTML = str;
  
    let sponsoredLinks = container.querySelectorAll('[href*="#rel=sponsored"]'),
        noFollowLinks = container.querySelectorAll('[href*="#rel=nofollow"]');
        
    for (let el of sponsoredLinks) {
      let href = el.getAttribute('href');
      
      el.href = href.replace('#rel=sponsored', '');
      el.setAttribute('rel', 'sponsored');
    }
    
    for (let el of noFollowLinks) {
      let href = el.getAttribute('href');
      
      el.href = href.replace('#rel=nofollow', '');
      el.setAttribute('rel', 'nofollow');
    } 
  
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
