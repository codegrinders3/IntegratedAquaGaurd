export class Customer {

    public name: string;
    public phoneNumber: string ;
    public address: string ;
    public modelName: string;
    public dateOfWork: Date ;
    public monthOfWork: string;
    public technicianName: string;
    public partCCV: number=0;
    public partSedimentalfilter: number=0;
    public partCarbonfilter: number=0;
    public partROMembrane: number=0 ;
    public partMultilayer: number=0;
    public partPPSpun: number=0;
    public partPump: number=0;
    public partSV: number=0;
    public partSMPS: number=0;
    public partVVLamp: number=0;
    public partService: number=0;
    public isAmc:Boolean = false;
    public amcDate:Date ;
    public amcRenewed:Boolean = false;

    constructor(
        name: string, 
        phoneNumber: string,
        address: string,
        modelName: string,
        dateOfWork: Date, 
        monthOfWork: string,
        technicianName: string,
        partCCV: number,
        partSedimentalfilter: number,
        partCarbonfilter: number,
        partROMembrane: number, 
        partMultilayer: number,
        partPPSpun: number,
        partPump: number,
        partSV: number,
        partSMPS: number,
        partVVLamp: number,
        partService: number,
        isAmc:Boolean, 
        amcDate:Date, 
        amcRenewed:Boolean) {
            this.name = name;
            this.phoneNumber=phoneNumber;
            this.address = address;
            this.modelName=modelName;
            this.dateOfWork=dateOfWork;
            this.monthOfWork=monthOfWork;
            this.technicianName=technicianName;
            this.partCCV=partCCV;
            this.partSedimentalfilter=partSedimentalfilter;
            this.partCarbonfilter=partCarbonfilter;
            this.partROMembrane=partROMembrane;
            this.partMultilayer=partMultilayer;
            this.partPPSpun=partPPSpun;
            this.partPump=partPump;
            this.partSV=partSV;
            this.partSMPS=partSMPS;
            this.partVVLamp=partVVLamp;
            this.partService=partService;
            this.isAmc=isAmc;
            this.amcDate=amcDate;
            this.amcRenewed=amcRenewed;
    }
}
