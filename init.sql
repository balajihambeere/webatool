
DROP DATABASE axedb;

CREATE DATABASE axedb;

USE axedb;

CREATE TABLE scans (
  -- Auto-generated ID for the scan.
  id int NOT NULL,
  -- URL used to generate the scan.
  url varchar(255) NOT NULL,
  -- Results from AxePuppeteer.
  results JSON NOT NULL,

  PRIMARY KEY (id)
);