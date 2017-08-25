var FooterArea = React.createClass({
	render: function() {
		return (
			<div className="footer-background-color">
				<div className="container">
					<div class="row">
						<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
							<ul className="footer-list-style">
								<h3>My Info</h3>
								<p><a href="http://chrishonwyllie.com/">Portfolio</a></p>
								<p><a href="https://www.linkedin.com/in/chrishonwyllie/">LinkedIn</a></p>
								<p><a href="https://github.com/ChrishonWyllie">Github</a></p>
							</ul>
						</div>
		
						<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
							<ul className="footer-list-style">
								<h3>iOS applictions</h3>
								<p><a href="https://itunes.apple.com/us/app/potburn/id1148541637?mt=8">Potburn iOS</a></p>
								<p><a href="https://itunes.apple.com/us/app/next-gear-crew/id1183996071?mt=8">Next Gear Crew iOS</a></p>
								<p><a href="https://itunes.apple.com/us/app/chatlyne/id1184927300?mt=8">Chatlyne iOS</a></p>
							</ul>
						</div>
		
						<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
							<ul className="footer-list-style">
								<h3>Android applications</h3>
								<p><a href='https://play.google.com/store/apps/details?id=com.chrishonwyllie.potburn&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>Potburn Android</a></p>
								<p><a href='http://play.google.com/store/apps/details?id=com.chrishonwyllie.nextgearcrew&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>Next Gear Crew Android</a></p>	
							</ul>
						</div>
		
						<div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
							<ul className="footer-list-style">
								<h3>Social</h3>
								<p><a href="http://twitter.com/potburnapp"><i class="fa fa-twitter"></i> Twitter</a></p>
								<p><a href="http://facebook.com/potburn"><i class="fa fa-facebook"></i> Facebook</a></p>
								<p><a href="http://instagram.com/potburnapp"><i class="fa fa-instagram"></i> Instagram</a></p>
								<p><a href="http://pinterest.com/potburn"><i class="fa fa-pinterest"></i> Pinterest</a></p>
							</ul>
						</div>
					</div>
				</div>
    		</div>
		);
	}
});

React.render(<FooterArea />, document.getElementById("footer"));