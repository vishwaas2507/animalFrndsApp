export interface ClientItem {
  id?: string;
  name: string;
}

export class PaginationItem {
  constructor(private data: any) {
    this.resultPerPage = this.data.resultPerPage;
    this.pageNumber = this.data.pageNumber;
  }
  
  resultPerPage?: string;
  pageNumber?: string;
}