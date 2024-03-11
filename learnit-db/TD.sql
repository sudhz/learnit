USE Learnit;
CREATE TABLE students
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL UNIQUE,
    phone NVARCHAR(10),
    college NVARCHAR(255),
    password NVARCHAR(255) NOT NULL
);
CREATE TABLE instructors
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL UNIQUE,
    phone NVARCHAR(10),
    password NVARCHAR(255) NOT NULL
);
CREATE TABLE courses
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    i_id INT,
    c_desc NVARCHAR(255),
    --course description
    FOREIGN KEY (i_id) REFERENCES instructors(id)
);
CREATE TABLE Course_Student_Mapping
(
    C_Id INT,
    S_Id INT,
    PRIMARY KEY (C_Id, S_Id),
    FOREIGN KEY (C_Id) REFERENCES Courses(Id),
    FOREIGN KEY (S_Id) REFERENCES Students(Id)
);