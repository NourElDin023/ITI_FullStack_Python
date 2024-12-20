//two
import {
  Employee,
  Manager,
  WorkerBee,
  SalesPerson,
  Engineer,
} from "./classes.js";

const employee1 = new Employee("Jared Garner", "HR");
const employee2 = new Employee("Katherine Simmons", "DevOps");

const manager = new Manager("Jane Smith", "management", [employee1, employee2]);
const workerBee = new WorkerBee("Sam Worker", "operations", [
  "Project A",
  "Project B",
]);
const salesPerson = new SalesPerson("Alex Sales", ["Client A"]);
const engineer = new Engineer("Eve Engineer", ["Project X"], "Machine Y");

console.log(employee1);
console.log(employee2);
console.log(manager);
console.log(workerBee);
console.log(salesPerson);
console.log(engineer);

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

//Three
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      const userList = document.createElement("ol");
      users.forEach((user) => {
        const userItem = document.createElement("li");
        userItem.textContent = `${user.name}`;
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((posts) => {
            const postsList = document.createElement("ul");
            posts.forEach((post) => {
              const postItem = document.createElement("li");
              postItem.textContent = post.title;
              postsList.appendChild(postItem);
            });
            userItem.appendChild(postsList);
          })
          .catch((error) => {
            console.error(`Error fetching posts for user ${user.id}:`, error);
          });
        userList.appendChild(userItem);
      });
      document.body.appendChild(userList);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}

fetchData();
