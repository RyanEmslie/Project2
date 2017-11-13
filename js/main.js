//Ryan Emslie
//November 9, 2017
//Tested on Chrome, Firefox, and Edge
//This project satisfies the requirements to "Meet Expectations"
//Notes:  The showPage(), as coded, would not be the best solution for integrating search capabilites.  As written, the showPage(min, max) only accepts students within a consecutive range.



function showPage(min, max) {
    //Function that uses jQuery selector to hide all .student-item class
    $(".student-item").hide();
    
    //Loops through all list items with class .student-item and displays item based on argument passed into showPage()
    for (i = 0; i < $(".student-item").length; i++) {
            if (i >= min && i <= max ) {
                $(".student-item:eq(" + i + ")").show();
            } 
        }      
}


function appendPageLinks() {
    
    //Variable establishing the total number of pages based on the number of students listed.
    totalNumberStudents = $(".student-item").length;
    totalPages = Math.ceil(totalNumberStudents / 10);
    
    //Loop that appends <a> elements based on number of pages and attributes an id for each <a>
    //I hard coded the initial <a> on the html file with an <a> id of '1'.
    for (i = 2; i <= totalPages; i++) {
        $(".pagination ul").append("<li><a id='" + i + "' href='#'>" + i + "</a></li>");
    }
    
    //Click function added to each of the new and orginal .pagination anchors
    $('.pagination li a').click(function() {
        //variable that uses the id of the <a> to calcualte the range of students to be passed to the showPage()
        num = parseInt( $(this).attr('id') );
        studentMin = ( ((num*10)-10)     );
        studentMax = ( ((num*10)-1)     );
        showPage(studentMin, studentMax);   
    });   
}


//Function when clicked removes the class 'active' from the currently selected .pagination <a>, then applies the 'active' class to the selected link
$(document).ready(function () {
    $('.pagination li a').click(function(e) {
        $('.pagination li a.active').removeClass('active');
        //I think that I have finally used $(this) correctly
        $(this).addClass('active');
    });
});


/*Fuction attempts to substitue humor for skill
$(document).ready(function() {
    $('.student-search button').click(function(eval) {
        alert('Under Construction.  Please check back after I have completed my TechDegree!');
    });
});
*/


//Initalizes the showPage() displaying students numbered 1 through up to 10 
showPage( 0, 9 )
appendPageLinks();

