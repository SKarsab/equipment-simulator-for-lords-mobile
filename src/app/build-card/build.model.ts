export class Build {
    public imgPath: string = "";
    public title: string = "";
    public dateAdded: string = "";
    public colour: string = "";
    public navigationPath: string = "";
    public difficultyPlus: number[] = [];
    public difficultyMinus: number[] = [];
    public tags: string[] = [];

    constructor (imgPath: string, title: string, dateAdded: string, colour: string, navigationPath: string, difficultyPlus: number[], difficultyMinus: number[], tags: string[]) {
        this.imgPath = imgPath;
        this.title = title;
        this.dateAdded = dateAdded;
        this.colour = colour;
        this.navigationPath = navigationPath;
        this.difficultyPlus = difficultyPlus;
        this.difficultyMinus = difficultyMinus;
        this.tags = tags;
    }
}