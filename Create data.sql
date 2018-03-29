
use project;
create table airport (airport_id int,
					  airport_name varchar(100),
                      city varchar(40),
                      country varchar(100),
                      IATA varchar(5),
                      ICAO varchar(5),
                      latitude real,
                      longitude real,
                      altitude real,
                      timezone real,
                      DST varchar(2),
                      Tz varchar(50),
                      datatype varchar(9),
                      sourcetype varchar(11),
                      PRIMARY KEY (airport_id));
Insert into airport (airport_id, airport_name)
Values (0, 'Test');
SELECT * from airport;
TRUNCATE TABLE airport;
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/airports.dat'
Into Table airport
Fields terminated by ','
Enclosed by '"';

Create table airlines ( airline_id int,
						airline_name varchar(50),
                        airline_alias varchar(10),
                        airline_IATA varchar(3),
                        airline_ICAO varchar(4),
                        callsign varchar(30),
                        country varchar(100),
                        active varchar(3),
                        primary key (airline_id));
				
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/airlines.dat'
Into Table airlines
Fields terminated by ','
Enclosed by '"';

Drop table airlines;

select * from airlines where airline_id=325;

create table routes (airline varchar(5),
					 airline_id int,
                     source_airport varchar(5),
                     source_id int,
                     destination_airport varchar(5),
                     destination_id int,
                     codeshare varchar(2),
                     stops int,
                     equipment varchar(10),
                     constraint routekey primary key (source_id,destination_id),
                     foreign key (source_id) references airport (airport_id),
                     foreign key (destination_id) references airport (airport_id),
                     foreign key (airline_id) references airlines (airline_id));
                     
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/routes.dat'
Into Table routes
Fields terminated by ',';

/*---create flight leg-----*/
DROP TABLE IF EXISTS `flight_legs`;
create table flight_legs (src_apid int,
                         dst_apid int,
                         sat time,
                         sdt time,
                         key src_apid_legs (src_apid),
                         key dst_apid_legs (dst_apid),
                         primary key (src_apid,dst_apid,sdt,sat),
                         foreign key (src_apid,dst_apid) references routes(source_id,destination_id));
                         
Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/legs.txt'
into table flight_legs
fields terminated by ',';

DROP TABLE IF EXISTS flights;
CREATE TABLE flights (
   fid int(11) NOT NULL auto_increment,
   start_apid int(11) default NULL,
   end_apid int(11) default NULL,
   working_days set('Mon','Tue','Wed','Thu','Fri','Sat','Sun'),
   max_seats int,
   /*distance int(11) default NULL,
   seat text,
   seat_type text,
   class text,
   reason text,*/
   alid int,
   duration time default NULL,
   fmode char(1) default 'F',
   PRIMARY KEY (fid),
   FOREIGN KEY (alid) references airlines(airline_id),
   FOREIGN KEY (start_apid) references airport(airport_id),
   FOREIGN KEY (end_apid) references airport(airport_id),
   KEY alid (alid));

Alter Table flights Drop column avi_seats;
SET FOREIGN_KEY_CHECKS = 0;   
truncate table flights;

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/flighttest2.txt'
Into Table flights
Fields terminated by ':';

/*-------------------------------------------------------------------
               Stops
--------------------------------------------------------------------*/
DROP TABLE IF EXISTS stops;

CREATE TABLE stops (fid int(11) NOT NULL,
				    src_apid int,
                    sdt time,
                    dst_apid int,
                    sat time, 
                    constraint Flightstop primary key (fid,src_apid,sat,dst_apid,sdt),
                    foreign key (fid) references flights (fid),
                    foreign key (src_apid,dst_apid,sdt,sat) references flight_legs (src_apid,dst_apid,sdt,sat),
                    key (src_apid),
                    key (sdt,sat),
                    key (dst_apid),
                    key (sat),
                    key (sdt),
                    key (src_apid,dst_apid));

truncate table stops;

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/stoptest2.txt'
Into Table stops
Fields terminated by ',';
                    

/*-------------------------------------------------------------------
               Fares
--------------------------------------------------------------------*/
#Drop table Flightfares if exists Flightfares;
Create Table flightfares( fid int(11),
						  ori_price real default 1000,
                          restriction text,
                          `adv_3` real default 1.0,
                          `adv_7` real default 0.95,
                          `adv_15` real default 0.8,
                          `adv_21` real default 0.7,
                          `adv_30` real default 0.6,
                          primary key (fid));
                          
DROP TABLE IF EXISTS flightfares;
TRUNCATE TABLE flightfares;

Load data local infile '/Users/summer/Desktop/2018 Spring Textbooks/539 Database/Project CS539/data/faretest2.txt'
Into Table flightfares
Fields terminated by ',';
/*-------------------------------------------------------------------
               Trigger check if flights has proper legs
--------------------------------------------------------------------*/
/*-------------------------------------------------------------------
               Fares
--------------------------------------------------------------------*/
                          