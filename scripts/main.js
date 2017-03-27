/* robobibb JS library
* - generates navbar
* - generates footer
* - menu toggle
*/

// creates a navbar inside a given div
function genNavBar(objId){
	var navbar = document.getElementById(objId);
	navbar.className+= " w3-top";
	navbar.innerHTML = "\
			<div class=\"w3-bar w3-black w3-card-2\">\
				<a class=\"w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-opennav w3-right\"\
				   onclick=\"toggleMenu()\" id=\"hamburger-menu\"><i class=\"fa fa-bars\"></i></a>\
				<a href=\"https://robobibb.github.io/\" class=\"w3-bar-item w3-button w3-padding-large\">HOME</a>\
				<div id=\"navMenu\">\
					<a href=\"https://robobibb.github.io/about/\"\
					   class=\"navBtn w3-bar-item w3-button w3-padding-large w3-hide-small\">ABOUT</a>\
					<!-- dropdown menu for subteams-->\
					<div class=\"navBtn dd-navBtn w3-hide-small w3-dropdown-hover\">\
						<a href=\"javascript:void(0)\" onclick=\"\" class=\"w3-padding-large w3-button\"\
						   title=\"More\">SUB-TEAMS <i class=\"fa fa-caret-down\"></i></a>\
						<div class=\"w3-dropdown-content w3-whgrey3-card-4\">\
							<a href=\"https://robobibb.github.com/teams/mechanical/\">Mechanical</a>\
							<a href=\"https://robobibb.github.com/teams/electrical/\">Electrical</a>\
							<a href=\"https://robobibb.github.com/teams/programming/\">Programming</a>\
							<a href=\"https://robobibb.github.com/teams/marketing/\">Marketing</a>\
							<a href=\"https://robobibb.github.com/teams/drive/\">Drive</a>\
							<a href=\"https://robobibb.github.com/teams/scouting/\">Scouting</a>\
						</div>\
					</div>\
					<a href=\"https://robobibb.github.io/members/\"\
					   class=\"navBtn w3-bar-item w3-button w3-padding-large w3-hide-small\">MEMBERS</a>\
					<a href=\"https://robobibb.github.io/sponsors/\"\
					   class=\"navBtn w3-bar-item w3-button w3-padding-large w3-hide-small\">SPONSORS</a>\
					<a href=\"https://robobibb.github.io/outreach/\"\
					   class=\"navBtn w3-bar-item w3-button w3-padding-large w3-hide-small\">OUTREACH</a>\
					<a href=\"https://robobibb.github.io/skills/\"\
					   class=\"navBtn w3-bar-item w3-button w3-padding-large w3-hide-small\"\
					   title=\"we are more than robots!\">SKILL BUILDING</a>\
					<a href=\"https://robobibb.github.io/robots/\"\
					   class=\"navBtn w3-bar-item w3-button w3-padding-large w3-hide-small\">ROBOTS</a>\
				</div>\
			</div>";

}


// Used to toggle the hamburger-menu on small screens when clicking on the menu button
function toggleMenu(){
	var menu = document.getElementsByClassName("navBtn");
	for (var i = 0; i < menu.length; i++) {
		if (menu[i].className.indexOf("w3-hide-small") == -1) {
			menu[i].className += " w3-hide-small";
			document.getElementById("hamburger-menu").style.backgroundColor = "#000";
		} else {
			menu[i].className = menu[i].className.replace(" w3-hide-small", "");
			document.getElementById("hamburger-menu").style.backgroundColor = "red";
		}
	}
}

// generates the footer
function genFooter(){
	var footer = document.getElementById("dark-footer");
	footer.className += " w3-container w3-xlarge";
	footer.innerHTML = "<div class=\"w3-left\" id=\"socialLinks\">\
				<center><h6>Social</h6></center><hr/>\
				<a href=\"https://fb.com/teamrobobibb/\" title=\"we're @teamRoboBibb\"\
				   target=\"_blank\"><i class=\"fa social-icon fa-facebook-official w3-hover-text-indigo\"></i></a>\
				<a href=\"https://twitter.com/FRC4941\" title=\"140 characters or less\"\
				   target=\"_blank\"><i class=\"fa social-icon fa-twitter w3-hover-text-light-blue\"></i></a>\
				<a href=\"https://t.co/K8QYQHTEgu\" title=\"pictures and stuff\"\
				   target=\"_blank\"><i class=\"fa social-icon fa-instagram w3-hover-text-purple\"></i></a>\
				<br/>\
				<a href=\"https://plus.google.com/117965976071723693137\"\title=\"programming team uses Google+\" target=\"_blank\">\
					<i class=\"fa social-icon fa-google-plus-official w3-hover-text-red\"></i></a>\
				<a href=\"https://github.com/RoboBibb/\" title=\"we have some pretty sick projects on GitHub\" target=\"_blank\">\
					<i class=\"fa social-icon fa-github w3-hover-text-white\"></i></a>\
				<a href=\"mailto:frcteam4941@gmail.com\" title=\"send us an email\">\
					<i class=\"fa social-icon fa-envelope w3-hover-text-red\"></i></a>\
			</div>\
			<div class=\"foot-string\"><hr/></div><div class=\"foot-string\"><hr/></div>\
			<div class=\"foot-string\"><hr/></div><div class=\"foot-string\"><hr/></div>\
			<div class=\"foot-string\"><hr/></div><div class=\"foot-string\"><hr/></div>";

}
