/* select flight that working on monday*/
select *
from flights fl
where find_in_set('Mon',fl.working_days)>0;

/* select flight that working on a sepecific date*/
select * 
from flights fl
where find_in_set(if(weekday('2018-03-25')=0,'Mon',
				  if(weekday('2018-03-25')=1,'Tue',
				  if(weekday('2018-03-25')=2,'Wed',
				  if(weekday('2018-03-25')=3,'Thu',
				  if(weekday('2018-03-25')=4,'Fri',
				  if(weekday('2018-03-25')=5,'Sat',
				  if(weekday('2018-03-25')=6,'Sun','wrong'))))))),fl.working_days)>0;

/* check the abbr of weekday*/                  
select if(weekday('2018-03-25')=0,'Mon',
				  if(weekday('2018-03-25')=1,'Tue',
                  if(weekday('2018-03-25')=2,'Wed',
                  if(weekday('2018-03-25')=3,'Thu',
                  if(weekday('2018-03-25')=4,'Fri',
                  if(weekday('2018-03-25')=5,'Sat',
                  if(weekday('2018-03-25')=6,'Sun','wrong')))))))
                  
/*flight search on a date from 'JFK'*/
select *
from (select *,'2018-03-25' fdate
	    from flights fl join flightfares ff using(fid)
		where find_in_set(if(weekday('2018-03-25')=0,'Mon',
						  if(weekday('2018-03-25')=1,'Tue',
						  if(weekday('2018-03-25')=2,'Wed',
						  if(weekday('2018-03-25')=3,'Thu',
						  if(weekday('2018-03-25')=4,'Fri',
						  if(weekday('2018-03-25')=5,'Sat',
						  if(weekday('2018-03-25')=6,'Sun','wrong'))))))),fl.working_days)>0) t1,
 airport ap1, airport ap2
 where t1.start_apid=ap1.apid and ap1.IATA='JFK';
 
 
 /* flexible flight search*/
select distinct t1.fid,t1.fdate,t1.start_apid,t1.end_apid,if(datediff(current_date(),t1.fdate)<3,t1.ori_price,
				   if(datediff(current_date(),t1.fdate)<7,t1.ori_price*t1.adv_3,
                   if(datediff(current_date(),t1.fdate)<15,t1.ori_price*t1.adv_7,
                   if(datediff(current_date(),t1.fdate)<21,t1.ori_price*t1.adv_15,
                   if(datediff(current_date(),t1.fdate)<30,t1.ori_price*t1.adv_21,t1.ori_price*t1.adv_30))))) price
from (select *,'2018-03-25' fdate
	    from flights join flightfares using(fid)
		where find_in_set(if(weekday('2018-03-25')=0,'Mon',
						  if(weekday('2018-03-25')=1,'Tue',
						  if(weekday('2018-03-25')=2,'Wed',
						  if(weekday('2018-03-25')=3,'Thu',
						  if(weekday('2018-03-25')=4,'Fri',
						  if(weekday('2018-03-25')=5,'Sat',
						  if(weekday('2018-03-25')=6,'Sun','wrong'))))))),working_days)>0
	  union
      select *,'2018-03-25'-interval 1 day fdate
      from flights join flightfares using(fid)
      where find_in_set(if(weekday('2018-03-25')-interval 1 day=0,'Mon',
						  if(weekday('2018-03-25'-interval 1 day)=1,'Tue',
						  if(weekday('2018-03-25'-interval 1 day)=2,'Wed',
						  if(weekday('2018-03-25'-interval 1 day)=3,'Thu',
						  if(weekday('2018-03-25'-interval 1 day)=4,'Fri',
						  if(weekday('2018-03-25'-interval 1 day)=5,'Sat',
						  if(weekday('2018-03-25'-interval 1 day)=6,'Sun','wrong'))))))),working_days)>0) t1,
	 airport ap1, airport ap2
 where t1.start_apid=ap1.apid and ap1.IATA='BCN';
 
 select datediff(current_date(),'2018-03-22');
 
