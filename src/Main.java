import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World!");
//        ArrayList input = new ArrayList<Integer>(Arrays.asList(1,3,5,6,7,8,30,56));
        int[] input  = new int[]{1,3,5,6,8,30,56};
        HighArray s = new HighArray();
        System.out.println("Found at index: " + s.find(input, 5));
    }
}
