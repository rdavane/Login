
function emailValidation() {
//var uemail=document.AddCustomer.emailid;
  var uemail = $('.validateEmailid').val();
//    alert("email is=" + uemail);
  var customertype = $('#usertype option:selected').val();
  if (customertype === "Select Type" || customertype === "individual") {

    if (ValidateEmail(uemail))
    {
      return true;
    }

    return false;
  }
}
function emailValidationPopup() {
//    var uemail = $('.validateEmailidPopup').val();
  var uemail = document.getElementsByClassName("validateEmailidPopup");
  var uemail1 = $('.validateEmailid').val();
//    alert("email is=" + uemail);

  var customertype = $('#usertype option:selected').val();
  var rows = document.getElementById("dataTable").getElementsByTagName("tr").length;
  var i;
//     alert(rows);



  if (customertype == "corporate" || customertype == "dealer") {
    for (i = 0; i < rows - 1; i++) {
//            document.getElementsByClassName("validateEmailidMessage")[i].innerHTML = null;
      if (ValidateEmailPopup(uemail[i]))
      {

        document.getElementsByClassName("validateEmailidMessage")[i].innerHTML = null;
        if (ValidateEmail(uemail1)) {
          document.getElementsByClassName("validateEmailidMessage1")[0].innerHTML = null;

        } else {
//                    alert(rows);
          document.getElementsByClassName("validateEmailidMessage1")[0].innerHTML = "Invalid Email";
          return false;
        }
      } else {

        document.getElementsByClassName("validateEmailidMessage")[i].innerHTML = "Invalid Email";

        return false;
      }
    }
  }
}

function ValidateEmail(uemail)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.match(mailformat))
  {
    return true;
  } else
  {
    return false;
  }
}
function ValidateEmailPopup(uemail)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat))
  {
//        alert("true popup");
    document.getElementsByClassName("validateEmailidMessage1")[0].innerHTML = "";
    return true;
  } else
  {

//        alert("You have entered an invalid email address popup!");

    return false;
  }
}


function isNumberKey(evt) {
  var charcode = (evt.which) ? evt.which : event.keyCode;
  if (charcode > 31 && (charcode < 48 || charcode > 57) && charcode !== 8 && charcode.length != 10)
    return false;
  return true;
}
function validatephonenumber() {
  var inputtxt = $("#mobileno").val();
  if (phonenumber(inputtxt))
  {
    return true;
  }

  return false;
}
function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (inputtxt.match(phoneno))
  {
    return true;
  } else
  {
    return false;
  }
}
function landline(inputtxt)
{
  var phoneno = /^[0-9]{11}$/;
  if (inputtxt.match(phoneno))
  {
    return true;
  } else
  {
    return false;
  }
}
// email validation for service request-invoice-quotation-proforma
function multipleemailValidation(email) {

  var customertype = $('#usertype option:selected').val();
  if (customertype === "Select Type" || customertype === "individual") {

    if (multipleValidateEmail(email))
    {
      return true;
    }
    return false;
  }
}
function multipleValidateEmail(uemail, count)
{
  console.log(uemail);
  console.log(uemail.value);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.match(mailformat))
  {
    if (count == 1) {
      document.getElementsByClassName("validateEmailidMessage")[0].innerHTML = "";
    }
    if (count == 2) {
      document.getElementsByClassName("validateEmailidMessage")[0].innerHTML = "";
      document.getElementsByClassName("validateEmailidMessage")[1].innerHTML = "";
    }
    if (count == 3) {
      document.getElementsByClassName("validateEmailidMessage")[0].innerHTML = "";
      document.getElementsByClassName("validateEmailidMessage")[1].innerHTML = "";
      document.getElementsByClassName("validateEmailidMessage")[2].innerHTML = "";
    }
    return true;
  } else
  {
    if (count == 1) {
      document.getElementsByClassName("validateEmailidMessage")[0].innerHTML = "Invalid Email";
    }
    if (count == 2) {
      document.getElementsByClassName("validateEmailidMessage")[1].innerHTML = "Invalid Email";
    }
    if (count == 3) {
      document.getElementsByClassName("validateEmailidMessage")[2].innerHTML = "Invalid Email";
    }
//        alert("not a valid emailid");
    return false;
  }
}





//--------------------------------New code for popup customer add-----------------------------------//

function customervalidation(custName, mobileno, emailid)
{
  var result = 0;
  if (phonenumber(mobileno))
  {
    $(".mobileno").parents('tr').find('.validateMobileMessage1').hide();
    result++;
  }
  if (!phonenumber(mobileno)) {
    $(".mobileno").parents('tr').find('.validateMobileMessage1').show();
    result--;
  }
//    if (phonenumber(mobileno2))
//    {
//        $(".mobileno2").parents('tr').find('.validateMobileMessage1').hide();
//        result++;
//    }
//    if (!phonenumber(mobileno2)) {
//        $(".mobileno2").parents('tr').find('.validateMobileMessage1').show();
//        result--;
//    }
//    if (landline(landline1))
//    {
//        $(".landline1").parents('tr').find('.validateMobileMessage1').hide();
//        result++;
//    }
//    if (!landline(landline1)) {
//        $(".landline1").parents('tr').find('.validateMobileMessage1').show();
//        result--;
//    }
//    if (landline(landline2))
//    {
//        $(".landline2").parents('tr').find('.validateMobileMessage1').hide();
//        result++;
//    }
//    if (!landline(landline2)) {
//        $(".landline2").parents('tr').find('.validateMobileMessage1').show();
//        result--;
//    }
  if (ValidateEmail(emailid))
  {
    $(".emailid").parents('tr').find('.validateEmailidMessage1').hide();
    result++;
  }
  if (!ValidateEmail(emailid)) {
    $(".emailid").parents('tr').find('.validateEmailidMessage1').show();
    result--;
  }
  if (custName != '')
  {
    $('.validateCustomerName').hide();
    result++;
  }
  if (custName == '') {
    $('.validateCustomerName').show();
    result--;
  }
  if (result == '3') {
    return  true;
  } else {
    return false;
  }



}

//--------------------------------New code for normal customer add-----------------------------------//


function customervalidation2(custName, mobileno, emailid)
{
  var result = 0;
  if (phonenumber(mobileno))
  {
    $(".mobileno").parents('div.in-panel').find('.validateMobileMessage1').hide();
    result++;
  }
  if (!phonenumber(mobileno)) {
    $(".mobileno").parents('div.in-panel').find('.validateMobileMessage1').show();
    result--;
  }
  if (ValidateEmail(emailid))
  {
    $(".emailid").parents('div.in-panel').find('.validateEmailidMessage1').hide();
    result++;
  }
  if (!ValidateEmail(emailid)) {
    $(".emailid").parents('div.in-panel').find('.validateEmailidMessage1').show();
    result--;
  }
  if (custName != '')
  {
    $('.validateCustomerName').hide();
    result++;
  }
  if (custName == '') {
    $('.validateCustomerName').show();
    result--;
  }
  if (result == '3') {
    return  true;
  } else {
    return false;
  }



}


function CustomerValidateEmail(uemail, count)
{
  if (ValidateEmail(uemail))
  {

    if (count == 1) {
      $(".1validateEmailidMessage1").hide();
      return true;
    }

    if (count == 2) {
//            $(".1validateEmailidMessage1").hide();
      $(".1validateEmailidMessage2").hide();
      return true;
    }
    if (count == 3) {
//            $(".1validateEmailidMessage1").hide();
//            $(".1validateEmailidMessage2").hide();
      $(".1validateEmailidMessage3").hide();
      return true;
    }

  }
//alert("not");
  if (uemail != '') {

    if (!ValidateEmail(uemail)) {
      if (count == 1) {
//            alert("here");
        $(".1validateEmailidMessage1").show();
        return false;
      }
    }
    if (!ValidateEmail(uemail)) {
      if (count == 2) {
        $(".1validateEmailidMessage2").show();
        return false;
      }
    }
    if (!ValidateEmail(uemail)) {
      if (count == 3) {
        $(".1validateEmailidMessage3").show();
        return false;
      }

    }

  } else {
    return  true;
  }




}
function purchasevalidation() {
  var company = $("#companyid").val();
  var gst = $("#gstno").val();
  var billno = $("#billno").val();
  $(".errorcompany").hide();
  if (company == '' || company == null) {
    $(".errorcompany").show();
  }
  $(".errorgst").hide();
  if (gst.length != 12 || gst == null) {
    $(".errorgst").show();
  }
  $(".errorbillno").hide();
  if (billno == '' || billno == null) {
    $(".errorbillno").show();
  }
}



