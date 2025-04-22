CREATE DATABASE "ECommerceLab"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en-US'
    LC_CTYPE = 'en-US'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE IF NOT EXISTS public."Users"
(
    "ID" integer NOT NULL DEFAULT nextval('"Users_ID_seq"'::regclass),
    "UserName" character varying(100) COLLATE pg_catalog."default",
    "Password" character varying(100) COLLATE pg_catalog."default",
    "PhoneNumber" character varying(12) COLLATE pg_catalog."default",
    "Address" character varying(100) COLLATE pg_catalog."default",
    "Email" character varying(100) COLLATE pg_catalog."default",
    "AdminPermission" boolean,
    "Funds" double precision,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."ItemListings"
(
    "ID" integer NOT NULL DEFAULT nextval('"ItemListings_ID_seq"'::regclass),
    "OwnerID" integer,
    "Name" character varying(100) COLLATE pg_catalog."default",
    "Description" character varying(100) COLLATE pg_catalog."default",
    "Price" double precision,
    "Category" character varying(100) COLLATE pg_catalog."default",
    "DateOfPosting" date,
    CONSTRAINT "ItemListings_pkey" PRIMARY KEY ("ID"),
    CONSTRAINT "UserID" FOREIGN KEY ("OwnerID")
        REFERENCES public."Users" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."ItemListings"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."Transactions"
(
    "ID" integer NOT NULL DEFAULT nextval('"ItemOrder_ID_seq"'::regclass),
    "PosterID" integer,
    "ProductName" character varying(100) COLLATE pg_catalog."default",
    "ProductDescription" character varying(100) COLLATE pg_catalog."default",
    "AmountPaid" double precision,
    "Category" character varying(100) COLLATE pg_catalog."default",
    "PurchaserID" integer,
    "DateOfPurchase" date,
    "DateOfPosting" date,
    "AmountOfProduct" integer,
    CONSTRAINT "ItemOrder_pkey" PRIMARY KEY ("ID"),
    CONSTRAINT "Buyer of Product" FOREIGN KEY ("PurchaserID")
        REFERENCES public."Users" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "The person who posted the bought product" FOREIGN KEY ("PosterID")
        REFERENCES public."Users" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Transactions"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."Carts"
(
    "ID" integer NOT NULL,
    "UserID" integer,
    "ListingID" integer,
    CONSTRAINT "Primary Key" PRIMARY KEY ("ID"),
    CONSTRAINT "ListingID" FOREIGN KEY ("ListingID")
        REFERENCES public."ItemListings" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "User ID" FOREIGN KEY ("UserID")
        REFERENCES public."Users" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Carts"
    OWNER to postgres;