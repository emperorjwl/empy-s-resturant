export default function Menu() {
  return (
    <div>
      <div>
        <div className="menu">
          <div className="menu-title">
            <h4>Our Menus</h4>
            <p>Tea Time And Dining</p>
          </div>
        </div>
        <FoodOverlay
          imgFoodpath="/images/menu-image1.jpg"
          foodName="American Breakfast"
          foodAbout="Tomato / Eggs / Sausage"
          price="$25"
        />

        <FoodOverlay
          imgFoodpath="/images/menu-image2.jpg"
          foodName="Self-Made Salad"
          foodAbout="Green / Fruits / Healthy"
          price="$18"
        />

        <FoodOverlay
          imgFoodpath="/images/menu-image3.jpg"
          foodName="Chinese Noodles "
          foodAbout="Pepper / Chicken / Vegetables"
          price="$34"
        />

        <FoodOverlay
          imgFoodpath=" /images/menu-image4.jpg"
          foodName="Rice Soup"
          foodAbout="Green / Chicken"
          price="$28"
        />

        <FoodOverlay
          imgFoodpath="/images/menu-image5.jpg"
          foodName="Deli Burger"
          foodAbout="Beef / Fried Potatoes"
          price="$46"
        />

        <FoodOverlay
          imgFoodpath="/images/menu-image6.jpg"
          foodName="Big Flat Fried"
          foodAbout="Spicy / Crisp"
          price="$30"
        />
      </div>
    </div>
  );
}

export function FoodOverlay({ imgFoodpath, foodName, foodAbout, price }) {
  return (
    <div className="food">
      <img src={imgFoodpath} alt="American Breakfast" />
      <div className="food-desc">
        <div className="food-beta">
          <h4>{foodName}</h4>
          <p className="fine">{foodAbout}</p>
        </div>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
