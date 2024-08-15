var list = document.getElementById( "list" ),
  urls = [
    {
      // 网站名称
      name : "THBWiki MainSite",
      // 网站 URL
      url : "https://thwiki.cc/",
      // 是否使用网站favicon
      favicon : true,
      // 是不是TH网站
      isth : true
    },
    {
      name : "THBWiki SecondSite",
      url : "https://thbwiki.cc/",
      favicon : true,
      isth : true
    },
    {
      name : "Touhou Wiki",
      url : "https://touhouwiki.net/",
      favicon : true,
      isth : true
    },
    {
      name : "喵玉殿( a touhou bbs by Chinese TH fans )",
      url : "https://bbs.nyasama.com/",
      favicon : "https://bbs.nyasama.com/favicon.ico",
      isth : true
    }
  ]
function fav( url ){
    return url.slice( 0, url.lastIndexOf( "/" ) + 1 ) + "favicon.png"
}
list.innerHTML = ( function(){
    var back = []
    urls.forEach( function( value, index ){
        back.push( 
        `
        <div style="align-items:center;display: flex;height:35px">
          ${typeof value.favicon === "boolean" ?
            value.favicon ?
            `<img src="${fav(value.url)}" width="32px" height="32px"/> ` : "• "
          : typeof value.favicon === "string" ?
            `<img src="${value.favicon}" width="32px" height="32px"/> ` : "• "}
          <a href="${value.url}">${value.isth ? "[ 东方Project ] " : ""}${value.name}</a>
        </div>
      ` 
    )
    } )
    return back.join( "" )
} )()