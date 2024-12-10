type BtnType = {
    text:string,
    onClick: () => void
 }
function Btn({text,onClick}:BtnType) {
   
  return (
    <div>
      <button className="bg-[#007bff] text-[17px] p-[10px 0] w-full hover:bg-[#0056b3] text-white  py-3 px-4 rounded-[12px]"
      onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Btn
