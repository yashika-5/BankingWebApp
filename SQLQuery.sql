USE DistBank
go

CREATE TABLE customers(
	[customerId] [int] IDENTITY(101,1) NOT NULL primary key,
	[customerName] [varchar](15)not NULL,
	[age] [int] not NULL,
	[phoneNo] [varchar](15)not NULL unique,
	[email] [varchar](30) not NULL unique,
	[accountNo] [varchar](12) not NULL unique,
	[currentBalance] [int] not NULL,
	[address] [varchar](60) not NULL
	)

CREATE TABLE transactions(
transId int IDENTITY(1,1) not null primary key,
customerId int not null references customers(customerId),
receiverName varchar(15) not null,
accountNo varchar(12) not null,
amount int not null
);



select * from transactions
select * from customers