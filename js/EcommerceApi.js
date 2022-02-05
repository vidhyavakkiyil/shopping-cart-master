

$( document ).ready(function() {


    var url="http://185.151.4.167/EcomAPI/Api/Data/getProducts?iCategory=1"
    getCategory(url)
       var value=[]
    function getCategory(url){
        $.ajax({
            type: "GET",
            url: url,
            context: document.body,
            dataType: "json",
          success:function(res) {
            console.log(res)
            for(key in res) {
                if(res.hasOwnProperty(key)) {
                   value = res[key];
                  fetchHtml(value)
                }
              }
          },
          error:function(err){
            console.log(err)
          },
        });
    }
 

   $('#Language').click(function() {
      fetchHtml(value)
    });

    function fetchHtml(data){
      var Usrdata = document.querySelector('cursos__container');
        var category=[]
         var src =[]
         var language=$('#Language').val()
        for(let i=1;i<=data.length;i++){
          category +=data[i];
          if(language == "english"){
              document.getElementById('cursos__container').innerHTML = data.map(user => 
              `<div class="curso__item" id="curso_item">
              <img src=${user.sImagePath} class="imagen__curso" >
              <div class="info__card">
              <h5>${user.sName}</h5>          
               <span>${user.sShortDescription}</span>
               <span>${user.sLongDescription}</span>
               <span class="discount">${user.fPrice}</span> <span>${user.sCode}</span> </p>
                <a href="#" class="agregar-carrito" data-id=${user.iId}><i class="fa fa-cart-plus"></i>&nbsp;  Add to Cart</a>
              </div>
              </div>`
          ).join('')
          }else{
            document.getElementById('cursos__container').innerHTML = data.map(user => 
              `<div class="curso__item" id="curso_item">
              <img src=${user.sImagePath} class="imagen__curso" >
              <div class="info__card">
              <h5>${user.sAltName}</h5>              
               <span>${user.sAltShortDescription}</span>
               <span>${user.sAltLongDescription}</span>
               <span class="discount">${user.fPrice}</span> <span>${user.sCode}</span> </p>
                <a href="#" class="agregar-carrito" data-id=${user.iId}><i class="fa fa-cart-plus"></i>&nbsp;  Add to Cart</a>
              </div>
              </div>`
          ).join('')
          }
          
         
        }
          
        
    }
});

