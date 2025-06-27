package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals("Sum check failed", 5, 2 + 3);

        // Assert true
        assertTrue("True condition failed", 5 > 3);

        // Assert false
        assertFalse("False condition failed", 5 < 3);

        // Assert null
        Object nullObj = null;
        assertNull("Object should be null", nullObj);

        // Assert not null
        Object obj = new Object();
        assertNotNull("Object should not be null", obj);

        // Final confirmation print
        System.out.println("All JUnit assertions passed successfully.");
    }
}
