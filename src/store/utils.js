export const constructOptions = (url, data) => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: Object.keys(data)
      .filter((k) => data.hasOwnProperty(k))
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&"),
    url: url,
  };
  return options;
};
