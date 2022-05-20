export const envVariables = {
  BASE_URL: import.meta.env.VITE_API_URL,
  MAP_TOKEN: `https://api.mapbox.com/styles/v1/tobicorradi/cl3el2qne000o15pkcygzhmbq/tiles/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAP_ACCESS_TOKEN}`,
};
