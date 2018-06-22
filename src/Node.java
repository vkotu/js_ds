
public class Node {
    public int data;
    public Node leftChild;
    public Node rightChild;
    public void displayNode(){
        System.out.println(this.data);
    }
    public Node(int data) {
        this.data = data;
    }
    public int getData() {
        return this.data;
    }
}
