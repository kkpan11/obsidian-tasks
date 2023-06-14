<!-- placeholder to force blank line before included text -->

- ```group by function task.priorityName```
    - Group by the task's priority name
    - The priority names are displayed in alphabetical order.
    - Note that the default priority is called 'Normal', as opposed to with `group by priority` which calls the default 'None'.
- ```group by function '%%' + task.priorityNumber.toString() + '%%' + task.priorityName +' priority'```
    - Group by the task's priority name
    - The hidden priority number ensures that the headings are written from highest to lowest priority.
    - Note that the default priority is called 'Normal', as opposed to with `group by priority` which calls the default 'None'.


<!-- placeholder to force blank line after included text -->