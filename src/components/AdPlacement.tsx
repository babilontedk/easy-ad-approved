interface AdPlacementProps {
  type: "banner" | "sidebar" | "in-article" | "footer";
  className?: string;
}

const sizeMap = {
  banner: "h-[90px] w-full",
  sidebar: "h-[250px] w-full",
  "in-article": "h-[250px] w-full my-6",
  footer: "h-[90px] w-full",
};

const AdPlacement = ({ type, className = "" }: AdPlacementProps) => {
  return (
    <div className={`ad-placeholder ${sizeMap[type]} ${className}`}>
      <span className="text-xs uppercase tracking-widest opacity-50">Advertisement</span>
    </div>
  );
};

export default AdPlacement;
