import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        System.out.println("Starting LoggingExample...");

        logger.error("This is an error message");
        System.out.println("Logged an ERROR message");

        logger.warn("This is a warning message");
        System.out.println("Logged a WARN message");

        System.out.println("Finished LoggingExample.");
    }
}
