package ECommerce;

public class LinearSearch {

    public static  Product search(Product[] products,String target){
        for (Product p : products){
            if (p.productName.equalsIgnoreCase(target)){
                return p;
            }
        }
        return null;
    }
}
