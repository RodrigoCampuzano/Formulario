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
      
        toArray() {
          const result = [];
          let current = this.head;
          while (current) {
            result.push(current.data);
            current = current.next;
          }
          return result;
        }
}
      
export default LinkedList;
