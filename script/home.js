var ele = document.getElementById( "links" ),
  list = [
    [ "TouhouMobile Android apps", "javascript:swal( 'sorry', 'I am not ready international cloud', 'error' ).then(()=>(window.location.href='../TouhouMobile/game.html'))" ],
    [ "TouhouMobile front end cloud", "./cloud.html" ],
    [ "TouhouMobile Pixiv Image cat", "./pixiv.html" ],
    [ "TouhouMobile API Documentw", "./help.html" ],
    [ "TouhouMobile Tools", "./tools/" ],
    [ "TouhouMobile Links", "./friends.html" ],
    [ "TouhouDog CN mirror", "https://cloud.lilywhite.cc/" ]
  ]

ele.innerHTML = ( function(){
  var values = []
  for( let a of list ){
    values.push( `<a href="${a[1]}">• ${a[0]}</a>` )
  }
  return values.join( "<br>" )
} )( )