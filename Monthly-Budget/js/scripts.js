monthlyBills = {};
totalMonthlyCosts = 0;

function addBill(billName, billAmount){
	monthlyBills[billName] = billAmount;
}

function totalBills() {
  for (var bill in monthlyBills){
	totalMonthlyCosts = totalMonthlyCosts + monthlyBills[bill];
  }
}

function removeBillItem(billName) {
  delete monthlyBills[billName];
}

$(document).ready(function(){
  $('#submitBill').click(function(){
    var billName = ($('#billName').val());
    var billAmount =  parseInt($('#billAmount').val(), 10);
    $('#displayBillInfo').append('<div class="item"><h3 id="bill-Name">' + billName + '</h3></div>');
    $('#displayBillInfo').append('<div class="item"><h3>' + "$" + billAmount + '</h3></div>');
    $('#billName').val('');
    $('#billAmount').val('');
    addBill(billName, billAmount);
  });
  
  $('#totalBills').click(function(){
    totalBills();
    $('#displayBillTotal').append('<div class="monthlyTotal"><h3>' + "Your total monthly costs are: " + "$" + totalMonthlyCosts + '</h3></div>');
  });
});

$(document).on('click', '.item', function(){
        $(this).remove(); 
        removeItem = $(this).attr();
        removeBillItem(removeItem);
    });
