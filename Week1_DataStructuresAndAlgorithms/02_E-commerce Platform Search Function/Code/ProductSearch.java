package ECommerce;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class ProductSearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] products = {
                new Product(100,"Laptop","Electronics"),
                new Product(101,"Shoes","Footwear"),
                new Product(102,"CPU","Electronics"),
                new Product(103,"Pencil","Stationary"),
                new Product(104,"Bat","Cricket")
        };

        System.out.println("Enter the Product name to search:");
        String searchProduct = scanner.next();

        System.out.println("Linear Search:");
        Product linearSearch = LinearSearch.search(products,searchProduct);
        if(linearSearch != null){
            System.out.println("Product Found -> "+linearSearch);
        }else{
            System.out.println("Product not Found");
        }

        System.out.println("Binary Search:");
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        Product binarySearch = BinarySearch.binarySearch(products,searchProduct);
        if(binarySearch != null){
            System.out.println("Product Found -> "+binarySearch);
        }else{
            System.out.println("Product not Found");
        }
    }
}
