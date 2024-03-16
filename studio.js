let div = document.querySelectorAll('div');
let navlinks =document.querySelectorAll('div  a');

window.onscroll = () => {
  div.forEach(div => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetheight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navlinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('div a [href*=' + id +']').classList.add
            ('active');
        });
    };
  });
};