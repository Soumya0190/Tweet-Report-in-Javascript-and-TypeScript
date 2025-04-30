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

	//Running
	var runTweet = 0;
	var runDist = 0;

	//Walking
	var walkT = 0;
	var walkD = 0;

	//Biking
	var bikeT = 0;
	var bikeD = 0;

	//Mountain Biking
	var mtnBikeT = 0;
	var mtnBikeD = 0;

	//Hiking
	var hikeT = 0;
	var hikeD = 0;

	//Activity
	var activityT = 0;
	var activityD = 0;

	//Swimming
	var swimT = 0;
	var swimD = 0;

	//Chair Riding
	var crT = 0;
	var crD = 0;

	//Skiiing
	var skiT = 0;
	var skiD = 0;

	//yoga
	var yogaT = 0;
	var yogaD = 0;

	//Workout
	var workT = 0;
	var workD = 0;

	//Freestyle
	var freeT = 0;
	var freeD = 0;
	
	tweetArr.forEach(element => 
	{
		if(element.activityType === "running")
		{ 
			runTweet++;
			runDist += element.distance;
		}
		else if(element.activityType === "walking")
		{ 
			walkT++;
			walkD += element.distance;
		}
		else if(element.activityType === "biking")
		{ 
			bikeT++;
			bikeD += element.distance;
		}
		else if(element.activityType === "mountain biking")
		{ 
			mtnBikeT++;
			mtnBikeD += element.distance;
		}	
		else if(element.activityType === "hiking")
		{ 
			hikeT++;
			hikeD += element.distance;
		}
		else if(element.activityType === "activity")
		{ 
			activityT++;
			activityD += element.distance;
		}
		else if(element.activityType === "swimming")
		{ 
			swimD += element.distance;
			swimT++;
		}
		else if(element.activityType === "chair riding")
		{ 
			crD += element.distance;
			crT++;
		}
		else if(element.activityType === "skiing")
		{ 
			skiD += element.distance;
			skiT++;
		}
		else if(element.activityType === "yoga")
		{ 
			yogaD += element.distance;
			yogaT++;
		} 
		else if(element.activityType === "workout")
		{
			workD += element.distance;
			workT++;
		}
		else if(element.activityType === "freestyle")
		{
			freeD += element.distance;
			freeT++;
		}
	});

	let activityArr = [];
	activityArr.push({
			activity: "running",
			count: runTweet,
			totalDistance: runDist
	});
	activityArr.push({
		activity: "walking",
		count: walkT,
		totalDistance: walkD
	});
	activityArr.push({
		activity: "biking",
		count: bikeT,
		totalDistance: bikeD
	});
	activityArr.push({
		activity: "mountain biking",
		count: mtnBikeT,
		totalDistance: mtnBikeD
	});
	activityArr.push({
		activity: "hiking",
		count: hikeT,
		totalDistance: hikeD
	});
	activityArr.push({
		activity: "activity",
		count: activityT,
		totalDistance: activityD
	});
	activityArr.push({
		activity: "swimming",
		count: swimT,
		totalDistance: swimD
	});
	activityArr.push({
		activity: "chair riding",
		count: crT,
		totalDistance: crD
	});
	activityArr.push({
		activity: "skiing",
		count: skiT,
		totalDistance: skiD
	});
	activityArr.push({
		activity: "yoga",
		count: yogaT,
		totalDistance: yogaD
	});
	activityArr.push({
		activity: "workout",
		count: workT,
		totalDistance: workD
	});
	activityArr.push({
		activity: "freestyle",
		count: freeT,
		totalDistance: freeD
	});
		
	//Sort activities by least frequent to most frequent
	let sortedArr = activityArr.sort( function(a, b) 
	{
		if (a.count > b.count) { return 1; }
		else if (a.count < b.count) { return -1; }
		else { return 0; }
	});

	let first = sortedArr[sortedArr.length - 1].activity
	let second = sortedArr[sortedArr.length - 2].activity
	let third = sortedArr[sortedArr.length - 3].activity
	
	$('#numberActivities').text(sortedArr.length);
	$('#firstMost').text(first);
	$('#secondMost').text(second);
	$('#thirdMost').text(third);

	let firstAvg = parseFloat( math.format((first.totalDistance / first.count),  {notation: 'fixed', precision: 2}));
	let secondAvg = parseFloat( math.format((second.totalDistance / second.count),  {notation: 'fixed', precision: 2}));
	let thirdAvg = parseFloat( math.format((third.totalDistance / third.count),  {notation: 'fixed', precision: 2}));

	let topThreeArr = [];
	topThreeArr.push({
		activity: first,
		averageDistance: firstAvg
	});
	topThreeArr.push({
		activity: second,
		averageDistance: secondAvg
	});
	topThreeArr.push({
		activity: third,
		averageDistance: thirdAvg
	});

	//Sort top most frequent activities from smallest average distances to largest average distances
	let sortTopThree = topThreeArr.sort( function(a, b) 
	{
		if(a.averageDistance > b.averageDistance) { return 1; }
		else if(a.averageDistance < b.averageDistance) { return -1; }
		else { return 0; }
	});
	
	let longestActivity = sortTopThree[sortTopThree.length - 1].activity; //Longest is last in array sorted in increasing order
	let shortestActivity = sortTopThree[sortTopThree.length - 3].activity; //Shortest is first in array sorted in decreasing order
	$('#longestActivityType').text(longestActivity);
	$('#shortestActivityType').text(shortestActivity);

	//Compute weekend or weekdays are most frequent for longest activity 
	let dayCt = 0;
	let endCt = 0;
	tweetArr.forEach(element => 
	{ 
		if(element.activityType === longestActivity) 
		{
			if(element.dayType === "weekday")  { dayCt++; } 
			else if (element.dayType === "weekend") { endCt++; }
		}
	}); 
	if(dayCt > endCt) { $('#weekdayOrWeekendLonger').text('weekdays'); } 
	else { $('#weekdayOrWeekendLonger').text('weekends'); }

	
	//Data for top 3 activities for vega-lite graphs
	let dayOfWeekArray = [];
	tweetArr.forEach(element => {
		if( (element.activityType === first) || 
			(element.activityType === second) ||
			(element.activityType === third) )
		{
			dayOfWeekArray.push( //Store data for the top 3 activities (weekend or weekdays)
			{
				activity: element.activityType,
				day: element.day,
				distance: element.distance
			});
		}
	});	

	activity_vis_spec = //Shows number of tweets per activity
	{
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "A graph of the number of Tweets containing each type of activity.",
		"width": 700, //Change height and width to appear bigger on the screen
		"height": 400,
	  	"data": { "values": activityArr },
	  	//TODO: Add mark and encoding
	  	"selection": { "pts": {"type": "single", "on": "mouseover"} }, 
	  	"mark": "bar",
	  	"encoding": 
	  	{
			"x": {"field": "activity", "type": "ordinal"},
			"y": {"field": "count", "type": "quantitative"},
			"color": //Color bar shows which color corresponds to which frequency 
			{
				"condition": 
				{
					"selection": "pts",
					"aggregate": "count", 
					"type": "quantitative"
				},
				//Selected graph will be blue
				"value": "grey" //Graphs that are not selected will change to grey
			}
		}
	};
		  
	vegaEmbed('#activityVis', activity_vis_spec, {actions:false});

	//TODO: create the visualizations which group the three most-tweeted activities by the day of the week.
	//Use those visualizations to answer the questions about which activities tended to be longest and when. 
	distance_vis_spec =  
	{
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "A graph of the number of Tweets containing each type of activity.",
		"width": 700,
		"height": 400, 
	    "data": { "values": dayOfWeekArray }, //1st graphs which plots all tweets of top 3 activities
		"selection": 
		{
			"paintbrush": 
			{
				"type": "multi",
				"on": "mouseover", "empty": "all"
			}
		},
		"mark": "point",
		"encoding": 
		{
			"x": 
			{
				"field": "day",
				"type": "ordinal",
				"sort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				"axis": {"title": "Day of the Week"}
			},
			"y": 
			{
				"field": "distance", //Y axis is numerical
				"type": "quantitative"
			},
			"size": 
			{
				"condition": { "selection": "paintbrush", "value": 300 },
				"value": 50
			},
			"color": 
			{
				"field": "activity",
				"type": "nominal",
				"scale": 
				{
					//Hardcoded top 3 activities
					"domain": ["running","walking","biking"], 
					"range": ["#e7ba52", "#c7c7c7", "#aec7e8"]
				},
				"legend": { "title": "Activity Type" }
			}
		}
	};
	vegaEmbed('#distanceVis', distance_vis_spec, {actions:false});

	
	distance_vis_aggregated = { 
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "A graph of the number of Tweets containing each type of activity.",
		"width": 700,
		"height": 400, 
	    "data": { "values": dayOfWeekArray }, //2nd Graph shows average distances of each of the top 3 activities per day
		"selection": 
		{
			"paintbrush": 
			{
				"type": "multi",
				"on": "mouseover", "empty": "all"
			}
		},
		"mark": "point",
		"encoding": 
		{
			"x": 
			{
				"field": "day",
				"type": "ordinal",
				"sort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				"axis": {"title": "Day of the Week"}
			},
			"y": 
			{
				"field": "distance",
				"aggregate": "average",
				"type": "quantitative"
			},
			"size": 
			{
				"condition": { "selection": "paintbrush", "value": 300 },
				"value": 50
			},
			"color": 
			{
				"field": "activity",
				"type": "nominal",
				"scale": 
				{
					"domain": ["running","walking","biking"],
					"range": ["#e7ba52", "#c7c7c7", "#aec7e8"] //Color ranges to match example graph on instructions page
				},
				"legend": {"title": "Activity Type"}
			}
		}
	};
	vegaEmbed('#distanceVisAggregated', distance_vis_aggregated, {actions:false});
}

//Wait for the DOM to load
$(document).ready(function() 
{
	loadSavedRunkeeperTweets().then(parseTweets);
	$("#distanceVisAggregated").hide();
	
	//Function to change graph with button click
	$("#aggregate").click(function(event) 
	{
		if ($(event.target).text() == "Show means") 
		{
			$(event.target).text("Show all activities"); //Change button to "Show all activities"
			$("#distanceVis").hide();
			$("#distanceVisAggregated").show();
		} 
		else if ($(event.target).text() == "Show all activities") 
		{
			$(event.target).text("Show means"); //Change button to "Show means"
			$("#distanceVis").show();
			$("#distanceVisAggregated").hide();
		}
	});
});