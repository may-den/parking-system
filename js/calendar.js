$date = new Date()
$month = $date.getMonth()
$toStartDate = $date

$(function() {

    $fromDate = $('#fromCal')
    $toDate = $('#toCal')
    $visitorDate = $('#visitorCal')

    $fromDate.datepicker({
        todayHighlight: true,
        // clearBtn: true,
        startDate: $date,
        // todayBtn: true,
        defaultViewDate: { month: $month }})

    $toDate.datepicker({
        todayHighlight: true,
        // clearBtn: true,
        startDate: $toStartDate,
        // todayBtn: true,
        defaultViewDate: { month: $month + 1 }
    })

    $visitorDate.datepicker({
        todayHighlight: true,
        startDate: $date,
        defaultViewDate: { month: $month }})

    $fromDate.on("changeDate", function() {
        $('#fromSpan').text(
            $fromDate.datepicker('getFormattedDate')
        )
        $toDate.datepicker()
        $toDate.datepicker('setStartDate', $fromDate.datepicker('getFormattedDate'))
        // var $start = $('#fromCal .active.day')
        // var $finish = $('#toCal .active.day')
        // rangeHighlight($start, $finish) @toDo Highlight range between selected dates.

        //Enables button if both dates are selected.
        if($('#toSpan').text() != '') {
            $('#staffSubmit').prop('disabled', false)
        }
    })

    $toDate.on("changeDate", function() {
        $('#toSpan').text(
            $toDate.datepicker('getFormattedDate')
        )
        // $start = $('#fromCal .active.day')
        // $finish = $('#toCal .active.day')
        // rangeHighlight($start, $finish) @toDo Highlight range between selected dates.

        //Enables button if both dates are selected.
        if($('#fromSpan').text() != '') {
            $('#staffSubmit').prop('disabled', false)
        }
    })

    $visitorDate.on("changeDate", function() {
        $('#visitorSpan').text(
            $visitorDate.datepicker('getFormattedDate')
        )
        $('#time-container').animate({
            right: '10%'
        }, 1000)
    })

    function rangeHighlight($start, $finish) {
        $('.selected', $toDate).removeClass('selected')
        if (($('#fromCal .datepicker-switch').first().text()) === ($('#toCal .datepicker-switch').first().text())) {

            $fromDate.find('td:contains(' + $finish.text() + ')').addClass('selected')
            $toDate.find('td:contains(' + $start.text() + ')').addClass('selected')
        }
        if($start.length > 0 && $finish.length > 0) {
            $start.nextUntil('.selected', 'td:not(.new)').css("background-color", "#EEEEEE")
            $start.parent('tr').nextAll('tr').find('td:not(.new, .disabled)').each(function() {
                if($(this).hasClass('.selected')) {
                    return false
                } else {
                    $(this).css("background-color", "#EEEEEE")
                }
            })
            $finish.prevUntil('.selected', 'td:not(.old)').css("background-color", "#EEEEEE")
            $finish.parent('tr').prevAll('tr').find('td:not(.old, .disabled)').each(function() {
                if($(this).hasClass('.selected')) {
                    return false
                } else {
                    $(this).css("background-color", "#EEEEEE")
                }
            })
        }
    }

    function slideRight($el) {
        $el.animate({
            right: '10%'
        }, 1000)
    }

    function slideLeft($el) {
        $el.animate({
            right: '75%'
        }, 400)
        $('#speechBubbleContent').text('Available spaces: ')
    }

    $('#staffButton').click(function() {
        $(this).prop('disabled', true)
        $('#visitorButton').prop('disabled', false)
        if($('#visitor-container').css('right') != '0') {
            slideLeft($('#visitor-container, #time-container'))
        }
        $('#staff-container').animate({
            right: '10%'
        }, 1000)
    })

    $('#visitorButton').click(function() {
        $(this).prop('disabled', true)
        $('#staffButton').prop('disabled', false)
        if($('#staff-container').css('right') != '0') {
            slideLeft($('#staff-container'))
        }
        $('#visitor-container').animate({
            right: '35%'
        }, 1000)
        $('#time-container').animate({
            right: '40%'
        }, 1000)
    })

//    ********************************************************************************




})




