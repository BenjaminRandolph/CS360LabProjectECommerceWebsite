
CREATE SEQUENCE public."ItemListings_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ItemListings_ID_seq" OWNER TO postgres;

CREATE SEQUENCE public."ItemOrder_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ItemOrder_ID_seq" OWNER TO postgres;

CREATE SEQUENCE public."Users_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_ID_seq" OWNER TO postgres;

CREATE SEQUENCE public."Carts_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public."Carts_ID_seq" OWNER TO postgres;

ALTER TABLE IF EXISTS public."Carts"
    ALTER COLUMN "ID" SET DEFAULT nextval('"Carts_ID_seq"'::regclass);
