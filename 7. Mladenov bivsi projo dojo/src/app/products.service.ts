import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}
  

  kidsProduct: Product[] = [];
  maleProduct: Product[] = [];
  femaleProduct: Product[] = [];
  orderedProduct: Product[] = [];
  filteredProduct: Product[] = [];
  products: Product[]=[
  { id: 1000, naziv: "Sportske trenerice", proizvodjac: "Nike", pol: "male", kategorija: "Trenerice", velicina: "S", kolicina: 6, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "https://i.imgur.com/m9dZ3bT.jpeg", popust: "DA", procenatPopusta: 0.20},
  { id: 1001, naziv: "Sportske trenerice", proizvodjac: "Nike", pol: "male", kategorija: "Trenerice", velicina: "M", kolicina: 9, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1002, naziv: "Sportske trenerice", proizvodjac: "Nike", pol: "male", kategorija: "Trenerice", velicina: "L", kolicina: 12, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1003, naziv: "Sportske trenerice", proizvodjac: "Nike", pol: "male", kategorija: "Trenerice", velicina: "XL", kolicina: 5, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1004, naziv: "Sportske trenerice", proizvodjac: "Nike", pol: "male", kategorija: "Trenerice", velicina: "XXL", kolicina: 2, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1100, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "39", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenAuBehvq0n9rs53ImJCVRqSyXmvoSNa5Rg&usqp=CAU", popust: "NE", procenatPopusta: 0},
  { id: 1101, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "40", kolicina: 3, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1102, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "41", kolicina: 4, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1103, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "42", kolicina: 5, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1104, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "43", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1105, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "44", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1106, naziv: "Sportske patike", proizvodjac: "Adidas", pol: "male", kategorija: "Patike", velicina: "45", kolicina: 1, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1110, naziv: "Sportski sorts", proizvodjac: "Nike", pol: "male", kategorija: "Sorts", velicina: "S", kolicina: 2, cena: 1899, opis: "Sorts za sportske aktivnosti", slika: "https://www.djaksport.com/image.aspx?imageId=143409", popust: "NE", procenatPopusta: 0},
  { id: 1111, naziv: "Sportski sorts", proizvodjac: "Nike", pol: "male", kategorija: "Sorts", velicina: "M", kolicina: 4, cena: 1899, opis: "Sorts za sportske aktivnosti", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1112, naziv: "Sportski sorts", proizvodjac: "Nike", pol: "male", kategorija: "Sorts", velicina: "L", kolicina: 3, cena: 1899, opis: "Sorts za sportske aktivnosti", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1113, naziv: "Sportski sorts", proizvodjac: "Nike", pol: "male", kategorija: "Sorts", velicina: "XL", kolicina: 1, cena: 1899, opis: "Sorts za sportske aktivnosti", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1200, naziv: "Zenske sportske trenerice", proizvodjac: "Umbro", pol: "female", kategorija: "Trenerice", velicina: "XS", kolicina: 3, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "https://www.sportvision.me/files/thumbs/files/images/slike_proizvoda/media/UMS/UMS173111-005/images/thumbs_800/UMS173111-005_800_800px.jpg", popust: "DA", procenatPopusta: 0.10},
  { id: 1201, naziv: "Zenske sportske trenerice", proizvodjac: "Umbro", pol: "female", kategorija: "Trenerice", velicina: "S", kolicina: 5, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1202, naziv: "Zenske sportske trenerice", proizvodjac: "Umbro", pol: "female", kategorija: "Trenerice", velicina: "M", kolicina: 2, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1203, naziv: "Zenske sportske trenerice", proizvodjac: "Umbro", pol: "female", kategorija: "Trenerice", velicina: "L", kolicina: 1, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1204, naziv: "Zenske sportske trenerice", proizvodjac: "Umbro", pol: "female", kategorija: "Trenerice", velicina: "XL", kolicina: 0, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1220, naziv: "Zenske sportske trenerice", proizvodjac: "Nike", pol: "female", kategorija: "Trenerice", velicina: "XS", kolicina: 3, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "https://www.djaksport.com/image.aspx?imageId=101526", popust: "DA", procenatPopusta: 0.10},
  { id: 1221, naziv: "Zenske sportske trenerice", proizvodjac: "Nike", pol: "female", kategorija: "Trenerice", velicina: "S", kolicina: 5, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1222, naziv: "Zenske sportske trenerice", proizvodjac: "Nike", pol: "female", kategorija: "Trenerice", velicina: "M", kolicina: 2, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1223, naziv: "Zenske sportske trenerice", proizvodjac: "Nike", pol: "female", kategorija: "Trenerice", velicina: "L", kolicina: 1, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1224, naziv: "Zenske sportske trenerice", proizvodjac: "Nike", pol: "female", kategorija: "Trenerice", velicina: "XL", kolicina: 0, cena: 4199, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "DA", procenatPopusta: 0.10},
  { id: 1005, naziv: "Sportske trenerice", proizvodjac: "Adidas", pol: "male", kategorija: "Trenerice", velicina: "S", kolicina: 2, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "https://www.djaksport.com/image.aspx?imageId=110804", popust: "DA", procenatPopusta: 0.20},
  { id: 1006, naziv: "Sportske trenerice", proizvodjac: "Adidas", pol: "male", kategorija: "Trenerice", velicina: "M", kolicina: 4, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1007, naziv: "Sportske trenerice", proizvodjac: "Adidas", pol: "male", kategorija: "Trenerice", velicina: "L", kolicina: 3, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1008, naziv: "Sportske trenerice", proizvodjac: "Adidas", pol: "male", kategorija: "Trenerice", velicina: "XL", kolicina: 0, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 1009, naziv: "Sportske trenerice", proizvodjac: "Adidas", pol: "male", kategorija: "Trenerice", velicina: "XXL", kolicina: 2, cena: 3500, opis: "Sportske trenerice za trcanje", slika: "slika", popust: "DA", procenatPopusta: 0.20},
  { id: 11000, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "39", kolicina: 1, cena: 7999, opis: "Patika za trcanje", slika: "https://www.djaksport.com/image.aspx?imageId=179217", popust: "DA", procenatPopusta: 0.15},
  { id: 11010, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "40", kolicina: 3, cena: 7999, opis: "Patika za trcanje", slika: "slika", popust: "Da", procenatPopusta: 0.15},
  { id: 11020, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "41", kolicina: 2, cena: 7999, opis: "Patika za trcanje", slika: "slika", popust: "Da", procenatPopusta: 0.15},
  { id: 11030, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "42", kolicina: 3, cena: 7999, opis: "Patika za trcanje", slika: "slika", popust: "Da", procenatPopusta: 0.15},
  { id: 11040, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "43", kolicina: 2, cena: 7999, opis: "Patika za trcanje", slika: "slika", popust: "Da", procenatPopusta: 0.15},
  { id: 11050, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "44", kolicina: 0, cena: 7999, opis: "Patika za trcanje", slika: "slika", popust: "Da", procenatPopusta: 0.15},
  { id: 11060, naziv: "Sportske patike", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "45", kolicina: 1, cena: 7999, opis: "Patika za trcanje", slika: "slika", popust: "Da", procenatPopusta: 0.15},
  { id: 1205, naziv: "Decja majica", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "6", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "https://www.n-sport.net/UserFiles/products/big/05/16/decija-majica-russell-athletic-02-singlet-A0-911-1-190.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1206, naziv: "Decja majica", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "8", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1207, naziv: "Decja majica", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "10", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1208, naziv: "Decja majica", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "12", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1209, naziv: "Decja majica", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "14", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1225, naziv: "Zenske sportske trenerice", proizvodjac: "Adidas", pol: "female", kategorija: "Trenerice", velicina: "XS", kolicina: 1, cena: 3800, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "https://www.djaksport.com/image.aspx?imageId=166110", popust: "NE", procenatPopusta: 0},
  { id: 1226, naziv: "Zenske sportske trenerice", proizvodjac: "Adidas", pol: "female", kategorija: "Trenerice", velicina: "S", kolicina: 2, cena: 3800, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1227, naziv: "Zenske sportske trenerice", proizvodjac: "Adidas", pol: "female", kategorija: "Trenerice", velicina: "M", kolicina: 3, cena: 3800, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1228, naziv: "Zenske sportske trenerice", proizvodjac: "Adidas", pol: "female", kategorija: "Trenerice", velicina: "L", kolicina: 2, cena: 3800, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1229, naziv: "Zenske sportske trenerice", proizvodjac: "Adidas", pol: "female", kategorija: "Trenerice", velicina: "XL", kolicina: 1, cena: 3800, opis: "Sportske zenske trenerice za svakodnevnu setnju", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1301, naziv: "Decja majica zelena", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "6", kolicina: 1, cena: 1499, opis: "Mala majica bez rukava", slika: "https://www.intersport.rs/pub/media/catalog/product/cache/382907d7f48ae2519bf16cd5f39b77f9/c/z/cz1828-383-phsfh001-1500.jpeg", popust: "DA", procenatPopusta: 0.15},
  { id: 1302, naziv: "Decja majica zelena", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "8", kolicina: 1, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "DA", procenatPopusta: 0.15},
  { id: 1303, naziv: "Decja majica zelena", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "10", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "DA", procenatPopusta: 0.15},
  { id: 1304, naziv: "Decja majica zelena", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "12", kolicina: 0, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "DA", procenatPopusta: 0.15},
  { id: 1305, naziv: "Decja majica zelena", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "14", kolicina: 1, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "DA", procenatPopusta: 0.15},
  { id: 1306, naziv: "Decja majica crna", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "6", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "https://assport.rs/fajlovi/product/swoosh-t-shirt-nike-muska-majica-crna-swoosh-ck4278-010-_5ed6519039caf.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1307, naziv: "Decja majica crna", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "8", kolicina: 3, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1308, naziv: "Decja majica crna", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "10", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1309, naziv: "Decja majica crna", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "12", kolicina: 3, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1310, naziv: "Decja majica crna", proizvodjac: "Nike", pol: "kids", kategorija: "Majice", velicina: "14", kolicina: 2, cena: 1499, opis: "Mala majica bez rukava", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1311, naziv: "Decja majica crvena", proizvodjac: "Adidas", pol: "kids", kategorija: "Majice", velicina: "6", kolicina: 1, cena: 1299, opis: "Mala majica", slika: "https://www.intersport.rs/pub/media/catalog/product/cache/382907d7f48ae2519bf16cd5f39b77f9/g/n/gn3993_app_photo_front_white.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1312, naziv: "Decja majica crvena", proizvodjac: "Adidas", pol: "kids", kategorija: "Majice", velicina: "8", kolicina: 1, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1313, naziv: "Decja majica crvena", proizvodjac: "Adidas", pol: "kids", kategorija: "Majice", velicina: "10", kolicina: 2, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1314, naziv: "Decja majica crvena", proizvodjac: "Adidas", pol: "kids", kategorija: "Majice", velicina: "12", kolicina: 0, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1315, naziv: "Decja majica crvena", proizvodjac: "Adidas", pol: "kids", kategorija: "Majice", velicina: "14", kolicina: 1, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1316, naziv: "Decja majica crna", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "6", kolicina: 2, cena: 1299, opis: "Mala majica", slika: "https://www.extrasports.com/files/thumbs/files/images/slike_proizvoda/media/UMA/UMA201M807-01/images/thumbs_350/UMA201M807-01_350_350px.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1317, naziv: "Decja majica crna", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "8", kolicina: 3, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1318, naziv: "Decja majica crna", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "10", kolicina: 2, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1319, naziv: "Decja majica crna", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "12", kolicina: 3, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1310, naziv: "Decja majica crna", proizvodjac: "Umbro", pol: "kids", kategorija: "Majice", velicina: "14", kolicina: 2, cena: 1299, opis: "Mala majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1320, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "39", kolicina: 2, cena: 8999, opis: "Patika za trcanje", slika: "https://www.djaksport.com/image.aspx?imageId=154681", popust: "NE", procenatPopusta: 0},
  { id: 1321, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "40", kolicina: 2, cena: 8999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1322, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "41", kolicina: 1, cena: 8999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1323, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "42", kolicina: 1, cena: 8999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1324, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "43", kolicina: 0, cena: 8999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1325, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "44", kolicina: 2, cena: 8999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1326, naziv: "Sportske patike AIRMAX crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "45", kolicina: 1, cena: 8999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1350, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "39", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "https://www.tike.rs/files/thumbs/files/images/products/media/DA4/DA4655-100/images/thumbs_800/DA4655-100_4_800_800px.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1351, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "40", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1352, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "41", kolicina: 3, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1353, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "42", kolicina: 3, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1354, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "43", kolicina: 3, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1355, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "44", kolicina: 0, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1356, naziv: "Sportske patike WAFFLE plave", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "45", kolicina: 0, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1330, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "39", kolicina: 0, cena: 6999, opis: "Patika za trcanje", slika: "data:image/jpeg;base64,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", popust: "NE", procenatPopusta: 0},
  { id: 1331, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "40", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1332, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "41", kolicina: 1, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1333, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "42", kolicina: 3, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1334, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "43", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1335, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "44", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1336, naziv: "Sportske patike WAFFLE crne", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "45", kolicina: 0, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1340, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "39", kolicina: 1, cena: 6999, opis: "Patika za trcanje", slika: "http://www.sportizmo.rs/slike/17427/nike-patike-air-waffle-trainer-leather-men-1-1000x1000.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1341, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "40", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1342, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "41", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1343, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "42", kolicina: 3, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1344, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "43", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1345, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "44", kolicina: 2, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1346, naziv: "Sportske patike WAFFLE maslinaste", proizvodjac: "Nike", pol: "male", kategorija: "Patike", velicina: "45", kolicina: 1, cena: 6999, opis: "Patika za trcanje", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1327, naziv: "Muska majica crna", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "S", kolicina: 3, cena: 1299, opis: "Sportska majica", slika: "https://www.extrasports.com/files/thumbs/files/images/slike_proizvoda/media/UMA/UMA201M807-01/images/thumbs_350/UMA201M807-01_350_350px.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1328, naziv: "Muska majica crna", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "M", kolicina: 5, cena: 1299, opis: "Sportska majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1329, naziv: "Muska majica crna", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "L", kolicina: 3, cena: 1299, opis: "Sportska majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1337, naziv: "Muska majica crna", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "XL", kolicina: 3, cena: 1299, opis: "Sportska majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1347, naziv: "Muska majica plava", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "S", kolicina: 6, cena: 1299, opis: "Sportska majica", slika: "https://api.shoppster.com/medias/2019000439466-01-1-ung-2000Wx1500H?context=bWFzdGVyfGltYWdlc3wyNjY2OTF8aW1hZ2UvanBlZ3xoYjMvaDMwLzEwMjQ5MTgyNzQwNTEwLzIwMTkwMDA0Mzk0NjZfMDFfMV91bmctMjAwMFd4MTUwMEh8MWQxYTgyZTg2MmM0N2EyMmU3YWZjZTljYzljMzVjMDZiMmNkOWEzNGEyOWQzMDE5MmZiNjgzZjY3ZTQ4NjgzZQ", popust: "NE", procenatPopusta: 0},
  { id: 1338, naziv: "Muska majica plava", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "M", kolicina: 6, cena: 1299, opis: "Sportska majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1339, naziv: "Muska majica plava", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "L", kolicina: 5, cena: 1299, opis: "Sportska majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1348, naziv: "Muska majica plava", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "XL", kolicina: 7, cena: 1299, opis: "Sportskaa majica", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1360, naziv: "Zenska majica roza", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "S", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "https://www.intersport.rs/pub/media/catalog/product/cache/382907d7f48ae2519bf16cd5f39b77f9/b/v/bv6169-632-phsfh001-1500.jpeg", popust: "NE", procenatPopusta: 0},
  { id: 1361, naziv: "Zenska majica roza", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "M", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1362, naziv: "Zenska majica roza", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "L", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1363, naziv: "Zenska majica roza", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "XL", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1364, naziv: "Zenska majica nezno plava", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "S", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "https://s3.eu-central-1.amazonaws.com/cnj-img/images/Gd/Gdcm6wPIg1rd", popust: "NE", procenatPopusta: 0},
  { id: 1365, naziv: "Zenska majica nezno plava", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "M", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1366, naziv: "Zenska majica nezno plava", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "L", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1367, naziv: "Zenska majica nezno plava", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "XL", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1368, naziv: "Zenska majica zuta", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "S", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "https://www.thespot.rs/image.aspx?imageId=189893", popust: "NE", procenatPopusta: 0},
  { id: 1369, naziv: "Zenska majica zuta", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "M", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1370, naziv: "Zenska majica zuta", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "L", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1371, naziv: "Zenska majica zuta", proizvodjac: "Nike", pol: "female", kategorija: "Majice", velicina: "XL", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1372, naziv: "Zenska majica roza", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "XS", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "https://www.intersport.rs/pub/media/catalog/product/cache/382907d7f48ae2519bf16cd5f39b77f9/f/q/fq3239_app_photo_front_white.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1373, naziv: "Zenska majica roza", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "S", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1374, naziv: "Zenska majica roza", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "M", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1375, naziv: "Zenska majica roza", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "L", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1376, naziv: "Zenska majica roza", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "XL", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1377, naziv: "Zenska majica crvena", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "XS", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "https://www.thespot.rs/image.aspx?imageId=165707", popust: "NE", procenatPopusta: 0},
  { id: 1378, naziv: "Zenska majica crvena", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "S", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1379, naziv: "Zenska majica crvena", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "M", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1380, naziv: "Zenska majica crvena", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "L", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1381, naziv: "Zenska majica crvena", proizvodjac: "Adidas", pol: "female", kategorija: "Majice", velicina: "XL", kolicina: 4, cena: 999, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1382, naziv: "Muska majica teget", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "S", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "https://assport.rs/fajlovi/product/pique-polo-umbro-majica-kragnica-pique-polo-ump161103-03-_5ecc1155d0aaf.jpg", popust: "NE", procenatPopusta: 0},
  { id: 1383, naziv: "Muska majica teget", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "M", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1384, naziv: "Muska majica teget", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "L", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1385, naziv: "Muska majica teget", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "XL", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0},
  { id: 1386, naziv: "Muska majica teget", proizvodjac: "Umbro", pol: "male", kategorija: "Majice", velicina: "XXL", kolicina: 4, cena: 899, opis: "Majica sa kratkim rukavima", slika: "slika", popust: "NE", procenatPopusta: 0}
]
  

  getFilteredProducts() {
    var j = 0;
    this.filteredProduct[j] = this.products[0];
    for(var i = 1; i < this.products.length; i++){
      if(this.filteredProduct[j].naziv != this.products[i].naziv){
        j++;
        this.filteredProduct[j] = this.products[i];
      }
    }
    return this.filteredProduct;
  }

  getFemaleProducts(){
    let j = 0;
    this.filteredProduct = this.getFilteredProducts();
    for(let i=0; i < this.filteredProduct.length; i++){
      if(this.filteredProduct[i].pol === "female"){
        this.femaleProduct[j] = this.filteredProduct[i];
        j++;
      }
    }
    return this.femaleProduct;
  }

  getMaleProducts() {
    let j = 0;
    this.filteredProduct = this.getFilteredProducts();
    for(let i=0; i < this.filteredProduct.length; i++){
      if(this.filteredProduct[i].pol === "male"){
        this.maleProduct[j] = this.filteredProduct[i];
        j++;
      }
    }
    return this.maleProduct;
  }

  getKidsProducts(){
    let j = 0;
    this.filteredProduct = this.getFilteredProducts();
    for(let i=0; i < this.filteredProduct.length; i++){
      if(this.filteredProduct[i].pol === "kids"){
        this.kidsProduct[j] = this.filteredProduct[i];
        j++;
      }
    }
    return this.kidsProduct;
  }
}





