import React, { useState } from "react";
import { Box, Button, Spinner } from "@cloudscape-design/components";

enum Status {
  LOADING,
  SUCCESS,
  ERROR,
}

interface Props {
  url: string;
  boxWidth: number;
  boxHeight: number;
}

const ImagePreview = (props: Props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [status, setStatus] = useState<Status>(Status.LOADING);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { naturalHeight, naturalWidth } = e.currentTarget;
    const scaleFactor = Math.min(
      props.boxWidth / naturalWidth,
      props.boxHeight / naturalHeight
    );
    setHeight(naturalHeight * scaleFactor);
    setWidth(naturalWidth * scaleFactor);
    setStatus(Status.SUCCESS);
  };

  return (
    <Button
      variant="link"
      formAction="none"
      onClick={() =>
        status === Status.SUCCESS &&
        window.open(props.url, "_blank", "noopener")
      }
    >
      <div
        style={{
          width: props.boxWidth,
          height: props.boxHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status === Status.LOADING && <Spinner />}
        {status === Status.ERROR ? (
          <Box variant="p">Unable to load image.</Box>
        ) : (
          <img
            src={props.url}
            style={{ width: width, height: height }}
            onLoad={handleLoad}
            onError={() => setStatus(Status.ERROR)}
          />
        )}
      </div>
    </Button>
  );
};

export default ImagePreview;
