window.onload = function () {
    var id = $('#tableid2').val();
    var i = $('#page' + id).val();
    //alert(i);
//    alert(id);
    if (i === '')
    {
        $('#frm' + id + ' #paging #1').css('background-color', '#ccc');
    }
    if (i !== '')
    {
        $('#frm' + id + ' #paging #' + i).css('background-color', '#ccc');
    }
};

$(document).ready(function () {
    $(".pg").on("click", function (e) {
      
//        alert($(this).val());
        //alert($(this).attr('id'));
        $('#page' + $('#tableid1').val()).val($(this).attr('id'));
        
        document.forms[1].submit();
        return true;
    });

    $(".pg1").on("click", function (e) {
        //alert($(this).val());
        //alert($(this).attr('id'));
        $('#page' + $('#tableid1').val()).val($(this).attr('id'));
        $('#startpage' + $('#tableid2').val()).val($(this).attr('id'));
        document.forms[1].submit();
        return true;
    });

    $(".first").on("click", function (e) {
        $('#page' + $('#tableid1').val()).val('1');
        document.forms[1].submit();
        return true;
    });

    $(".prev").on("click", function (e) {
        //alert('prev');
        var i = $('#page' + $('#tableid1').val()).val();
        //alert(i);

        if (i === '')
        {
            $('#page' + $('#tableid1').val()).val('1');
            document.forms[1].submit();
            return true;
        }
        if (i !== '')
        {
            var currpage = parseInt(i);
            //alert(currpage);
            if (currpage > 1)
                var prevpage = currpage - 1;
            else
                var prevpage = 1;
            //alert('prevpage: ' + prevpage);
            $('#page' + $('#tableid1').val()).val(prevpage);

            if (prevpage.toString().length > 1)
            {
                //alert(prevpage.toString().substr(0,1));
                var a = prevpage.toString().substr(0, 1);
                if (parseInt(prevpage) < parseInt(a + "1"))
                    $('#startpage' + $('#tableid2').val()).val(a - 1 + "1");
            }
            document.forms[1].submit();
            return true;
        }
    });

    $(".next").on("click", function (e) {
        //alert('next');

        var pagecnt = parseInt($("#pagecnt" + $('#tableid1').val()).val());
//        alert($('#tableid2').val());

        var i = $('#page' + $('#tableid1').val()).val();
        //alert(i);

        if (i === '')
        {
            if (pagecnt > 1)
            {
                $('#page' + $('#tableid1').val()).val('2');
                document.forms[1].submit();
                return true;
            }
        }
        if (i !== '')
        {
            var currpage = parseInt(i);
            //alert(currpage);
            if (currpage > 0)
            {
                var nextpage = currpage + 1;
                if (nextpage > pagecnt)
                    nextpage = pagecnt;
            } else
                var nextpage = 1;
            //alert('nextpage: ' + nextpage);
            $('#page' + $('#tableid1').val()).val(nextpage);

            //alert(nextpage.toString().substr(0,1));
            var a = nextpage.toString().substr(0, 1);
            if (parseInt(nextpage) > parseInt(a + "0"))
                $('#startpage' + $('#tableid2').val()).val(a + "1");
            document.forms[1].submit();
            return true;
        }
    });

    $(".last").on("click", function (e) {
        var pagecnt = parseInt($("#pagecnt" + $('#tableid1').val()).val());
        //alert(pagecnt);

        $('#page' + $('#tableid2').val()).val(pagecnt);
        document.forms[1].submit();
        return true;
    });
     $(".pg2").on("click", function (e) {
        //alert($(this).val());
        //alert($(this).attr('id'));
        $('#page' + $('#tableid2').val()).val($(this).attr('id'));
        document.forms[2].submit();
        return true;
    });

    $(".pg11").on("click", function (e) {
        //alert($(this).val());
        //alert($(this).attr('id'));
        $('#page' + $('#tableid2').val()).val($(this).attr('id'));
        $('#startpage' + $('#tableid2').val()).val($(this).attr('id'));
        document.forms[2].submit();
        return true;
    });

    $(".first2").on("click", function (e) {
        $('#page' + $('#tableid2').val()).val('1');
        document.forms[2].submit();
        return true;
    });

    $(".prev2").on("click", function (e) {
        //alert('prev');
        var i = $('#page' + $('#tableid2').val()).val();
        //alert(i);

        if (i === '')
        {
            $('#page' + $('#tableid2').val()).val('1');
            document.forms[2].submit();
            return true;
        }
        if (i !== '')
        {
            var currpage = parseInt(i);
            //alert(currpage);
            if (currpage > 1)
                var prevpage = currpage - 1;
            else
                var prevpage = 1;
            //alert('prevpage: ' + prevpage);
            $('#page' + $('#tableid2').val()).val(prevpage);

            if (prevpage.toString().length > 1)
            {
                //alert(prevpage.toString().substr(0,1));
                var a = prevpage.toString().substr(0, 1);
                if (parseInt(prevpage) < parseInt(a + "1"))
                    $('#startpage' + $('#tableid2').val()).val(a - 1 + "1");
            }
           document.forms[2].submit();
            return true;
        }
    });

    $(".next2").on("click", function (e) {
        //alert('next');

        var pagecnt = parseInt($("#pagecnt" + $('#tableid2').val()).val());
//        alert($('#tableid2').val());

        var i = $('#page' + $('#tableid2').val()).val();
        //alert(i);

        if (i === '')
        {
            if (pagecnt > 1)
            {
                $('#page' + $('#tableid2').val()).val('2');
                document.forms[2].submit();
                return true;
            }
        }
        if (i !== '')
        {
            var currpage = parseInt(i);
            //alert(currpage);
            if (currpage > 0)
            {
                var nextpage = currpage + 1;
                if (nextpage > pagecnt)
                    nextpage = pagecnt;
            } else
                var nextpage = 1;
            //alert('nextpage: ' + nextpage);
            $('#page' + $('#tableid2').val()).val(nextpage);

            //alert(nextpage.toString().substr(0,1));
            var a = nextpage.toString().substr(0, 1);
            if (parseInt(nextpage) > parseInt(a + "0"))
                $('#startpage' + $('#tableid2').val()).val(a + "1");
            document.forms[2].submit();
            return true;
        }
    });

    $(".last2").on("click", function (e) {
        var pagecnt = parseInt($("#pagecnt" + $('#tableid2').val()).val());
        //alert(pagecnt);

        $('#page' + $('#tableid2').val()).val(pagecnt);
        document.forms[2].submit();
        return true;
    });
});

function Search1(btn, stURL)
{
    var searchtext = '';;
    searchtext = $('#txtsearch1').val();
//   console.log(searchtext);

    if (searchtext !== '')
    {
        var strcondition = ' and (';

        $('#table1 > thead > tr > td').each(function () {
            //alert($(this));
            //alert($(this).prop('id'));
            var id = $(this).prop('id');
            if (id !== "")
            {
                strcondition = strcondition + id + " like '%" + searchtext + "%' or ";
            }
        });

//        alert(strcondition);

        var strcondition1 = strcondition.substring(0, strcondition.length - 4);

        strcondition1 = strcondition1 + ')';

        //alert(strcondition1);

        $('#condition1').val(strcondition1);
//        console.log(strcondition1);
        $('#stSearchURL1').val('txtsearch=1&condition=' + strcondition1);

        document.forms[1].action = stURL;
        document.forms[1].submit();
        return true;
    } else
    {
        $('#condition1').val('');
        $('#stSearchURL1').val('');

//        document.forms[1].action = stURL;
//        document.forms[1].submit();
//        return true;
    }
}

function Search2(btn, stURL)
{
    var searchtext = '';
    searchtext = $('#txtsearch2').val();
    //alert(searchtext);

    if (searchtext !== '')
    {
        var strcondition = ' and (';

        $('#table2 > thead > tr > td').each(function () {
            //alert($(this));
            //alert($(this).prop('id'));
            var id = $(this).prop('id');
            if (id !== "")
            {
                strcondition = strcondition + id + " like '%" + searchtext + "%' or ";
            }
        });

        //alert(strcondition);

        var strcondition1 = strcondition.substring(0, strcondition.length - 4);

        strcondition1 = strcondition1 + ')';

        //alert(strcondition1);

        $('#condition2').val(strcondition1);

        $('#stSearchURL2').val('txtsearch=1&condition=' + strcondition1);

        document.forms[2].action = stURL;
        document.forms[2].submit();
        return true;
    } else
    {
        $('#condition2').val('');
        $('#stSearchURL2').val('');

        document.forms[2].action = stURL;
        document.forms[2].submit();
        return true;
    }
}

function ReloadPage1(btn, stURL)
{
//  alert('in');
    $('#page1').val('1');
    $('#startpage1').val('1');
    //$('#txtsearch1').val('');
    //$('#condition1').val('');
    //$('#stSearchURL1').val('');

    document.forms[1].action = stURL;
    document.forms[1].submit();
    return true;
}

function ReloadPage2(btn, stURL)
{
//  alert('in2');
    $('#page2').val('1');
    $('#startpage2').val('1');
    //$('#txtsearch2').val('');
    //$('#condition2').val('');
    //$('#stSearchURL2').val('');

    document.forms[2].action = stURL;
    document.forms[2].submit();
    return true;
}