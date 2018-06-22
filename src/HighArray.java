import java.util.ArrayList;

public class HighArray {
    public int find (int[] input, long value) {
        if(input.length <= 0) {
            return -1;
        }
        int length = input.length;
        int lowerBound = 0;
        int upperBound = length - 1;
        while (true) {
            int middle = (lowerBound + upperBound) / 2;
            if (value == input[middle]) {
                return middle;
            } else if (value < input[middle]) {
                upperBound = middle - 1;
            } else if (value > input[middle]) {
                lowerBound = middle + 1;
            }
            if (lowerBound > upperBound) {
                return -1;
            }
        }
    }

    public void insert(int[] input, int newVal) {

        
    }
}
