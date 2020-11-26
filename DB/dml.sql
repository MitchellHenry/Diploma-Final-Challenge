INSERT INTO Members(email,[name],DOB,[password],[status],[role]) VALUES('manager@manager.com','Donald Trump',GETDATE(),'password','authorized','manager'),
('member@member.com','Ronald Reagan',GETDATE(),'password','authorized','member'),
('member2@member.com','Abraham Lincoln',GETDATE(),'password','authorized','member'),
('member3@member.com','Thomas Jefforson',GETDATE(),'password','authorized','member'),
('member4@member.com','Joe Biden',GETDATE(),'password','authorized','pending'),
('member5@member.com','Kamala Harris',GETDATE(),'password','authorized','pending');

INSERT INTO BasketballGame([date],venue,cost,shouter,booker) VALUES(GETDATE(),'Random Court',null,'','Donald Trump'),
(GETDATE() - 20,'123 Court',10.57,'Donald Trump','Ronald Reagan'),
(GETDATE() + 100,'456 Court',null,'','Ronald Reagan'),
(GETDATE() + 2,'789 Court',null,'','Donald Trump'),
(GETDATE() + 52,'Trump Court', null ,'','Abraham Lincoln'),
(GETDATE() - 100,'Reagan Court',28.38,'Thomas Jefforson','Donald Trump'),
(GETDATE() - 21,'Lincoln Court',null,'','Thomas Jefforson'),
(GETDATE() - 38,'Jefforson Court',48.92,'Ronald Reagan','Abraham Lincoln'),
(GETDATE() + 35,'Trump Jnr Court',null,'','Donald Trump'),
(GETDATE() + 35,'Trump Jnr Court',null,'','Abraham Lincoln');