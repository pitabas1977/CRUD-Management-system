import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Ridam",
		last_name : "Kansal",
		email : "Ridam@mail.com",
		phone : 23656598178,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Kamal",
		last_name : "Siani",
		email : "Kamal@mail.com",
		phone : 9988999658,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Raghav",
		last_name : "Sharma",
		email : "Raghav@mail.com",
		phone : 7336655658,
		department : "Humanities"
	},
	{
		id : 4,
		first_name : "Lalit",
		last_name : "Kumar",
		email : "Lait@mail.com",
		phone : 2233668848,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Rahul",
		last_name : "Goyal",
		email : "Rahul@mail.com",
		phone : 9988556633,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}


