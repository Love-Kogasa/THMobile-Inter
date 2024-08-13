var listele = document.getElementById( "tools" ),
  list = [ 
    [ "THNames", "查询角色的三语名称( 中 英 日 )", "./name.html" ]
  ]
listele.innerHTML = (function(){
    var html = ""
    for( let tool of list ){
        html += `<tool>
          <name><a href="${tool[2]}" style="color : #FFF;" class="none-shadow">${tool[0]}</a></name>
          <info>${tool[1]}</info>
        </tool>`
    }
    return html
})()
