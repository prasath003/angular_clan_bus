import {Component, OnInit} from '@angular/core';
import {CommunicationServiceService} from '../../../service/communication_service/communication-service.service';
import {ComponentServiceService} from '../../../service/component_service/component-service.service';
import {AlertComponent} from '../../../shared/alert/alert.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-project-option',
  templateUrl: './project-option.component.html',
  styleUrls: ['./project-option.component.scss']
})
export class ProjectOptionComponent implements OnInit {
  responseUserData: any;
  responseSearchData: any;
  loading = false;
  personName: string;
  personAge: string;
  food = [{name: 'Yes', value: 'Y'}, { name: 'No', value: 'N'}];
  searchTerm: any;
  selectedToTransport: any;
  selectedFromTransport: any;
  dateSelected: any;
  bookIdArray = [];
  bookNameArray = [];
  seats: any = 28;
  seatsVolvo: any = 16;
  seatsArray: any;
  seatsArrayVolvo: any;
  selectedSeat: any;
  selectedSeatVolvo: any;
  selectedFood: any;
  changeText = false;
  confirmed = false;
  passengers = [];
  searchPassengers: any;
  selectedTransportType: any;
  transport = [{name: 'Karnataka'}, {name: 'Tamilnadu'}, {name: 'Kerala'}, {name: 'Andrapradesh'}];
  transportType = [{name: 'Normal'}, {name: 'Volvo'}];
  constructor(private service: CommunicationServiceService, private dialog: MatDialog, private messagefromservice: ComponentServiceService) {
    // this.messagefromservice.currentMessage.subscribe(message => this.otherTheme = message);
  }

  ngOnInit() {
    this.selectedSeat = [];
    this.selectedSeatVolvo = [];
    this.seatsArray = [];
    this.seatsArrayVolvo = [];
    for (let i = 1; i < this.seats; i++) {
      this.seatsArray.push({ number: i});
    }
    for (let i = 1; i < this.seatsVolvo; i++) {
      this.seatsArrayVolvo.push({ number: i});
    }
    this.getDetails();
  }
  changeSeatColor(seat) {
    if (this.selectedSeat.indexOf(seat) > -1) {
      this.selectedSeat.splice(this.selectedSeat.indexOf(seat), 1);
      // @ts-ignore
      document.getElementById(seat).src = '../../../../assets/images/availableChair.svg';
    } else {
      this.selectedSeat.push(seat);
      // @ts-ignore
      document.getElementById(seat).src = '../../../../assets/images/processChair.svg';
    }
    console.log(this.selectedSeat);
  }

  changeSeatVolvoColor(seatv) {
    const seat = 'V' + seatv;
    console.log(seat);
    if (this.selectedSeatVolvo.indexOf(seat) > -1) {
      this.selectedSeatVolvo.splice(this.selectedSeatVolvo.indexOf(seat), 1);
      // @ts-ignore
      document.getElementById(seat).src = '../../../../assets/images/sleeperChair.png';
    } else {
      this.selectedSeatVolvo.push(seat);
      // @ts-ignore
      document.getElementById(seat).src = '../../../../assets/images/sleeperChairAvailable.png';
    }
  }
  addPassenger() {
    let seatNo = '';
    let type = '';
    if (this.selectedTransportType === 'Normal') {
      type = 'N';
      seatNo = this.selectedSeat[this.passengers.length > 0 ? this.passengers.length : 0];
    } else {
      seatNo = this.selectedSeatVolvo[this.passengers.length > 0 ? this.passengers.length : 0];
      type = 'V';
    }
    const passenger = {
      personName: this.personName,
      age: this.personAge,
      food: this.selectedFood,
      seatNo,
      dateOfJourney : this.dateSelected,
      typeOfTicket : type
    };
    console.log('ru', passenger, this.selectedSeat, this.passengers.length, this.passengers.length - 1 );
    this.passengers.push(passenger);
    this.searchPassengers = this.passengers;

    // console.log(this.searchPassengers);
  }
  async lendingBook(select) {
    // this.loading = true;
    const {bookName, bookCount, bookAuthor, bookTechnology, id} = select;
    const body = {bookName, bookCount: (bookCount - 1), bookAuthor, bookTechnology};
    const response = await this.service.putObjects('books/' + id, body);
    this.getDetails();
    this.updateUser(id, bookName);
  }
  async updateUser(bookid, bookname) {
    const details = localStorage.getItem('details');
    // @ts-ignore
    const {userName, mobileNo, bookId, bookName, id} = JSON.parse(details);
    this.bookIdArray = bookId;
    this.bookNameArray = bookName;
    this.bookIdArray.push(bookid);
    this.bookNameArray.push(bookname);
    const userBody = {userName, mobileNo, bookId: this.bookIdArray, bookName: this.bookNameArray, id};
    const responseUser = await this.service.putObjects('users/' + id, userBody );
    // @ts-ignore
    localStorage.setItem('details', JSON.stringify(userBody));
  }
  async getDetails() {
    this.responseUserData = await this.service.getObjects('books/', '');
    this.responseSearchData = this.responseUserData;
  }
  async confirmPassenger() {
    this.confirmed = true;
    const body = JSON.stringify({
      userId: 1,
      userName: 'prasath',
      email: 'prasath@gmail.com',
      age: '28',
      address: 'banglore',
      mobilenumber: 1123213 ,
      source: 'Tamilnadu' ,
      destination: 'Karnataka',
      data : this.passengers
    });
    console.log(body);
    const response = await this.service.postObjects('books/', body);
    this.confirmed = false;
    this.selectedTransportType = '';
    this.openAlert('Message', response);
  }
  setFilteredItems(event) {
    const searchTerm = event.target.value;
    if (searchTerm && searchTerm.trim() !== '') {
      return this.passengers = this.searchPassengers.filter(item => (item.personName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (item.age.indexOf(searchTerm) > -1));
    } else {
      this.passengers = this.searchPassengers;
    }
  }
  openAlert(message, details): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '350px',
      data: { message: message, details: details, component: 'book'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }
  selectedDate(date) {
    let d = date.split('/');
    if (d[0] < 10) {
      this.dateSelected = d[2] + '-0' + d[0] + '-' + d[1];
    } else {
      this.dateSelected = d[2] + '-' + d[0] + '-' + d[1];
    }
    let d1 = this.dateSelected.split('-');
    if (d1[1] < 10) {
      this.dateSelected = d1[0] + '-' + d1[1] + '-0' + d1[2];
    } else {
      this.dateSelected = d1[0] + '-' + d1[1] + '-' + d1[2];
    }
    console.log(this.dateSelected);
  }
}
