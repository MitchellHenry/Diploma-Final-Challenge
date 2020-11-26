INSERT INTO Members(email,[name],DOB,[password],[status],[role]) VALUES('manager@manager.com','Donald Trump',GETDATE(),'password','authorized','manager'),
('member@member.com','Ronald Reagan',GETDATE(),'password','authorized','member');

INSERT INTO BasketballGame([date],venue,cost,shouter,booker) VALUES(GETDATE(),'Random Court',10.57,'Ronald Reagan','Donald Trump');