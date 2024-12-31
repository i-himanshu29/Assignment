//update 3

// import React, { useState, useRef, useEffect } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// // Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div style={modalBackdropStyle}>
//       <div style={modalStyle}>
//         <button onClick={onClose} style={closeButtonStyle}>X</button>
//         {children}
//       </div>
//     </div>
//   );
// };

// const libraries = ["places"]; // Include Places Library for Search
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Default to New Delhi

// const LocationSelector = () => {
//   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
//   const [address, setAddress] = useState("");
//   const [locationError, setLocationError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLocationConfirmed, setIsLocationConfirmed] = useState(false); // To track if location is confirmed
//   const mapRef = useRef();

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU", // Replace with your API Key
//     libraries,
//   });

//   // Load user's location when the component is mounted
//   useEffect(() => {
//     handleLocateMe();
//   }, []);

//   const onMapLoad = (map) => {
//     mapRef.current = map;
//   };

//   const handleLocateMe = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setSelectedLocation(userLocation);
//           mapRef.current.panTo(userLocation);
//           reverseGeocode(userLocation); // Reverse geocode to get address
//         },
//         (error) => {
//           setLocationError("Unable to fetch location. Please enable location.");
//         }
//       );
//     } else {
//       setLocationError("Geolocation is not supported by your browser.");
//     }
//   };

//   const handleDragEnd = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setSelectedLocation(newPosition);
//     reverseGeocode(newPosition); // Update address when pin is dragged
//   };

//   const reverseGeocode = async (position) => {
//     const { lat, lng } = position;
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU`
//     );
//     const data = await response.json();
//     if (data.results && data.results[0]) {
//       const address = data.results[0].formatted_address;
//       setAddress(address); // Set address to the state to update the input field
//     }
//   };

//   const handleConfirmLocation = () => {
//     // When the user confirms the location, you can store the location and address
//     setIsLocationConfirmed(true);
//     console.log("Location Confirmed:", selectedLocation, address);
//     setIsModalOpen(false); // Close the modal after confirmation
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         style={{ padding: "10px", marginBottom: "20px" }}
//       >
//         Open Location Selector
//       </button>

//       {/* Modal with Google Map */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div>
//           <div style={{ marginBottom: "10px" }}>
//             <input
//               type="text"
//               value={address} // Address is now dynamically updated
//               onChange={(e) => setAddress(e.target.value)} // Allow manual address change
//               placeholder="Selected Address"
//               style={{ width: "80%", padding: "10px" }}
//             />
//             <button onClick={handleLocateMe} style={{ padding: "10px" }}>
//               Locate Me
//             </button>
//           </div>
//           {locationError && (
//             <div style={{ color: "red", marginBottom: "10px" }}>
//               {locationError}
//             </div>
//           )}
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={14}
//             center={selectedLocation}
//             onLoad={onMapLoad}
//           >
//             <Marker
//               position={selectedLocation}
//               draggable
//               onDragEnd={(event) => handleDragEnd(event)}
//             />
//           </GoogleMap>
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={handleConfirmLocation}
//               style={{
//                 padding: "10px",
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Confirm Location
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* Display Confirmed Location */}
//       {isLocationConfirmed && (
//         <div style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
//           Location Confirmed!<br />
//           Address: {address}<br />
//           Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
//         </div>
//       )}
//     </div>
//   );
// };

// // Modal Styling
// const modalBackdropStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalStyle = {
//   backgroundColor: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   width: "80%",
//   maxWidth: "600px",
//   position: "relative",
// };

// const closeButtonStyle = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   backgroundColor: "transparent",
//   border: "none",
//   fontSize: "20px",
//   cursor: "pointer",
// };

// export default LocationSelector;


//update 2

// import React, { useState, useRef, useEffect } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// // Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div style={modalBackdropStyle}>
//       <div style={modalStyle}>
//         <button onClick={onClose} style={closeButtonStyle}>X</button>
//         {children}
//       </div>
//     </div>
//   );
// };

// const libraries = ["places"]; // Include Places Library for Search
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Default to New Delhi

// const LocationSelector = () => {
//   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
//   const [address, setAddress] = useState("");
//   const [locationError, setLocationError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLocationConfirmed, setIsLocationConfirmed] = useState(false); // To track if location is confirmed
//   const mapRef = useRef();

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU", // Replace with your API Key
//     libraries,
//   });

//   // Load user's location when the component is mounted
//   useEffect(() => {
//     handleLocateMe();
//   }, []);

//   const onMapLoad = (map) => {
//     mapRef.current = map;
//   };

//   const handleLocateMe = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setSelectedLocation(userLocation);
//           mapRef.current.panTo(userLocation);
//           reverseGeocode(userLocation); // Reverse geocode to get address
//         },
//         (error) => {
//           setLocationError("Unable to fetch location. Please enable location.");
//         }
//       );
//     } else {
//       setLocationError("Geolocation is not supported by your browser.");
//     }
//   };

//   const handleDragEnd = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setSelectedLocation(newPosition);
//     reverseGeocode(newPosition); // Update address when pin is dragged
//   };

//   const reverseGeocode = async (position) => {
//     const { lat, lng } = position;
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU`
//     );
//     const data = await response.json();
//     if (data.results && data.results[0]) {
//       setAddress(data.results[0].formatted_address);
//     }
//   };

//   const handleConfirmLocation = () => {
//     // When the user confirms the location, you can store the location and address
//     setIsLocationConfirmed(true);
//     console.log("Location Confirmed:", selectedLocation, address);
//     setIsModalOpen(false); // Close the modal after confirmation
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         style={{ padding: "10px", marginBottom: "20px" }}
//       >
//         Open Location Selector
//       </button>

//       {/* Modal with Google Map */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div>
//           <div style={{ marginBottom: "10px" }}>
//             <input
//               type="text"
//               value={address}
//               readOnly
//               placeholder="Selected Address"
//               style={{ width: "80%", padding: "10px" }}
//             />
//             <button onClick={handleLocateMe} style={{ padding: "10px" }}>
//               Locate Me
//             </button>
//           </div>
//           {locationError && (
//             <div style={{ color: "red", marginBottom: "10px" }}>
//               {locationError}
//             </div>
//           )}
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={14}
//             center={selectedLocation}
//             onLoad={onMapLoad}
//           >
//             <Marker
//               position={selectedLocation}
//               draggable
//               onDragEnd={(event) => handleDragEnd(event)}
//             />
//           </GoogleMap>
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={handleConfirmLocation}
//               style={{
//                 padding: "10px",
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Confirm Location
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* Display Confirmed Location */}
//       {isLocationConfirmed && (
//         <div style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
//           Location Confirmed!<br />
//           Address: {address}<br />
//           Latitude: {selectedLocation.lat}, Longitude: {selectedLocation.lng}
//         </div>
//       )}
//     </div>
//   );
// };

// Modal Styling
// const modalBackdropStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalStyle = {
//   backgroundColor: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   width: "80%",
//   maxWidth: "600px",
//   position: "relative",
// };

// const closeButtonStyle = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   backgroundColor: "transparent",
//   border: "none",
//   fontSize: "20px",
//   cursor: "pointer",
// };

// export default LocationSelector;


// updated version

import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import useGeoLocation from "../Context/useGeoLocation";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={modalBackdropStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>X</button>
        {children}
      </div>
    </div>
  );
};

const libraries = ["places"]; // Include Places Library for Search
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Default to New Delhi

const LocationSelector = () => {
  // const location = useGeoLocation();
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const [address, setAddress] = useState("");
  const [locationError, setLocationError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD0RhJojLmcp0D130p5faKXMtx2qX5UU7A", // Replace with your API Key
    libraries,
  });

  // Load user's location when the component is mounted
  useEffect(() => {
    handleLocateMe();
  }, []);

  const onMapLoad = (map) => {
    mapRef.current = map;
  };

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setSelectedLocation(userLocation);
          // mapRef.current.panTo(userLocation);
          reverseGeocode(userLocation); // Reverse geocode to get address
        },
        (error) => {
          setLocationError("Unable to fetch location. Please enable location.");
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
    }
  };

  const handleDragEnd = (event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setSelectedLocation(newPosition);
    reverseGeocode(newPosition); // Update address when pin is dragged
  };

  const reverseGeocode = async (position) => {
    const { lat, lng } = position;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyD0RhJojLmcp0D130p5faKXMtx2qX5UU7A`
    );
    const data = await response.json();
    if (data.results && data.results[0]) {
      setAddress(data.results[0].formatted_address);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ padding: "10px", marginBottom: "20px", borderRadius:"5px",top:"25px" }}
      >
        Select location through Map
      </button>

      {/* Modal with Google Map */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={address}
              readOnly
              placeholder="Selected Address"
              style={{ width: "80%", padding: "10px" }}
            />
            <button onClick={handleLocateMe} style={{ padding: "10px" }}>
            {/* {location.loaded ? JSON.stringify(location):"Location not found"} */}
              Locate Me
            </button>
          </div>
          {locationError && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {locationError}
            </div>
          )}
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={selectedLocation}
            onLoad={onMapLoad}
          >
            <Marker
              position={selectedLocation}
              draggable
              onDragEnd={(event) => handleDragEnd(event)}
            />
          </GoogleMap>
        </div>
      </Modal>
    </div>
  );
};

// Modal Styling
const modalBackdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "80%",
  maxWidth: "600px",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

export default LocationSelector;


// //add Modal in this 

// import React, { useState, useRef, useEffect } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// // Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div style={modalBackdropStyle}>
//       <div style={modalStyle}>
//         <button onClick={onClose} style={closeButtonStyle}>X</button>
//         {children}
//       </div>
//     </div>
//   );
// };

// const libraries = ["places"]; // Include Places Library for Search
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Default to New Delhi

// const LocationSelector = () => {
//   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
//   const [address, setAddress] = useState("");
//   const [locationError, setLocationError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const mapRef = useRef();

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU", // Replace with your API Key
//     libraries,
//   });

//   // Load user's location when the component is mounted
//   useEffect(() => {
//     handleLocateMe();
//   }, []);

//   const onMapLoad = (map) => {
//     mapRef.current = map;
//   };

//   const handleLocateMe = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setSelectedLocation(userLocation);
//           mapRef.current.panTo(userLocation);
//           reverseGeocode(userLocation); // Reverse geocode to get address
//         },
//         (error) => {
//           setLocationError("Unable to fetch location. Please enable location.");
//         }
//       );
//     } else {
//       setLocationError("Geolocation is not supported by your browser.");
//     }
//   };

//   const handleDragEnd = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setSelectedLocation(newPosition);
//     reverseGeocode(newPosition); // Update address when pin is dragged
//   };

//   const reverseGeocode = async (position) => {
//     const { lat, lng } = position;
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU`
//     );
//     const data = await response.json();
//     if (data.results && data.results[0]) {
//       setAddress(data.results[0].formatted_address);
//     }
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         style={{ padding: "10px", marginBottom: "20px" }}
//       >
//         Open Location Selector
//       </button>

//       {/* Modal with Google Map */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div>
//           <div style={{ marginBottom: "10px" }}>
//             <input
//               type="text"
//               value={address}
//               readOnly
//               placeholder="Selected Address"
//               style={{ width: "80%", padding: "10px" }}
//             />
//             <button onClick={handleLocateMe} style={{ padding: "10px" }}>
//               Locate Me
//             </button>
//           </div>
//           {locationError && (
//             <div style={{ color: "red", marginBottom: "10px" }}>
//               {locationError}
//             </div>
//           )}
//           <GoogleMap
//             mapContainerStyle={mapContainerStyle}
//             zoom={14}
//             center={selectedLocation}
//             onLoad={onMapLoad}
//           >
//             <Marker
//               position={selectedLocation}
//               draggable
//               onDragEnd={(event) => handleDragEnd(event)}
//             />
//           </GoogleMap>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// // Modal Styling
// const modalBackdropStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalStyle = {
//   backgroundColor: "white",
//   padding: "20px",
//   borderRadius: "10px",
//   width: "80%",
//   maxWidth: "600px",
//   position: "relative",
// };

// const closeButtonStyle = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   backgroundColor: "transparent",
//   border: "none",
//   fontSize: "20px",
//   cursor: "pointer",
// };

// export default LocationSelector;


// //combine Geolocation and pin selection
// import React, { useState, useRef, useEffect } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const libraries = ["places"]; // Include Places Library for Search
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Default to New Delhi

// const LocationSelector = () => {
//   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
//   const [address, setAddress] = useState("");
//   const [locationError, setLocationError] = useState(null);
//   const mapRef = useRef();

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU", // Replace with your API Key
//     libraries,
//   });

//   // Load user's location when the component is mounted
//   useEffect(() => {
//     handleLocateMe();
//   }, []);

//   const onMapLoad = (map) => {
//     mapRef.current = map;
//   };

//   const handleLocateMe = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setSelectedLocation(userLocation);
//           mapRef.current.panTo(userLocation);
//           reverseGeocode(userLocation); // Reverse geocode to get address
//         },
//         (error) => {
//           setLocationError("Unable to fetch location. Please enable location.");
//         }
//       );
//     } else {
//       setLocationError("Geolocation is not supported by your browser.");
//     }
//   };

//   const handleDragEnd = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setSelectedLocation(newPosition);
//     reverseGeocode(newPosition); // Update address when pin is dragged
//   };

//   const reverseGeocode = async (position) => {
//     const { lat, lng } = position;
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU`
//     );
//     const data = await response.json();
//     if (data.results && data.results[0]) {
//       setAddress(data.results[0].formatted_address);
//     }
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="text"
//           value={address}
//           readOnly
//           placeholder="Selected Address"
//           style={{ width: "80%", padding: "10px" }}
//         />
//         <button onClick={handleLocateMe} style={{ padding: "10px" }}>
//           Locate Me
//         </button>
//       </div>
      
//       {locationError && (
//         <div style={{ color: "red", marginBottom: "10px" }}>{locationError}</div>
//       )}

//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={14}
//         center={selectedLocation}
//         onLoad={onMapLoad}
//       >
//         <Marker
//           position={selectedLocation}
//           draggable
//           onDragEnd={(event) => handleDragEnd(event)}
//         />
//       </GoogleMap>
//     </div>
//   );
// };

// export default LocationSelector;



// //Pin selection 

// import React, { useState, useRef } from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
// } from "@react-google-maps/api";

// const libraries = ["places"]; // Include Places Library for Search
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };
// const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Default to New Delhi

// const LocationSelector = () => {
//   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
//   const [address, setAddress] = useState("");
//   const mapRef = useRef();

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU", // Replace with your API Key
//     libraries,
//   });

//   const onMapLoad = (map) => {
//     mapRef.current = map;
//   };

//   const handleLocateMe = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setSelectedLocation(userLocation);
//           mapRef.current.panTo(userLocation);
//         },
//         () => alert("Unable to fetch location!")
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   const handleDragEnd = (event) => {
//     const newPosition = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setSelectedLocation(newPosition);
//     reverseGeocode(newPosition);
//   };

//   const reverseGeocode = async (position) => {
//     const { lat, lng } = position;
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU`
//     );
//     const data = await response.json();
//     if (data.results && data.results[0]) {
//       setAddress(data.results[0].formatted_address);
//     }
//   };

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div>
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="text"
//           value={address}
//           readOnly
//           placeholder="Selected Address"
//           style={{ width: "80%", padding: "10px" }}
//         />
//         <button onClick={handleLocateMe} style={{ padding: "10px" }}>
//           Locate Me
//         </button>
//       </div>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={14}
//         center={selectedLocation}
//         onLoad={onMapLoad}
//       >
//         <Marker
//           position={selectedLocation}
//           draggable
//           onDragEnd={(event) => handleDragEnd(event)}
//         />
//       </GoogleMap>
//     </div>
//   );
// };

// export default LocationSelector;


// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const DeliveryPage = () => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: '400px',
//   };

//   const center = {
//     lat: 28.7041, // Default latitude (can be dynamic)
//     lng: 77.1025, // Default longitude (can be dynamic)
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={14}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default DeliveryPage;



//*************************************************************************** */

// optional*******************************************

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const DeliveryPage = () => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: '400px',
//   };

//   const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       },
//       (error) => console.error(error)
//     );
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={14}>
//         <Marker position={location} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default DeliveryPage;

//*********************************************************************************** */
// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import axios from 'axios';

// const DeliveryPage = () => {
//   const [location, setLocation] = useState({ lat: 28.7041, lng: 77.1025});
//   const [address, setAddress] = useState('');


//   const handleAddressSubmit = async () => {
//     try {
//       const response = await axios.post('/api/location/get-coordinates', { address });
//       setLocation(response.data);
//     } catch (error) {
//       console.error('Error fetching coordinates:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Enter delivery address"
//       />
//       <button onClick={handleAddressSubmit}>Locate</button>
//       <LoadScript googleMapsApiKey="AIzaSyBneLxOTKfB-ojmPXIXTyjkalCjbTsCEkU">
//         <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={location} zoom={14}>
//           <Marker position={location} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DeliveryPage;


//****************************************************** */

// import React from "react";

// const Modal = ({ isOpen, onClose, onEnableLocation, onSearchManually }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                     Location Permission Needed
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                     Your location permission is turned off. Please enable it to
//                     automatically detect your delivery address, or search for your address
//                     manually.
//                 </p>
//                 <div className="flex space-x-4">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
//                         onClick={onEnableLocation}
//                     >
//                         Enable Location
//                     </button>
//                     <button
//                         className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg"
//                         onClick={onSearchManually}
//                     >
//                         Search Manually
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
