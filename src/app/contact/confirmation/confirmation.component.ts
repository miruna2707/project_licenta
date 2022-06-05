import {TicketService} from "../TicketService";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-personal',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationDemo implements OnInit {

  ticketInformation: any;


  constructor(public ticketService: TicketService, private router: Router) { }

  pricesRooms(){
    let pret= 0;
    if (this.ticketInformation.seatInformation.class.name == 'Double')
      pret= 300;
    else if (this.ticketInformation.seatInformation.class.name=='Triple')
      pret=350;
    else if (this.ticketInformation.seatInformation.class.name=='Family')
      pret=400;
    else if (this.ticketInformation.seatInformation.class.name=='Apartament')
      pret=600;
    const totalsejur=Math.abs(pret * this.getDifferenceInDays());
    return totalsejur;
  }

  getDifferenceInDays() {
    const stayedNights = Math.abs(this.ticketInformation.seatInformation.date14 - this.ticketInformation.seatInformation.date13);
    console.log(stayedNights);
    console.log(this.ticketInformation.seatInformation.date14);
    console.log(this.ticketInformation.seatInformation.date13);
    return  (stayedNights / (1000 * 60 * 60 * 24));
  }

  ngOnInit() {
    this.ticketInformation = this.ticketService.ticketInformation;
    console.log(this.ticketService.ticketInformation.seatInformation)
  }


  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'ELECTRONIC BILLING',
          fontSize: 17,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'Reservation for Pensiunea Romantic',
          fontSize: 21,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },

        {
          text: 'Reservation Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.ticketInformation.personalInformation.firstname,
                bold:true
              },
              {
                text: this.ticketInformation.personalInformation.lastname,
                bold:true
              },
              { text: this.ticketInformation.personalInformation.address },
              { text: this.ticketInformation.seatInformation.val4 },
              { text: this.ticketInformation.seatInformation.date13 },
              { text: this.ticketInformation.seatInformation.date14 }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Bill No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Reservation Details',
          style: 'sectionHeader'
        },

        {
          table: {
            body: [
              ['Room Type', 'Price', 'Nights', 'Total'],
              [
                {
                  stack: [
                    'The room you have selected',
                    {
                      ul: [
                        { text: this.ticketInformation.seatInformation.class.name },
                      ]
                    }
                  ]
                },
                [
                  'The listed prices',
                  {
                    table: {
                      body: [
                        ['Double', 'Triple', 'Family', 'Apartament'],
                        ['300', '350', '400', '600']
                      ]
                    },
                  }
                ],
                { text: this.getDifferenceInDays() },
                {
                  stack: [
                    'The total of your staying',
                    {
                      ul: [
                        { text: this.pricesRooms() + 'RON' },
                      ]
                    }
                  ]
                },
              ]
            ]
          }
        },
        {
          text: 'Additional Details',
          style: 'sectionHeader'
        },
        {
          text: this.ticketInformation.additionalDetails,
          margin: [0, 0 ,0, 15]
        },
        {
          columns: [
            [{ qr: `${'0742113337'}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true}],
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
          ul: [
            'Reservation can be canceld withhin max 10 days.',
            'For any other questions you can contact us by email: vilaromantic@gmail.com',
            'For any other questions you can contact us by phone: 0040 746 222 922',
          ],
        },
        {
          text: 'About Us',
          style: 'Pensiunea ROMANTIC Paltinis '
        },
        {
          ul: [
            'Nume firmă: ASCENTA TURISM BELVEDERE SRL ',
            'Cod Unic de Înregistrare: 39825194',
            'Nr. Înmatriculare: J32/1201/2018 ',
            'Adresă: Sibiu, Str. Aleea Fratii Buzesti 13',
          ],

        }

      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]
        }
      }
    };

    if(action==='download'){
      // @ts-ignore
      pdfMake.createPdf(docDefinition).download();
    }else if(action === 'print'){
      // @ts-ignore
      pdfMake.createPdf(docDefinition).print();
    }else{
      // @ts-ignore
      pdfMake.createPdf(docDefinition).open();
    }

  }

  complete() {
    this.ticketService.complete();
  }

  prevPage() {
    this.router.navigate(['contact/payment']);
  }
}
