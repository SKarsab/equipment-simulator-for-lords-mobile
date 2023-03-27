export class Feature {
    public title:string = "";
    public description:string = "";
    public position:boolean = false;
    public imagePath:string = "";
    public colour:string = "";
    public navigationPath:string = "";

    constructor (title: string, description: string, position: boolean, imagePath:string, colour:string, navigationPath:string) {
        this.title = title;
        this.description = description;
        this.position = position;
        this.imagePath = imagePath;
        this.colour = colour;
        this.navigationPath = navigationPath;
    }
}