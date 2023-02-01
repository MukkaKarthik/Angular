export interface InterfaceComponent1
{
    firstName : string;
    lastName : string;
    Location : string ;
    Gender : string ;

    //All properties are public by default , dont use public keyword beside any property explicitly or else TypeScript will throw an error 
    

    calculateSchool_fullName?(hello : string) : string;
}

