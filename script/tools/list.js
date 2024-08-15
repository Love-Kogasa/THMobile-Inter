var listele = document.getElementById( "tool-list" ),
  list = [ 
    [ "THNames", "查询角色的三语名称( 中 英 日 )", "./name.html" ]
  ]
listele.innerHTML = (function(){
    var html = ""
    for( let tool of list ){
        html += `<li id="tool-item">
          <div id="name">
            <a href="${tool[2]}" class="none-shadow">${tool[0]}</a>
          </div>
          <div id="info">${tool[1]}</div>
        </li>`
    }
    return html
})()