import { Cloudinary } from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";

const ImageBGRemoved = ({ image }) => {
  const cloud = new Cloudinary({
    cloud: { cloudName: "dmjzidsiy" }, //getting my name from Cloudinary
  });

  if (!image) return null; //if there is no image, make return nothing

  const newId = image.replace(/^.*\/upload\//, ""); //remove everything in the imageURL up and including "/upload/"

  return cloud.image(newId).effect(backgroundRemoval()).toURL(); //return the new image, remove the background and turn it into a URL
};

export default ImageBGRemoved;
