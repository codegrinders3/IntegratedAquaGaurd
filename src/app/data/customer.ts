export class Customer {

    public name: string;
    public phoneNumber: string ;
    public address: string ;
    public modelName: string;
    public dateOfWork: Date ;
    public monthOfWork: string;
    public technicianName: string;
    public partCCV: number;
    public partSedimentalfilter: number;
    public partCarbonfilter: number;
    public partROMembrane: number ;
    public partMultilayer: number;
    public partPPSpun: number;
    public partPump: number;
    public partSV: number;
    public partSMPS: number;
    public partVVLamp: number;
    public partService: number;
    public isAmc:Boolean ;
    public amcDate:Date ;
    public amcRenewed:Boolean ;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}