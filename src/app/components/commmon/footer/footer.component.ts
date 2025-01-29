import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  
  description = "JustBeer is a community for beer lovers and enthusiasts around the world. Our mission is to make beer more approachable by creating a space for beginners and experts to contribute their opinions, skills and experiences; as well as provide a conduit to research new beers and connect with fellow beer lovers."
  
  constructor() { }

  ngOnInit(): void {
  }

}
