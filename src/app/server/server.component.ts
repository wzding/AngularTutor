import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    isCheck = false;
    ingredientMeat = "";
    ingredientVege = "";
    ingredientOther = "";

    menu_single = {"beef":  "红烧牛肉 水煮牛肉 香煎牛排",
    "lamb": "孜然羊肉 烤全羊",
    "chicken": "口水鸡 三杯鸡",
    "duck": "烤鸭 盐水鸭 桂花鸭",
    "pork": "水煮肉片 糖醋里脊 回锅肉",
    "fish": "水煮鱼片 烤鱼",
    "egg": "荷包蛋 蒸蛋 蛋饼 鸡蛋汤",
    "tomato": "凉拌西红柿",
    "bok coy": "炝炒青菜",
    "mushroom": "红烧蘑菇"
    }

    menus = {"beef": "牛肉",
    "lamb": "羊肉",
    "chicken": "鸡",
    "duck": "鸭",
    "pork": "猪肉",
    "fish": "鱼",
    "tomato": "西红柿",
    "bok coy": "青菜",
    "mushroom": "香菇",
    "egg": "蛋",
    };

//     students: Student[] = [new Student('Bill Gates', 'Computer Science'),
//                            new Student('Steve Jobs', 'Computer Science'),
//                            new Student('Elon Musk', 'Computer Science')]
    check() {
      this.isCheck = true;
    }

    getMenu() {
        if (this.ingredientMeat == "" && this.ingredientVege == "" && this.ingredientOther == "") {
            return "please input at least one ingredient";}
        // single
        if (this.ingredientMeat && this.ingredientMeat in this.menu_single
            && this.ingredientVege == "" && this.ingredientOther == "") {
            return "Here are the dishes: " + this.menu_single[this.ingredientMeat];}
        if (this.ingredientVege && this.ingredientVege in this.menu_single
                    && this.ingredientMeat == "" && this.ingredientOther == "") {
                    return "Here are the dishes: " + this.menu_single[this.ingredientVege];}
        if (this.ingredientOther && this.ingredientOther in this.menu_single
                            && this.ingredientMeat == "" && this.ingredientVege == "") {
                            return "Here are the dishes: " + this.menu_single[this.ingredientOther];}
        // two of them
        if (this.ingredientMeat && this.ingredientMeat in this.menus
            && this.ingredientVege && this.ingredientVege in this.menus) {
            return "Here is the dish: " +
            this.menus[this.ingredientVege] + "炒" +
            this.menus[this.ingredientMeat]
            }
        return "Sorry, we don't have a dish for you!"
    }
}
