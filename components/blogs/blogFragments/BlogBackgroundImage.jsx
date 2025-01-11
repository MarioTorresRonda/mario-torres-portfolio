import ClientImage from "@/components/fragments/ClientImage";

export default function BlogBackgroundImage({
  imageSrc,
  imageAlt,
  children,
  className,
  imageClass,
  clientImagClass,
  priority,
  ...props
}) {

    imageClass = imageClass ? imageClass : "";
    className = className ? className : "";
    clientImagClass = clientImagClass ? clientImagClass : "[]";
    imageAlt = imageAlt ? imageAlt : [];
    priority = priority ? true : false;

  return (
    <div className={ "relative " +  className} {...props}>
      <div className={`flex absolute ` + imageClass} >
        <ClientImage width="auto" height="auto" src={imageSrc} alt={imageAlt} className={clientImagClass} priority={priority} />
      </div>
      <div className="absolute h-full w-full">
        {children}
      </div>
    </div>
  );
}
