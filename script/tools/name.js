function put(){}
async function main( inpele, fullele ){
    var data = await ( await fetch( "/TouhouMobile/thname.json" ) ).json()
    fullele.classList.add( "hide" )
    inpele.oninput = function(){
        if( this.value.trim() == "" ){
            fullele.classList.add( "hide" )
        } else {
            fullele.classList.remove( "hide" )
            fullele.innerHTML = ""
            for( let object of data ){
                if( !!(object[ "中文名" ].indexOf( this.value )+1) ||
                !!(object[ "日语名" ].indexOf( this.value )+1) ||
                !!(object[ "英语名" ].indexOf( this.value )+1) ){
                    put = function( outele ){
                        outele.innerHTML = `${ "Chinese name : " + object[ "中文名" ] + 
                        "<br>Japanese name : " + object[ "日语名" ] +
                        "<br>English name : " + object[ "英语名" ] }`
                        fullele.classList.add( "hide" )
                    }
                    fullele.innerHTML += `<name onclick="put( out )">${object[ "英语名" ]}</name>`
                }
            }
        }
    }
}