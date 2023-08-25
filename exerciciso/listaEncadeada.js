function Lista(){
    let head = null;
    let length = 0;
    
    /*INICIO DA LISTA, */
    const Node = (value) =>{
        return{
            value,
            next:null
        }
    }
    /*VERIFICAR SE O INICIO É VAZIO */
    const add = (value) =>{
        if(!head){
            head = Node(value)
            length++
            return head
        }
    /*ADICIONAR UM NOVO NÓ */
        let node = head
        while(node.next){
            node = node.next
        }
        node.next = Node(value)
        length++
        return node.next
    }
    return{
        length: ()=> length,
        add: (value) => add(value),
        print: () => console.log(head)
        
    }
}
const list = Lista()
list.add('Maria tem 25 anos!')
list.add('José seu filho, tem 3 anos.')
console.log(list.length())
list.print()