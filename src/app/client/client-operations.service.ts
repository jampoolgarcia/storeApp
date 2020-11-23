import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientOperationsService {

  constructor() { }


  getClientListData(){
    return this.data;
  }


  data = [
    {
      "_id": "5fbc22083809fb34ed698792",
      "index": 0,
      "guid": "843e7b9a-0c38-4f8a-9567-f6d1504124cf",
      "isActive": false,
      "balance": "2900",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "green",
      "name": "Larsen Hawkins",
      "gender": "male",
      "company": "INSECTUS",
      "email": "larsenhawkins@insectus.com",
      "phone": "+1 (834) 599-2925",
      "address": "111 Linden Street, Navarre, Arkansas, 2033",
      "about": "Nulla culpa pariatur ad sunt in eu ut sint dolore aliqua consequat. Enim eu aliquip officia exercitation minim. Non est incididunt adipisicing ea sint proident cupidatat esse minim eu et quis laboris.\r\n",
      "registered": "2020-01-02T07:52:39 +04:00",
      "latitude": 77.871001,
      "longitude": 31.512035,
      "tags": [
        "esse",
        "ullamco",
        "ullamco",
        "nisi",
        "exercitation",
        "cillum",
        "nulla"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Greer Petty"
        },
        {
          "id": 1,
          "name": "Michael Sweet"
        },
        {
          "id": 2,
          "name": "Fran Wheeler"
        }
      ],
      "greeting": "Hello, Larsen Hawkins! You have 1 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5fbc2208fd4852fbded01a18",
      "index": 1,
      "guid": "b2778a96-94fb-4943-b12a-1388d5f5651f",
      "isActive": false,
      "balance": "2000",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "blue",
      "name": "Reilly Ward",
      "gender": "male",
      "company": "ANDRYX",
      "email": "reillyward@andryx.com",
      "phone": "+1 (907) 484-2207",
      "address": "304 Dunne Place, Seymour, Alaska, 1879",
      "about": "Esse Lorem ad nisi occaecat ad ex consectetur excepteur cupidatat magna. Ad do consequat proident irure id ea duis ullamco aute eiusmod qui. Incididunt pariatur Lorem non commodo. Cupidatat laboris esse elit anim dolore. Consectetur labore consectetur ex quis dolor ullamco. Dolore ad proident culpa cillum. Ex exercitation consequat duis consectetur officia.\r\n",
      "registered": "2015-12-09T12:25:11 +04:30",
      "latitude": -47.123672,
      "longitude": 153.837244,
      "tags": [
        "deserunt",
        "incididunt",
        "est",
        "sint",
        "magna",
        "ullamco",
        "sit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Fernandez Massey"
        },
        {
          "id": 1,
          "name": "Carson Randall"
        },
        {
          "id": 2,
          "name": "Susana Rice"
        }
      ],
      "greeting": "Hello, Reilly Ward! You have 5 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5fbc2208675375698b76d86f",
      "index": 2,
      "guid": "a0fe3820-5971-459a-be57-4b7aa6a434b4",
      "isActive": false,
      "balance": "3000",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "brown",
      "name": "Roberta Larson",
      "gender": "female",
      "company": "DOGNOST",
      "email": "robertalarson@dognost.com",
      "phone": "+1 (818) 550-2924",
      "address": "191 Montrose Avenue, Heil, Florida, 6131",
      "about": "Sunt aliqua quis ipsum minim. In ullamco nisi enim ut anim sint amet commodo veniam eu eiusmod aliquip. Ex enim do incididunt Lorem aliquip eiusmod sunt amet ut commodo amet. Lorem non quis do ullamco ex nulla irure id labore consectetur eu. Et sit aliquip mollit elit consectetur ullamco non duis consectetur est Lorem ex et. Eu pariatur et irure nisi laborum aliquip culpa exercitation qui pariatur est.\r\n",
      "registered": "2016-09-06T12:16:08 +04:00",
      "latitude": -15.265988,
      "longitude": -78.156943,
      "tags": [
        "culpa",
        "mollit",
        "consectetur",
        "nisi",
        "aliqua",
        "Lorem",
        "pariatur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Polly Zamora"
        },
        {
          "id": 1,
          "name": "Maggie Barlow"
        },
        {
          "id": 2,
          "name": "Margarita Rocha"
        }
      ],
      "greeting": "Hello, Roberta Larson! You have 2 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5fbc220812bfaff754104df5",
      "index": 3,
      "guid": "3befbf11-3536-429f-8219-9496076ee4cb",
      "isActive": true,
      "balance": "1198",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "blue",
      "name": "Stone Sargent",
      "gender": "male",
      "company": "NORSUP",
      "email": "stonesargent@norsup.com",
      "phone": "+1 (963) 554-2816",
      "address": "102 Dean Street, Yorklyn, Washington, 6316",
      "about": "Magna voluptate et in proident dolore aute magna commodo veniam consequat tempor amet. Irure ea ipsum esse tempor enim. Magna excepteur est mollit nisi. Ipsum magna sit et incididunt non mollit. Esse deserunt velit culpa exercitation culpa nisi veniam quis ea voluptate deserunt duis ipsum tempor. Qui nisi velit adipisicing id magna. Ex laboris anim duis fugiat irure tempor cillum officia voluptate pariatur aute officia veniam consectetur.\r\n",
      "registered": "2019-06-20T02:20:52 +04:00",
      "latitude": -42.735537,
      "longitude": -46.499169,
      "tags": [
        "ex",
        "quis",
        "elit",
        "consequat",
        "ipsum",
        "cillum",
        "sint"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Moody Bolton"
        },
        {
          "id": 1,
          "name": "Janet Keith"
        },
        {
          "id": 2,
          "name": "Black Pugh"
        }
      ],
      "greeting": "Hello, Stone Sargent! You have 6 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5fbc2208e653c872275c8f72",
      "index": 4,
      "guid": "8fa51f01-6c1d-4985-8aaf-04eba6c76815",
      "isActive": true,
      "balance": "2479",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "brown",
      "name": "Whitfield Carroll",
      "gender": "male",
      "company": "GAZAK",
      "email": "whitfieldcarroll@gazak.com",
      "phone": "+1 (978) 437-3825",
      "address": "318 Fleet Street, Dana, Kansas, 6098",
      "about": "Commodo eiusmod proident exercitation anim reprehenderit Lorem sit mollit elit esse occaecat consectetur. Laborum aliqua consequat labore tempor proident voluptate. Eiusmod consectetur magna tempor nostrud.\r\n",
      "registered": "2016-03-24T02:37:11 +04:30",
      "latitude": 10.567998,
      "longitude": 146.41622,
      "tags": [
        "aliquip",
        "do",
        "ipsum",
        "labore",
        "et",
        "dolor",
        "minim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Jane Ballard"
        },
        {
          "id": 1,
          "name": "Celeste Maynard"
        },
        {
          "id": 2,
          "name": "Myrna Dawson"
        }
      ],
      "greeting": "Hello, Whitfield Carroll! You have 3 unread messages.",
      "favoriteFruit": "apple"
    }
  ]
}
