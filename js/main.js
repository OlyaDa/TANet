const selects = document.querySelectorAll('.select');
selects.forEach(el => {
    new Choices(el, {
        shouldSort: false,
        position: 'bottom',
        searchEnabled: false,
    });
});

const scrollBtn = document.querySelector('.go-to-top');
const coords = document.documentElement.clientHeight;
window.onscroll = () => {
    if (window.scrollY > coords) {
        scrollBtn.classList.add('go-to-top--show');
    } else {
        scrollBtn.classList.remove('go-to-top--show');
    }
}
scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


// $(function () {
//     $('input[name="datefilter"]').daterangepicker({
//         linkedCalendars: false,
//         ranges: {
//             'Today': [moment(), moment()],
//             'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//             'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//             'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//             'This Month': [moment().startOf('month'), moment().endOf('month')],
//             'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//         },
//         "locale": {
//             "format": "DD/MM/YYYY",
//         },
//         opens: 'right',
//         "timePicker": true,
//     }, function (start, end, label) {
//         console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
//     });
// });

$(function () {
    // Get the current screen width
    var screenWidth = $(window).width();

    // Define the date range picker options
    var daterangepickerOptions = {
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [
                moment().subtract(1, 'month').startOf('month'),
                moment().subtract(1, 'month').endOf('month')
            ]
        },
        locale: {
            format: 'DD/MM/YYYY',
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
        },
        opens: 'right',
        timePicker: true,
        linkedCalendars: screenWidth < 900 ? false : true
    };

    // Initialize the date range picker
    $('input[name="datefilter"]').daterangepicker(daterangepickerOptions, function (
        start,
        end,
        label
    ) {
        console.log(
            'A new date selection was made: ' +
            start.format('DD-MM-YYYY') +
            ' to ' +
            end.format('DD-MM-YYYY')
        );
    });
});