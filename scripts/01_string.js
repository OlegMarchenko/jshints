
const name = 3.14;
const name2 = "Inna";
const name3 = 'Anna';
const name4 = `${name} ${name2}`;


console.log(name3);


/* glightbox
 */
var glightbox = GLightbox({
  loop: true,
  selector: ".glightbox",
  openEffect: "zoom",
  closeEffect: "fade",
  startAt: 0,
  closeOnOutsideClick: false,
  zoomable: true,
  height: "auto",
  width: "100vw",
  height: "100vh"
});