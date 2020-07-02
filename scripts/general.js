$(".hBack").on("click", function(e){
  e.preventDefault();
  window.history.back();
});

if (localStorage.getItem('name')) {
  //alert(localStorage.getItem('name'))
} else {
  //alert('no estas logeado')
}
