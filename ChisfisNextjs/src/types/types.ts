// export type formFieldInitialStateType = {
//   propertyType?: string;
//   placeName?: string;
//   rentalForm?: string;
//   country?: string;
//   street?: string;
//   roomNumber?: number | string;
//   city?: string;
//   state?: string;
//   postalCode?: number | string;
//   acreage?: string;
//   guests?: number;
//   bedroom?: number;
//   beds?: number;
//   bathroom?: number;
//   kitchen?: number;
//   generalAmenities?: string[];
//   otherAmenities?: string[];
//   safeAmenities?: string[];
// };

export type formFieldInitialStateType = {
  [key: string]:
    | string
    | undefined
    | number
    | boolean
    | any[]
    | File
    | FileList;
};

export type PageAddingListing = {
  input: formFieldInitialStateType;
  setInput: React.Dispatch<React.SetStateAction<formFieldInitialStateType>>;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  setPageNumber?: React.Dispatch<React.SetStateAction<number>>;
};
