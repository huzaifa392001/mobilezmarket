
import moment from "moment/moment";
import { geocodeByAddress } from "react-places-autocomplete";

export const getImage = (endPoint) => {
  if (endPoint) {
    return `https://api.mobilezmarket.com/images/${endPoint}`;
  } else return "";
};

export const getFormattedDate = (date, frmt) => {
  if (frmt) {
    return moment(date).format(frmt);
  } else {
    return moment(date).format("DD MMM YYYY");
  }
};

export const logout = () => {
  localStorage.removeItem(`@token`);
  localStorage.removeItem(`@user`);
  localStorage.removeItem(`@phone`);
  window.location.href = window.location.origin + '/'
};

export const removeStorageItemByKey = (key) => {
  localStorage.removeItem(`@${key}`);
};


export const numberWithCommas = (x) => {

  let num = `${x}`

  // num with thousand separator
  let res = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return res


}


export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });



export const extractAddressComponents = (addressComponents) => {
  let extractedData = {
    area: "",
    city: "",
    province: "",
    country: "",
  };

  addressComponents.forEach((component) => {
    if (
      component.types.includes("sublocality") ||
      component.types.includes("neighborhood")
    ) {
      extractedData.area = component.long_name;
    } else if (component.types.includes("locality")) {
      extractedData.city = component.long_name;
    } else if (component.types.includes("administrative_area_level_1")) {
      extractedData.province = component.long_name;
    } else if (component.types.includes("country")) {
      extractedData.country = component.long_name;
    }
  });

  return extractedData;
};


const decodeAddress = async (latitude, longitude) => {
  const results = await geocodeByAddress(`${latitude}, ${longitude}`);
  if (results && results.length > 0) {
    const extractedData = extractAddressComponents(
      results[0]?.address_components
    );
    return extractedData;
  }
}


export const getLocationAndDecodeAddress = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const extractedData = await decodeAddress(latitude, longitude);
            resolve(extractedData);
          },
          (error) => {
            console.error(`Error getting location: ${error.message}`);
            reject(error);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
        reject(new Error("Geolocation is not supported by your browser"));
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
