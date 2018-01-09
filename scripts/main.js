/* robobibb JS library
* - generates navbar
* - generates footer
* - menu toggle
* - google analytics
*/



// Used to toggle the hamburger-menu on small screens when clicking on the menu button
function toggleMenu(){
	var menu = document.getElementsByClassName("navBtn");

	// for each menu item
	for (var i = 0; i < menu.length; i++) {

		// if open - hide it
		if (menu[i].className.indexOf("w3-hide-small") == -1) {
			menu[i].className += " w3-hide-small";
			document.getElementById("hamburger-menu").style.backgroundColor = "#000";

		// if closed - show it
		} else {
			menu[i].className = menu[i].className.replace(" w3-hide-small", "");
			document.getElementById("hamburger-menu").style.backgroundColor = "red";
		}
	}
}


// creates a navbar inside a given div
function genNavBar(objId){
	var navbar = document.getElementById(objId);
	navbar.className += " w3-top";
	navbar.innerHTML = `
			<div class="w3-bar w3-black w3-card-2">
				<a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-opennav w3-right"
				   onclick="toggleMenu()" id="hamburger-menu"><i class="fa fa-bars"></i></a>
			
				<div id="navMenu">
					<a class="navBtn w3-bar-item w3-button w3-padding-large"
					   href="https://robobibb.github.io/">HOME</a>

					<!-- dropdown menu for about us -->
					<div class="navBtn dd-navBtn w3-hide-small w3-padding-large w3-dropdown-hover">
						<a href="javascript:void(0)" onclick="" class="w3-padding-large w3-button"
						   title="More">ABOUT <i class="fa fa-caret-down"></i></a>
						<div class="w3-dropdown-content w3-whgrey3-card-4">
							<a href="https://robobibb.github.io/about/">About Us</a>
							<a href="https://robobibb.github.io/members/">Members</a>
							<a href="https://robobibb.github.io/sponsors/">Sponsors</a>
							<a href="https://robobibb.github.io/impact/">Our Impact</a>
							<a href="https://robobibb.github.io/skills/"
							   title="We are more than robots!">Skills Gained</a>
							<a href="https://robobibb.github.io/robots/">Our Robots</a>
						</div>
					</div>
					<!-- dropdown menu for subteams-->
					<div class="navBtn dd-navBtn w3-hide-small w3-padding-large w3-dropdown-hover">
						<a href="javascript:void(0)" onclick="" class="w3-padding-large w3-button"
						   title="More">SUB-TEAMS <i class="fa fa-caret-down"></i></a>
						<div class="w3-dropdown-content w3-whgrey3-card-4">
							<a href="https://robobibb.github.io/mechanical/">Mechanical</a>
							<a href="https://robobibb.github.io/electrical/">Electrical</a>
							<a href="https://robobibb.github.io/programming/">Programming</a>
							<a href="https://robobibb.github.io/marketing/">Marketing</a>
							<a href="https://robobibb.github.io/drive/">Drive</a>
							<a href="https://robobibb.github.io/scouting/">Scouting</a>
							<a href="https://robobibb.github.io/safety/">Safety</a>
						</div>
					</div>

					<a class="navBtn w3-bar-item w3-button w3-padding-large w3-hide-small"
					   href="https://robobibb.github.io/updates/">UPDATES</a>

				</div>
			</div>`;


}

// generates the footer
function genFooter(){
	var footer = document.getElementById("dark-footer");
	footer.className += " w3-container w3-xlarge";
	footer.innerHTML = `
			<table><tr>
				<td><div id="socialLinks">
					<center><h6>Social</h6></center><hr/>
					<a href="https://fb.com/teamrobobibb/" title="we\'re @teamRoboBibb"
					   target="_blank"><i class="fa social-icon fa-facebook-official w3-hover-text-indigo"></i></a>
					<a href="https://twitter.com/FRC4941" title="140 characters or less"
					   target="_blank"><i class="fa social-icon fa-twitter w3-hover-text-light-blue"></i></a>
					<a href="https://t.co/K8QYQHTEgu" title="pictures and stuff"
					   target="_blank"><i class="fa social-icon fa-instagram w3-hover-text-purple"></i></a>
					<br/>
					<a href="https://www.flickr.com/people/137802901@N03/" title="Media Team uses Flickr" target="_blank">
						<i class="fa social-icon fa-flickr w3-hover-text-red"></i></a>
					<a href="https://github.com/RoboBibb/" title="we have some pretty sick projects on GitHub" target="_blank">
						<i class="fa social-icon fa-github w3-hover-text-white"></i></a>
					<a href="mailto:frcteam4941@gmail.com" title="send us an email">
						<i class="fa social-icon fa-envelope w3-hover-text-red"></i></a>
				</div></td><td id="foot-strings">
					<div class="foot-string"><hr/></div><div class="foot-string"><hr/></div>
					<div class="foot-string"><hr/></div><div class="foot-string"><hr/></div>
					<div class="foot-string"><hr/></div><div class="foot-string"><hr/></div>
				</td>
			</tr></table>`;

}


// google analytics... although here isn't really the best place...
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-96330087-1', 'auto');
ga('send', 'pageview');
