import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stamm',
  templateUrl: './stamm.component.html',
  styleUrls: ['./stamm.component.scss']
})
export class StammComponent implements OnInit {

  data = [
    {
      user: "DPSG St. Josef Rentfort",
      title: "Weihnachtsmarkt",
      content: "Weihnachtsmarkt am 20.12.2020",
      typ: "Event",
      publish_date : "05.11.2020",
      bild: "https://bilder.t-online.de/b/86/83/25/74/id_86832574/tid_da/weihnachtsmarkt-in-frankfurt-schon-seit-1393-ist-er-urkundlich-belegt-.jpg"
    },
    {
      user: "DPSG Heilige Maria",
      content: "Sommerlager findet nächstes Jahr am 06.06.2020 statt",
      title: "Sommerlager",
      typ: "Lager",
      publish_date : "06.11.2020",
      bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
    },
    {
      user: "DPSG Herz Jesus",
      content: "Der neue Stammesvorstand bei uns ist Alexander Dommermuth",
      title: "Stammesvorstand",
      typ: "News",
      publish_date : "07.11.2020",
      bild: "data:image/jpeg;base64,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"
    },
    {
      user: "DPSG St. Josef Rentfort",
      title: "Weihnachtsmarkt",
      content: "Weihnachtsmarkt am 20.12.2020",
      typ: "Event",
      publish_date : "05.11.2020",
      bild: "https://bilder.t-online.de/b/86/83/25/74/id_86832574/tid_da/weihnachtsmarkt-in-frankfurt-schon-seit-1393-ist-er-urkundlich-belegt-.jpg"
    },
    {
      user: "DPSG Heilige Maria",
      content: "Sommerlager findet nächstes Jahr am 06.06.2020 statt",
      title: "Sommerlager",
      typ: "Lager",
      publish_date : "06.11.2020",
      bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
    },
    {
      user: "DPSG St. Josef Rentfort",
      title: "Weihnachtsmarkt",
      content: "Weihnachtsmarkt am 20.12.2020",
      typ: "Event",
      publish_date : "05.11.2020",
      bild: "https://bilder.t-online.de/b/86/83/25/74/id_86832574/tid_da/weihnachtsmarkt-in-frankfurt-schon-seit-1393-ist-er-urkundlich-belegt-.jpg"
    },
    {
      user: "DPSG Heilige Maria",
      content: "Sommerlager findet nächstes Jahr am 06.06.2020 statt",
      title: "Sommerlager",
      typ: "Lager",
      publish_date : "06.11.2020",
      bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
    },
    {
      user: "DPSG St. Josef Rentfort",
      title: "Weihnachtsmarkt",
      content: "Weihnachtsmarkt am 20.12.2020",
      typ: "Event",
      publish_date : "05.11.2020",
      bild: "https://bilder.t-online.de/b/86/83/25/74/id_86832574/tid_da/weihnachtsmarkt-in-frankfurt-schon-seit-1393-ist-er-urkundlich-belegt-.jpg"
    },
    {
      user: "DPSG Heilige Maria",
      content: "Sommerlager findet nächstes Jahr am 06.06.2020 statt",
      title: "Sommerlager",
      typ: "Lager",
      publish_date : "06.11.2020",
      bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
    },
    {
      user: "DPSG St. Josef Rentfort",
      title: "Weihnachtsmarkt",
      content: "Weihnachtsmarkt am 20.12.2020",
      typ: "Event",
      publish_date : "05.11.2020",
      bild: "https://bilder.t-online.de/b/86/83/25/74/id_86832574/tid_da/weihnachtsmarkt-in-frankfurt-schon-seit-1393-ist-er-urkundlich-belegt-.jpg"
    },
    {
      user: "DPSG Heilige Maria",
      content: "Sommerlager findet nächstes Jahr am 06.06.2020 statt",
      title: "Sommerlager",
      typ: "Lager",
      publish_date : "06.11.2020",
      bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
