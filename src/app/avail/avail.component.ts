import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
//const pdfMake = require('pdfmake/build/pdfmake.js');


class Product{
  name: string="";
  price: number =0;
  qty: number =0;
}
class Invoice{
  customerName: string ="";
  address: string="";
  contactNo: number =0;
  email: string ="";

  products: Product[] = [];
  additionalDetails: string ="";

  constructor(){
    // Initially one empty product row we will show
    this.products.push(new Product());
  }
}
@Component({
  selector: 'app-avail',
  templateUrl: './avail.component.html',
  styleUrls: ['./avail.component.css']
})
export class AvailComponent implements OnInit {

  invoice = new Invoice();
  product = new Product();


    generatePDF(action = 'open') {
      let docDefinition = {
        content: [
          {
            text: 'ELECTRONIC SHOP',
            fontSize: 16,
            alignment: 'center',
            color: '#047886'
          },
          {
            text: 'INVOICE',
            fontSize: 20,
            bold: true,
            alignment: 'center',
            decoration: 'underline',
            color: 'skyblue'
          },
          {
            text: 'Customer Details',
            style: 'sectionHeader'
          },
          {
            columns: [
              [
                {
                  text: this.invoice.customerName,
                  bold:true
                },
                { text: this.invoice.address },
                { text: this.invoice.email },
                { text: this.invoice.contactNo }
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
            text: 'Order Details',
            style: 'sectionHeader'
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', 'auto', 'auto', 'auto'],
              body: [
                ['Product', 'Price', 'Quantity', 'Amount'],
                ...this.invoice.products.map(p => {
                  return ([p.name, p.price, p.qty, (p.price * p.qty).toFixed(2)]);
                }),
                [{text: 'Total Amount', colSpan: 3}, {}, {}, this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2)]
              ]
            }
          },
          {
            text: 'Additional Details',
            style: 'sectionHeader'
          },
          {
            text: this.invoice.additionalDetails,
            margin: [0, 0 ,0, 15]
          },
          {
            columns: [
              [{ qr: `${this.invoice.customerName}`, fit: '50' }],
              [{ text: 'Signature', alignment: 'right', italics: true}],
            ]
          },
          {
            text: 'Terms and Conditions',
            style: 'sectionHeader'
          },
          {
            ul: [
              'Order can be return in max 10 days.',
              'Warrenty of the product will be subject to the manufacturer terms and conditions.',
              'This is system generated invoice.',
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
    console.log(this.invoice.customerName)

  }

  addProduct(){
    this.invoice.products.push(new Product());
  }

  ngOnInit(): void {
  }


}
