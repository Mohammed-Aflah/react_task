function DisplayCount(prop){
    return(
        <div className="w-[100%] h-20 bg-gray-400 num flex justify-center items-center text-white text-4xl">
          {prop.count}
        </div>
    )
}
export default DisplayCount