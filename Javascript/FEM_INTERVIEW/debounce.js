
function debounce(fn, time){
    let timeOut;
    
    return  function(){
        if(timeOut) {
            clearTimeout(timeOut);
        }
            timeOut = setTimeout(() => {
                console.log(arguments);
                fn.call(this, ...arguments);
                // fn.apply(this, arguments);
                timeOut=null;
            }, 500);
        
    }
}

const foo= function (){
    console.log('foo is executed');
    console.log([...arguments]);
}

const debouncedFoo = debounce(foo, 500);



for(let i=0;i<10;i++){
    console.log(i);
  debouncedFoo('b','c');
}



