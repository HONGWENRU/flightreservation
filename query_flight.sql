/* table info of all flight instance*/
select *
from flightinstance fin join flights f using(fid) 
	join flightfares fare using(fid) 
    join airlines using(alid);

/* select avilable flight from cannada to us*/
select t1.fid,t1.fdate,t1.alid,t1.start_apid,t1.end_apid
from (select *
	from flightinstance fin join flights f using(fid) 
	join flightfares fare using(fid) 
    join airlines line using(alid)) t1, 
    airport port1, airport port2
where t1.start_apid=port1.apid and port1.country='Canada'
	  and t1.end_apid=port2.apid and port2.country='United States';
      
/* select avilable flight from BCN to SDR*/
select t1.fid,t1.fdate,t1.alid,t1.start_apid,port1.IATA,t1.end_apid,port2.IATA
from (select *
	from flightinstance fin join flights f using(fid) 
	join flightfares fare using(fid) 
    join airlines line using(alid)) t1, 
    airport port1, airport port2
where t1.start_apid=port1.apid and port1.IATA='BCN'
	  and t1.end_apid=port2.apid and port2.IATA='SDR';
      
/* ROUND TRIP select avilable flight from BCN to SDR*/
select t1.fid,t1.fdate,t1.alid,t1.start_apid,port1.IATA,t1.end_apid,port2.IATA
from (select *
	from flightinstance fin join flights f using(fid) 
	join flightfares fare using(fid) 
    join airlines line using(alid)) t1, 
    airport port1, airport port2
where t1.start_apid=port1.apid and port1.IATA='BCN'
	  and t1.end_apid=port2.apid and port2.IATA='SDR'
      and t1.fdate between '2000-12-31' and '2014-12-31'+interval 5 year
union
select t2.fid,t2.fdate,t2.alid,t2.start_apid,port3.IATA,t2.end_apid,port4.IATA
from (select *
	from flightinstance fin join flights f using(fid) 
	join flightfares fare using(fid) 
    join airlines line using(alid)) t2, 
    airport port3, airport port4
where t2.start_apid=port3.apid and port3.IATA='SDR'
	  and t2.end_apid=port4.apid and port4.IATA='BCN'
      and t2.fdate between '2014-12-31' and '2014-12-31'+interval 5 year;
      
/* select all reservation that reserve flight during 2014 */
select * 
from reservation r
	 join reservetaking rt using(r_num)
     join flightinstance fin using(fid,fdate)
     join flights fl using(fid)
     join airlines al using(alid)
where fdate between '2013-12-31' and '2015-01-01'
	  and rstate='success';

/* select sum of reservation of each airline that reserve flight during 2014 */
select t1.alid,t1.airline_name,count(*)
from (select * 
		from reservation r
			 join reservetaking rt using(r_num)
			 join flightinstance fin using(fid,fdate)
			 join flights fl using(fid)
			 join airlines al using(alid)
		where fdate between '2013-12-31' and '2015-01-01'
			  and rstate='success') t1
group by t1.alid;






