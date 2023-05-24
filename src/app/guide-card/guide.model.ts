export class Guide {
    public title: string = "";
    public imgPath: string = "";
    public description: string = "";
    public navigationPath: string = "";

    constructor (title: string, imgPath: string, description: string, navigationPath: string) {   
        this.title = title;
        this.imgPath = imgPath;
        this.description = description;
        this.navigationPath = navigationPath;
    }
}