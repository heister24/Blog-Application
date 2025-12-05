import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "public_DKW1vUunDMpfkf+8uVaQzSsjUfA=",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "private_V6EaXhuYMVthlJ4l9f2qRiHMYtE=",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/yufqd9nah",
});

export default imagekit;
