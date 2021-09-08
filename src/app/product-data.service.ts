import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  _data = [
    { "Category": "Vegetables", "Name": "eggplant", "OldPrice": 7, "NewPrice": 7, "Unit": "AED/KG", "Details": "Approx 2kg per Pack (UAE) ", "Quantity": 1, "image": "Vegetables/eggplant.jpg" },
    { "Category": "Vegetables", "Name": "CARROT", "OldPrice": 8, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/carrot.jpg" },
    { "Category": "Vegetables", "Name": "Courgette", "OldPrice": 7, "NewPrice": 5, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/Courgette.jpg" },
    { "Category": "Vegetables", "Name": "Broccoli", "OldPrice": 18, "NewPrice": 12, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/broccoli.jpg" },
    { "Category": "Vegetables", "Name": "cauliflower", "OldPrice": 9, "NewPrice": 5, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/cauliflower.jpg" },
    { "Category": "Vegetables", "Name": "cabbage", "OldPrice": 7, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/cabbage.jpg" },
    { "Category": "Vegetables", "Name": "onion", "OldPrice": 4.5, "NewPrice": 2.5, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/onion.jpg" },
    { "Category": "Vegetables", "Name": "lettuce", "OldPrice": 5, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/lettuce.jpg" },
    { "Category": "Vegetables", "Name": "cucumber", "OldPrice": 5.5, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/cucumber.jpg" },
    { "Category": "Vegetables", "Name": "pepper", "OldPrice": 5.5, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/pepper.jpg" },
    { "Category": "Vegetables", "Name": "potato", "OldPrice": 3.5, "NewPrice": 2, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/potato.jpg" },
    { "Category": "Vegetables", "Name": "zucchini", "OldPrice": 4.5, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/zucchini.jpg" },
    { "Category": "Vegetables", "Name": "pumpkin", "OldPrice": 2.5, "NewPrice": 2, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/pumpking.jpg" },
    { "Category": "Vegetables", "Name": "okra", "OldPrice": 11, "NewPrice": 10, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/okra.jpg" },
    { "Category": "Vegetables", "Name": "Tomoto", "OldPrice": 3.5, "NewPrice": 2, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/tomoto.jpg" },
    { "Category": "Vegetables", "Name": "garlic", "OldPrice": 9.5, "NewPrice": 8, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/garlic.jpg" },
    { "Category": "Vegetables", "Name": "lemon", "OldPrice": 8, "NewPrice": 7, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/lemon.jpg" },
    { "Category": "Vegetables", "Name": "Green Chilli", "OldPrice": 5.5, "NewPrice": 5, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Vegetables/chilli.jpg" },

    { "Category": "Fruits", "Name": "Sweet Melon", "OldPrice": 6, "NewPrice": 5, "Unit": "AED/KG", "Details": "Approx 2kg per Pack (UAE) ", "Quantity": 1, "image": "Fruits/sweetmelon.jpg" },
    { "Category": "Fruits", "Name": "Banana", "OldPrice": 6, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/banana.jpg" },
    { "Category": "Fruits", "Name": "Pineapple", "OldPrice": 7, "NewPrice": 6, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/pineapple.jpg" },
    { "Category": "Fruits", "Name": "Oranges", "OldPrice": 6, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/oranges.jpg" },
    { "Category": "Fruits", "Name": "Mangoes", "OldPrice": 12, "NewPrice": 7, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/mangoes.jpg" },
    { "Category": "Fruits", "Name": "WaterMelon", "OldPrice": 3.5, "NewPrice": 5, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/watermelon.jpg" },
    { "Category": "Fruits", "Name": "Apple", "OldPrice": 6, "NewPrice": 4, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/apple.jpg" },
    { "Category": "Fruits", "Name": "Graphes", "OldPrice": 12, "NewPrice": 10, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/grapes.jpg" },
    { "Category": "Fruits", "Name": "Pomograntes", "OldPrice": 9, "NewPrice": 6, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Fruits/pomogrante.jpg" },

    { "Category": "Chicken", "Name": "heart & liver", "OldPrice": 12, "NewPrice": 12, "Unit": "AED/KG", "Details": "Approx 2kg per Pack (UAE) ", "Quantity": 1, "image": "Chicken/heart&liver.jpg" },
    { "Category": "Chicken", "Name": "Breasts", "OldPrice": 35, "NewPrice": 35, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Chicken/breast.jpg" },
    { "Category": "Chicken", "Name": "Whole wings", "OldPrice": 35, "NewPrice": 35, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Chicken/wings.jpg" },
    { "Category": "Chicken", "Name": "Eggs Cartoon", "OldPrice": 12, "NewPrice": 12, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Chicken/egg.jpg" },
    { "Category": "Chicken", "Name": "Gizzard", "OldPrice": 12, "NewPrice": 12, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Chicken/gizzard.jpg" },
    { "Category": "Chicken", "Name": "Thighs", "OldPrice": 35, "NewPrice": 35, "Unit": "AED/KG", "Details": "Details", "Quantity": 1, "image": "Chicken/thigh.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 700gm", "OldPrice": 90, "NewPrice": 90, "Unit": "AED/KG", "Details": "700 GM", "Quantity": 1, "image": "Chicken/wholechicken_2.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 800gm", "OldPrice": 100, "NewPrice": 100, "Unit": "AED/KG", "Details": "800 GM", "Quantity": 1, "image": "Chicken/wholechicken_1.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 900gm", "OldPrice": 110, "NewPrice": 110, "Unit": "AED/KG", "Details": "900 GM", "Quantity": 1, "image": "Chicken/wholechicken_3.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 1000gm", "OldPrice": 120, "NewPrice": 120, "Unit": "AED/KG", "Details": "1000 GM", "Quantity": 1, "image": "Chicken/wholechicken_1.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 1100gm", "OldPrice": 130, "NewPrice": 130, "Unit": "AED/KG", "Details": "1100 GM", "Quantity": 1, "image": "Chicken/wholechicken_2.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 1200gm", "OldPrice": 140, "NewPrice": 140, "Unit": "AED/KG", "Details": "1200 GM", "Quantity": 1, "image": "Chicken/wholechicken_3.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 1300gm", "OldPrice": 150, "NewPrice": 150, "Unit": "AED/KG", "Details": "1300 GM", "Quantity": 1, "image": "Chicken/wholechicken_2.jpg" },
    { "Category": "Chicken", "Name": "Whole chicken cartoon 1400gm", "OldPrice": 160, "NewPrice": 160, "Unit": "AED/KG", "Details": "1400 GM", "Quantity": 1, "image": "Chicken/wholechicken_1.jpg" },

  ];
  constructor(private storageMap: StorageHelperService) {
    this.storageMap.get(this.cartKey).then((cart) => {
      if (cart)
        this._cart = cart;
      this.CartObserver.next(this._cart);
    });
  }
  public getProductData = (category: string) => {
    let data = this._data.filter(pd => pd.Category == category);
    return data;

  }

  CartObserver = new BehaviorSubject([]);
  _cart: any = [];
  cartKey = "CartData";

  // public getCart = (): Observable<any> => {
  //   //https://stackoverflow.com/questions/39935721/how-to-return-observable-from-subscribe
  //   let subject = new Subject();
  //   // get user access levels        
  //   this.CartObserver
  //       .map(user => {
  //         let accessLevel = user.access_level; 
  //         if (accessLevel === 'admin' ) { 
  //           subject.emit(true); 
  //           subject.complete();
  //         } 
  //         return user;
  //       });
  //    return subject;
  //   return this.CartObserver.subscribe();
  // }

  public addToCart = (p: any) => {
    //Search previously available?
    let found = this._cart.find(ca =>
      //{ "Category": "Vegetables", "Name": "eggplant", "OldPrice": 7, "NewPrice": 7, "Unit": "AED/KG", "Details": "Approx 2kg per Pack (UAE) ", "Quantity": 1, "image": "Vegetables/eggplant.jpg" },
      ca.Category == p.Category && ca.Name == p.Name && ca.Details == p.Details);
    if (found) {
      found.Quantity = found.Quantity + p.Quantity;
    } else {
      this._cart.push(p);
    }
    this.storageMap.set(this.cartKey, this._cart);
    this.CartObserver.next(this._cart);
  }

  public clearCart = () => {
    this._cart = [];
    this.storageMap.set(this.cartKey, this._cart);
    this.CartObserver.next(this._cart);
  }
}



@Injectable({
  providedIn: "root",
})
export class StorageHelperService {
  /**
   *
   */
  constructor(
  ) {

  }
  useLocalStorage = true;
  /**
   * Returns Null if key not found
   * @param key key to get the Object against that
   * @return {Promise}
  */
  get = async (key: any) => {
    console.error("!!! FAKE LOCALSTORAGE USING !!!");
    let value = window.localStorage.getItem(key);
    if (value) {
      try {
        value = JSON.parse(value);
      } catch (e) { }
    }
    return Promise.resolve(value);
  }
  set = async (key: any, value: any) => {
    return Promise.resolve(window.localStorage.setItem(key, JSON.stringify(value)));
  }
  remove = async (key: any) => {
    window.localStorage.removeItem(key);
    return Promise.resolve(true);
  }
  clearAllData = async () => {
    window.localStorage.clear();
    return Promise.resolve(true);
  }
}
