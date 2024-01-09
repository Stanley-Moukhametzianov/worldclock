import { useEffect} from 'react'


export default function Clock({ ids }) {
	
	useEffect(() => {
		time_is_widget.init({Moscow_z71d:{template:"TIME<br>DATE<br>SUN", time_format:"12hours:minutes:secondsAMPM", date_format:"dayname, monthname dnum, year", sun_format:"Sunrise: srhour:srminute Sunset: sshour:ssminute<br>Day length: dlhoursh dlminutesm", coords:"55.7522200,37.6155600"}});
	})

    return (<>
   <a href="https://time.is/Moscow" id="time_is_link" rel="nofollow" ></a>
<span id="Moscow_z71d" ></span>


<script src="//widget.time.is/en.js"></script>
		

        </>
    
)
}