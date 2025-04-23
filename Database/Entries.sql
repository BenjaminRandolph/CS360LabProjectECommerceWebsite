
COPY public."Users" ("ID", "UserName", "Password", "PhoneNumber", "Address", "Email", "AdminPermission", "Funds") FROM stdin;
1	a	AQAAAAIAAYagAAAAEAehDZ8EbClPwgGwQ5MUXv1DSu29ffKA+lSa210cnWwznuOu6bwv+UZlP/H3rVyKrQ==	string	string	string	t	10000
2	BEN	AQAAAAIAAYagAAAAEJQNh0siF1nnUTGqqHQ8tLUUI4lCP+ns6BT/owZvWbW2rV9H4uf9XJlBGiEoE5Veqg==	123-456-7890	funny place, ID, 4096 E YourMom Road	AAAAAHHH@yoink.com	t	100000000
3	Deblon	AQAAAAIAAYagAAAAEEhoTIhjbpjOCABNpMInNfBrWxspkZNgCX0XGaT8z7LiQsK+Z31Nksc1rIqjzEuowQ==	123-456-7890	funny place, ID, 4096 E YourMom Road	YEEEEE@yoink.com	f	100000
4	Kali	AQAAAAIAAYagAAAAEFIKoTbbTSstafT7o3oLuSQ1qcacJb47DNNpZxYF9+pSkF9XQ8JKpHZ9nZ8prWF5VA==	123-456-1337	Debian, FL, 2048 S Security Road	e@ea.com	f	100000
5	no	AQAAAAIAAYagAAAAEKtweCliyIsp3yAiv5eU/GfN1qNm2PllXoRPjXJQ9m4zzocP5fGuVBSSWgFLZb5mLg==	123-777-1337	NO, NO, 1024 S Sad Road	eaeaeaea@no.com	f	100000
\.

COPY public."ItemListings" ("ID", "OwnerID", "Name", "Description", "Price", "Category", "DateOfPosting") FROM stdin;
1	1	your	mom	100	cringe	2025-04-22
2	2	20lb drum of C4	DANGER: EXPLOSIVE; quite fun to use	100	explosive	2025-04-22
3	2	Gabriel	6 DOLLAR SHRIMP SPECIAL	100	cool	2025-04-22
4	2	Sandwich	Om nom nom...	2000	food	2025-04-22
5	2	EXO-45 Patriot Exosuit	May liberty speed your step helldiver.	100000	cool	2025-04-22
6	2	5 gallons of high fructose corn syrup	Dont spend it all in one place.	1	food	2025-04-22
7	2	7.5 gallons of high fructose corn syrup	More syrup for your syrup quenching needs.	1.5	food	2025-04-22
\.