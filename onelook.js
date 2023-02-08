let word = []
// let a_z = 'abcdefghijklmnopqrstuvwxyz'
let lo = 0
let hatena = '';


document.getElementById('button').addEventListener('click',function onelook(){
    document.getElementById('word_div').innerText = '';

    let initial = document.getElementById('initial')
    hatena = hatena.padEnd(document.getElementById('len').value -1,"?")
    fetch('https://api.datamuse.com/words?sp=' + initial.value[lo] + hatena +'&max='+document.getElementById('get_word').value)
.then(function (response) {
  return response.json();
})
.then( function(data) {
    for(i in data){
        if (!data[i].word.match(/[-| |0-9|é]/)) {
            if(document.getElementById('checkbox').checked === true){
                word.push( data[i].word + "\n")
            }else{word.push( data[i].word)}
  
}
    
    }
    })
    .then(function () {
         if(lo <= initial.value.length - 1){
    document.getElementById('Progress').innerText = (lo+1) + "/"+initial.value.length
    lo++ 
    onelook()
}else{

    lo = 0
    hatena = '';

    if(document.getElementById('checkbox01').checked === true){

        document.getElementById('word_div').innerText = word.join(" ")
        word = []
    }else{
        if(document.getElementById('btt')){document.getElementById('butt').remove();}

    

    let naka
    let inp = document.createElement('input')
    inp.id = 'btt'
    inp.type = 'button'
    inp.value = 'ダウンロード'
    document.getElementById('Progress').append(inp)
    inp.addEventListener('click',function(){
        if(document.getElementById('checkbox').checked === false){
            naka = new Blob([word], {
                type: "text/plan"
              });
    }else{
    
        naka = new Blob(word, {
            type: "text/plan"
          });
    }
          let dd = document.createElement('a');
          dd.href = URL.createObjectURL(naka);
          dd.download = 'Onelook_word.txt';
          dd.click();
                   
        word = []
        lo = 0
        hatena = '';
        
    })
    }
}
    })
})
