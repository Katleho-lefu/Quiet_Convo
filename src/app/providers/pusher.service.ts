import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  channel;
  constructor() {
    var pusher = new Pusher('d7040d5b09700c673863', {cluster: 'mt1'});
    this.channel = pusher.subscribe('chat');
   }

   public init() {
    return this.channel;
  }

}
