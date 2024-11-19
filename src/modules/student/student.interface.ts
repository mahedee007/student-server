
export type UserName = {
    firstName: string;
        middleName?: string;
        lastName: string;}

export type Guardian={
    fathersName: string;
    fatherOccupation: string;
    mothersName: string;
    motherOccupation: string;
}

export type Student ={
    id: string;
    name: UserName ;
    
    cGPA?: number;
    gender?: "Male"|"Female"| "other";
    age: number;
    presentAddress: string;
    permanentAddress: string;
    contactNo: string;
    email: string;
    dateOfBirth: string;
    bloodGroup:  "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    guardian: Guardian;
    profileImage: string;
    isActive: "Active" | "Block";
}