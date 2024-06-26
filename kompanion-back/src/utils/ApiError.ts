// CustomError.ts
export class ApiError extends Error {
    status: number;  // Code HTTP
    details?: any;   // Informations supplémentaires
  
    constructor(status: number, message: string, details?: any) {
      super(message);
      this.status = status;
      this.details = details;
    }
  }