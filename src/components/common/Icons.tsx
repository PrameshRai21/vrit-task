import { icons } from "../../constants/icons";

function Icons() {
  return (
    <div className="flex gap-11">
      {icons.map((icon) => (
        <div key={icon} className="w-20 h-20 object-contain">
          <img src={icon} alt={`${icon}.png`} />
        </div>
      ))}
    </div>
  );
}

export default Icons;
