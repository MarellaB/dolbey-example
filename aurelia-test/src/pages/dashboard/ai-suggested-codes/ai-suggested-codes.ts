import { ICDCode } from "@/models/icdCode";

export class AiSuggestedCodes {
  isSearching: boolean = true

  get acceptedItems() {
    return this.codes.filter(item => item.status === 'accepted');
  }

  get pendingItems() {
    return this.codes.filter(item => item.status === 'pending');
  }

  acceptCode(event: CustomEvent<ICDCode>) {
    event.detail.status = 'accepted';
  }

  rejectCode(event: CustomEvent<ICDCode>) {
    event.detail.status = 'rejected';
  }

  undoCode(event: CustomEvent<ICDCode>) {
    event.detail.status = 'pending';
  }

  codes: ICDCode[] = [
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
      code: "120.9",
      status: 'pending',
      name: 'Angina Pectoris, Unspecified'
    },
    {
      code: "120.9AB",
      status: 'pending',
      name: 'Angina Pectoris, Unspecified'
    },
  ];
}
