/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { cn } from "@/utils/tailwind-merger";
import PlacesAutocomplete from "react-places-autocomplete";
import { useJsApiLoader, MarkerF, GoogleMap } from "@react-google-maps/api";
import Input from "@/shared/Input";
import FormItem from "@/app/add-listing/FormItem";

function useLoadGoogleMapScript() {
  return useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
    region: "US",
    language: "en",
    version: "weekly",
    libraries: [
      "places",
      "core",
      "geometry",
      "drawing",
      "visualization",
      "places",
      "routes",
      "streetView",
      "elevation",
    ],
  });
}

export function PlacesAutocompleteInput({
  val,
  onSelect,
  className,
}: {
  val: string;
  onSelect: (address: string, placeID: string) => void;
  className?: string;
}) {
  const [value, setValue] = React.useState<string>(val);
  const { isLoaded, loadError } = useLoadGoogleMapScript();

  const handleSelect = async (address: string, placeID: string) => {
    onSelect(address, placeID);
    setValue(address);
  };

  // set value to the prop value if it changes
  React.useEffect(() => {
    setValue(val);
  }, [val]);

  if (loadError) return <div>Error loading the map</div>;
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <PlacesAutocomplete
      debounce={300}
      value={value}
      onChange={setValue}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="relative mb-2" key={"all-suggestions.."}>
          {/* <input {...getInputProps({ placeholder: "Search for a Places ..." })} /> */}
          <FormItem label="" key={"input-field"}>
            <Input
              {...getInputProps({ placeholder: "Search for a Places ..." })}
              className={cn("w-full", className)}
            />
          </FormItem>
          <div className="absolute z-10 bg-white w-full" key={"data-list"}>
            {suggestions?.map((suggestion, index) => {
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {})}
                  key={`${suggestion.id}-${index}`}
                  className={`p-2 cursor-pointer grid grid-cols-1 ${suggestion.active ? "text-white bg-primary-500" : "text-black bg-white"}`}
                >
                  {suggestion.formattedSuggestion?.mainText}
                  <span
                    className={`text-xs ${suggestion.active ? "text-white/85" : "text-gray-500"}`}
                  >
                    {suggestion.description}
                  </span>
                </div>
              );
            })}
            {loading ? (
              <div key={"loading"} className="flex items-center gap-2 p-4 ps-0">
                <div className="w-2 h-2 p-2 animate-spin border-r-2 border-r-transparent border-t-2 border-l-2 rounded-full border-b-2 border-primary-500 text-center"></div>
                loading...
              </div>
            ) : null}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export function GoogleMapLayout({
  className,
  onChange,
  init,
  isMapOnly,
}: {
  isMapOnly?: boolean;
  className?: string;
  onChange?: (lat: number, lng: number, link: string, place: string) => void;
  init: { center: { lat: number; lng: number }; place: string };
}) {
  const [center, setCenter] = React.useState(init?.center);
  const [isDragging, setIsDragging] = React.useState(false);
  const { isLoaded, loadError } = useLoadGoogleMapScript();
  const [address, setAddress] = React.useState<string>(init?.place || "");

  // get current location of the user
  React.useEffect(() => {
    // if geolocation is available and the map is loaded
    if (
      navigator.geolocation &&
      isLoaded &&
      !address &&
      !init?.center?.lat &&
      !init?.center?.lng
    ) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddress(latitude, longitude);
          // generate link to open the location in google maps
          const link = `https://www.google.com/maps/?pb=!1m14!1m12!1m3!1d15883.860440917622!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1en!2sgh!4v1717982745573!5m2!1en!2sgh`;
          // console.log(link);
          onChange && onChange(latitude, longitude, link, address);
        },
        (error) => {
          console.log(error);
        },
      );
    }

    // if geolocation is not available and the map is loaded then ask permission to get the location of the user
    if (!navigator.geolocation && isLoaded) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              getAddress(latitude, longitude);
              // generate link to open the location in google maps
              const link = `https://www.google.com/maps/?pb=!1m14!1m12!1m3!1d15883.860440917622!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1en!2sgh!4v1717982745573!5m2!1en!2sgh`;
              console.log(link);
              onChange && onChange(latitude, longitude, link, address);
            },
            (error) => {
              console.log(error);
            },
          );
        }
        if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              getAddress(latitude, longitude);
              // generate link to open the location in google maps
              const link = `https://www.google.com/maps/?pb=!1m14!1m12!1m3!1d15883.860440917622!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1en!2sgh!4v1717982745573!5m2!1en!2sgh`;
              console.log(link);
              onChange && onChange(latitude, longitude, link, address);
            },
            (error) => {
              console.log(error);
            },
          );
        }
        if (result.state === "denied") {
          console.log("geolocation permission denied");
        }
      });
    }
  }, [isLoaded]);

  if (loadError) return <div>Error loading the map</div>;
  if (!isLoaded) return <div>Loading...</div>;
  const { google } = window;
  let map: google.maps.Map | undefined = undefined;

  // create a function to get the address of the center of the map
  const getAddress = (lat: number, lng: number) => {
    // pan the map to the center
    map?.panTo({ lat, lng });
    // check if map is zoomed in
    if (Number(map?.getZoom()) < 10) map?.setZoom(10);
    // is map zoomed in and zoom is too high then zoom out
    if (Number(map?.getZoom()) > 15) map?.setZoom(15);
    setCenter({ lat, lng });
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      // console.log(results);
      if (status === "OK" && results![0]) {
        const { formatted_address } = results![0];
        setAddress(formatted_address);
        // generate link to open the location in google maps
        const link = `https://www.google.com/maps/?pb=!1m14!1m12!1m3!1d15883.860440917622!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1en!2sgh!4v1717982745573!5m2!1en!2sgh`;
        onChange && onChange(lat, lng, link, formatted_address);
      }
    });
  };

  return (
    // Important! Always set the container height explicitly
    <div className={cn("w-full h-[200px] rounded-lg", className)}>
      {!isMapOnly && (
        <PlacesAutocompleteInput
          val={address}
          onSelect={(address, placeId) => {
            if (isMapOnly) return;
            // fin the lat and lng of the address using the placeId from google places
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ placeId: placeId }, (results, status) => {
              if (status === "OK" && results![0]) {
                const { lat, lng } = results![0].geometry.location;
                getAddress(lat(), lng());
              }
            });
          }}
        />
      )}
      <GoogleMap
        id="google-map"
        zoom={4}
        options={{
          disableDefaultUI: isMapOnly,
        }}
        onLoad={(mp) => {
          map = mp;
        }}
        onZoomChanged={() => {
          if (isMapOnly) return;
          // set max zoom level to 15
          if (Number(map?.getZoom()) > 12) {
            console.log("zoomed in too much");
            map?.setZoom(12);
          }
        }}
        center={center}
        mapContainerClassName={`w-full h-full rounded-lg`}
        mapContainerStyle={{
          cursor: "pointer",
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDblClick={(e) => {
          if (isMapOnly) return;
          getAddress(Number(e.latLng?.lat()), Number(e.latLng?.lng()));
        }}
      >
        <MarkerF
          position={center}
          options={{
            animation: 0,
            clickable: isMapOnly ? false : true,
            draggable: isMapOnly ? false : true,
            crossOnDrag: isMapOnly ? false : true,
            optimized: true,
            visible: true,
            title: address,
            cursor: isDragging ? "crosshair" : "pointer",
          }}
          onDragStart={() => {
            if (isMapOnly) return;
            setIsDragging(true);
          }}
          onDragEnd={(e) => {
            if (isMapOnly) return;
            setIsDragging(false);
            getAddress(Number(e.latLng?.lat()), Number(e.latLng?.lng()));
          }}
        />
      </GoogleMap>
    </div>
  );
}
