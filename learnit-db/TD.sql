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

CREATE TABLE [dbo].[courses]
(
    [id] [int] NOT NULL,
    [name] [nvarchar](255) NOT NULL,
    [i_id] [int] NULL,
    [c_desc] [nvarchar](255) NULL,
    [img_url] [nvarchar](max) NULL,
    [price] [decimal](10, 2) NOT NULL,
    PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

ALTER TABLE [dbo].[courses]  WITH CHECK ADD FOREIGN KEY([i_id])
REFERENCES [dbo].[instructors] ([id])
GO


CREATE TABLE Course_Student_Mapping
(
    C_Id INT,
    S_Id INT,
    PRIMARY KEY (C_Id, S_Id),
    FOREIGN KEY (C_Id) REFERENCES Courses(Id),
    FOREIGN KEY (S_Id) REFERENCES Students(Id)
);