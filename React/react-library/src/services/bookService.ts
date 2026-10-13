import type { BookModel } from "../models/BookModel";
import type { ReviewModel } from "../models/ReviewModel";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface BookResponse {
  content: BookModel[];
  page: {
    totalElements: number;
    totalPages: number;
  };
}

interface ReviewResponse {
  content: ReviewModel[];
  page: {
    totalElements: number;
    totalPages: number;
  };
}

export const bookService = {
  // All the services regarding books
  async getBooks(pageNo: number, pageSize: number): Promise<BookResponse> {
    const response = await fetch(
      `${BASE_URL}/books?pageNo=${pageNo}&pageSize=${pageSize}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    return await response.json();
  },

  async searchBookByTitle(
    title: string,
    pageNo: number,
    pageSize: number,
  ): Promise<BookResponse> {
    const response = await fetch(
      `${BASE_URL}/books/search/title?title=${title}&pageNo=${pageNo}&pageSize=${pageSize}`,
    );

    if (!response.ok) {
      throw new Error("Failed to search books");
    }
    return response.json();
  },

  async searchBookByCategory(
    category: string,
    pageNo: number,
    pageSize: number,
  ): Promise<BookResponse> {
    const response = await fetch(
      `${BASE_URL}/books/search/category?category=${category}&pageNo=${pageNo}&pageSize=${pageSize}`,
    );

    if (!response.ok) {
      throw new Error("Failed to search by category");
    }
    return response.json();
  },

  async getBookById(id: string): Promise<BookModel> {
    const response = await fetch(`${BASE_URL}/books/${id}`);
    if (!response.ok) {
      throw new Error("Faild to fetch book details!");
    }
    return response.json();
  },

  async getBookReviewsById(
    bookId: string,
    pageNo: number = 0,
    pageSize: number = 3,
  ): Promise<ReviewResponse> {
    const response = await fetch(
      `${BASE_URL}/reviews/book/${bookId}?pageNo=${pageNo}&pageSize=${pageSize}`,
    );
    if (!response.ok) {
      throw new Error("Faild to fetch book details!");
    }
    return response.json();
  },
};
