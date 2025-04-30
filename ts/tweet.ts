class Tweet {
	private text:string;
    time:Date;
    created_At:string;

    constructor(tweet_text:string, tweet_time:string) 
    {
        this.text = tweet_text;
        this.time = new Date(tweet_time);//, "ddd MMM D HH:mm:ss Z YYYY"
        this.created_At = tweet_time;
	}

    //returns either 'live_event', 'achievement', 'completed_event', or 'miscellaneous'
    get source():string 
    {
        if( this.text.toLowerCase().includes('completed') || this.text.toLowerCase().includes('posted') ) { return "completed_event"; } 
        else if ( this.text.toLowerCase().includes('right now') ) { return "live_event"; } 
        else if ( this.text.toLowerCase().includes('achieved') ) { return "achievement"; } 
        else { return "miscellaneous" }
    }


    get link():string 
    {
        let link:string = "";
        let tweetLink = this.text.match(/(http|https|ftp):\/\/([^\s]+)/g);
        if(tweetLink != null){ tweetLink.forEach(element => { link += element.toString(); }); }
        return link;
    }


    // Wraps hyperlink with anchor tags to make the hyperlink clickable 
    get hyperlinks():string 
    { 
        return (this.text.replace(this.link, '<a href="' + this.link + '">'  + this.link +'</a>'));
    }

    
    get written():boolean 
    {
        //TODO: identify whether the tweet is written
        if( this.text.toLowerCase().includes(' - ') ) { return true; }
        return false;
    }

    
    get writtenText():string //Returns written portion of tweet
    {
        if(!this.written) { return ""; }
        return (this.text.substring( this.text.indexOf(' - '), this.text.indexOf('https') ));
    }

    
    get activityType():string //Sorts completed events into activities for Vegalite graph 
    {
        if (this.source != 'completed_event') { return "unknown"; }
        //TODO: parse the activity type from the text of the tweet

        if ( this.text.toLowerCase().includes( 'ski run with' )) { return "skiing"; } 
        else if( this.text.toLowerCase().includes( ' run ' ) ) { return "running"; }  
        else if( this.text.toLowerCase().includes( ' walk ' ) ) { return "walking"; }
        else if ( this.text.toLowerCase().includes( ' mtn bike ' )) { return "mountain biking"; } 
        else if( this.text.toLowerCase().includes( ' bike ' ) ) { return "biking"; }  
        else if( this.text.toLowerCase().includes( ' hike ' ) ) { return "hiking"; }
        else if( this.text.toLowerCase().includes( ' mi activity ' ) || this.text.toLowerCase().includes( ' km activity ' ) ) { return "activity"; }
        else if( this.text.toLowerCase().includes( ' swim ' ) ) { return "swimming"; }
        else if( this.text.toLowerCase().includes( ' chair ride ' ) ) { return "chair riding"; }
        else if( this.text.toLowerCase().includes( ' yoga ') ){ return "yoga"; }
        else if( this.text.toLowerCase().includes( ' workout' ) ) { return "workout"; } 
        else if( this.text.toLowerCase().includes( ' freestyle ' ) ) { return "freestyle"; }
        return "";
    }

    get distance():number 
    {
        if(this.source != 'completed_event') { return 0; }

        let parsedArr = this.text.split(' ');
        let unitLocation = 0;
        if (parsedArr.includes( 'mi' ) != undefined)
        {
            unitLocation = parsedArr.indexOf( 'mi');
            return parseFloat(parsedArr[unitLocation - 1]);
        }
        if (parsedArr.includes( 'km' ) != undefined)
        {
            unitLocation = parsedArr.indexOf( 'km');
            return (parseFloat(parsedArr[unitLocation - 1]) / 1.609);
        } 
        return 0;
    }

    
    get dayType():string 
    {
        if(this.created_At.includes( 'Sat ') || this.created_At.includes( 'Sun ' )) 
           { return "weekend"; } 
        else if (this.created_At.includes( 'Mon ') || 
                this.created_At.includes( 'Tue ') ||
                this.created_At.includes( 'Wed ') ||
                this.created_At.includes( 'Thu ') ||
                this.created_At.includes( 'Fri ') ) 
                { return "weekday"; }
        return "";
    }

    get day():string 
    {
        if(this.created_At.includes( 'Sat' )) { return "Sat"; } 
        else if(this.created_At.includes( 'Sun ' )) { return "Sun"; } 
        else if(this.created_At.includes( 'Mon ' )) { return "Mon"; } 
        else if(this.created_At.includes( 'Tue ' )) { return "Tue"; } 
        else if(this.created_At.includes( 'Wed ' )) { return "Wed"; } 
        else if(this.created_At.includes( 'Thu ' )) { return "Thu"; } 
        else if(this.created_At.includes( 'Fri ' )) { return "Fri"; }  
        return "";
    }

    
    getHTMLTableRow(rowNumber:number):string 
    {
        //TODO: return a table row which summarizes the tweet with a clickable link to the RunKeeper activity
        return "<tr></tr>";
    }
}