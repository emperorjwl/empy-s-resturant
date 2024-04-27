export default function Chefs() {
  return (
    <div className="chefs space">
      <h2>Meet our chefs</h2>
      <h5>They Are Nice & Friendly</h5>

      <div className="chef row">
        <ChefOverlay
          chefName=" New Catherine"
          chefRole="Kitchen Officer"
          imgPath="images/team-image1.jpg"
        />
        <ChefOverlay
          chefName="Lindsay Perlen"
          chefRole="Owner & Manager"
          imgPath="images/team-image2.jpg"
        />
        <ChefOverlay
          chefName="Isabella Grace"
          chefRole="Pizza Specialist"
          imgPath="images/team-image3.jpg"
        />
      </div>
    </div>
  );
}

function ChefOverlay({ chefName, chefRole, imgPath }) {
  return (
    <div className="small-space">
      <div className="chef-overlay full-width">
        <img src={imgPath} alt="" />
        <div className="overlay">
          <h6>Duis vel lacus id</h6>
          <h6>magna mattis</h6>
          <h6>vehicula</h6>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-envelope"></i>
        </div>
      </div>

      <h4>{chefName}</h4>
      <p>{chefRole}</p>
    </div>
  );
}
