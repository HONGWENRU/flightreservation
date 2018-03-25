/*-------------------------------------------------------------------
              Flight Instance
--------------------------------------------------------------------*/
Create Table flightinstance( fid int(11),
							 fdate date NOT NULL,
                             reserved_seats int default 0,
                             bookingfee real,
                             Primary Key (fid,fdate),
                             Foreign Key (fid) references flights(fid),
                             key (fdate));

Alter table flightinstance add column reserved_seats int default 0;
Alter table flightinstance drop column avi_seats;
Drop Table If Exists flightinstance;

Truncate Table flightinstance;

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/f_instancetest2.txt'
Into Table flightinstance
Fields terminated by ',';
/*-------------------------------------------------------------------
              Customers
--------------------------------------------------------------------*/
Create Table customers ( cid int(15) auto_increment,
						 email varchar(200),
						 create_date date,
						 phone varchar(30),
                         passwords varchar(100),
                         first_name varchar(100) NOT NULL,
                         last_name varchar(100) NOT NULL,
                         nickname varchar(100) Default NULL,
                         primary key (cid),
                         unique key email_unique (email));
                         
Drop Table If Exists flightinstance;

Truncate Table flightinstance;

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/customerstest2.txt'
Into Table customers
Fields terminated by ',';

/*-------------------------------------------------------------------
             Perference
--------------------------------------------------------------------*/                         
Create Table preferences (cid int(15),
						  meal set( 'French', 'Italian', 'Chinese', 'Korean', 'Japanese','Indian'),
                          meal_style set('low-calorie','gluten-free','low-sodium','bland'),
                          food enum('vegan','non') default NULL,
                          seat_type enum('aisle','window') default NULL,
                          primary key (cid),
                          foreign key (cid) references customers(cid)
                          on delete cascade
                          on update cascade);
                          
drop table perferences;
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/prefertest2.txt'
Into Table preferences
Fields terminated by ':';    

/*-------------------------------------------------------------------
             Perference
--------------------------------------------------------------------*/                         
Create Table rpreferences(p_id varchar(50),
					      fid int(11),
                          fdate date,
                          r_num int(30),
						  meal set( 'French', 'Italian', 'Chinese', 'Korean', 'Japanese','Indian'),
                          meal_style set('low-calorie','gluten-free','low-sodium','bland'),
                          food enum('vegan','non') default NULL,
                          seat_type enum('aisle','window') default NULL,
                          primary key (p_id,fid,fdate,r_num),
                          foreign key (p_id,fid,fdate,r_num) references reservetaking(p_id,fid,fdate,r_num)
                          on delete cascade
                          on update cascade);
                          
/*-------------------------------------------------------------------
             address
--------------------------------------------------------------------*/  
Create Table address(cid int(15) default null,
					 country varchar(50),
                     state varchar(50),
                     city varchar(50),
                     zipcode varchar(30),
                     street1 varchar(100),
                     street2 varchar(100),
                     foreign key (cid) references customers(cid)
                     on delete set null
                     on update cascade,
					 key (cid),
					 key(country),
                     key (city));
Insert into address(cid,country,state,city,zipcode,street1)
values (1,'US','NJ','New Burnswick','08907','Rutgers University');
					 


/*-------------------------------------------------------------------
             payment
--------------------------------------------------------------------*/  
Create table payment(cid int(15),
					 paytype enum('debit','credit'),
                     account_num varchar(30),
                     primary key(cid,account_num),
                     foreign key(cid) references customers (cid)
                     on delete cascade
                     on update cascade);

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/payment.txt'
Into Table payment
Fields terminated by ',';
/*-------------------------------------------------------------------
             passangers 
--------------------------------------------------------------------*/  
Create table passengers (p_id varchar(50),
                         first_name varchar(100) NOT NULL,
                         last_name varchar(100) NOT NULL,
                         primary key (p_id));

DROP table passengers;
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/passengerstest2.txt'
Into Table passengers
Fields terminated by ','; 
/*-------------------------------------------------------------------
             Reservation
--------------------------------------------------------------------*/
/* 
Create table reservations (r_num int(30) auto_increment,
						   representive_id int(15),
                           rtime timestamp default CURRENT_TIMESTAMP(),
                           rstate enum('waiting_payment','success','canceled','fail'),
                           fid int(11) NOT NULL,
                           fdate date NOT NULL,
                           p_id varchar(50) NOT NULL,
                           cid int(15) NOT NULL,
                           primary key(r_num,fid,fdate,p_id,cid),
                           foreign key (fid,fdate) references flightinstance(fid,fdate),
                           foreign key (cid) references customers(cid),
                           foreign key (p_id) references passengers(p_id),
                           key (rtime),
                           key (fdate),
                           key (representive_id));
                           
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/reservetest2.txt'
Into Table reservations
Fields terminated by ',';
*/
/*-------------------------------------------------------------------
             managers 
--------------------------------------------------------------------*/  
Create Table managers( account varchar(50),
					   keyword varchar(50),
                       eid     int(15),
                       first_name varchar(50),
					   last_name varchar(50),
                       phone varchar(50),
                       primary key (eid),
                       unique (account),
                       unique (account,keyword));
/*-------------------------------------------------------------------
             making reservation
--------------------------------------------------------------------*/  
                       
Create Table reservation(r_num int(30) auto_increment,
						 cid int(15) NOT NULL,
						 repre_id int(15) NOT NULL,
						 rtime timestamp default CURRENT_TIMESTAMP(),
						 rstate enum('waiting_payment','success','canceled','fail'),
                         total_fare real default null,
                         primary key(r_num),
                         foreign key (repre_id) references representative(repre_id));
                         
Truncate table reservation;
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/reservationtest2.txt'
Into Table reservation
Fields terminated by ',';
/*-------------------------------------------------------------------
             representatives
--------------------------------------------------------------------*/  

Create Table representative (repre_id int(15),
							 first_name varchar(50),
                             last_name varchar(50),
                             phone varchar(50),
                             primary key(repre_id),
                             key (first_name,last_name));

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/representative.txt'
Into Table representative
Fields terminated by ',';
/*-------------------------------------------------------------------
             reserve who is taking which flight instance
--------------------------------------------------------------------*/  

Create Table reservetaking (p_id varchar(50),
							fid int(11),
							fdate date,
                            r_num int(30) NOT NULL,
							primary key (p_id,fid,fdate,r_num),
                            foreign key (r_num) references reservation(r_num),
							foreign key (p_id) references passengers(p_id),
							foreign key (fid,fdate) references flightinstance(fid,fdate));
set foreign_key_checks =0;
truncate table reservetaking;
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/taking.txt'
Into Table reservetaking
Fields terminated by ',';                            
/*-------------------------------------------------------------------
             preference of passengers on each reservation
--------------------------------------------------------------------*/  
Create Table flightprefer (p_id varchar(50),
						   fid int(11),
                           fdate date,
                           r_num int(30),
                           meal set( 'French', 'Italian', 'Chinese', 'Korean', 'Japanese','Indian'),
                           meal_style set('low-calorie','gluten-free','low-sodium','bland'),
                           food enum('vegan','non') default NULL,
                           seat_type enum('aisle','window') default NULL,
                           primary key (p_id,fid,fdate,r_num),
                           foreign key (p_id,fid,fdate,r_num) references reservetaking (p_id,fid,fdate,r_num));
                           
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/flightprefer.txt'
Into Table flightprefer
Fields terminated by ':';                             

/*-------------------------------------------------------------------
             accounts
--------------------------------------------------------------------*/                                                      
Create Table accounts (anum varchar(50),
					   cid int(15),
					   atime timestamp default current_timestamp(),
					   primary key (anum),
					   foreign key (cid) references customers(cid));