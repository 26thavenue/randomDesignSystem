type AvatarType = "picture" | "letter";

interface IAvatar {
  type: AvatarType;
  imgSrc?: string;
  letter?: string;
  alt?: string;
}

const Avatar = ({ type, imgSrc, letter, alt }: IAvatar) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black font-bold">
      {type === "picture" ? (
        <img
          src={imgSrc || "https://placehold.co/20"} 
          alt={alt || "Avatar"}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span className="text-lg uppercase">{letter?.charAt(0) || "?"}</span>
      )}
    </div>
  );
};

export default Avatar;
