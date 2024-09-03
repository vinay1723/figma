function Button({ name, setSection, section }) {
  return (
    <button
      className={`px-3 py-[5px] md:py-[10px] text-sm md:px-6 md:w-[195px] md:h-[49px] rounded-2xl  text-white font-['Poppins'] font-[500] md:text-lg leading-[16.12px] text-center ${
        section === name ? "bg-[#28292f] shadow-custom-right " : ""
      }`}
      onClick={() => setSection(name)}
    >
      {name}
    </button>
  );
}

export default Button;
