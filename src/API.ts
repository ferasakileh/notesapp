/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Note = {
  __typename: "Note",
  createdAt: string,
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
  owner?: string | null,
  updatedAt: string,
};

export type ModelNoteFilterInput = {
  and?: Array< ModelNoteFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelNoteFilterInput | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelNoteConditionInput = {
  and?: Array< ModelNoteConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelNoteConditionInput | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateNoteInput = {
  description?: string | null,
  id?: string | null,
  image?: string | null,
  name?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type UpdateNoteInput = {
  description?: string | null,
  id: string,
  image?: string | null,
  name?: string | null,
};

export type ModelSubscriptionNoteFilterInput = {
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      createdAt: string,
      description?: string | null,
      id: string,
      image?: string | null,
      name?: string | null,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  condition?: ModelNoteConditionInput | null,
  input: CreateNoteInput,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  condition?: ModelNoteConditionInput | null,
  input: DeleteNoteInput,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  condition?: ModelNoteConditionInput | null,
  input: UpdateNoteInput,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    createdAt: string,
    description?: string | null,
    id: string,
    image?: string | null,
    name?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};
