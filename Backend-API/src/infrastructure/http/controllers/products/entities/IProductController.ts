interface IUpdateChangedProductTrashRequest {
    code: number | string;
}


interface IGetProductsAllByPagination {
    currentPage: string;
}

export type {
    IUpdateChangedProductTrashRequest,
    IGetProductsAllByPagination
}