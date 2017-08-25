// Mark: - React stuff

// create classes
var NavBar = React.createClass({
  render: function(){
    return(
      <div className="navbar navbar-inverse navbar-custom navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            
            <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
          </div>
          
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
            	<NavMenu links={this.props.links} />
            </ul>
          </div>
          
        </div>
      </div>
    );
  }
});

var NavBrand = React.createClass({
  render: function(){
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    ); 
  }
});

var NavMenu = React.createClass({
  render: function(){
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
        );
      }
      else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
});


var NavLinkDropdown = React.createClass({
  render: function(){
    var active = false;
    var links = this.props.links.map(function(link){
      if(link.active){
        active = true;
      }
      return (
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
      );
    });
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
});


var NavLink = React.createClass({
  render: function(){
    return(
      <li className={(this.props.active ? "active" : "")}><a className="navbar-a-link" href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
});

// set data
var navbar = {};
navbar.brand = 
  {linkTo: "#", text: "Navbar Brand"};
navbar.links = [
  {linkTo: "#", text: "Link One"},
  {linkTo: "#", text: "Link Two"},
  {dropdown: true, text: "Dropdown", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2", active: true}
  ]}
];





	










// MARK: - Div area one
var DivAreaOne = React.createClass({
	render: function() {
		return (
			<div className="container-fluid fillwidth-lightgray">
			
				<div className="container div-area-one-container">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		);	
	}
});

// MARK: - Div area two
var DivAreaTwo = React.createClass({
	render: function() {
		return (
			<div className="container-fluid fillwidth-white">
				<div className="container">
					<div id ="area_one">
						<div className="row flex-override">
							<div className="col-sm-6 col-md-6 col-lg-6 vertical-align-center">
								<div className="valign-center">
									<p>
										"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

										1914 translation by H. Rackham

										"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

										Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

										"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
									</p>
								</div>
							</div>
						
						
							<div className="col-sm-3 col-md-3 col-lg-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
								<img className="img-responsive img-centered" alt="some image should go here"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

// MARK: - Div area three
var DivAreaThree = React.createClass({
	render: function() {
		return (
			<div className="container-fluid fillwidth-lightgray">
				<div className="container">
					<div id ="area_two">
						<div className="row flex-override">
							<div className="col-sm-3 col-md-3 col-lg-3">
								<img className="img-responsive img-centered" alt="some image should go here"/>
							</div>
						
						
							<div className="col-sm-6 col-md-6 col-lg-6 vertical-align-center">
								<div className="valign-center">
									<p>
										"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

										1914 translation by H. Rackham

										"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

										Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

										"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

// MARK: - Div area four
var DivAreaFour = React.createClass({
	render: function() {
		return (
			<div className="container-fluid fillwidth-white">
				<div className="container">
					<div id ="area_three">
						<div className="row flex-override">
							<div className="col-sm-6 col-md-6 col-lg-6 vertical-align-center">
								<div className="valign-center">
									<p>
										"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

										1914 translation by H. Rackham

										"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

										Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

										"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
									</p>
								</div>
							</div>
						
						
							<div className="col-sm-3 col-md-3 col-lg-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
								<img className="img-responsive img-centered" alt="some image should go here"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

// render the bootstrap NavBar
React.render(<NavBar {...navbar} />, document.getElementById("navbar-init"));
React.render(<DivAreaOne />, document.getElementById("div-area-one"));
React.render(<DivAreaTwo />, document.getElementById("div-area-two"));
React.render(<DivAreaThree />, document.getElementById("div-area-three"));
React.render(<DivAreaFour />, document.getElementById("div-area-four"));

// Footer rendered from footer.js file






// For the navbar scrolling effect
// Must go BENEATH the React rendering of navbar-init
function checkScroll() {

    var startY = $('.navbar.navbar-custom').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar.navbar-custom').addClass("scrolled");
    } else {
        $('.navbar.navbar-custom').removeClass("scrolled");  
    }
}

if($('.navbar.navbar-custom').length > 0) {
    $(window).on("scroll load resize", function() {
        checkScroll();
    });
}