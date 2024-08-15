var inp = document.getElementById( "inp" ),
  get = document.getElementById( "get" ),
  img = document.getElementById( "img" ),
  dow = document.getElementById( "d" ),
  share = document.getElementById( "share" )
  pixiv_img_box = document.getElementById("pixiv-img-box")
  pixiv_img_box_img = document.querySelector("#pixiv-img-box img")
  pixiv_img_box_menu = document.getElementById("pixiv-img-box-menu")
img.onload = function() {
  pixiv_img_box.style.height = img.clientHeight + 'px'
};
get.onclick = function(){
    img.src = `https://pixiv.re/${inp.value}.png`
    dow.onclick = function(){
      open(`https://pixiv.re/${inp.value}.png`)
    }
    img.style.visibility = "visible"
    img.title = inp.value
    dow.download = `${inp.value}.png`; }
share.onclick = function(){
  if (navigator.clipboard) { // 这个API必须要HTTPS支持
    navigator.clipboard.writeText( img.src )
    swal({
      text : "Copy success",
      icon : "success",
      button : "yeh"
    })
  } else {
    swal({
      text : "复制失败，不支持的环境(请手动复制链接)w\n" + img.src,
      icon : "error",
      button : "ok"
    })
  }
}

pixiv_img_box.onmouseover = function(){
  if (pixiv_img_box_img.style.visibility == "visible")
  {
    pixiv_img_box_menu.style.height = "40px"
  }
}
pixiv_img_box.onmouseout = function(){
  pixiv_img_box_menu.style.height = "0px"
}