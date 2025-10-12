"use client";
import { useEffect } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

const ImageUploader = () => {
  const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint = "/api/imgkit"; // ✅ relative path


  useEffect(() => {
  fetch("/api/imgkit")
    .then(res => res.json())
    .then(data => console.log("Auth endpoint working:", data))
    .catch(err => console.error("Auth endpoint error:", err));
}, []);


  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticationEndpoint={authenticationEndpoint}
    >
      <IKUpload
        fileName="my-upload.jpg"
        onSuccess={(res) => console.log("Upload success:", res)}
        onError={(err) => console.error("Upload error:", err)}
      />
    </IKContext>
  );
};

export default ImageUploader;
