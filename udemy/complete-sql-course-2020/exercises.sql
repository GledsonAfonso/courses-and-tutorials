select * from HumanResources.Department d  ;
select top (1000) * from AdventureWorks2017.Person.Person p ;


-- Section 2 - 5
select p.FirstName, p.LastName from Person.Person p order by p.FirstName, p.LastName;
select p.FirstName, count(p.FirstName) as TimesShowed from Person.Person p group by p.FirstName order by TimesShowed DESC, p.FirstName;


-- Section 2 - 6
select distinct p.FirstName from Person.Person p;
select distinct p.LastName  from Person.Person p;
select count(distinct p.FirstName) as DistinctFirstName, count(distinct p.LastName) as DistinctLastNames from Person.Person p;


-- Section 2 - 7
-- Challenge #1
select p.Name from Production.Product p where p.Weight >= 500 and p.Weight <= 700;

-- Challenge #2
select * from HumanResources.Employee e where e.MaritalStatus like 'M' and e.SalariedFlag = 1;

-- Challenge #3
select p.FirstName, p.LastName, ea.EmailAddress from Person.Person p join Person.EmailAddress ea on p.BusinessEntityID = ea.BusinessEntityID where p.FirstName = 'peter' and p.LastName = 'krebs';


-- Section 2 - 8
-- Challenge #1
select count(*) from Production.Product p ;

-- Challenge #2
select count(p.[Size]) from Production.Product p ;

-- Challenge #3
select count(DISTINCT p.[Size]) from Production.Product p ;


-- Section 2 - 10
-- Challenge #1
select top 10 p.ProductID  from Production.Product p order by p.ListPrice  desc ;

-- Challenge #2
select p.Name, p.ProductNumber from Production.Product p where p.ProductID BETWEEN 1 and 4 ;
-- or
select top 4 p.Name, p.ProductNumber from Production.Product p order by p.ProductID asc;

-- Section 2 - 14
-- Challenge #1
select count(p.ProductID) from Production.Product p where p.ListPrice > 1500;

-- Challenge #2
select count(p.LastName) from Person.Person p where p.LastName like 'p%';