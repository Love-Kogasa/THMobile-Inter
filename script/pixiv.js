var inp = document.getElementById( "inp" ),
  get = document.getElementById( "get" ),
  img = document.getElementById( "img" ),
  dow = document.getElementById( "d" ),
  share = document.getElementById( "share" )
get.onclick = function(){
    img.src = dow.href = `https://pixiv.cat/${inp.value}.png`
    dow.download = `${inp.value}.png`; }
share.onclick = function(){
    navigator.clipboard.writeText( img.src ).then( function(){
        if( img.src !== window.location.href ){
            swal({
              text : "Copy success(Use Pixiv.cat)w",
              icon : "success",
              button : "yes"
            })
        } else {
            swal({
              text : "Copy error",
              icon : "error",
              button : "yes"
            })
        }
    })
}