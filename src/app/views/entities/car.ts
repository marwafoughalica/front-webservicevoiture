export class Car {
    id: number;
    serie: string;
    dateMiseEnMarche: string;
    make: string;
    model: string;
    image: string; // ou tout autre type approprié pour stocker l'image

    constructor(id: number, serie: string, dateMiseEnMarche: string, make: string, model: string, image: string) {
        this.id = id;
        this.serie = serie;
        this.dateMiseEnMarche = dateMiseEnMarche;
        this.make = make;
        this.model = model;
        this.image = image;
    }
}
