"use client";

import { useState, useCallback, SetStateAction } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

interface LocationProps {
  updateLatLng: any;
  hasError: any;
}

export const LocationSearchInput = ({
  updateLatLng,
  hasError,
}: LocationProps) => {
  const [address, setAddress] = useState("");
  const handleChange = useCallback((address: SetStateAction<any>) => {
    setAddress(address);
  }, []);
  const handleSelect = useCallback(
    (address: SetStateAction<any>) => {
      setAddress(address);
      geocodeByAddress(address)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => updateLatLng(latLng))
        .catch(console.error);
    },
    [updateLatLng]
  );
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={{
        types: ["(regions)"],
        componentRestrictions: { country: "ng" },
      }}
    >
      {({ ...props }) => <AutoCompleteInput {...props} hasError={hasError} />}
    </PlacesAutocomplete>
  );
};

interface InputProps {
  getInputProps: any;
  suggestions: any;
  getSuggestionItemProps: any;
  loading: any;
  hasError: any;
}

const AutoCompleteInput = ({
  getInputProps,
  suggestions,
  getSuggestionItemProps,
  loading,
  hasError,
}: InputProps) => {
  return (
    <div className="relative w-full">
      <label>
        <span className="block absolute left-[8px] w-[24px] h-[24px] top-1/2 -translate-y-1/2"></span>
        <input
          {...getInputProps({
            placeholder: "Where are you located",
            className: `${
              hasError ? "border-red-400" : " border-white"
            } bg-secondaryColor mb-3 w-full border border-borderColor focus:outline-tetiaryColor outline-none pl-12 p-3 rounded text-2xl`,
          })}
        />
      </label>
      <SuggestionsList
        suggestions={suggestions}
        loading={loading}
        getSuggestionItemProps={getSuggestionItemProps}
      />
    </div>
  );
};

interface SuggestionProps {
    loading: any;
    suggestions: any;
    getSuggestionItemProps: any;
  }

const SuggestionsList = ({
    loading,
    suggestions,
    getSuggestionItemProps,
  }: SuggestionProps) => {
  return (
    <ul className="text-center max-h-[300px] overflow-y-auto absolute w-full bg-white rounded-b-[8px] border-primary-main border">
      {loading && <li className="text-center">Loading suggestions...</li>}
      {suggestions.map((suggestion: any) => {
        return (
          <li key={suggestion.description}>
            <button
              {...getSuggestionItemProps(suggestion, {
                className:
                  "hover:bg-primary-main/60 w-full py-[16px] px-[12px] text-left",
              })}
              key={undefined}
            >
              {suggestion.description}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
