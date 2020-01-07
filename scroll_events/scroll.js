const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");
function obCallback(payload) {
  if (payload[0].intersectionRatio > 0.9) {
    button.disabled = false;
    ob.unobserve(terms); //clean up
  } else {
    button.disabled = true;
  }
}
const ob = new IntersectionObserver(
  obCallback,
  {
    root: terms, // this is the object it's observing
    threshold: [0.9]
  } // 90% on the page
); //doesn't do anything yet, it's just a watcher you haven't called
ob.observe(terms.lastElementChild); //observing for the HR tag

//*****************************************
//OLD WAY TO DO THIS:
// terms.addEventListener('scroll', function(event){
//         // console.log(event.currentTarget);
//         console.log(event.currentTarget.scrollTop);
//         console.log(event.currentTarget.scrollHeight);
// })

//*****************************************
//IF YOU ARE GOING TO ADD THIS TO AN ENTIRE PROJECT NEST THE ABOVE IN HERE:

// function scrollToAccept (){
//         if(!terms){
//                 console.log('no terms and agreements on this page')
//                 return; //quit this doesn't exist on the page
//         }
// }
