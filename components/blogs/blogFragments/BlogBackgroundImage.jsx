import ClientImage from "@/components/fragments/ClientImage";

export default function BlogBackgroundImage({
  imageSrc,
  imageAlt,
  children,
  className,
  imageClass,
  clientImagClass,
  ...props
}) {

    imageClass = imageClass ? imageClass : "";
    className = className ? className : "";
    clientImagClass = clientImagClass ? clientImagClass : "[]";
    imageAlt = imageAlt ? imageAlt : [];

  return (
    <div className={ "relative " +  className} {...props}>
      <div className={`flex absolute ` + imageClass} >
        <ClientImage width="auto" height="auto" src={imageSrc} alt={imageAlt} className={clientImagClass} />
      </div>
      <div className="absolute h-full w-full">
        {children}
      </div>
    </div>
  );
}
