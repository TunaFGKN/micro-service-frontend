import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly #http = inject(HttpClient)
  private baseUrl: string = "https://localhost:7175";

  get<T>(url: string) {
    return this.#http.get<T>(`${this.baseUrl}/${url}`);
  }

  post<T>(url: string, data: any) {
    return this.#http.post<T>(`${this.baseUrl}/${url}`, data);
  }

  put<T>(url: string, data: any) {
    return this.#http.put<T>(`${this.baseUrl}/${url}`, data);
  }

  delete<T>(url: string) {
    return this.#http.delete<T>(`${this.baseUrl}/${url}`);
  }
}