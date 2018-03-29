SELECT * FROM project.reservation;
/* select year 2014 reservation*/
select * from project.reservation res
where res.rtime between '2013-12-31' and '2015-01-01' and res.rstate='success';

/*select cid that spent the most during 2014*/
select t1.cid, sum(total_fare) spending
from (select * from project.reservation res
	  where res.rtime between '2013-12-31' and '2015-01-01' 
      and res.rstate='success') t1
group by t1.cid
order by spending DESC;

/*select top10 cid who spend most 2014*/
select * 
from (select t1.cid, sum(total_fare) spending
	  from (select * from project.reservation res
			where res.rtime between '2013-12-31' and '2015-01-01' 
			and res.rstate='success') t1
	  group by t1.cid
	  order by spending DESC) t2
limit 10;

/* select recent 7 days reservation*/
select * 
from project.reservation res
where res.rtime between current_date()-interval 100 day and current_date();

/* slect representative who has the most reservation of last 1 yaer*/

select * 
from project.reservation res
where res.rtime between current_date()+interval 1 day-interval 1 year and current_date()
	  and res.rstate='success';
      
select t1.repre_id, sum(total_fare) total
from (select * 
		from project.reservation res
		where res.rtime between current_date()+interval 1 day-interval 1 year and current_date()
			  and res.rstate='success') t1
group by t1.repre_id
order by total DESC
limit 10;

/*Produce a list of all customers who have seats reserved on a given flight*/
select cid
from reservation re
	 join reservetaking rt using(r_num)
     join accounts ac using(anum)
     where re.rstate='success'
     and fid= and fdate= ;

select cid,fid,fdate
from reservation re
	 join reservetaking rt using(r_num)
     join accounts ac using(anum)
     where re.rstate='success'

/* num of cid on each reserved flight instance*/
select count(*) num_cid,
	   t1.fid, t1.fdate
from (select *
		from reservation re
			 join reservetaking rt using(r_num)
             join accounts ac using(anum)
			 where re.rstate='success') t1
group by t1.fid,t1.fdate;

/*9. Produce a list of all flights for a given airport*/
select fl.fid
from flights fl, 
	 airport ap
where fl.start_apid=1218 or fl.end_apid=1218;

/* 10.Produce a list of all flights whose arrival and departure times are on-time/delayed */
select *
from flightinstance fi
where fi.status='on-time';

/* ● Best-Seller list of flights of the most recent year */
select *
from reservetaking rt
	 join reservation re using(r_num)
     join flightinstance fi using (fid)
where rstate='success'
	  and rtime between current_timestamp()-interval 1 year and current_timestamp();
      
select current_timestamp();

select t1.fid, count(*) re_num
from (select rt.fid, rt.r_num,rt.p_id,ac.cid,re.repre_id,re.rtime,rt.fdate
		from reservetaking rt
			 join reservation re using(r_num)
			 join flightinstance fi using(fid)
             join accounts ac using(anum)
		where rstate='success'
			  and rtime between current_timestamp()-interval 1 year and current_timestamp()) t1
group by t1.fid
order by re_num DESC
limit 100;


