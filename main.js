

function insertNum(number) {
    
    var exitsNum =  $('#headId').val();

    $('#headId').val(exitsNum + number);
}

function clearResult(){
    $('#headId').val('');
}

function calculate()
{
  var result =  eval($('#headId').val());
  $('#headId').val(result);
    
} 

function deleteNum() 
{
    var values = $('#headId').val();

    if (values!= '') {
        $('#headId').val(values.slice(0,-1));
    }
}