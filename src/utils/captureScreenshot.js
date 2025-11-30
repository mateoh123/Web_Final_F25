import axios from "axios";
import html2canvas from "html2canvas";

// Renamed to lowercase to ensure React never treats it as a component
const captureScreenshot = async (element, imageFileName, droppedItems = []) => {
  try {
    // Capture the screenshot
    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      scale: 2,
      logging: false,
    });

    // Convert canvas to blob
    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, "image/png", 1.0);
    });

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", blob, `${imageFileName}.png`);
    formData.append("upload_preset", "outfits_preset");

    const cloudinaryResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/dmjzidsiy/image/upload",
      formData
    );

    const imageUrl = cloudinaryResponse.data.secure_url;

    // Save to JSON server
    const outfitData = {
      name: `Outfit ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      image: imageUrl,
      items: droppedItems.map((item) => item.id),
      createdAt: new Date().toISOString(),
    };

    const jsonServerResponse = await axios.post(
      "http://localhost:3001/outfits",
      outfitData
    );

    return {
      success: true,
      cloudinaryUrl: imageUrl,
      outfitId: jsonServerResponse.data.id,
    };
  } catch (error) {
    console.error("Error capturing/uploading screenshot:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export default captureScreenshot;
