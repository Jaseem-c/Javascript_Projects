function display(num){
    result.value += num
}

function clearAll()
{
    result.value=""
}

function back(){
    result.value=result.value.slice(0,-1)
}

function equal()
{
    try{
        result.value=eval(result.value)
    }
    catch(error)
    {
        result.value='error!'
        setTimeout(()=>{
            result.value=""
        },1000)
    }
}
