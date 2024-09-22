import React from "react";

const Header = () => {
  return (
    <header class="site-header main-bar-wraper top-0 left-0 w-full z-[999]">
		<div class="main-bar">
			<div class="container">
				{/* <!-- Website Logo --> */}
				<div class="logo-header w-[180px] h-[64px] items-center relative flex float-left">
					<a href="index.html" class="anim-logo">
						<img src="assets/images/logo.png" alt="/"/>
					</a>
				</div>
				
				{/* <!-- Toggle button --> */}
				<button class="togglebtn lg:hidden block bg-primary w-[45px] h-[45px] relative rounded-md float-right mt-2">
					<span class="bar1"></span>
					<span class="bar2"></span>
					<span class="bar3"></span>
				</button>
				
				{/* <!-- EXTRA NAV --> */}
				<div class="extra-nav float-right items-center h-[64px] lg:flex relative hidden pl-[60px]">
					<div class="extra-cell flex items-center">
						<ul class="flex items-center gap-[10px]">
							<li class="inline-block">
								<a class="bg-white text-[var(--title)] user-btn white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]" href="#offcanvasLogin">
									<i class="flaticon-user text-2xl inline-flex"></i>
								</a>
							
							</li>
							<li class="inline-block">
								<button class="cart-btn bg-white white-btn flex items-center justify-center w-[45px] h-[45px] rounded-md shadow-[0_10px_10px_0_rgba(0,0,0,0.1)]">
									<i class="flaticon-shopping-bag-1 text-2xl inline-flex ping-bag-1"></i>
									<span class="badge absolute top-[3px] right-[-6px] p-0 h-5 w-5 font-medium text-xs leading-5 bg-[#666666] text-white rounded-[10px]">6</span>
								</button>
								<ul class="dropdown-menu cart-list mt-2.5">
									<li class="cart-item">
										<div class="media"> 
											<div class="media-left"> 
												<a href="product-detail.html"> 
													<img alt="/" class="media-object" src="assets/images/shop/pic2.jpg"/> 
												</a> 
											</div> 
											<div class="media-body"> 
												<h6 class="dz-title"><a href="product-detail.html" class="media-heading">Double Burger</a></h6>
												<span class="dz-price">$28.00</span>
												<span class="item-close">&times;</span>
											</div> 
										</div>
									</li>
									<li class="cart-item">
										<div class="media"> 
											<div class="media-left"> 
												<a href="product-detail.html"> 
													<img alt="/" class="media-object" src="assets/images/shop/pic3.jpg"/> 
												</a> 
											</div> 
											<div class="media-body"> 
												<h6 class="dz-title"><a href="product-detail.html" class="media-heading">Cheese Burger</a></h6>
												<span class="dz-price">$20.00</span>
												<span class="item-close">&times;</span>
											</div> 
										</div>
									</li>
									<li class="cart-item">
										<div class="media"> 
											<div class="media-left"> 
												<a href="product-detail.html"> 
													<img alt="/" class="media-object" src="assets/images/shop/pic4.jpg"/> 
												</a> 
											</div> 
											<div class="media-body"> 
												<h6 class="dz-title"><a href="product-detail.html" class="media-heading">Burger</a></h6>
												<span class="dz-price">$15.00</span>
												<span class="item-close">&times;</span>
											</div> 
										</div>
									</li>
									<li class="cart-item text-center flex justify-between">
										<h6 class="text-primary mb-0">Total:</h6>
										<h6 class="text-primary mb-0">$63</h6>
									</li>
									<li class="text-center flex">
										<a href="shop-cart.html" class="btn btn-primary me-2 w-full btn-hover-1"><span>View Cart</span></a>
										<a href="our-menu-1.html" class="btn btn-outline w-full btn-hover-1"><span>Menu</span></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div> 
				{/* <!-- EXTRA NAV --> */}
				
				{/* <!-- Header Nav --> */}
				<div class="header-nav lg:justify-end lg:flex-row flex-col lg:gap-0 gap-5 flex">
					<div class="logo-header lg:hidden">
						<a href="index.html" class="anim-logo">
							<img src="assets/images/logo.png" alt="/"/>
						</a>
					</div>
					<ul class="nav navbar-nav navbar lg:flex items-center float-right">
						<li class="sub-menu-down"><a href="javascript:void(0);">Home</a>
							<ul class="sub-menu">
								<li class="py-[5px] px-5 relative"><a href="index.html">Home 01</a></li>
								<li class="py-[5px] px-5 relative"><a href="index-2.html">Home 02</a></li>
								<li class="py-[5px] px-5 relative"><a href="index-3.html">Home 03</a></li>
							</ul>
						</li>
						<li class="has-mega-menu sub-menu-down">
							<a href="javascript:void(0);">Pages</a>
							<ul class="mega-menu sub-menu left-0 p-0 max-w-[1100px] max-xl:max-w-[990px] w-full mx-auto">
								<li><a href="javascript:;">Pages</a>
									<ul class="sub-part lg:mt-[15px]">
										<li><a href="about-us.html">About Us</a></li>
										<li><a href="faq.html">FAQ</a></li>
										<li><a href="team.html">Team</a></li>
										<li><a href="team-detail.html">Team Detail</a></li>
										<li><a href="testimonial.html">Testimonial</a></li>
									</ul>
								</li>
								<li><a href="javascript:void(0);">Pages</a>
									<ul class="lg:mt-[15px] sub-part">
										<li><a href="services.html">Services</a></li>
										<li><a href="service-detail.html">Service Detail</a></li>
										<li><a href="error-404.html">Error 404</a></li>
										<li><a href="coming-soon.html">Coming Soon</a></li>
										<li><a href="under-maintenance.html">Under Maintenance</a></li>
									</ul>
								</li>
								<li><a href="javascript:void(0);">Our Menus</a>
									<ul class="lg:mt-[15px] sub-part">
										<li><a href="our-menu-1.html">Menu Style 1</a></li>
										<li><a href="our-menu-2.html">Menu Style 2</a></li>
										<li><a href="our-menu-3.html">Menu Style 3</a></li>
										<li><a href="our-menu-4.html">Menu Style 4</a></li>
										<li><a href="our-menu-5.html">Menu Style 5</a></li>
									</ul>
								</li>
								 <li className="header-adv lg:table-cell hidden pt-[15px] px-[15px] pb-[15px] relative align-top w-1/4">
      <img src="assets/images/adv-media.jpg" alt="Advertisement" />
    </li>
							</ul>
						</li>
						<li class="sub-menu-down">
							<a href="javascript:void(0);">Shop</a>
							<ul class="sub-menu">
								<li class="py-[5px] px-5 relative"><a href="shop-style-1.html">Shop Style 1</a></li>
								<li class="py-[5px] px-5 relative"><a href="shop-style-2.html">Shop Style 2</a></li>
								<li class="py-[5px] px-5 relative"><a href="shop-cart.html">Shop Cart</a></li>
								<li class="py-[5px] px-5 relative"><a href="shop-wishlist.html">Shop Wishlist</a></li>
								<li class="py-[5px] px-5 relative"><a href="shop-checkout.html">Shop Checkout</a></li>
								<li class="py-[5px] px-5 relative"><a href="product-detail.html">Product Detail</a></li>
							</ul>
						</li>
						<li class="sub-menu-down has-mega-menu">
							<a href="javascript:void(0);">Blogs</a>
							<ul class="mega-menu sub-menu p-0 left-0 lg:table">
								<li> <a href="javascript:;">Blog Grid</a>
									<ul class="sub-part lg:mt-[15px]">
										<li><a href="blog-grid-2.html">Blog Grid 2</a></li>
										<li><a href="blog-grid-3.html">Blog Grid 3</a></li>
										<li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
										<li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
									</ul>
								</li>
								<li> <a href="javascript:;">Blog List</a>
									<ul class="sub-part lg:mt-[15px]">
										<li><a href="blog-list.html">Blog List</a></li>
										<li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
										<li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
										<li><a href="blog-both-sidebar.html">Blog Both Sidebar</a></li>
									</ul>
								</li>
								<li> <a href="javascript:;">Blog Single</a>
									<ul class="sub-part lg:mt-[15px]">
										<li><a href="blog-standard.html">Blog Detail</a></li>
										<li><a href="blog-open-gutenberg.html">Blog Open Gutenberg</a></li>
										<li><a href="blog-detail-left-sidebar.html">Blog Details Left Sidebar</a></li>
										<li><a href="blog-detail-right-sidebar.html">Blog Details Right Sidebar</a></li>
									</ul>
								</li>
								<li> <a href="javascript:void(0);">Blog Masonry</a>
									<ul class="sub-part lg:mt-[15px]">
										<li><a href="blog-grid-3-masonary.html">Blog Grid 3 Masonry</a></li>
										<li><a href="blog-grid-4-masonary.html">Blog Grid 4 Masonry</a></li>
										<li><a href="blog-wide-list-sidebar.html">Blog Wide List Sidebar</a></li>
										<li><a href="blog-wide-grid-sidebar.html">Blog Wide Grid Sidebar</a></li>
									</ul>
								</li>
							</ul>
						</li>
						
						<li>
							<a href="contact-us.html">Contact Us</a>
						</li>
					</ul>
					
					<div class="dz-social-icon">
						<ul>
							<li><a target="_blank" class="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
							<li><a target="_blank" class="fab fa-twitter" href="https://twitter.com/"></a></li>
							<li><a target="_blank" class="fab fa-linkedin-in" href="https://www.linkedin.com/"></a></li>
							<li><a target="_blank" class="fab fa-instagram" href="https://www.instagram.com/"></a></li>
						</ul>
					</div>	
				</div>	
			</div>
		</div>
	</header>
  );
};

export default Header;
