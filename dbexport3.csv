--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: videos; Type: TABLE; Schema: public; Owner: pedro
--

CREATE TABLE public.videos (
    id integer NOT NULL,
    name text,
    theme text,
    videoname text,
    description text,
    university text,
    linkvideo text,
    foto_url text
);


ALTER TABLE public.videos OWNER TO pedro;

--
-- Name: videos_id_seq; Type: SEQUENCE; Schema: public; Owner: pedro
--

CREATE SEQUENCE public.videos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.videos_id_seq OWNER TO pedro;

--
-- Name: videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pedro
--

ALTER SEQUENCE public.videos_id_seq OWNED BY public.videos.id;


--
-- Name: videos id; Type: DEFAULT; Schema: public; Owner: pedro
--

ALTER TABLE ONLY public.videos ALTER COLUMN id SET DEFAULT nextval('public.videos_id_seq'::regclass);


--
-- Data for Name: videos; Type: TABLE DATA; Schema: public; Owner: pedro
--

COPY public.videos (id, name, theme, videoname, description, university, linkvideo, foto_url) FROM stdin;
13	Pedro	AEDS	Programação web com JS	Neste vídeo iremos falar de dois tema FUNDAMENTAIS: Algoritmo e Estruturas de Dados. O início da jornada de uma programador inicia aqui.	UFVJM	https://www.youtube.com/watch?v=O_Cc-Xzc0zM&ab_channel=Cod3rCursos	http://img.youtube.com/vi/O_Cc-Xzc0zM/0.jpg
14	Teste	Teoria da Computação	Máquina de Turing - Ciência da Computação - Ufal Arapiraca	Neste vídeo, explicamos como funciona a poderosa Máquina de Turing, proposta por Alan Turing, o pai da Informática.	UFAL	https://www.youtube.com/watch?v=zqUU-fXdfos&ab_channel=AlezyOliveira	https://p2.trrsf.com/image/fget/cf/600/400/images.terra.com/2019/06/07/turing-07144909012410.jpg
15	Pedro 22	dasd	Trabalho	TRABALHO TRABALHO TRABALHO TRABALHO TRABALHO TRABALHO TRABALHO 	dasda	https://www.youtube.com/watch?v=y6120QOlsfU&ab_channel=Darude	http://img.youtube.com/vi/O_Cc-Xzc0zM/0.jpg
16	 MW Informática	Hardware	DESMONTEI TODA A RTX 3090 GAMING OC GIGABYTE! ANÁLISE	E ai galera! Hoje temos uma presença forte aqui, o chip gráfico mais potente em nosso planeta no momento com o projeto da Gigabyte, RTX 3090 Gaming OC 24GB!	Youtube	https://www.youtube.com/watch?v=IzDLpOHHqrE	http://img.youtube.com/vi/IzDLpOHHqrE/0.jpg
\.


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: pedro
--

SELECT pg_catalog.setval('public.videos_id_seq', 16, true);


--
-- Name: videos videos_pkey; Type: CONSTRAINT; Schema: public; Owner: pedro
--

ALTER TABLE ONLY public.videos
    ADD CONSTRAINT videos_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

