var arr = []; 

function parseTweets(runkeeper_tweets) 
{
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) 
	{
		window.alert('No tweets returned');
		return;
	}
	let tweetArr = [] //Array of all Tweets objects
	runkeeper_tweets.forEach(element => { tweetArr.push(new Tweet(element.text, element.created_at)) })
	
	let count = 1;
	tweetArr.forEach(element => {
		if(element.written) 
		{
			arr.push({
				tweetNumber: count,
				activityType: element.activityType,
				tweet: element.text,
				link: element.hyperlinks
			});
			count++;
		}
	});
}
function addEventHandlerForSearch() 
{
	$('#searchText').text( $('#textFilter').val() ); //Update " ? Tweets contain the text '?'. "
	let searchResults = []; //Array of tweets that include query
	if($('#searchText').text() != "")
	{
		arr.forEach(element => {  //Find all written tweets with search query
			if (element.tweet.includes($('#searchText').text())) { 
				searchResults.push(element); }  //Update search results array
		});
	}
	$('#searchCount').text(searchResults.length); //Update " ? Tweets contain the text '?'. "

	//Empty results when query empty
	$('#tweetTable').empty();
	if($('#searchText').text() === ""){ $('#tweetTable').empty(); }

	//Create table rows for each tweet
	searchResults.forEach(element => {
		let tableRow = "<tr>";
		tableRow += "<td>" + element.tweetNumber + "</td>";
		tableRow += "<td>" + element.activityType + "</td>";
		tableRow += "<td>" + element.link + "</td>";
		tableRow += "</tr>"
		$('#tweetTable').append(tableRow);
	});

}

//Wait for the DOM to load
$(document).ready(function() 
{
	$('#textFilter').keyup(addEventHandlerForSearch());
	loadSavedRunkeeperTweets().then(parseTweets);
});