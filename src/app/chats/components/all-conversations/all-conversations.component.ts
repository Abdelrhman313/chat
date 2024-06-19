import { Component, OnInit } from '@angular/core';
import { popup } from 'src/app/shared/animations/animations';

interface Conversation {
  id: number,
  image: string,
  name: string,
  bio: string,
  active: boolean,
  purchesed?: boolean,
}

interface message {
  id: number,
  content: string,
  attach?: any,
  attachValue?: any,
  type: number //1 = send , 2 = receive
}

@Component({
  selector: 'app-all-conversations',
  templateUrl: './all-conversations.component.html',
  styleUrls: ['./all-conversations.component.css'],
  animations: [popup],
})

export class AllConversationsComponent implements OnInit {
  allConversations: Conversation[];
  allConversationsTemp: Conversation[];

  selectedUser!: Conversation | null | undefined

  search_value: string

  allMessage: message[];

  message_value: string
  constructor() {
    this.allConversations = [
      { id: 1, image: '/assets/imgs/user1.jpeg', name: 'Christina Joy', bio: 'Are you ready to get it free?', active: false,purchesed:true },
      { id: 2, image: '/assets/imgs/user3.jpg', name: 'Joy Philip Matew', bio: 'Are you ready to get it free?', active: false,purchesed:false },
      { id: 3, image: '/assets/imgs/user3.jpeg', name: 'Ryu Hwa-young', bio: 'Are you ready to get it free?', active: false,purchesed:true },
      { id: 4, image: '/assets/imgs/user4.jpeg', name: 'Joy Philip Matew', bio: 'Are you ready to get it free?', active: false,purchesed:false },
    ]

    this.allConversationsTemp = JSON.parse(JSON.stringify(this.allConversations));

    this.search_value = ''

    this.allMessage = [
      { id: 1, content: 'hello, Serena', type: 2, attach: false },
      { id: 2, content: "Hi,I m excited that you re interested in learning more about marketing! This How to Get New Leads eBook will help you better understand now to denerate new leads for your business", type: 1, attach: true, attachValue: '/assets/imgs/attach.png' },
      { id: 3, content: 'Yes, Lets Rock. I want the file anyway :) ', type: 2, attach: false },
      { id: 4, content: 'better understand now to denerate new leads for your business', type: 2, attach: false },
      { id: 5, content: 'Great! Enter your email below so we know where to send your eBook', type: 1, attach: false },
      { id: 6, content: 'hello, Serena', type: 2, attach: false },
      { id: 7, content: "Hi,I m excited that you re interested in learning more about marketing! This How to Get New Leads eBook will help you better understand now to denerate new leads for your business", type: 1, attach: true, attachValue: '/assets/imgs/attach.png' },
      { id: 8, content: 'Yes, Lets Rock. I want the file anyway :) ', type: 2, attach: false },
      { id: 9, content: 'better understand now to denerate new leads for your business', type: 2, attach: false },
      { id: 10, content: 'Great! Enter your email below so we know where to send your eBook', type: 1, attach: false },
    ]
    this.message_value = ''
  }

  ngOnInit(): void {

  }

  conversationsSearch(event: any): void {
    let value = event?.target?.value
    if (value == '' || !value) {
      this.allConversations = this.allConversationsTemp;
    } else {
      this.allConversations = this.allConversationsTemp?.filter(el => el.name?.toLowerCase()?.includes(value?.toLowerCase()))
    }
  }

  resetFilter() {
    this.search_value = ''
    this.allConversations = this.allConversationsTemp;
  }

  openChatBox(item?: Conversation): void {
    this.selectedUser = null;
    this.allConversations = this.allConversations.map((el: any) => {
      return {
        ...el,
        active: el?.id == item?.id ? true : false
      }
    })

    setTimeout(() => {
      this.selectedUser = item
    }, 300);
  }
  addMessage(): void {
    let lastItemIndex: any = this.allMessage[this.allMessage.length - 1].id,
      newMessage: message = {
        id: lastItemIndex + 1,
        content: this.message_value,
        type: 1,
        attach: false
      };

    this.allMessage.push(newMessage);
    this.message_value = ''
  }
}
