export interface IPageAndLimitParams {
  page: number;
  limit: number;
}

export interface IMetaResponse {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IProduct {
  id: number;
  categoryId: number;
  description: string;
  imageUrl: string;
  isActive: false;
  name: string;
  price: number;
  qty: string;
  suplierId: number;
  unit: string;
}

export type IProductCallback = {
  onSuccess: VoidFunction;
  onError: VoidFunction;
};
