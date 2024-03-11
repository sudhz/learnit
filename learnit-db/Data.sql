INSERT INTO instructors (name, email, phone, password)
VALUES
('Dr. Smith', 'dr.smith@university.edu', '1234567890', 'password678'),
('Prof. Johnson', 'prof.johnson@university.edu', '0987654321', 'password901'),
('Mr. Brown', 'mr.brown@university.edu', '1122334455', 'password234'),
('Ms. Davis', 'ms.davis@university.edu', '5544332211', 'password567'),
('Mrs. White', 'mrs.white@university.edu', '9988776655', 'password890');
 
INSERT INTO students (name, email, phone, password)
VALUES
('John Doe', 'john.doe@example.com', '1234567890', 'password123'),
('Jane Smith', 'jane.smith@example.com', '0987654321', 'password456'),
('Alice Johnson', 'alice.johnson@example.com', '1122334455', 'password789'),
('Bob Brown', 'bob.brown@example.com', '5544332211', 'password012'),
('Charlie Davis', 'charlie.davis@example.com', '9988776655', 'password345');

-- Inserting additional dummy data into the courses table with common instructor IDs
INSERT INTO courses (name, i_id, c_desc) VALUES 
('Chemistry', 1, 'Basic Principles of Chemistry'),
('Computer Science', 2, 'Introduction to Algorithms and Data Structures'),
('Art', 3, 'Renaissance Art History'),
('Music', 4, 'Music Theory and Composition'),
('Physical Education', 5, 'Introduction to Fitness and Wellness'),
('Geography', 1, 'World Geography'),
('Economics', 2, 'Microeconomics and Macroeconomics'),
('Psychology', 3, 'Introduction to Psychology'),
('Sociology', 4, 'Principles of Sociology'),
('Political Science', 5, 'American Government and Politics');

