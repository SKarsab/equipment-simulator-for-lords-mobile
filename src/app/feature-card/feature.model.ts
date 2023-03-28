export class Feature {
    public title:string = "";
    public description:string = "";
    public checkered:boolean = false;
    public colour:string = "";
    public navigationPath:string = "";

    constructor (title:string, description:string, checkered:boolean, colour:string, navigationPath:string) {
        this.title = title;
        this.description = description;
        this.checkered = checkered;
        this.colour = colour;
        this.navigationPath = navigationPath;
    }
}