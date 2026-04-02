import { ICDCode } from "../../models/icdCode";

export class AiSuggestedCodes {
  isSearching: boolean = true

  codes: ICDCode[] = [
    {
      code: "120.9",
      status: 'accepted',
      name: 'Angina Pectoris, Unspecified'
    },
    {
      code: "120.9",
      status: 'pending',
      name: 'Angina Pectoris, Unspecified'
    },
    {
      code: "120.9",
      status: 'pending',
      name: 'Angina Pectoris, Unspecified'
    },
    {
      code: "120.9AB",
      status: 'rejected',
      name: 'Angina Pectoris, Unspecified'
    },
  ];
}
