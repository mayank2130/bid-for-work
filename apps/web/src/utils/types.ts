export interface User {
    id: string;
    name: string | null;
    image: string | null;
  }
  
  export interface Bid {
    id: string;
    jobId: string;
    userId: string;
    amount: number;
    currency: "USD" | "INR";
    message: string | null;
    createdAt: Date;
    updatedAt: Date;
    user: User;
  }

  export interface Job {
    id: string;
    userId: string;
    title: string;
    description: string;
    companyName: string;
    salary: string;
    currency: "USD" | "INR";
    location: string;
    state: string | null;
    country: string | null;
  }