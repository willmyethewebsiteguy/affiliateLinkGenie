/* =========
  Adding Rel
  Add the rel attribute for Bloggers
  This Code is Licensed by Will-Myers.com
========== */

(function(){
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
}());