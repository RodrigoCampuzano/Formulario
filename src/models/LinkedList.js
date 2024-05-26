import Node from "./Node";

class LinkedList{
        constructor() {
          this.head = null;
        }
      
        add(data) {
          const node = new Node(data);
          if (!this.head) {
            this.head = node;
          } else {
            let current = this.head;
            while (current.next) {
              current = current.next;
            }
            current.next = node;
          }
        }
}
      
export default LinkedList;
