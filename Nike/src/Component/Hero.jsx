const Hero = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, illum eligendi voluptatem praesentium illum eligendi voluptatem praesentium</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="./images/flipkart.png" alt="Flipkart-Logo" />
                        <img src="./images/amazon.png" alt="Amazon-Logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./images/shoe_image.png" alt="Shoe" />
            </div>
        </main>
    )    
}

export default Hero;