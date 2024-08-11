import ClientImage from "@/components/fragments/ClientImage";

export default function BlogBackgroundImage({
  imageSrc,
  imageClass,
  imageAlt,
  children,
  className,
  ...props
}) {

    imageClass = imageClass ? imageClass : "";
    className = className ? className : "";
    imageAlt = imageAlt ? imageAlt : [];

  return (
    <div className={ "relative " +  className} {...props}>
      <div className={`flex absolute items-center overflow-hidden ` + imageClass}>
        <ClientImage width="auto" height="auto" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="absolute h-full w-full">
        {children}
      </div>
    </div>
  );
}
