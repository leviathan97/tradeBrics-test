export class Business{

    public foundingYear: string;
    public industry: string;
    public size: string;
    public practiceNum: string;
    public turnover: string;
    public trustNum: string;
    public NPONum: string;
    public PAYENum: string;
    public website: string;
    public faxNum: string;

    constructor(foundingYear : string, industry: string,  size: string, practiceNum: string, 
        turnover: string, trustNum: string, NPONum: string, PAYENum: string,
        website: string, faxNum: string){
        
        this.foundingYear = foundingYear;
        this.industry = industry;
        this.size = size;
        this.practiceNum = practiceNum;
        this.turnover = turnover;
        this.trustNum = trustNum;
        this.NPONum = NPONum;
        this.PAYENum = PAYENum;
        this.website = website;
        this.faxNum = faxNum;
    } 

    
   

    
}
    
