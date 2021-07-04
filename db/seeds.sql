
INSERT INTO department
(name)

VALUES
('IT' ),
('HR' ),
('Finance'),
('administration');


INSERT INTO role
(title, salary, department_id)

VALUES
('IT Manager', '160000', 1),
('HR specialist', '999', 1),
('finance coordinator', '998', 2),
('admin assistant', '997', 2);
INSERT INTO employee


(first_name, last_name, role_id) 

VALUES
('Mickey', 'Mouse', 1),
('Minnie', 'Mouse', 2),
('Daisy', 'Duck', 3),
('Donald', 'Duck', 4);

Update Employee set manager_id=1 where id = 2 or id=3 or id=4; 



