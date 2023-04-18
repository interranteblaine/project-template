export const formatFileSize = (bytes: number) => {
  const kb = 1024;
  const mb = kb ** 2;
  const base = bytes < kb ? kb : mb;
  const unit = bytes < kb ? " KB" : " MB";
  return (bytes / base).toFixed(2) + unit;
};
