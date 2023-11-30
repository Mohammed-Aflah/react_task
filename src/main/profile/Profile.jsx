import Card from "./Card";
import profileImage from "../../assets/images/60111.jpg";
const data = [
  {
    name: "aflu",
    email: "af@gmail.com",
    image: profileImage,
  },
  {
    name: "afsal",
    email: "Afsal@gmail.com",
    image: profileImage,
  },
  {
    name: "sanal",
    email: "sanal@gmail.com",
    image: profileImage,
  },
];
function Profile() {
  return (
    <div className="container w-100 mx-auto flex-col flex my-2 overflow-y-auto items-center">
      <h2 className="font-mono text-1xl">Profile Section</h2>
      <div className="w-[100%]  flex justify-center gap-3">
        {data.map((val, key) => {
          return <Card data={val} key={key} />
        })}
      </div>
    </div>
  );
}
export default Profile;
