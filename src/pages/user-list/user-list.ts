import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

/**
 * Generated class for the UserList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserList {

  userList: Array < any > ;
  userListBak: Array < any > ;
  sortFlag: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.userList = [{
        username: "李丽",
        phone: "1234567890123",
        index: 1,
        src: "../../assets/img/1.jpg",
        email: "1234566790@126.com",
        sex: "女",
        age: 18
      },
      {
        username: "小明",
        phone: "1234567890123",
        index: 2,
        src: "../../assets/img/2.jpg",
        email: "1234566790@126.com",
        sex: "男",
        age: 33
      },
      {
        username: "小夏",
        phone: "1234567890123",
        index: 0,
        src: "../../assets/img/1.jpg",
        email: "1234566790@126.com",
        sex: "男",
        age: 33
      },
      {
        username: "王伟",
        phone: "1234567890123",
        index: 3,
        src: "../../assets/img/2.jpg",
        email: "1234566790@126.com",
        sex: "男",
        age: 33
      },
      {
        username: "河东",
        phone: "1234567890123",
        index: 4,
        src: "../../assets/img/1.jpg",
        email: "1234566790@126.com",
        sex: "男",
        age: 33
      }
    ]
    this.userListBak = [{
      username: "李丽22",
      phone: "1234567890123",
      index: 1,
      src: "../../assets/img/1.jpg",
      email: "深入了解 Bootstrap 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。",
      sex: "女",
      age: 18
    }]
    this.sortFlag = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserList');
  }
  sortList(index) {
    console.log(index);
    if (index == "up") {
      this.userList.sort(function (a, b) {
        return a.index - b.index
      })

    } else if (index == "down") {
      this.userList.sort(function (a, b) {
        return b.index - a.index
      })
    } else {

      for (var i = 0; i < 30; i++) {

        var pos1 = Math.floor((Math.random() * 100) % 5);
        // console.log(pos1);
        var pos2 = Math.floor((Math.random() * 100) % 5);
        // console.log(pos2)

        // this.userListBak.push(this.userList[pos1])
        this.userListBak[0] = this.userList[pos1];
        this.userList[pos1] = this.userList[pos2];
        this.userList[pos2] = this.userListBak[0];
        //  console.log(this.userListBak[0]);
      }
    }

  }
}
