// import profileImage from "../../assets/images/60111.jpg";
function Card({ data }) {
    const {image,name,email}=data
  return (
    <div className="min-w-48 h-72 bg-purple-100-400 rounded-md overflow-hidden border-solid border-2 border-gray-500-500 bg-teal-200">
      <div className="w-100 h-28 bg-zinc-600 overflow-hidden">
        <img
          src={image}
          alt=""
          className="object-cover mx-auto"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-col px-5">
        <div>
          <span className="font-mono">Name</span>:
          <span className="text-sm">{name}</span>
        </div>
        <div>
          <span className="font-mono">Email</span>:
          <span className="text-sm text-clip overflow-hidden">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Card;
