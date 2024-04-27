export default function Slides() {
  return (
    <div>
      <div className="slides">
        <SlideItem
          resName="Empy's Cafe & Resturant"
          resAim="Our Mission is to provide an unforgetable experience."
          resAnchor="Meet Our Chefs"
          resImage="item1"
        />

        {/* <SlideItem
          resName="Your perfect breakfast"
          resAim="The best dining quality is here too!"
          resAnchor="Discover Menu"
          resImage="item2"
        />

        <SlideItem
          resName="The Newest Restaurant In Town"
          resAim="Enjoy our special menu's every Sunday and Friday"
          resAnchor="Reservation"
          resImage="item3"
        /> */}
      </div>
    </div>
  );
}

function SlideItem({ resName, resAim, resAnchor, resImage }) {
  return (
    <div className={`slide-item ${resImage}`}>
      <div className="slide-content">
        <h4>{resName}</h4>
        <p>{resAim}</p>
        <a href="" class="btn2">
          {resAnchor}
        </a>
      </div>
    </div>
  );
}
