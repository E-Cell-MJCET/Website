import Image from "next/image";
import React from "react";
import { useCallback, useState } from "react";
import { Controlled as Zoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomedImage = ({ url }: { url: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <Zoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <Image
        src={url}
        alt={""}
        className={`${
          isZoomed ? "h-[1000px]" : "h-80"
        } w-full object-cover rounded-lg`}
        width={500}
        height={500}
      />
    </Zoom>
  );
};

export default ZoomedImage;
