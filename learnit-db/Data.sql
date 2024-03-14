USE Learnit;
INSERT INTO instructors
    (name, email, phone, password)
VALUES
    ('Dr. Smith', 'dr.smith@university.edu', '1234567890', 'password678'),
    ('Prof. Johnson', 'prof.johnson@university.edu', '0987654321', 'password901'),
    ('Mr. Brown', 'mr.brown@university.edu', '1122334455', 'password234'),
    ('Ms. Davis', 'ms.davis@university.edu', '5544332211', 'password567'),
    ('Mrs. White', 'mrs.white@university.edu', '9988776655', 'password890');

INSERT INTO students
    (name, email, phone, password)
VALUES
    ('John Doe', 'john.doe@example.com', '1234567890', 'password123'),
    ('Jane Smith', 'jane.smith@example.com', '0987654321', 'password456'),
    ('Alice Johnson', 'alice.johnson@example.com', '1122334455', 'password789'),
    ('Bob Brown', 'bob.brown@example.com', '5544332211', 'password012'),
    ('Charlie Davis', 'charlie.davis@example.com', '9988776655', 'password345');

USE [Learnit]
GO
INSERT INTO [dbo].[courses]
    ([id], [name], [i_id], [c_desc], [img_url], [price])
VALUES
    (1, 'Chemistry', 1, 'Basic Principles of Chemistry', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (2, 'Computer Science', 2, 'Introduction to Algorithms and Data Structures', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (3, 'Art', 3, 'Renaissance Art History', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (4, 'Music', 4, 'Music Theory and Composition', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (5, 'Physical Education', 5, 'Introduction to Fitness and Wellness', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (6, 'Geography', 1, 'World Geography', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (7, 'Economics', 2, 'Microeconomics and Macroeconomics', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (8, 'Psychology', 3, 'Introduction to Psychology', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (9, 'Sociology', 4, 'Principles of Sociology', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99),
    (10, 'Political Science', 5, 'American Government and Politics', 'https://itpa.in/wp-content/uploads/2021/05/Online-courses.jpg', 19.99)
GO
