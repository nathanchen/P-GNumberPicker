/**
 * @author Nathan CHEN
 */

var asyncRequest; // variable to hold XMLHttpRequest object
var ceiling;
function retriveCeilingJS(url)
{
 	try
	{
		asyncRequest = new XMLHttpRequest(); // create request object
		// register event handler
		asyncRequest.onreadystatechange = processResponse; asyncRequest.open( 'GET', url ,true ); // prepare the request asyncRequest.send( null ); // send the request with no body message
	} // end try
	catch ( exception ) 
	{
        alert( 'Request Failed' );
    } // end catch
}

function processResponse()
{
	if(asyncRequest.readyState == 4 && asyncRequest.status == 200)
	{
		ceiling = document.getElementById("numberCeiling");
		alert(ceiling);
	}
}
