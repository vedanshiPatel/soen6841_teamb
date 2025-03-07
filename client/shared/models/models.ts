export class SelfAssessmentTest {
    q_difficultyBreathing: boolean | null = false;
    q_ageRange: string = '';
    q_firstSymptoms: boolean | null = null;
    q_situation: boolean | null = null;
    q_secondSymptoms: boolean | null = null;
  }

  export class RegistrationRequest {
    email: string;
    password: string;
    address: string;
    fullName: string;
    dateOfBirth: string;
    phoneNumber: string;
    registrationNumber: string;
    userType: string;
  
    constructor(email: string, password: string, address: string, fullName: string, dateOfBirth: string, phoneNumber: string, registrationNumber: string, userType: string) {
      this.email = email;
      this.fullName = fullName;
      this.password = password;
      this.address = address;
      this.dateOfBirth = dateOfBirth;
      this.phoneNumber = phoneNumber;
      this.registrationNumber = registrationNumber;
      this.userType = userType;
    }
  }

  export class User {
    fullName!: string;
    address!: string;
    dateOfBirth!: string;
    phoneNumber!: string;
    email!: string;
    password!: string;
    fkUserType!: number;
    registrationDate!: Date;
    lastLoginDate!: Date;
    active!: number;
    approved!: number;
    registrationNumber!: string;
  }