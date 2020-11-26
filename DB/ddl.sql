DROP TABLE IF EXISTS BasketballGame;

DROP TABLE IF EXISTS Members;

CREATE TABLE Members(
    id INT IDENTITY(1,1) NOT NULL,
    email NVARCHAR(max) NOT NULL,
    [name] NVARCHAR(max) NOT null,
    DOB DATE NOT NULL,
    [password] NVARCHAR(max) NOT NULL,
    [status] NVARCHAR(max) NOT NULL,
    [role] NVARCHAR(max) NOT NULL
    CONSTRAINT Pk_Members PRIMARY KEY (id) 
)

CREATE TABLE BasketballGame(
    id INT IDENTITY(1,1) NOT NULL,
    [date] DATETIME NOT NULL,
    venue NVARCHAR(max) NOT NULL,
    cost MONEY,
    shouter NVARCHAR(max), 
    booker NVARCHAR(max) NOT NULL,
    CONSTRAINT Pk_CoffeeDates PRIMARY KEY (id)
)