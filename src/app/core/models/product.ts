import { Category } from "./category";

export interface Product {
    id?: number;
    name: string;
    price: number;
    category: Category;
    description: number;
}

export interface ProductsResponse {
    content: Product[];
}

export interface PageProductResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          Product[];
    number:           number;
    sort:             Sort;
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    unsorted: boolean;
    sorted:   boolean;
    empty:    boolean;
}