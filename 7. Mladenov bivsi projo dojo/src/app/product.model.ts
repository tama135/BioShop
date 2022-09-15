export interface Product {
    id?: number;
    naziv?: String;
    proizvodjac?: String;
    pol?: String;
    kategorija?: String;
    velicina?: String;
    kolicina: number;
    cena: number;
    opis?: String;
    slika?: String;
    popust?: String;
    procenatPopusta?: number;
}
