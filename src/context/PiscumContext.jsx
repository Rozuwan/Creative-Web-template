import { createContext, useContext, useEffect, useState } from "react";

const PicsumContext = createContext();

export const PicsumProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <PicsumContext.Provider
      value={{
        images,
        loading,
        error,
      }}
    >
      {children}
    </PicsumContext.Provider>
  );
};

export const usePicsum = () => {
  return useContext(PicsumContext);
};
