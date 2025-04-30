function parseTweets(runkeeper_tweets) {
	//Do not proceed if no tweets loaded
	if(runkeeper_tweets === undefined) 
	{
		window.alert('No tweets returned');
		return;
	}

	let tweetArr = [] //Array of all Tweets objects
	runkeeper_tweets.forEach(element => { tweetArr.push(new Tweet(element.text, element.created_at)) })

	var firstDay = new Date(tweetArr[tweetArr.length - 1].time); //, "ddd MMM D HH:mm:ss Z YYYY"
	var lastDay = new Date(tweetArr[0].time); //, "ddd MMM D HH:mm:ss Z YYYY"


	//About The Data Calculations
	var completed = 0;
	var live = 0;
	var achieved = 0;
	var misc = 0;
	var written = 0;

	for (var i = 0; i < tweetArr.length; i++)
	{
		tweet = tweetArr[i];
		if (tweet.written) { written += 1; }
		if (tweet.source == "achievement") { achieved += 1; }
		else if (tweet.source == "live_event") { live += 1; }
		else if (tweet.source == "completed_event") { completed += 1; }
		else if (tweet.source == "miscellaneous"){ misc += 1; }
	}
	//About The Data Calculations
	
	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	$('#numberTweets').text(tweetArr.length);

	$('#firstDate').text(
		firstDay.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
		+ " " + firstDay.toLocaleTimeString('en-US')); //First Date and Time
	$('#lastDate').text(
		lastDay.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
		+ " " + lastDay.toLocaleTimeString('en-US')); //Last Date and Time
	
	$('.completedEvents').text(completed);
	$('.completedEventsPct').text(math.format(completed/tweetArr.length * 100,  {notation: 'fixed', precision: 2}) + '%');
	
	$('.liveEvents').text(live);
	$('.liveEventsPct').text(math.format(live/tweetArr.length * 100,  {notation: 'fixed', precision: 2}) + '%');
	
	$('.achievements').text(achieved);
	$('.achievementsPct').text(math.format(achieved/tweetArr.length * 100,  {notation: 'fixed', precision: 2}) + '%');

	$('.miscellaneous').text(misc);
	$('.miscellaneousPct').text(math.format(misc/tweetArr.length * 100,  {notation: 'fixed', precision: 2}) + '%');
	
	$('.completedEvents').text(completed);
	$('.written').text(written);
	$('.writtenPct').text(math.format(written/tweetArr.length * 100,  {notation: 'fixed', precision: 2}) + '%');	
}

//Wait for the DOM to load
$(document).ready(function() {
	loadSavedRunkeeperTweets().then(parseTweets);
});