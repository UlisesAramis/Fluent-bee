import { MdModeComment } from "react-icons/md";

type AdvantagesListProps = {
  items: string[];
  className?: string;
};

const AdvantagesList: React.FC<AdvantagesListProps> = ({
  items,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      {items.map((text, index) => (
        <div key={index} className="flex items-start gap-5">
          <MdModeComment className="w-10 h-10 shrink-0 mt-1" />
          <p className="leading-relaxed text-base md:text-lg">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesList;
