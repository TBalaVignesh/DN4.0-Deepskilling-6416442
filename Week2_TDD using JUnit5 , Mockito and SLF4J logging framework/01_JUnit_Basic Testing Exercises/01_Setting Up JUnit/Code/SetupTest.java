package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class SetupTest {

    @Test
    public void testAdd_PositiveNumbers() {
        // Arrange
        Calculator calc = new Calculator();
        int a = 2;
        int b = 3;

        // Act
        int result = calc.add(a, b);

        // Assert with custom message
        assertEquals("Expected the sum of 2 and 3 to be 5", 5, result);

        // Console Output
        System.out.println("PositiveNumbers: Passed ");
    }

    @Test
    public void testAdd_WithZero() {
        Calculator calc = new Calculator();
        int result = calc.add(0, 7);
        assertEquals("Adding zero should return the other number", 7, result);
        System.out.println("WithZero: Passed ");
    }

    @Test
    public void testAdd_NegativeNumbers() {
        Calculator calc = new Calculator();
        int result = calc.add(-4, -6);
        assertEquals("Sum of two negative numbers incorrect", -10, result);
        System.out.println("NegativeNumbers: Passed");
    }
}
